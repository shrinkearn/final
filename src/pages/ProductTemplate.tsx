import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const litreOptions = [
  {
    id: 1,
    volume: 1,
    price: 24.99,
    originalPrice: 29.99,
    image: 'Small bottle (1L)',
    thumbnails: ['View 1', 'View 2', 'View 3', 'View 4']
  },
  {
    id: 2,
    volume: 2,
    price: 44.99,
    originalPrice: 54.99,
    image: 'Medium bottle (2L)',
    thumbnails: ['View 1', 'View 2', 'View 3', 'View 4']
  },
  {
    id: 3,
    volume: 3,
    price: 59.99,
    originalPrice: 74.99,
    image: 'Large bottle (3L)',
    thumbnails: ['View 1', 'View 2', 'View 3', 'View 4']
  },
];

export default function ProductTemplate() {
  const [selectedLitre, setSelectedLitre] = useState(litreOptions[0]);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleLitreChange = (option: typeof litreOptions[0]) => {
    setSelectedLitre(option);
    setSelectedImage(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Image Gallery */}
          <div className="space-y-4">
            {/* Main Product Display Area */}
            <Card className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50">
                <div className="text-center space-y-3">
                  <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg animate-pulse"></div>
                  <p className="text-sm text-gray-400 font-medium">{selectedLitre.image}</p>
                  <p className="text-xs text-gray-500">{selectedLitre.volume}L Volume</p>
                </div>
              </div>
            </Card>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {selectedLitre.thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden transition-all ${
                    selectedImage === index
                      ? 'ring-2 ring-gray-800 ring-offset-2'
                      : 'ring-1 ring-gray-200 hover:ring-gray-300'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Information */}
          <div className="space-y-6">
            {/* Product Title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                [Generic Product Name Placeholder]
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < 4
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">4.5</span>
                <span className="text-sm text-gray-500">(500+ reviews)</span>
              </div>

              {/* Price Display */}
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-gray-900">${selectedLitre.price.toFixed(2)}</span>
                <span className="text-lg text-gray-400 line-through">${selectedLitre.originalPrice.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Price per litre: ${(selectedLitre.price / selectedLitre.volume).toFixed(2)}/L
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Product Description */}
            <div className="space-y-2">
              <p className="text-gray-600 leading-relaxed">
                This is a placeholder for the product description. The actual product would have
                detailed information about features, specifications, materials, or benefits that
                help customers make informed purchasing decisions.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Litre Selection Section */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-900">
                Select Volume (Litres):
              </label>
              <div className="flex gap-3">
                {litreOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleLitreChange(option)}
                    className={`px-6 py-3 rounded-lg border-2 font-medium transition-all ${
                      selectedLitre.id === option.id
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {option.volume} L
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Selected: {selectedLitre.volume} Litre{selectedLitre.volume > 1 ? 's' : ''}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Call to Action Buttons */}
            <div className="space-y-3 pt-2">
              <Button
                className="w-full h-12 text-base font-semibold bg-gray-900 hover:bg-gray-800 text-white"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              <Button
                className="w-full h-12 text-base font-semibold"
                variant="outline"
                size="lg"
              >
                Buy Now
              </Button>

              <div className="text-2xl font-bold mt-4">
                Total: ${selectedLitre.price.toFixed(2)}
              </div>
              <p className="text-sm text-gray-500">
                You save: ${(selectedLitre.originalPrice - selectedLitre.price).toFixed(2)} ({Math.round(((selectedLitre.originalPrice - selectedLitre.price) / selectedLitre.originalPrice) * 100)}% off)
              </p>
            </div>

            {/* Additional Info */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-5 h-5 bg-gray-200 rounded"></div>
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-5 h-5 bg-gray-200 rounded"></div>
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-5 h-5 bg-gray-200 rounded"></div>
                <span>Secure checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="mt-16 space-y-8">
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Volume:</span>
                  <span className="font-medium text-gray-900">{selectedLitre.volume} Litre{selectedLitre.volume > 1 ? 's' : ''}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Price per Litre:</span>
                  <span className="font-medium text-gray-900">${(selectedLitre.price / selectedLitre.volume).toFixed(2)}/L</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Total Price:</span>
                  <span className="font-medium text-gray-900">${selectedLitre.price.toFixed(2)}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Discount:</span>
                  <span className="font-medium text-gray-900">{Math.round(((selectedLitre.originalPrice - selectedLitre.price) / selectedLitre.originalPrice) * 100)}% off</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">You Save:</span>
                  <span className="font-medium text-gray-900">${(selectedLitre.originalPrice - selectedLitre.price).toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Package Type:</span>
                  <span className="font-medium text-gray-900">{selectedLitre.image}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
