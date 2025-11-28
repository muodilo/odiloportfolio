'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string; }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // clear the error for this field as user types
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validateForm = (data: typeof formData) => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!data.name || data.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!data.message || data.message.trim().length < 10) {
      newErrors.message = 'Please enter a message (at least 10 characters).';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // client-side validation
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        alert('Message sent successfully!');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className="py-20 px-5 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">

          <div className="flex flex-col justify-start">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Let's <span className="text-teal-500">Connect</span>
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              Have project in mind or want to collaborate? I'd love to hear from you
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-8 h-8 text-gray-800" />
                </div>
                <div>
                  <p className="text-teal-500 font-semibold text-sm mb-1">
                    Email
                  </p>
                  <p className="text-gray-800 font-medium">
                    odilomuriindahabi@gmail.com
                  </p>
                </div>
              </div>


              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-8 h-8 text-gray-800" />
                </div>
                <div>
                  <p className="text-teal-500 font-semibold text-sm mb-1">
                    Phone
                  </p>
                  <p className="text-gray-800 font-medium">+250 788 524 715</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-8 h-8 text-gray-800" />
                </div>
                <div>
                  <p className="text-teal-500 font-semibold text-sm mb-1">
                    Location
                  </p>
                  <p className="text-gray-800 font-medium">Kigali Rwanda</p>
                </div>
              </div>
            </div>
          </div>


          <div>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-red-600" aria-live="polite">
                    {errors.name}
                  </p>
                )}
              </div>


              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-600" aria-live="polite">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Description"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-600" aria-live="polite">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
