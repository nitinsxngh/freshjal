'use client';

import Link from 'next/link';
import { 
  Truck, 
  Clock, 
  CheckCircle,
  Phone,
  Mail,
  ArrowLeft,
  AlertCircle
} from 'lucide-react';

export default function ShippingPolicy() {
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
              <Truck className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold font-playfair text-gray-900">Shipping Policy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6">
                Shipping & Delivery Policy
              </h1>
              <p className="text-xl text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Truck className="h-6 w-6 text-blue-600 mr-3" />
                    Overview
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    At Freshjal, we are committed to providing reliable and timely delivery of our premium Himalayan water products. This shipping policy outlines our delivery processes, timelines, and policies to ensure a smooth customer experience.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    We currently serve major cities across India and are expanding our delivery network to provide better accessibility to our customers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Areas</h2>
                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Currently Served Cities</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Primary Cities</h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Greater Noida, Uttar Pradesh</li>
                          <li>• Delhi, NCR</li>
                          <li>• Noida, Uttar Pradesh</li>
                          <li>• Ghaziabad, Uttar Pradesh</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Secondary Cities</h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Mumbai, Maharashtra</li>
                          <li>• Bangalore, Karnataka</li>
                          <li>• Hyderabad, Telangana</li>
                          <li>• Chennai, Tamil Nadu</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    For locations outside our current service areas, we may arrange special delivery for bulk orders. Please contact our customer service team for availability and pricing.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delivery Options</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Standard Delivery</h3>
                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-gray-800">Free for orders above ₹5,000</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                    <li>Delivery within 2-3 business days</li>
                    <li>Standard delivery hours: 9:00 AM - 6:00 PM</li>
                    <li>Contactless delivery available</li>
                    <li>Delivery confirmation via SMS/Email</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Express Delivery</h3>
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-gray-800">Additional ₹200 charge</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                    <li>Same-day or next-day delivery (subject to availability)</li>
                    <li>Extended delivery hours: 8:00 AM - 8:00 PM</li>
                    <li>Priority handling and tracking</li>
                    <li>Available in major metropolitan areas</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Scheduled Delivery</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Choose your preferred delivery date and time slot</li>
                    <li>Available for recurring orders and bulk deliveries</li>
                    <li>No additional charges for scheduled deliveries</li>
                    <li>Flexible time slots: Morning (9 AM - 12 PM), Afternoon (12 PM - 3 PM), Evening (3 PM - 6 PM)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delivery Charges</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Order Value Based</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex justify-between">
                            <span>Orders above ₹5,000</span>
                            <span className="font-semibold text-green-600">FREE</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Orders ₹2,000 - ₹5,000</span>
                            <span className="font-semibold text-blue-600">₹150</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Orders below ₹2,000</span>
                            <span className="font-semibold text-orange-600">₹250</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Distance Based</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex justify-between">
                            <span>Within city limits</span>
                            <span className="font-semibold text-green-600">Standard rate</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Suburban areas</span>
                            <span className="font-semibold text-blue-600">+₹100</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Outskirts</span>
                            <span className="font-semibold text-orange-600">+₹200</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delivery Process</h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Order Confirmation</h4>
                        <p className="text-gray-700">Receive confirmation email/SMS with order details and estimated delivery date</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Processing & Preparation</h4>
                        <p className="text-gray-700">Order is processed, products are prepared, and delivery is scheduled</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Dispatch Notification</h4>
                        <p className="text-gray-700">Receive dispatch notification with tracking details and delivery window</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Delivery</h4>
                        <p className="text-gray-700">Professional delivery team arrives at scheduled time with your order</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">5</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Confirmation</h4>
                        <p className="text-gray-700">Delivery confirmation and feedback request sent via SMS/Email</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delivery Requirements</h2>
                  <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="h-6 w-6 text-yellow-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Important Requirements</h3>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Someone must be present to receive the delivery</li>
                          <li>• Valid ID proof may be required for verification</li>
                          <li>• Payment must be completed before delivery</li>
                          <li>• Delivery address must be accessible by delivery vehicle</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Special Handling</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Bulk Orders</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                    <li>Special delivery arrangements for orders above 100 bottles</li>
                    <li>Dedicated delivery vehicle and team</li>
                    <li>Flexible delivery timing based on your requirements</li>
                    <li>Professional unloading and placement assistance</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Office/Commercial Deliveries</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                    <li>Delivery during business hours preferred</li>
                    <li>Loading dock or ground floor access required</li>
                    <li>Advance notice for large deliveries</li>
                    <li>Staff coordination for delivery acceptance</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Residential Deliveries</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Contactless delivery available</li>
                    <li>Safe drop-off location coordination</li>
                    <li>Evening delivery slots available</li>
                    <li>Special instructions for apartment buildings</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delivery Issues & Resolutions</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Failed Deliveries</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                    <li>Three delivery attempts will be made</li>
                    <li>Failed deliveries will be rescheduled</li>
                    <li>Additional delivery charges may apply for rescheduling</li>
                    <li>Contact customer service for special arrangements</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Damaged Products</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                    <li>Inspect products before accepting delivery</li>
                    <li>Report damage within 24 hours</li>
                    <li>Photos may be required for damage claims</li>
                    <li>Replacement or refund will be processed</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Delivery Delays</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Weather conditions may cause delays</li>
                    <li>Traffic and road conditions affect delivery times</li>
                    <li>We will notify you of any significant delays</li>
                    <li>Compensation may be offered for excessive delays</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For questions about shipping, delivery, or to track your order, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-3">
                      <div>
                        <strong className="text-gray-900">Email:</strong>
                        <a href="mailto:hello@freshjal.com" className="text-blue-600 hover:text-blue-800 ml-2">hello@freshjal.com</a>
                      </div>
                      <div>
                        <strong className="text-gray-900">Phone:</strong>
                        <a href="tel:+918962775753" className="text-blue-600 hover:text-blue-800 ml-2">+91 8962775753</a>
                      </div>
                      <div>
                        <strong className="text-gray-900">Address:</strong>
                        <span className="text-gray-700 ml-2">Plot No. BGH-A, Site C, opp. Sector Zeta, Housing Extn, Gulistanpur, Greater Noida, Uttar Pradesh 201310</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Customer Service Hours:</strong>
                        <span className="text-gray-700 ml-2">Monday - Saturday: 8:00 AM - 8:00 PM IST</span>
                      </div>
                      <div className="text-center mt-6 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500">&copy; 2025 Freshjal. All rights reserved.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
