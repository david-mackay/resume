// app/types/resume.ts
export interface CustomField {
    label: string;
    value: string | number | boolean;
  }
  
  export interface ResumeBasics {
    name: string;
    headline: string;
    email: string;
    phone: string;
    location: string;
    url: {
      label: string;
      href: string;
    };
    customFields: CustomField[];
    picture: {
      url: string;
      size: number;
      aspectRatio: number;
      borderRadius: number;
      effects: {
        hidden: boolean;
        border: boolean;
        grayscale: boolean;
      };
    };
  }
  
  export interface BaseResumeItem {
    id: string;
    visible: boolean;
    url?: {
      label: string;
      href: string;
    };
  }
  
  export interface ResumeSection {
    name: string;
    columns: number;
    separateLinks: boolean;
    visible: boolean;
    id: string;
    content?: string;
    items?: BaseResumeItem[];
  }
  
  export interface EducationItem extends BaseResumeItem {
    institution: string;
    studyType: string;
    area: string;
    score: string;
    date: string;
    summary: string;
  }
  
  export interface ExperienceItem extends BaseResumeItem {
    company: string;
    position: string;
    location: string;
    date: string;
    summary: string;
  }
  
  export interface SkillItem extends BaseResumeItem {
    name: string;
    description: string;
    level: number;
    keywords: string[];
  }
  
  export interface ResumeSections {
    summary: ResumeSection;
    awards: ResumeSection;
    certifications: ResumeSection;
    education: ResumeSection & {
      items: EducationItem[];
    };
    experience: ResumeSection & {
      items: ExperienceItem[];
    };
    skills: ResumeSection & {
      items: SkillItem[];
    };
    volunteer: ResumeSection;
    interests: ResumeSection;
    languages: ResumeSection;
    profiles: ResumeSection;
    projects: ResumeSection;
    publications: ResumeSection;
    references: ResumeSection;
    custom: {
      [key: string]: ResumeSection;
    };
  }
  
  export interface ResumeMetadata {
    template: string;
    layout: string[][][];
    css: {
      value: string;
      visible: boolean;
    };
    page: {
      margin: number;
      format: string;
      options: {
        breakLine: boolean;
        pageNumbers: boolean;
      };
    };
    theme: {
      background: string;
      text: string;
      primary: string;
    };
    typography: {
      font: {
        family: string;
        subset: string;
        variants: string[];
        size: number;
      };
      lineHeight: number;
      hideIcons: boolean;
      underlineLinks: boolean;
    };
    notes: string;
  }
  
  export interface Resume {
    basics: ResumeBasics;
    sections: ResumeSections;
    metadata: ResumeMetadata;
  }