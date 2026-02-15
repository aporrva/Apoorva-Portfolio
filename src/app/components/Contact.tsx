import { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_bep4s3p',      // Service ID
        'template_hay1no3',     // Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        '8tWvArLaCz6-WmX5J'      // Public Key
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-8 bg-gradient-to-br from-[#F9FAFB] to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4F46E5] to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Contact Info Cards */}
          <div className="space-y-6">

            <div className="bg-white p-6 rounded-[16px] shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#4F46E5] to-purple-600 rounded-[12px] shadow-md">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-1">Email</h3>
                  <p className="text-sm text-gray-600">
                    apoorvarawat87@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-[16px] shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#4F46E5] to-purple-600 rounded-[12px] shadow-md">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-1">Phone</h3>
                  <p className="text-sm text-gray-600">
                    +91 9258571501
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-[16px] shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#4F46E5] to-purple-600 rounded-[12px] shadow-md">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-1">Location</h3>
                  <p className="text-sm text-gray-600">India</p>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-[16px] shadow-lg border border-gray-100 space-y-6"
            >

              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#111827]">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#111827]">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#111827]">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-purple-600 text-white rounded-[12px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50"
              >
                {loading ? (
                  "Sending..."
                ) : submitted ? (
                  "Message Sent ✓"
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {submitted && (
                <p className="text-center text-green-600 text-sm animate-pulse">
                  Thank you! I'll get back to you soon.
                </p>
              )}

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
