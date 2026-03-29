import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send,Link,User } from 'lucide-react';
import { Card, CardContent } from './ui/card.jsx';
import { Button } from './ui/button.jsx';
import { Input } from './ui/input.jsx';
import { Textarea } from './ui/textarea.jsx';
import { toast } from '../hooks/use-toast';

const Contact = ({ portfolioData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-teal-500/10 rounded-lg">
                    <Mail className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="text-white hover:text-teal-400 transition-colors"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-teal-500/10 rounded-lg">
                    <Phone className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a
                      href={`tel:${portfolioData.personal.phone}`}
                      className="text-white hover:text-teal-400 transition-colors"
                    >
                      {portfolioData.personal.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-teal-500/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">
                      {portfolioData.personal.location}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Connect With Me
              </h3>

              <div className="flex space-x-4">
                
                {/* GitHub */}
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/50 text-gray-300 hover:text-teal-400 rounded-lg transition-all"
                >
                  <Link className="w-6 h-6" />
                </a>

                {/* LinkedIn */}
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/50 text-gray-300 hover:text-teal-400 rounded-lg transition-all"
                >
                  <User className="w-6 h-6" />
                </a>

              </div>
            </div>

          </div>

          {/* Contact Form */}
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="p-6">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-slate-800 border-slate-700 text-white"
                />

                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="bg-slate-800 border-slate-700 text-white"
                />

                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="bg-slate-800 border-slate-700 text-white"
                />

                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="bg-slate-800 border-slate-700 text-white"
                />

                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Contact;