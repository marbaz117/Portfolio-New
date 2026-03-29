import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, MapPin, Code2, ArrowRight } from 'lucide-react';

const Hero = ({ portfolioData }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2">
              <Code2 className="w-4 h-4 text-teal-400" />
              <span className="text-teal-400 text-sm font-medium">Open to Opportunities</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              Hi, I'm <span className="text-teal-400">{portfolioData.personal.name}</span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 font-semibold">
              {portfolioData.personal.title}
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              {portfolioData.personal.tagline}
            </p>

            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>{portfolioData.personal.location}</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-6 text-base"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <Button
                variant="outline"
                onClick={() => window.open(portfolioData.personal.github, '_blank')}
                className="border-gray-700 text-gray-300 hover:bg-slate-800 px-6 py-6 text-base"
              >
                View Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-teal-400 rounded-lg transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-teal-400 rounded-lg transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-3 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-teal-400 rounded-lg transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Stats/Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-all">
              <div className="text-4xl font-bold text-teal-400 mb-2">1855</div>
              <div className="text-gray-400 text-sm">LeetCode Rating</div>
              <div className="text-gray-500 text-xs mt-1">Top 13k globally</div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-all">
              <div className="text-4xl font-bold text-teal-400 mb-2">1200+</div>
              <div className="text-gray-400 text-sm">Problems Solved</div>
              <div className="text-gray-500 text-xs mt-1">Competitive Programming</div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-all">
              <div className="text-4xl font-bold text-teal-400 mb-2">8.58</div>
              <div className="text-gray-400 text-sm">CGPA at NIT Patna</div>
              <div className="text-gray-500 text-xs mt-1">CSE Department</div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-all">
              <div className="text-4xl font-bold text-teal-400 mb-2">3⭐</div>
              <div className="text-gray-400 text-sm">CodeChef Rating</div>
              <div className="text-gray-500 text-xs mt-1">1649 Max Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;