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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
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
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
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
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                />
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
