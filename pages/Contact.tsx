
import React, { useState } from 'react';
import { Button, Input, SectionBadge } from '../components/UI';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Website Design',
    message: '',
    gdpr: false
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formState.gdpr) {
      setError('Please accept the privacy policy to continue.');
      return;
    }

    if (!formState.name || !formState.email || !formState.message) {
      setError('Please fill out all required fields.');
      return;
    }

    // Simulate submission
    setSuccess(true);
    console.log('Form Submitted:', formState);
  };

  if (success) {
    return (
      <div className="min-h-screen pt-48 pb-24 flex items-center justify-center text-center">
        <div className="max-w-md px-6">
          <h1 className="text-4xl font-bold mb-6">Message Sent.</h1>
          <p className="text-gray-600 mb-10">Thanks for reaching out! We'll get back to you within 24 hours.</p>
          <Button to="/">Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-20 md:pt-0">
      <div className="w-full md:w-1/2 bg-bg-dark-primary text-white p-12 md:p-20 flex flex-col justify-center">
        <SectionBadge>Contact Us</SectionBadge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tightest mb-8">Let's Build Something Great.</h1>
        <p className="text-gray-400 mb-12 text-lg">Ready to start? Fill out the form or drop us an email directly.</p>
        
        <div className="space-y-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Email</div>
            <a href="mailto:hi@lovablewebsite.com" className="text-xl hover:text-gray-400 transition-colors">hi@lovablewebsite.com</a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Phone</div>
            <a href="tel:+436604567098" className="text-xl hover:text-gray-400 transition-colors">0660 4567098</a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">Office</div>
            <p className="text-xl text-gray-400">Tokiostrasse 12/2, 1220 Wien, Austria</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-white p-12 md:p-20 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto">
          <Input 
            label="What's your name?" 
            placeholder="John Doe" 
            value={formState.name}
            onChange={e => setFormState({...formState, name: e.target.value})}
          />
          <Input 
            label="What's your email?" 
            type="email"
            placeholder="john@company.at" 
            value={formState.email}
            onChange={e => setFormState({...formState, email: e.target.value})}
          />
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">What do you need help with?</label>
            <select 
              className="w-full bg-transparent border-b border-gray-300 py-4 text-lg text-black focus:border-black focus:outline-none appearance-none cursor-pointer"
              value={formState.service}
              onChange={e => setFormState({...formState, service: e.target.value})}
            >
              <option>Website Design</option>
              <option>Social Media Content</option>
              <option>Both</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about your project</label>
            <textarea 
              rows={4}
              className="w-full bg-transparent border-b border-gray-300 py-4 text-lg text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors duration-200 resize-none"
              placeholder="Your vision..."
              value={formState.message}
              onChange={e => setFormState({...formState, message: e.target.value})}
            />
          </div>

          <div className="mb-8 flex gap-3 items-start">
            <input 
              type="checkbox" 
              className="mt-1 w-5 h-5 border-gray-300 rounded text-black focus:ring-black cursor-pointer"
              id="gdpr"
              checked={formState.gdpr}
              onChange={e => setFormState({...formState, gdpr: e.target.checked})}
            />
            <label htmlFor="gdpr" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
              I agree to the storage of my data for communication purposes according to the <Link to="/datenschutz" className="underline">Privacy Policy</Link>.
            </label>
          </div>

          {error && <div className="text-red-600 text-sm mb-6">{error}</div>}

          <Button type="submit" className="w-full md:w-auto">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
