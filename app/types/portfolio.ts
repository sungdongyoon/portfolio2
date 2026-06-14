export interface CoreValue {
  id: number;
  image: string;
  title: string;
  content: string;
}

export interface Skills {
  id: number;
  category: string;
  content: string;
}

export interface Career {
  id: number;
  category: string;
  period: string;
  title: string;
  sub: string;
  work?: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  period: string;
  link: string;
  skills: { name: string; image: string }[];
  details: string[];
}
