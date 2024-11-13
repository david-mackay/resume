interface Basics {
    name: string;
    headline: string;
    email: string;
    phone: string;
    location: string;
    url: {
      href: string;
    };
  }
  
  interface EducationItem {
    institution: string;
    studyType: string;
    area: string;
    date: string;
  }
  
  interface ExperienceItem {
    company: string;
    position: string;
    location: string;
    date: string;
    summary: string;
  }
  
  interface SkillItem {
    name: string;
    keywords: string[];
  }
  
  interface ResumeData {
    basics: Basics;
    sections: {
      education: {
        items: EducationItem[];
      };
      experience: {
        items: ExperienceItem[];
      };
      skills: {
        items: SkillItem[];
      };
    };
  }