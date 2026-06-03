export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
  color: string;
  bgGradient: string;
  visualType: 'grid' | 'orbit' | 'nodes' | 'pulse';
}

export interface ShowcaseProject {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  image: string;
  videoPlaceholderColor: string;
  tags: string[];
  accentColor: string;
  metrics?: { label: string; value: string }[];
}

export interface InteractiveProposal {
  projectName: string;
  conceptTitle: string;
  aestheticMood: string;
  architecturalCore: string;
  timelineEstimate: string;
  techStack: string[];
  recommendedModules: { title: string; desc: string }[];
  visualPalette: string[]; // hex codes or tailwind color names
  executiveSummary: string;
}
