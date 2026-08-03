import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/contact';
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: data.message || 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({
        type: 'error',
        message: 'Unable to connect to the server. Please email me directly at steven.maranan10@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[rgba(30,41,59,0.3)] min-h-screen h-screen flex items-center pt-[calc(72px+20px)] pb-5 px-[8%] overflow-hidden max-md:h-auto max-md:min-h-0 max-md:overflow-visible max-md:pt-[calc(72px+40px)] max-md:pb-[60px]">
      <div className="section-inner w-full max-w-[1100px] mx-auto h-[calc(100vh-72px-40px)] flex flex-col max-md:h-auto">
        <span 
          className="section-tag inline-block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-accent mb-1"
          data-animate="fade-up"
        >
          Let's talk
        </span>
        <h2 
          className="section-title text-[1.8rem] font-extrabold mb-5"
          data-animate="fade-up" 
          data-delay="80"
        >
          Contact
        </h2>

        <div 
          className="contact-container grid grid-cols-2 gap-10 flex-1 min-h-0 overflow-hidden max-md:grid-cols-1 max-md:gap-8"
          data-animate="fade-up" 
          data-delay="150"
        >
          {/* Contact Form */}
          <div className="contact-form-wrapper overflow-y-auto pr-2 h-full scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent max-md:max-h-none max-md:overflow-visible max-md:pr-0">
            <form className="contact-form flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="form-group flex flex-col gap-2">
                <label htmlFor="name" className="text-[0.85rem] font-semibold text-text tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[rgba(30,41,59,0.5)] border border-border rounded-lg py-3 px-4 text-[0.9rem] text-text font-inter transition-all duration-200 focus:outline-none focus:border-accent focus:bg-[rgba(30,41,59,0.7)] focus:shadow-[0_0_0_2px_rgba(56,189,248,0.15)] placeholder:text-muted placeholder:opacity-50"
                />
              </div>

              <div className="form-group flex flex-col gap-2">
                <label htmlFor="email" className="text-[0.85rem] font-semibold text-text tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[rgba(30,41,59,0.5)] border border-border rounded-lg py-3 px-4 text-[0.9rem] text-text font-inter transition-all duration-200 focus:outline-none focus:border-accent focus:bg-[rgba(30,41,59,0.7)] focus:shadow-[0_0_0_2px_rgba(56,189,248,0.15)] placeholder:text-muted placeholder:opacity-50"
                />
              </div>

              <div className="form-group flex flex-col gap-2">
                <label htmlFor="subject" className="text-[0.85rem] font-semibold text-text tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-[rgba(30,41,59,0.5)] border border-border rounded-lg py-3 px-4 text-[0.9rem] text-text font-inter transition-all duration-200 focus:outline-none focus:border-accent focus:bg-[rgba(30,41,59,0.7)] focus:shadow-[0_0_0_2px_rgba(56,189,248,0.15)] placeholder:text-muted placeholder:opacity-50"
                />
              </div>

              <div className="form-group flex flex-col gap-2">
                <label htmlFor="message" className="text-[0.85rem] font-semibold text-text tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me more..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-[rgba(30,41,59,0.5)] border border-border rounded-lg py-3 px-4 text-[0.9rem] text-text font-inter transition-all duration-200 resize-y min-h-[100px] max-h-[200px] focus:outline-none focus:border-accent focus:bg-[rgba(30,41,59,0.7)] focus:shadow-[0_0_0_2px_rgba(56,189,248,0.15)] placeholder:text-muted placeholder:opacity-50"
                />
              </div>

              {status.message && (
                <div 
                  className={`form-status py-3 px-4 rounded-lg text-[0.9rem] font-medium mt-2 text-center ${
                    status.type === 'success' 
                      ? 'bg-[rgba(34,197,94,0.15)] text-[#4ade80] border border-[rgba(34,197,94,0.3)]' 
                      : 'bg-[rgba(239,68,68,0.15)] text-[#f87171] border border-[rgba(239,68,68,0.3)]'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary inline-block py-3 px-6 rounded-[10px] text-[0.9rem] font-semibold cursor-pointer border-2 border-transparent transition-all duration-200 bg-accent text-bg w-full text-center mt-2 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(56,189,248,0.2)] hover:bg-[#7dd3fc] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Cards */}
          <div className="contact-cards flex flex-col gap-6 overflow-y-auto pr-2 h-full scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent max-md:overflow-visible max-md:pr-0 max-md:gap-8">
            <div 
              className="contact-card flex flex-col gap-2 p-0 border-none bg-transparent transition-transform duration-200 flex-shrink-0 hover:translate-x-1"
              data-animate="fade-up" 
              data-delay="200"
            >
              <h3 className="text-base font-bold text-text m-0 tracking-wide">Email</h3>
              <a 
                href="mailto:steven.maranan10@gmail.com"
                className="block text-muted text-[0.85rem] transition-all duration-200 leading-relaxed pl-0 hover:text-accent hover:translate-x-1"
              >
                steven.maranan10@gmail.com
              </a>
              <a 
                href="mailto:preserving123@gmail.com"
                className="block text-muted text-[0.85rem] transition-all duration-200 leading-relaxed pl-0 hover:text-accent hover:translate-x-1"
              >
                preserving123@gmail.com
              </a>
            </div>
            <div 
              className="contact-card flex flex-col gap-2 p-0 border-none bg-transparent transition-transform duration-200 flex-shrink-0 hover:translate-x-1"
              data-animate="fade-up" 
              data-delay="250"
            >
              <h3 className="text-base font-bold text-text m-0 tracking-wide">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/steven-clyde-maranan" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted text-[0.85rem] transition-all duration-200 leading-relaxed pl-0 hover:text-accent hover:translate-x-1"
              >
                Connect with me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
