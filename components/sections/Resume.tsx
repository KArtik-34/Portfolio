'use client';

import React, { useState } from 'react';

export default function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const resumePath = "/Kartikay_Patni.pdf";
  
  // Convert the Google Drive view URL to an embed URL
  const driveId = "1IHzpWQVsoGsb1rVFLgw9eyXl9uS4uV8M";
  const driveEmbedUrl = `https://drive.google.com/file/d/${driveId}/preview`;

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumePath;
    link.setAttribute('download', 'Kartikay_Patni_Resume.pdf');
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset downloading state after a delay
    setTimeout(() => setIsDownloading(false), 1000);
  };

  return (
    <section id="resume" className="py-20 w-full relative">
      {/* Grid Background - Same as Hero */}
      <div className="absolute inset-0 bg-black">
        {/* Grid Pattern with Blur */}
        <div 
          className="absolute inset-0 backdrop-blur-[1px]" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff20 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff20 1px, transparent 1px)
            `,
            backgroundSize: '96px 96px',
            filter: 'blur(0.5px)'
          }}
        />
        
        {/* Gradient Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
        
        {/* Strong Vignette Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.7)_70%,rgba(0,0,0,0.9)_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10">
        <h1 className="heading text-center text-3xl md:text-4xl font-bold mb-10 text-white">
          Preview & Download <span className="text-blue-500">My Resume</span>
        </h1>
        <div className="flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto px-4">
          {/* Modal for Google Drive Preview */}
          {showPreview && (
            <div 
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
              onClick={() => setShowPreview(false)}
            >
              <div 
                className="bg-gray-900 w-full max-w-4xl rounded-xl shadow-2xl border border-gray-800 overflow-hidden max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                  <h3 className="text-xl font-semibold text-white">Resume Preview</h3>
                  <button 
                    onClick={() => setShowPreview(false)}
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Close
                  </button>
                </div>
                
                <div className="flex-grow bg-white">
                  <iframe 
                    src={driveEmbedUrl}
                    className="w-full h-full border-0"
                    style={{ height: "70vh" }}
                    allow="autoplay"
                    title="Resume Preview"
                  />
                </div>
                
                <div className="p-4 border-t border-gray-800">
                  <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors text-lg disabled:opacity-75"
                  >
                    {isDownloading ? 'Downloading...' : 'Download Resume (PDF)'}
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Resume Summary Card */}
          <div className="w-full max-w-3xl mx-auto bg-black p-6 rounded-xl shadow-2xl border border-gray-800 transition-all hover:shadow-blue-500/10 hover:border-blue-500/30 overflow-hidden">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-white mb-1">Kartikay Patni</h2>
              <p className="text-blue-400">Data Analyst & ML Developer</p>
              <div className="flex justify-center items-center gap-3 mt-2 text-sm text-gray-300">
                <span>7986425572</span>
                <span>•</span>
                <span>kartikpatni729@gmail.com</span>
              </div>
            </div>
            
            <div className="border-t border-gray-700 my-4"></div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Professional Experience</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Data Analyst Intern - Promist Solutions</li>
                  <li>• Beverage Data Analysis Project</li>
                  <li>• Industry Trends Analysis</li>
                  <li>• Banking Management System</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Technical Projects</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Beverage Sales Analysis</li>
                  <li>• Android Development Projects</li>
                  <li>• Banking Management System</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-black p-6 rounded-lg shadow-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">Education</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• B.Tech Computer Science Engineering</li>
                <li>• Lovely Professional University</li>
              </ul>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setShowPreview(true)}
                className="px-4 py-3 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 font-semibold shadow-lg hover:bg-blue-500/30 transition-colors text-base flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Preview Resume
              </button>
              
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="px-4 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors text-base flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {isDownloading ? 'Downloading...' : 'Download Resume'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add a new Contact Us section component here
export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 w-full relative">
      {/* Simple Black Background */}
      <div className="absolute inset-0 bg-black"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="heading text-center text-3xl md:text-4xl font-bold mb-10 text-white">
          Get In <span className="text-blue-500">Touch</span>
        </h1>
        
        <div className="bg-black p-8 rounded-xl shadow-2xl border border-gray-800">
          {submitSuccess ? (
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center mb-6">
              <p className="text-green-400 font-medium">Thank you for your message! I'll get back to you soon.</p>
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors text-lg disabled:opacity-75 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : "Send Message"}
              </button>
            </div>
          </form>
          
          <div className="mt-10 pt-8 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-blue-400 font-semibold mb-2">Email</h3>
                <p className="text-gray-300">kartikpatni729@gmail.com</p>
              </div>
              
              <div>
                <h3 className="text-blue-400 font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">+91 7986425572</p>
              </div>
              
              <div>
                <h3 className="text-blue-400 font-semibold mb-2">Location</h3>
                <p className="text-gray-300">Punjab, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 