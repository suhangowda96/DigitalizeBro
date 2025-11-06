import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, User, Mail, MessageSquare, Heart, Building, X } from 'lucide-react';
import toast from 'react-hot-toast';
import CodeBackground from '../components/CodeBackground';

// Define TypeScript interfaces
interface FeedbackItem {
  id: number;
  name: string;
  company_name: string;
  email: string;
  rating: number;
  feedback: string;
  created_at: string;
}

interface FormData {
  name: string;
  company_name: string;
  email: string;
  rating: number;
  feedback: string;
}

const Feedback: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company_name: '',
    email: '',
    rating: 0,
    feedback: ''
  });
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempRating, setTempRating] = useState(0);

  // Fetch feedbacks on component mount
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await fetch('https://suhan.pythonanywhere.com/get-feedbacks');
      if (response.ok) {
        const data: FeedbackItem[] = await response.json();
        setFeedbacks(data);
      }
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://suhan.pythonanywhere.com/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Thank you for your feedback! It means a lot to us.');
        setFormData({ name: '', company_name: '', email: '', rating: 0, feedback: '' });
        setTempRating(0);
        setIsModalOpen(false);
        fetchFeedbacks(); // Refresh the feedback list
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || 'Failed to submit feedback');
      }
    } catch (error) {
      toast.error('Failed to submit feedback');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingClick = (rating: number) => {
    setFormData({ ...formData, rating });
    setTempRating(rating);
  };

  const handleStarHover = (rating: number) => {
    setTempRating(rating);
  };

  const handleStarLeave = () => {
    setTempRating(formData.rating);
  };

  const openFeedbackModal = () => {
    setIsModalOpen(true);
  };

  const closeFeedbackModal = () => {
    setIsModalOpen(false);
    setTempRating(formData.rating);
  };

  const renderStars = (rating: number, size = 'w-4 h-4') => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${size} ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CodeBackground />
      
      {/* Hero Section */}
      <section className="relative h-[35vh] md:h-[90vh]" style={{ zIndex: 10 }}>
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${CodeBackground })`,
            height: '100%',
            backgroundAttachment: 'scroll'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content container */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="w-full text-center translate-y-4 md:translate-y-0">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-none"
            >
              Client{' '}
              <span className="text-white">
                Feedback
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Your feedback helps us improve and deliver better experiences
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white relative" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Feedback Trigger Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-8 w-full text-center shadow-lg hover:shadow-2xl transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-red-600 fill-current mr-3" />

                  Share Your Experience
                </h2>
                
                <p className="text-gray-600 mb-6 text-lg">
                  How would you rate your experience with us?
                </p>
                
                {/* Star Rating Button */}
                <motion.div 
                  className="flex justify-center mb-6 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onClick={openFeedbackModal}
                >
                  <div className="flex space-x-1 bg-gray-100 p-4 rounded-lg border border-gray-200">
                    {renderStars(formData.rating, 'w-8 h-8')}
                  </div>
                </motion.div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openFeedbackModal}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Give Feedback</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Feedback List */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Recent Feedback</h2>
              
              {feedbacks.length === 0 ? (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                  <p className="text-gray-500 text-lg">No feedback yet. Be the first to share!</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  {feedbacks.map((feedback) => (
                    <div key={feedback.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-gray-900 font-semibold text-lg">{feedback.name}</h3>
                          {feedback.company_name && (
                            <p className="text-gray-600 text-sm flex items-center">
                              <Building className="w-4 h-4 mr-1" />
                              {feedback.company_name}
                            </p>
                          )}
                        </div>
                        <div className="flex">
                          {renderStars(feedback.rating)}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3 leading-relaxed">{feedback.feedback}</p>
                      <p className="text-gray-500 text-xs">
                        {new Date(feedback.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feedback Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeFeedbackModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                  <Heart className="w-8 h-8 text-red-600 fill-current mr-3" />

                  Share Your Experience
                </h2>
                <button
                  onClick={closeFeedbackModal}
                  className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all text-gray-900 placeholder-gray-500"
                    />
                  </div>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all text-gray-900 placeholder-gray-500"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all text-gray-900 placeholder-gray-500"
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Rate Your Experience
                  </label>
                  <div className="flex space-x-2" onMouseLeave={handleStarLeave}>
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <motion.button
                        key={rating}
                        type="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleRatingClick(rating)}
                        onMouseEnter={() => handleStarHover(rating)}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          tempRating >= rating
                            ? 'text-yellow-400 bg-yellow-50'
                            : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-50'
                        }`}
                      >
                        <Star className="w-8 h-8 fill-current" />
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Feedback */}
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    placeholder="Share your detailed feedback..."
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all text-gray-900 placeholder-gray-500 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Feedback</span>
                    </>
                  )}
                </motion.button>

              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Feedback;