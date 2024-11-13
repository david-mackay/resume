// app/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { Phone, Mail, Globe } from 'lucide-react';
import type { Resume } from '@/types/resume';
import resumeData from '../public/data/resume.json';
import { ThemeToggle } from '@/components/theme-toggle';

export default function ResumeWebsite() {
  const data: Resume = resumeData;
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ThemeToggle />
      
      {/* Sticky Header */}
      <div 
        className={`fixed top-0 left-0 right-0 bg-blue-600/95 dark:bg-gray-800/95 backdrop-blur-sm z-40 transition-transform duration-300 ${
          !isHeaderVisible && lastScrollY > 200 ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-white">{data.basics.name}</h1>
          <p className="text-sm text-blue-100 dark:text-gray-300">{data.basics.headline}</p>
        </div>
      </div>

      {/* Main Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-gray-800 dark:to-gray-700 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">{data.basics.name}</h1>
          <h2 className="text-2xl mt-2 text-blue-100 dark:text-gray-300">{data.basics.headline}</h2>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a 
              href={`mailto:${data.basics.email}`} 
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2"
            >
              <Mail size={18} />
              <span className="text-sm">{data.basics.email}</span>
            </a>
            <a 
              href={`tel:${data.basics.phone}`} 
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2"
            >
              <Phone size={18} />
              <span className="text-sm">{data.basics.phone}</span>
            </a>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Globe size={18} />
              <span className="text-sm">{data.basics.location}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span className="bg-blue-600 dark:bg-blue-500 w-1 h-8 mr-3"></span>
            Education
          </h2>
          {data.sections.education.items?.filter(edu => edu.visible).map((edu) => (
            <div key={edu.id} className="mb-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.institution}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {edu.studyType} in {edu.area}
              </p>
              <p className="text-gray-600 dark:text-gray-400">{edu.date}</p>
            </div>
          ))}
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span className="bg-blue-600 dark:bg-blue-500 w-1 h-8 mr-3"></span>
            Experience
          </h2>
          {data.sections.experience.items?.filter(exp => exp.visible).map((exp) => (
            <div 
              key={exp.id} 
              className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.company}</h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{exp.position}</p>
                  <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {exp.date}
                </p>
              </div>
              <div 
                className="mt-4 prose prose-sm max-w-none dark:prose-invert prose-headings:text-gray-800 dark:prose-headings:text-white prose-strong:text-gray-800 dark:prose-strong:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300"
                dangerouslySetInnerHTML={{ __html: exp.summary }}
              />
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span className="bg-blue-600 dark:bg-blue-500 w-1 h-8 mr-3"></span>
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.sections.skills.items?.filter(skill => skill.visible).map((skill) => (
              <div 
                key={skill.id} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.keywords.map((keyword, kidx) => (
                    <span
                      key={kidx}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 dark:text-gray-500">© {new Date().getFullYear()} {data.basics.name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-600 mt-2">Full Stack Software Engineer</p>
        </div>
      </footer>
    </div>
  );
}