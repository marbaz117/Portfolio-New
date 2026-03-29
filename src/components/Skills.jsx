import React from 'react';
import { Card, CardContent } from './ui/card.jsx';
import { Badge } from './ui/badge.jsx';

const Skills = ({ portfolioData }) => {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(portfolioData.skills).map(([category, skillList], index) => (
            <Card key={index} className="bg-slate-900 border-slate-800 hover:border-teal-500/50 transition-all group">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-teal-400 transition-colors">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="bg-slate-800 text-gray-300 hover:bg-teal-500/20 hover:text-teal-400 border border-slate-700 hover:border-teal-500/50 transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Problem-Solving', 'Communication', 'Time Management', 'Adaptability'].map((skill, index) => (
                  <Badge key={index} className="bg-teal-500/10 text-teal-400 border border-teal-500/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['Competitive Programming', 'Scalable Web Systems', 'Distributed Systems', 'Microservices'].map((interest, index) => (
                  <Badge key={index} className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
