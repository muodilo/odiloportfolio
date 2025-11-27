'use client';

import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

interface AskAIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AskAIModal({ isOpen, onClose }: AskAIModalProps) {
  const [formData, setFormData] = useState({
    skills: '',
    careerGoal: 'Fullstack Developer',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
      console.log('Submitting:', formData);
      
      setTimeout(() => {
        alert('Getting your personalized recommendations...');
        onClose();
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to get recommendations');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-600 hover:text-gray-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">
            Discover Your <span className="text-teal-500">Perfect</span>
            <br />
            <span className="text-teal-500">Learning Path</span>
          </h2>
          <p className="text-gray-600">
            Get personalized skill recommendations and project ideas based on
            your current expertise and career goals.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Your Current Skills (comma-separated)
            </label>
            <textarea
              name="skills"
              placeholder="e.g.: React,Nextjs,Java"
              value={formData.skills}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  skills: e.target.value,
                }))
              }
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Career Goal
            </label>
            <select
              name="careerGoal"
              value={formData.careerGoal}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none bg-white cursor-pointer"
            >
              <option value="Fullstack Developer">Fullstack Developer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Mobile Developer">Mobile Developer</option>
              <option value="DevOps Engineer">DevOps Engineer</option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            {isSubmitting ? 'Getting recommendations...' : 'Get recommendations'}
          </button>
        </form>
      </div>
    </div>
  );
}
