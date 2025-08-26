'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, 
  RotateCcw, 
  Download, 
  ArrowLeft,
  Eye,
  EyeOff,
  RefreshCw
} from 'lucide-react';
import Link from 'next/link';

export default function MockupPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [bottleRotation, setBottleRotation] = useState(0);
  const [bottleType, setBottleType] = useState<'premium' | 'natural'>('premium');
  const [showWireframe, setShowWireframe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetBottle = () => {
    setBottleRotation(0);
    setShowWireframe(false);
  };

  const downloadMockup = async () => {
    if (!uploadedImage) return;
    
    setIsLoading(true);
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    
    // Placeholder for actual download functionality
    alert('Mockup download feature coming soon!');
  };

  const bottleGradients = {
    premium: 'from-orange-400 to-red-500',
    natural: 'from-blue-400 to-blue-600'
  };

  const bottleLabels = {
    premium: 'Premium',
    natural: 'Natural'
  };

  const bottleColors = {
    premium: 'bg-blue-600',
    natural: 'bg-green-600'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Page Loading Overlay */}
      {pageLoading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading Mockup Designer</h2>
            <p className="text-gray-600">Preparing your 3D bottle experience...</p>
          </div>
        </div>
      )}

      {/* Header for Mockup Page */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold font-playfair text-gray-900">Bottle Mockup Designer</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-[calc(100vh-120px)]">
          
          {/* Left Side - Controls and Upload */}
          <div className="space-y-4 lg:space-y-6 overflow-y-auto">
            {/* Upload Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg"
            >
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">Upload Your Design</h2>
              
              {/* Drag & Drop Zone */}
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 lg:p-8 text-center hover:border-blue-400 transition-colors cursor-pointer relative"
                onClick={() => fileInputRef.current?.click()}
              >
                {isUploading ? (
                  <div className="flex flex-col items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 lg:h-12 lg:w-12 border-b-2 border-blue-600 mb-3 lg:mb-4"></div>
                    <p className="text-sm lg:text-base text-blue-600 font-medium">Uploading...</p>
                  </div>
                ) : (
                  <>
                    <Upload className="h-8 w-8 lg:h-12 lg:w-12 text-gray-400 mx-auto mb-3 lg:mb-4" />
                    <p className="text-sm lg:text-base text-gray-600 mb-2">
                      <span className="font-semibold text-blue-600">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs lg:text-sm text-gray-500">PNG, JPG, SVG up to 10MB</p>
                  </>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              {/* Uploaded Image Preview */}
              {uploadedImage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-3 lg:mt-4"
                >
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Preview:</h3>
                  <div className="relative">
                    <img
                      src={uploadedImage}
                      alt="Uploaded design"
                      className="w-full h-24 lg:h-32 object-contain bg-gray-50 rounded-lg border"
                    />
                    <button
                      onClick={() => setUploadedImage(null)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Bottle Customization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg"
            >
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4">Bottle Customization</h2>
              
              {/* Bottle Type Selection */}
              <div className="mb-4 lg:mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 lg:mb-3">Bottle Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setBottleType('premium')}
                    className={`p-2 lg:p-3 rounded-lg border-2 transition-all ${
                      bottleType === 'premium'
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-sm font-medium">Premium</div>
                    <div className="text-xs text-gray-500">Orange Label</div>
                  </button>
                  <button
                    onClick={() => setBottleType('natural')}
                    className={`p-2 lg:p-3 rounded-lg border-2 transition-all ${
                      bottleType === 'natural'
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-sm font-medium">Natural</div>
                    <div className="text-xs text-gray-500">Blue Label</div>
                  </button>
                </div>
              </div>

              {/* Rotation Control */}
              <div className="mb-4 lg:mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 lg:mb-3">
                  Bottle Rotation: {bottleRotation}°
                </label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={bottleRotation}
                  onChange={(e) => setBottleRotation(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* View Options */}
              <div className="mb-4 lg:mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 lg:mb-3">View Options</label>
                <div className="space-y-2">
                  <button
                    onClick={() => setShowWireframe(!showWireframe)}
                    className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                      showWireframe ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {showWireframe ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    <span className="text-sm">Wireframe View</span>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 lg:space-y-3">
                <button
                  onClick={resetBottle}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 lg:py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Reset View</span>
                </button>
                <button
                  onClick={downloadMockup}
                  disabled={!uploadedImage || isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-2 lg:py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4" />
                      <span>Download Mockup</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-50 rounded-2xl p-4 lg:p-6 border border-blue-200"
            >
              <h3 className="text-base lg:text-lg font-semibold text-blue-900 mb-2 lg:mb-3">How to Use</h3>
              <ol className="space-y-1 lg:space-y-2 text-xs lg:text-sm text-blue-800">
                <li>1. Upload your logo or design image</li>
                <li>2. Choose between Premium (Orange) or Natural (Blue) bottle</li>
                <li>3. Rotate the bottle to see different angles</li>
                <li>4. Toggle wireframe view for technical details</li>
                <li>5. Download your mockup when ready</li>
              </ol>
            </motion.div>
          </div>

          {/* Right Side - 3D Bottle Preview */}
          <div className="flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              {/* 3D Bottle Container */}
              <div className="relative w-64 lg:w-80 h-80 lg:h-96 flex items-center justify-center">
                {/* Bottle Base */}
                <div
                  className={`relative w-24 lg:w-32 h-48 lg:h-64 bg-gradient-to-br ${bottleGradients[bottleType]} rounded-t-3xl rounded-b-2xl shadow-2xl transform transition-all duration-500`}
                  style={{ transform: `rotateY(${bottleRotation}deg)` }}
                >
                  {/* Bottle Neck */}
                  <div className="absolute -top-3 lg:-top-4 left-1/2 transform -translate-x-1/2 w-6 lg:w-8 h-6 lg:h-8 bg-white rounded-full border-2 border-gray-200"></div>
                  
                  {/* Bottle Cap */}
                  <div className="absolute -top-6 lg:-top-8 left-1/2 transform -translate-x-1/2 w-8 lg:w-10 h-3 lg:h-4 bg-gray-300 rounded-full"></div>
                  
                  {/* Uploaded Design Overlay */}
                  {uploadedImage && (
                    <div className="absolute inset-3 lg:inset-4 bg-white bg-opacity-90 rounded-2xl overflow-hidden flex items-center justify-center">
                      <img
                        src={uploadedImage}
                        alt="Custom design"
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  )}
                  
                  {/* Wireframe Overlay */}
                  {showWireframe && (
                    <div className="absolute inset-0 border-2 border-blue-500 border-dashed rounded-t-3xl rounded-b-2xl pointer-events-none"></div>
                  )}
                </div>

                {/* Bottle Label */}
                <div className={`absolute top-16 lg:top-20 -right-3 lg:-right-4 ${bottleColors[bottleType]} text-white px-2 lg:px-3 py-1 rounded-full text-xs font-semibold`}>
                  {bottleLabels[bottleType]}
                </div>

                {/* Loading Indicator */}
                {isLoading && (
                  <div className="absolute inset-0 bg-white bg-opacity-90 rounded-2xl flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-3"></div>
                      <p className="text-sm font-medium text-gray-700">Processing Mockup...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Rotation Indicator */}
              <div className="absolute bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm">
                {bottleRotation}°
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Custom CSS for slider */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
