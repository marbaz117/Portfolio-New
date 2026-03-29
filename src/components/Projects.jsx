import React from 'react';
import { ExternalLink, Link, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card.jsx';
import { Badge } from './ui/badge.jsx';
import { Button } from './ui/button.jsx';

const Projects = ({ portfolioData }) => {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Building scalable full-stack applications</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:border-teal-500/50 transition-all group hover:shadow-2xl hover:shadow-teal-500/10">
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-teal-400 transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-gray-400">{project.duration}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center space-x-2 text-xs">
                      <TrendingUp className="w-3 h-3 text-teal-400 flex-shrink-0" />
                      <span className="text-gray-400 truncate">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-slate-900 text-gray-300 border border-slate-600 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 5 && (
                    <Badge className="bg-slate-900 text-gray-400 border border-slate-600 text-xs">
                      +{project.technologies.length - 5}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    onClick={() => window.open(project.github, '_blank')}
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-slate-900 border-slate-700 text-gray-300 hover:bg-teal-500/10 hover:border-teal-500/50 hover:text-teal-400 transition-all"
                  >
                    <Link className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    onClick={() => window.open(project.github, '_blank')}
                    size="sm"
                    className="flex-1 bg-teal-500 hover:bg-teal-600 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


