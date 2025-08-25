'use client';

import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react';

export default function PrivacyPolicy() {
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
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold font-playfair text-gray-900">Privacy Policy</span>
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
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Lock className="h-6 w-6 text-blue-600 mr-3" />
                    Introduction
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Freshjal (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Database className="h-6 w-6 text-blue-600 mr-3" />
                    Information We Collect
                  </h2>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Fill out contact forms or quote requests</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Place orders for our products</li>
                    <li>Contact our customer service team</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                  
                  <p className="text-gray-700 leading-relaxed mt-4">
                    This information may include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Business information (company name, business type, industry)</li>
                    <li>Order history and preferences</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Automatically Collected Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When you visit our website, we automatically collect certain information about your device, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Eye className="h-6 w-6 text-blue-600 mr-3" />
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Providing and maintaining our services</li>
                    <li>Processing orders and delivering products</li>
                    <li>Responding to your inquiries and providing customer support</li>
                    <li>Sending you important updates about our services</li>
                    <li>Improving our website and services</li>
                    <li>Conducting research and analysis</li>
                    <li>Complying with legal obligations</li>
                    <li>Preventing fraud and ensuring security</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business, such as payment processors, delivery partners, and IT service providers.</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests.</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.</li>
                    <li><strong>Safety and Security:</strong> We may share information to protect the safety and security of our users, employees, or the public.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Encryption of sensitive data</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication</li>
                    <li>Secure data storage and transmission</li>
                    <li>Employee training on data protection</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights and Choices</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
                    <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete information.</li>
                    <li><strong>Deletion:</strong> You can request deletion of your personal information, subject to certain exceptions.</li>
                    <li><strong>Portability:</strong> You can request a copy of your data in a portable format.</li>
                    <li><strong>Opt-out:</strong> You can opt-out of marketing communications at any time.</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Provide personalized content and advertisements</li>
                    <li>Improve our website functionality</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children&apos;s Privacy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Posting the updated policy on our website</li>
                    <li>Sending you an email notification</li>
                    <li>Displaying a prominent notice on our website</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Your continued use of our services after any changes indicates your acceptance of the updated policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
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
