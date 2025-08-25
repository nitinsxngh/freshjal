'use client';

import Link from 'next/link';
import { 
  ArrowLeft, 
  FileText, 
  Shield, 
  Users, 
  Truck, 
  Clock, 
  CheckCircle,
  Scale
} from 'lucide-react';

export default function TermsAndConditions() {
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
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold font-playfair text-gray-900">Terms & Conditions</span>
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
                Terms and Conditions
              </h1>
              <p className="text-xl text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Scale className="h-6 w-6 text-blue-600 mr-3" />
                    Agreement to Terms
                  </h2>
                  <p className="text-gray-600 mb-6">
                    These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of Freshjal&apos;s services, website, and products. By using our services, you agree to be bound by these Terms.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Freshjal (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) reserves the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description of Services</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Freshjal provides premium packaged water products and related services, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Premium Himalayan water in various bottle sizes and packaging options</li>
                    <li>Bulk water dispensers and refill services</li>
                    <li>Custom branding and labeling services</li>
                    <li>Delivery and installation services</li>
                    <li>Customer support and consultation</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Accounts and Registration</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To access certain features of our services, you may be required to create an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and update your account information</li>
                    <li>Keep your account credentials secure and confidential</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ordering and Payment</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Order Process</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When placing an order with Freshjal:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>All orders are subject to acceptance and availability</li>
                    <li>We reserve the right to refuse or cancel any order</li>
                    <li>Prices are subject to change without notice</li>
                    <li>Orders are confirmed upon receipt of payment</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Payment Terms</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Payment terms and conditions:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Payment is due at the time of order placement</li>
                    <li>We accept various payment methods as indicated on our website</li>
                    <li>All prices are in Indian Rupees (INR) unless otherwise stated</li>
                    <li>Taxes and delivery charges will be added to the final amount</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delivery and Shipping</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Delivery terms and conditions:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Delivery times are estimates and may vary based on location and availability</li>
                    <li>Risk of loss transfers to you upon delivery</li>
                    <li>You are responsible for providing accurate delivery information</li>
                    <li>Additional charges may apply for special delivery requirements</li>
                    <li>We are not liable for delays beyond our reasonable control</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Product Quality and Safety</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Freshjal is committed to providing the highest quality products:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>All water products meet or exceed applicable safety standards</li>
                    <li>Products are sourced from certified Himalayan sources</li>
                    <li>Regular quality testing and monitoring is conducted</li>
                    <li>Proper storage and handling procedures are followed</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    However, we cannot guarantee that our products are suitable for all individuals or purposes. Customers with specific health concerns should consult healthcare professionals.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Returns and Refunds</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our return and refund policy:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Damaged or defective products will be replaced or refunded</li>
                    <li>Returns must be reported within 24 hours of delivery</li>
                    <li>Products must be in original, unopened condition</li>
                    <li>Return shipping costs are the responsibility of the customer</li>
                    <li>Custom-branded products are non-returnable unless defective</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All content on our website and materials are protected by intellectual property rights:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Freshjal trademarks and logos are our exclusive property</li>
                    <li>Website content, design, and functionality are protected by copyright</li>
                    <li>You may not reproduce, distribute, or modify our content without permission</li>
                    <li>Custom branding designs remain the property of the customer</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Freshjal&apos;s liability is limited as follows:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>We are not liable for indirect, incidental, or consequential damages</li>
                    <li>Our total liability is limited to the amount paid for the specific product or service</li>
                    <li>We are not responsible for third-party actions or services</li>
                    <li>Liability limitations apply to the maximum extent permitted by law</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Indemnification</h2>
                  <p className="text-gray-700 leading-relaxed">
                    You agree to indemnify and hold harmless Freshjal, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law and Dispute Resolution</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These Terms are governed by the laws of India. Any disputes arising from these Terms or our services will be resolved through:
                  </p>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                    <li>Direct negotiation between parties</li>
                    <li>Mediation if direct negotiation fails</li>
                    <li>Arbitration in Mumbai, India if mediation fails</li>
                    <li>Court proceedings only as a last resort</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Severability</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will continue in full force and effect. The unenforceable provision will be modified to the minimum extent necessary to make it enforceable.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For questions about these Terms and Conditions, please contact us:
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
