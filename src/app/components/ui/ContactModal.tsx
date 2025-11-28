'use client';

import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          message: '',
        });
        setStatus('idle');
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Start a Project">
      {status === 'success' ? (
        <div className="text-center py-6 sm:py-8">
          <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-lime mx-auto mb-3 sm:mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-sm sm:text-base text-gray-400">
            Thanks for reaching out. I&apos;ll get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-mono text-gray-400 mb-1.5 sm:mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-black border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-lime transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-mono text-gray-400 mb-1.5 sm:mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-black border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-lime transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-xs sm:text-sm font-mono text-gray-400 mb-1.5 sm:mb-2">
              Company (Optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-black border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-lime transition-colors"
              placeholder="Your company name"
            />
          </div>

          {/* Project Type & Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label htmlFor="projectType" className="block text-xs sm:text-sm font-mono text-gray-400 mb-1.5 sm:mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-black border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white focus:outline-none focus:border-lime transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select type</option>
                <option value="Live Streaming">Live Streaming Platform</option>
                <option value="AI Agents">Agentic AI / Call Agents</option>
                <option value="E-commerce">E-commerce</option>
                <option value="SaaS">SaaS Product</option>
                <option value="Enterprise">Enterprise Solution</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-xs sm:text-sm font-mono text-gray-400 mb-1.5 sm:mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-black border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white focus:outline-none focus:border-lime transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select budget</option>
                <option value="<$10k">Less than $10k</option>
                <option value="$10k-$25k">$10k - $25k</option>
                <option value="$25k-$50k">$25k - $50k</option>
                <option value="$50k-$100k">$50k - $100k</option>
                <option value="$100k+">$100k+</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs sm:text-sm font-mono text-gray-400 mb-1.5 sm:mb-2">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-black border border-white/10 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-lime transition-colors resize-none sm:rows-6"
              placeholder="Tell me about your project, timeline, and any specific requirements..."
            />
          </div>

          {/* Error Message */}
          {status === 'error' && (
            <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-red-500/10 border border-red-500/20 rounded-lg sm:rounded-xl">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-500 text-xs sm:text-sm font-medium">Failed to send message</p>
                <p className="text-red-400 text-xs mt-1">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Button
              type="button"
              variant="ghost"
              size="md"
              className="w-full sm:flex-1"
              onClick={onClose}
              disabled={status === 'sending'}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full sm:flex-1"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
