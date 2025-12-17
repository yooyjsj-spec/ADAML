
export interface Member {
  id: string;
  name: string;
  role: 'PI' | 'PhD Student' | 'Master Student' | 'Undergraduate Student' | 'Researcher' | 'Alumni';
  image: string;
  researchFocus?: string;
  email?: string;
  link?: string;
  bio?: string;
  education?: string[];
  career?: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors?: string;
  venue: string; // Journal name or Conference name
  year: number;
  link?: string;
  tags?: string[];
  image?: string;
}

export interface Patent {
  id: string;
  title: string;
  inventors: string;
  number: string; // Application or Registration number
  year: number;
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  iconName: string; // Mapping to Lucide icons
  image: string;
  modalSubtitle?: string; // Subtitle shown in modal
  fullContent?: string[]; // Array of paragraphs for detailed view
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: 'Award' | 'Conference' | 'Project' | 'Notice';
  link?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  date: string;
  description?: string;
}
