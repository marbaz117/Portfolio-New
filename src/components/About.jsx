import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card.jsx';

const About = ({ portfolioData }) => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Summary */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Who I Am</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              {portfolioData.summary}
            </p>
            
            <div className="space-y-4 pt-4">
              <h4 className="text-xl font-semibold text-white">Positions of Responsibility</h4>
              {portfolioData.responsibilities.map((resp, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-400">{resp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
            <div className="space-y-4">
              {portfolioData.education.map((edu, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 hover:border-teal-500/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-teal-500/10 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-teal-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {edu.institution}
                        </h4>
                        <p className="text-gray-400 text-sm mb-2">{edu.degree}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-teal-400 text-sm">{edu.duration}</span>
                          <span className="text-gray-400 text-sm font-semibold">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;