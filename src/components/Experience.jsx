import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Experience = ({ portfolioData }) => {
  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            Experience
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <Card key={index} className="bg-slate-900 border-slate-800 hover:border-teal-500/50 transition-all group">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors">
                      <Briefcase className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                      <p className="text-xl text-teal-400 mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-3 text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {exp.description.map((desc, descIndex) => (
                    <div key={descIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-slate-800 text-gray-300 hover:bg-teal-500/20 hover:text-teal-400 border border-slate-700 hover:border-teal-500/50 transition-all"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


