import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProfileSnapshot from './components/ProfileSnapshot.jsx';
import Title from './components/Title.jsx';
import About from './components/About.jsx';
import WhatIBuild from './components/WhatIBuild.jsx';
import Projects from './components/Projects.jsx';
import ProjectNetwork from './components/ProjectNetwork.jsx';
import Skills from './components/Skills.jsx';
import RecruiterScorecard from './components/RecruiterScorecard.jsx';
import Timeline from './components/Timeline.jsx';
import ResearchMindset from './components/ResearchMindset.jsx';
import WhyHireMe from './components/WhyHireMe.jsx';
import CurrentlyLookingFor from './components/CurrentlyLookingFor.jsx';
import Contact from './components/Contact.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import CosmicBackground from './components/CosmicBackground.jsx';
import CursorGlow from './components/CursorGlow.jsx';
import BackToTop from './components/BackToTop.jsx';
import ClickRipple from './components/ClickRipple.jsx';
import RevealSection from './components/RevealSection.jsx';

function App() {
  return (
    <div className="min-h-screen overflow-hidden text-slate-100 antialiased">
      <CosmicBackground />
      <CursorGlow />
      <ClickRipple />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <RevealSection>
          <ProfileSnapshot />
        </RevealSection>
        <RevealSection>
          <Title />
        </RevealSection>
        <RevealSection>
          <About />
        </RevealSection>
        <RevealSection>
          <WhatIBuild />
        </RevealSection>
        <RevealSection>
          <ProjectNetwork />
        </RevealSection>
        <RevealSection>
          <Projects />
        </RevealSection>
        <RevealSection>
          <Skills />
        </RevealSection>
        <RevealSection>
          <RecruiterScorecard />
        </RevealSection>
        <RevealSection>
          <Timeline />
        </RevealSection>
        <RevealSection>
          <ResearchMindset />
        </RevealSection>
        <RevealSection>
          <WhyHireMe />
        </RevealSection>
        <RevealSection>
          <CurrentlyLookingFor />
        </RevealSection>
        <RevealSection>
          <Contact />
        </RevealSection>
        <RevealSection>
          <FinalCTA />
        </RevealSection>
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
