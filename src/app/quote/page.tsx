'use client';

import { useState } from 'react';
import { 
  Droplets, 
  Mountain, 
  Building2,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  Store,
  Utensils
} from 'lucide-react';
import Link from 'next/link';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: '',
    waterRequirements: [] as string[],
    monthlyVolume: '',
    additionalRequirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (requirement: string) => {
    setFormData(prev => ({
      ...prev,
      waterRequirements: prev.waterRequirements.includes(requirement)
        ? prev.waterRequirements.filter(r => r !== requirement)
        : [...prev.waterRequirements, requirement]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-2xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-4">
              Quote Request Submitted!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your interest in Freshjal premium water. Our team will review your requirements 
              and get back to you within 24 hours with a customized quote.
            </p>
            <Link 
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-medium text-gray-700">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold font-playfair text-gray-900">Freshjal</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">
            Get Your Premium Water Quote
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Ready to elevate your business with premium Himalayan water? 
            Get a customized quote for your corporate, restaurant, or retail needs.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Form Header */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold font-playfair text-gray-900 mb-2">
                Business Information
              </h2>
              <p className="text-gray-600">
                Tell us about your business and water requirements
              </p>
            </div>

            <div className="p-8 space-y-8">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input 
                    type="text" 
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your business name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input 
                    type="text" 
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="business@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              
              {/* Business Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type *
                </label>
                <select 
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select your business type</option>
                  <option value="corporate">Corporate Office</option>
                  <option value="restaurant">Restaurant/Cafe</option>
                  <option value="retail">Retail Shop</option>
                  <option value="hotel">Hotel/Hospitality</option>
                  <option value="healthcare">Healthcare/Medical</option>
                  <option value="education">Educational Institution</option>
                  <option value="manufacturing">Manufacturing/Factory</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Water Requirements */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Water Requirements *
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { value: 'individual-bottles', label: 'Individual Bottles', icon: Droplets },
                    { value: 'bulk-dispensers', label: 'Bulk Dispensers', icon: Building2 },
                    { value: 'custom-branding', label: 'Custom Branding', icon: Store },
                    { value: 'office-coolers', label: 'Office Water Coolers', icon: Building2 },
                    { value: 'restaurant-service', label: 'Restaurant Service', icon: Utensils },
                    { value: 'retail-packs', label: 'Retail Packs', icon: Store }
                  ].map(({ value, label, icon: Icon }) => (
                    <label key={value} className="flex items-center space-x-3 cursor-pointer p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                      <input 
                        type="checkbox" 
                        checked={formData.waterRequirements.includes(value)}
                        onChange={() => handleCheckboxChange(value)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" 
                      />
                      <Icon className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700 font-medium">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Monthly Volume */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Volume Estimate
                </label>
                <select 
                  name="monthlyVolume"
                  value={formData.monthlyVolume}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select volume range</option>
                  <option value="100-500">100-500 bottles/month</option>
                  <option value="500-1000">500-1,000 bottles/month</option>
                  <option value="1000-5000">1,000-5,000 bottles/month</option>
                  <option value="5000-10000">5,000-10,000 bottles/month</option>
                  <option value="10000+">10,000+ bottles/month</option>
                </select>
              </div>

              {/* Additional Requirements */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Requirements
                </label>
                <textarea 
                  name="additionalRequirements"
                  value={formData.additionalRequirements}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your specific needs, delivery preferences, custom branding requirements, or any questions..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:transform-none"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Custom Quote'}
                </button>
                <p className="text-sm text-gray-500 mt-3">
                  We&apos;ll respond within 24 hours with your customized quote
                </p>
              </div>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Need Immediate Assistance?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Droplets className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-gray-600">Call us directly</p>
                  <p className="font-semibold text-blue-600">+91 8962775753</p>
                </div>
                <div>
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mountain className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-gray-600">Email us</p>
                  <p className="font-semibold text-blue-600">hello@freshjal.com</p>
                </div>
                <div>
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-gray-600">Visit us</p>
                  <p className="font-semibold text-blue-600">Greater Noida, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
