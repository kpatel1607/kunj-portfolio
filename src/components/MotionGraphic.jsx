import { lazy, Suspense, useEffect, useState } from 'react';

const DotLottieReact = lazy(() =>
  import('@lottiefiles/dotlottie-react').then((module) => ({
    default: module.DotLottieReact,
  })),
);

function isLikelyAnimation(buffer, src) {
  if (!buffer || buffer.byteLength < 2) {
    return false;
  }

  const bytes = new Uint8Array(buffer.slice(0, 4));
  const startsWithZip = bytes[0] === 0x50 && bytes[1] === 0x4b;
  const startsWithJson = bytes[0] === 0x7b || bytes[0] === 0x5b;

  return src.endsWith('.lottie') ? startsWithZip : startsWithJson;
}

function MotionGraphic({
  src,
  className = '',
  loop = true,
  autoplay = true,
  decorative = true,
}) {
  const [assetState, setAssetState] = useState('checking');
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(min-width: 769px) and (prefers-reduced-motion: no-preference)',
    );

    const syncMotionPreference = () => {
      setCanAnimate(mediaQuery.matches);
    };

    syncMotionPreference();
    mediaQuery.addEventListener('change', syncMotionPreference);

    return () => {
      mediaQuery.removeEventListener('change', syncMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (!canAnimate) {
      setAssetState('disabled');
      return undefined;
    }

    let isMounted = true;

    async function validateAsset() {
      if (!src) {
        setAssetState('missing');
        return;
      }

      try {
        const response = await fetch(src, { cache: 'force-cache' });
        const buffer = await response.arrayBuffer();

        if (isMounted) {
          setAssetState(response.ok && isLikelyAnimation(buffer, src) ? 'ready' : 'missing');
        }
      } catch {
        if (isMounted) {
          setAssetState('missing');
        }
      }
    }

    validateAsset();

    return () => {
      isMounted = false;
    };
  }, [canAnimate, src]);

  if (assetState !== 'ready') {
    return (
      <div
        className={`motion-graphic motion-graphic-fallback ${className}`}
        aria-hidden={decorative ? 'true' : undefined}
      >
        <span />
      </div>
    );
  }

  return (
    <div className={`motion-graphic ${className}`} aria-hidden={decorative ? 'true' : undefined}>
      <Suspense
        fallback={
          <div className="motion-graphic motion-graphic-fallback">
            <span />
          </div>
        }
      >
        <DotLottieReact src={src} loop={loop} autoplay={autoplay} />
      </Suspense>
    </div>
  );
}

export default MotionGraphic;
