import React from 'react';
import Header from '../components/Header';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-light">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-4 text-primary">
                <Mail size={24} />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">support@famo.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-4 text-primary">
                <Phone size={24} />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+94 11 234 5678</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-4 text-primary">
                <MapPin size={24} />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    123 Farm Road,<br />
                    Colombo 05,<br />
                    Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;