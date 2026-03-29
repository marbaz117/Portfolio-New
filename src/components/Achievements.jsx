import React from 'react';
import { Trophy, Code, Star, Award as AwardIcon } from 'lucide-react';
import { Card, CardContent } from './ui/card.jsx';

const iconMap = {
  trophy: Trophy,
  code: Code,
  star: Star,
  award: AwardIcon
};

const Achievements = ({ portfolioData }) => {
  return (
    <section id="achievements" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Milestones in my journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon] || Trophy;
            return (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-teal-500/50 transition-all group hover:shadow-xl hover:shadow-teal-500/10">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 bg-teal-500/10 rounded-xl group-hover:bg-teal-500/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-teal-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;