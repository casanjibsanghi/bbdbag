import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Twitter } from 'lucide-react';
import bbdLogo from '@/assets/BBD-Logo.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Connect', path: '/connect' },
  ];

  const socialLinks = [
    { Icon: Linkedin, href: '#', label: 'LinkedIn', tooltip: 'Follow us on LinkedIn' },
    { Icon: Facebook, href: '#', label: 'Facebook', tooltip: 'Like us on Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter', tooltip: 'Follow us on Twitter' },
  ];

  return (
    <footer className="bg-secondary text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Logo and Mission */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center">
                  <img 
                    src={bbdLogo} 
                    alt="BBD Bag Professional Association Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-tight">
                    BBD Bag Professional
                    <br />
                    <span className="text-sm font-medium opacity-75">Association</span>
                  </h3>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                A multidisciplinary forum dedicated to fostering professional excellence, 
                continuous learning, and community service among professionals in Kolkata 
                and beyond.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2" aria-label="Footer navigation">
                {quickLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href, label, tooltip }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300"
                    aria-label={tooltip}
                    title={tooltip}
                  >
                    <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                Follow us for updates on events, networking opportunities, and professional development resources.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} BBD Bag Professional Association. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Empowering professionals since our inception.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;