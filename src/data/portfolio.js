import { asset } from '../utils/assets.js';

export const siteConfig = {
  name: 'Kunj Patel',
  role: 'AI/ML Developer | NLP, Vision, FastAPI',
  headline: 'AI/ML Developer building deployable AI products',
  subheadline:
    'Computer Science student building applied AI systems across NLP, Computer Vision, FastAPI backends, and product integration.',
  email: 'kp250440@gmail.com',
  location: 'Ahmedabad, Gujarat, India',
  resumePath: asset('/resume.pdf'),
  links: {
    projects: '#projects',
    github: 'https://github.com/kpatel1607',
    linkedin: 'https://www.linkedin.com/in/kunj-patel-08b52b315',
  },
};

export const commandCenter = {
  name: 'Kunj Patel',
  role: 'AI/ML Developer',
  status: 'Open to Opportunities',
  focusAreas: ['NLP', 'Computer Vision', 'Generative AI', 'FastAPI'],
  currentProject: 'AI Fitness Coach',
  currentGoal: 'AI/ML Internship',
};

export const titleStatement =
  'I am currently open to AI/ML, NLP, Computer Vision, Generative AI, Applied AI, and Data Analytics internship opportunities, especially roles involving real-world AI product development and deployment.';

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Network', href: '#project-network' },
  { label: 'Projects', href: '#projects' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

export const projects = [
  {
    title: 'Lumina AI - Intelligent Document Processing Platform',
    description:
      'Document intelligence platform for turning PDFs, scans, and raw text into structured summaries and usable outputs.',
    highlights: [
      'OCR processing',
      'Document understanding',
      'Semantic chunking',
      'AI summarization',
      'Firebase authentication',
      'Usage tracking',
      'FastAPI backend',
      'Flutter integration',
    ],
    tags: ['Python', 'FastAPI', 'Flutter', 'Firebase', 'NLP', 'OCR', 'Hugging Face'],
    problem: 'Messy PDFs and scans are hard to search, summarize, and reuse.',
    role: 'Designed the AI workflow, FastAPI backend, auth flow, and app integration.',
    built: 'OCR, semantic chunking, summarization, usage tracking, and API endpoints.',
    technical: 'Interesting because it connects OCR, NLP chunking, auth, and product usage tracking in one flow.',
    status: 'Active flagship project showing end-to-end AI product thinking.',
    githubUrl: 'https://github.com/kpatel1607/ai-notes-summarizer',
    demoUrl: null,
  },
  {
    title: 'MoodLens - Emotion & Sarcasm Detection Platform',
    description:
      'Transformer-based NLP app for detecting emotion and sarcasm in short user text.',
    highlights: [
      'Transformer fine-tuning',
      'BERT / DeBERTa models',
      'Emotion classification',
      'Sarcasm detection',
      'FastAPI inference',
    ],
    tags: ['Python', 'FastAPI', 'Hugging Face Transformers', 'DeBERTa', 'NLP'],
    problem: 'Basic sentiment tools miss tone, sarcasm, and mixed emotional signals.',
    role: 'Worked on model selection, fine-tuning direction, and inference design.',
    built: 'Emotion and sarcasm classification pipeline with FastAPI inference.',
    technical: 'Interesting because it applies transformer inference to tone signals that simple sentiment misses.',
    status: 'Functional NLP project demonstrating transformer application.',
    githubUrl: 'https://github.com/kpatel1607/MoodLens',
    demoUrl: null,
  },
  {
    title: 'AI Fitness Coach - Real-Time Pushup Analysis',
    description:
      'Computer vision system for pushup counting, posture checks, and performance feedback.',
    highlights: [
      'Pose estimation',
      'Rep counting',
      'Form analysis',
      'Performance scoring',
      'Future personalized AI coaching',
    ],
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision', 'Pose Estimation'],
    problem: 'Exercise apps often count reps without explaining form quality.',
    role: 'Built pose-tracking logic for rep counting, form checks, and scoring.',
    built: 'Real-time pushup analysis using MediaPipe landmarks and OpenCV logic.',
    technical: 'Interesting because it turns live pose landmarks into measurable coaching signals.',
    status: 'In progress, focused on personalized coaching feedback.',
    githubUrl: null,
    demoUrl: null,
  },
];

export const profileSnapshot = [
  'AI/ML Developer',
  'CS Engineering Student',
  'NLP + Computer Vision',
  'FastAPI Backends',
  'Open to AI/ML Internships',
];

export const buildFocus = [
  {
    title: 'AI Document Intelligence Systems',
    text: 'I build workflows that read, structure, summarize, and expose document intelligence through APIs and app interfaces.',
  },
  {
    title: 'NLP & Transformer-Based Applications',
    text: 'I work on text understanding problems such as emotion, sarcasm, and transformer-based inference for real product flows.',
  },
  {
    title: 'Computer Vision Fitness Analysis',
    text: 'I use pose estimation and video analysis to turn movement into rep counts, form feedback, and coaching signals.',
  },
];

export const aiCapabilities = [
  {
    category: 'Intelligent Document Systems',
    examples: [
      'Lumina AI turns PDFs, scans, and raw text into structured summaries.',
      'Built OCR processing, semantic chunking, AI summarization, Firebase auth, usage tracking, and FastAPI endpoints.',
    ],
    evidence: ['Lumina AI', 'OCR', 'Document understanding', 'FastAPI backend'],
  },
  {
    category: 'Transformer-Based NLP Applications',
    examples: [
      'MoodLens detects emotion and sarcasm in short user text.',
      'Applied BERT / DeBERTa direction, transformer fine-tuning, and FastAPI inference design.',
    ],
    evidence: ['MoodLens', 'Hugging Face Transformers', 'Emotion classification', 'Sarcasm detection'],
  },
  {
    category: 'Computer Vision Solutions',
    examples: [
      'AI Fitness Coach analyzes pushups with real-time pose estimation.',
      'Built rep counting, posture checks, form analysis, performance scoring, and future personalized coaching flow.',
    ],
    evidence: ['AI Fitness Coach', 'OpenCV', 'MediaPipe', 'Pose estimation'],
  },
  {
    category: 'Backend AI APIs',
    examples: [
      'Designed API-first flows for document intelligence and NLP inference.',
      'Connects model outputs to REST endpoints, authentication, usage tracking, and product integration.',
    ],
    evidence: ['FastAPI', 'REST APIs', 'Firebase Auth', 'API Integration'],
  },
  {
    category: 'End-to-End AI Products',
    examples: [
      'Builds across model workflows, backend services, app integration, and user-facing feedback loops.',
      'Projects combine NLP, vision, analytics, deployment thinking, and real product behavior.',
    ],
    evidence: ['Flutter integration', 'Deployment Basics', 'Product Development', 'Data Visualization'],
  },
];

export const researchTopics = [
  {
    title: 'LLM Systems',
    detail: 'Studying how retrieval, context, inference, and product constraints shape useful language systems.',
  },
  {
    title: 'Generative AI',
    detail: 'Exploring practical GenAI workflows for summarization, document intelligence, and user assistance.',
  },
  {
    title: 'AI Agents',
    detail: 'Interested in personalized agents that connect reasoning, tools, memory, and clear user outcomes.',
  },
  {
    title: 'NLP',
    detail: 'Building transformer-based text understanding for emotion, sarcasm, tone, and semantic workflows.',
  },
  {
    title: 'Computer Vision',
    detail: 'Turning pose landmarks and video signals into coaching, scoring, and feedback systems.',
  },
  {
    title: 'Personalized AI Systems',
    detail: 'Designing AI products that adapt to user goals while staying practical, measurable, and deployable.',
  },
];

export const hireReasons = [
  'I build end-to-end AI products, not just notebooks.',
  'I can work across model training, APIs, deployment, and frontend integration.',
  'I enjoy researching systems deeply and applying ideas practically.',
  'I have hands-on experience with NLP, Computer Vision, FastAPI, and real users.',
];

export const lookingFor = [
  'AI/ML Internship',
  'NLP Internship',
  'Computer Vision Internship',
  'Applied AI Internship',
  'Remote / Hybrid opportunities',
];

export const skillGroups = [
  {
    category: 'AI/ML',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Transformers', 'Generative AI'],
  },
  {
    category: 'Programming',
    skills: ['Python', 'SQL', 'Git', 'GitHub'],
  },
  {
    category: 'Libraries',
    skills: ['PyTorch', 'Hugging Face', 'Scikit-Learn', 'OpenCV', 'MediaPipe', 'Pandas', 'NumPy'],
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'REST APIs', 'Firebase Auth', 'API Integration', 'Deployment Basics'],
  },
  {
    category: 'Analytics',
    skills: ['EDA', 'Data Cleaning', 'Statistical Analysis', 'Data Visualization'],
  },
];

export const recruiterScorecard = [
  { label: 'AI/ML', evidence: 'Classical ML, deep learning, applied AI workflows' },
  { label: 'NLP', evidence: 'Transformers, emotion detection, sarcasm detection' },
  { label: 'Computer Vision', evidence: 'Pose estimation, OpenCV, MediaPipe, form analysis' },
  { label: 'Backend APIs', evidence: 'FastAPI inference, REST APIs, Firebase auth' },
  { label: 'Product Development', evidence: 'Flutter integration, usage tracking, user flows' },
  { label: 'Deployment', evidence: 'API-first systems and deployment-oriented architecture' },
];

export const timeline = [
  {
    step: '01',
    title: 'Built the data and ML foundation',
    detail: 'Started with data cleaning, EDA, classical ML models, and evaluation basics.',
  },
  {
    step: '02',
    title: 'Moved from analysis to model-building',
    detail: 'Practiced supervised learning, visualization, and model comparison on structured data.',
  },
  {
    step: '03',
    title: 'Expanded into transformer-based NLP',
    detail: 'Explored text classification, transformer fine-tuning, and inference workflows.',
  },
  {
    step: '04',
    title: 'Built Lumina AI as a document intelligence system',
    detail: 'Combined OCR, chunking, summarization, auth, usage tracking, and FastAPI endpoints.',
  },
  {
    step: '05',
    title: 'Built MoodLens for applied NLP inference',
    detail: 'Applied transformer models to emotion and sarcasm detection through an API-first flow.',
  },
  {
    step: '06',
    title: 'Started AI Fitness Coach with computer vision',
    detail: 'Moved into real-time pose estimation, rep counting, form checks, and feedback scoring.',
  },
  {
    step: '07',
    title: 'Current goal: applied AI/ML internship',
    detail: 'Looking for hands-on work where models, APIs, deployment, and product experience meet.',
  },
];

export const journeyPhases = [
  {
    phase: 'Learning',
    detail: 'Data cleaning, EDA, classical ML, model evaluation, and structured problem solving.',
    steps: ['01', '02'],
  },
  {
    phase: 'Building',
    detail: 'Transformer NLP, document intelligence, OCR, summarization, and computer vision prototypes.',
    steps: ['03', '04', '05', '06'],
  },
  {
    phase: 'Deploying',
    detail: 'FastAPI inference, REST endpoints, Firebase auth, Flutter integration, and usage tracking.',
    steps: ['04', '05'],
  },
  {
    phase: 'Scaling',
    detail: 'Current direction: personalized AI products, stronger deployment habits, and AI/ML internship work.',
    steps: ['06', '07'],
  },
];
