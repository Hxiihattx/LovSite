
import React, { useState, useEffect } from 'react';
import { Button, Input, SectionBadge } from '../components/UI';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    service: '',
    businessName: '',
    industry: '',
    website: '',
    referenceUrl: '',
    contentLink: '',
    instructions: '',
    bookingDate: '',
    bookingTime: '',
    contactName: '',
    email: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, [step]);

  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      setStep(step + 1);
    }, 400);
  };

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(() => {
      setStep(step + 1);
    }, 400);
  };

  const handleBack = () => {
    setIsVisible(false);
    setTimeout(() => {
      setStep(step - 1);
    }, 400);
  };

  const renderStep = () => {
    const entranceClass = `transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;

    switch (step) {
      case 1:
        return (
          <div className={entranceClass}>
            <SectionBadge>Step 01</SectionBadge>
            <h2 className="tracking-tightest mb-6 leading-none md:mb-10">
              What are we crafting today?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <button 
                onClick={() => { setFormData({...formData, service: 'Website Design'}); handleNext(); }}
                className={`p-6 md:p-10 rounded-2xl border-2 text-left transition-all ${formData.service === 'Website Design' ? 'border-black bg-black text-white' : 'border-gray-100 hover:border-gray-300'}`}
              >
                <div className="text-2xl md:text-3xl mb-3 md:mb-4">🌐</div>
                <h3 className="text-lg md:text-xl font-bold">Website Design</h3>
                <p className="text-xs md:text-sm opacity-60 mt-1">Premium Webflow & WordPress solutions.</p>
              </button>
              <button 
                onClick={() => { setFormData({...formData, service: 'Content Design'}); handleNext(); }}
                className={`p-6 md:p-10 rounded-2xl border-2 text-left transition-all ${formData.service === 'Content Design' ? 'border-black bg-black text-white' : 'border-gray-100 hover:border-gray-300'}`}
              >
                <div className="text-2xl md:text-3xl mb-3 md:mb-4">✨</div>
                <h3 className="text-lg md:text-xl font-bold">Content Design</h3>
                <p className="text-xs md:text-sm opacity-60 mt-1">Strategic Social Media & B2B Content.</p>
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={entranceClass}>
            <SectionBadge>Step 02</SectionBadge>
            <h2 className="tracking-tightest mb-10 leading-none">
              Tell us about your brand.
            </h2>
            <div className="space-y-2">
              <Input 
                label="Business Name" 
                placeholder="e.g. Sacher Hotels" 
                value={formData.businessName}
                onChange={e => setFormData({...formData, businessName: e.target.value})}
              />
              <Input 
                label="Industry" 
                placeholder="e.g. Hospitality / Finance" 
                value={formData.industry}
                onChange={e => setFormData({...formData, industry: e.target.value})}
              />
            </div>
            <div className="flex gap-4 mt-12 items-center">
              <Button variant="ghost" onClick={handleBack}>Back</Button>
              <div className="flex-grow"></div>
              <button onClick={handleSkip} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black mr-4">Skip</button>
              <Button onClick={handleNext}>Continue</Button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className={entranceClass}>
            <SectionBadge>Step 03</SectionBadge>
            <h2 className="tracking-tightest mb-10 leading-none">
              Project Details & Brief.
            </h2>
            <div className="space-y-6">
              {formData.service === 'Website Design' ? (
                <Input 
                  label="Reference Website URL" 
                  placeholder="Inspiration link (e.g., apple.com)" 
                  value={formData.referenceUrl}
                  onChange={e => setFormData({...formData, referenceUrl: e.target.value})}
                />
              ) : (
                <Input 
                  label="Existing Content Link" 
                  placeholder="Dropbox, Drive or Instagram link" 
                  value={formData.contentLink}
                  onChange={e => setFormData({...formData, contentLink: e.target.value})}
                />
              )}
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Instructions</label>
                <textarea 
                  rows={3}
                  className="w-full bg-transparent border-b border-gray-300 py-4 text-base text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell us anything else..."
                  value={formData.instructions}
                  onChange={e => setFormData({...formData, instructions: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Upload Assets (PDF, Images, Video)</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-black transition-colors cursor-pointer group">
                  <span className="text-gray-400 group-hover:text-black">Drag & drop files or click to browse</span>
                  <input type="file" className="hidden" />
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-12 items-center">
              <Button variant="ghost" onClick={handleBack}>Back</Button>
              <div className="flex-grow"></div>
              <button onClick={handleSkip} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black mr-4">Skip</button>
              <Button onClick={handleNext}>Continue</Button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className={entranceClass}>
            <SectionBadge>Step 04</SectionBadge>
            <h2 className="tracking-tightest mb-10 leading-none">
              Schedule your Session.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Preferred Date</label>
                <input 
                  type="date" 
                  className="w-full bg-gray-50 rounded-xl p-4 border border-gray-100 focus:outline-none focus:border-black"
                  value={formData.bookingDate}
                  onChange={e => setFormData({...formData, bookingDate: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Preferred Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {['09:00', '11:00', '14:00', '16:00', '17:30', '19:00'].map(t => (
                    <button 
                      key={t}
                      onClick={() => setFormData({...formData, bookingTime: t})}
                      className={`py-3 rounded-lg text-xs font-bold border transition-all ${formData.bookingTime === t ? 'bg-black text-white border-black' : 'bg-white border-gray-200 hover:border-black'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-12 items-center">
              <Button variant="ghost" onClick={handleBack}>Back</Button>
              <div className="flex-grow"></div>
              <button onClick={handleSkip} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black mr-4">Skip</button>
              <Button onClick={handleNext}>Continue</Button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className={entranceClass}>
            <SectionBadge>Final Step</SectionBadge>
            <h2 className="tracking-tightest mb-10 leading-none">
              Where can we reach you?
            </h2>
            <div className="space-y-2">
              <Input 
                label="Full Name" 
                placeholder="Jane Doe" 
                required
                value={formData.contactName}
                onChange={e => setFormData({...formData, contactName: e.target.value})}
              />
              <Input 
                label="Email Address" 
                type="email"
                required
                placeholder="jane@yourbrand.at" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="flex gap-4 mt-12 items-center">
              <Button variant="ghost" onClick={handleBack}>Back</Button>
              <div className="flex-grow"></div>
              {/* No skip for contact info */}
              <Button onClick={() => setStep(6)}>Finish Booking</Button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className={`${entranceClass} text-center py-20`}>
            <div className="text-7xl mb-8">🥂</div>
            <h2 className="tracking-tightest mb-6 leading-none">
              Success.
            </h2>
            <p className="text-gray-500 text-xl max-w-md mx-auto mb-12">
              Ihtasham or our lead strategist will reach out to you within 24 hours to confirm your discovery session.
            </p>
            <Button to="/">Back to Studio</Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full">
        {renderStep()}
      </div>

      {/* Progress Bar */}
      {step < 6 && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-64 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-black transition-all duration-500" 
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default Booking;
