import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

interface PhotoGalleryProps {
  photos: string[];
  cityName: string;
}

export function PhotoGallery({ photos, cityName }: PhotoGalleryProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!photos || photos.length === 0) {
    return null;
  }

  const handlePrevious = () => {
    setCurrentPhotoIndex((prev) => 
      prev === 0 ? photos.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prev) => 
      prev === photos.length - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentPhotoIndex(index);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);  
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="relative">
      {/* Main Photo Display */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={photos[currentPhotoIndex]}
          alt={`${cityName} - Photo ${currentPhotoIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />
        
        {/* Navigation Buttons */}
        {photos.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 hover:scale-110 transition-all duration-200 transform active:scale-95"
              aria-label="Previous photo"
            >
              <ChevronLeft className="size-4 transition-transform duration-200" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 hover:scale-110 transition-all duration-200 transform active:scale-95"
              aria-label="Next photo"
            >
              <ChevronRight className="size-4 transition-transform duration-200" />
            </button>
          </>
        )}
        
        {/* Expand Button */}
        <button
          onClick={openLightbox}
          className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 hover:scale-110 transition-all duration-200 transform active:scale-95"
          aria-label="Expand photo"
        >
          <Maximize2 className="size-4 transition-transform duration-200" />
        </button>
        
        {/* Photo Counter */}
        {photos.length > 1 && (
          <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
            {currentPhotoIndex + 1} / {photos.length}
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {photos.length > 1 && (
        <div className="flex gap-2 p-3 bg-gray-50 overflow-x-auto animate-in fade-in slide-in-from-bottom-2 duration-300">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 transform ${
                index === currentPhotoIndex 
                  ? 'border-[#b5c7ae] scale-110 shadow-lg ring-2 ring-[#b5c7ae]/30' 
                  : 'border-gray-300 hover:border-gray-400 hover:scale-105 hover:shadow-md'
              }`}
              aria-label={`Go to photo ${index + 1}`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ImageWithFallback
                src={photo}
                alt={`${cityName} - Thumbnail ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-200"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-200 transform active:scale-95"
            aria-label="Close lightbox"
          >
            <X className="size-6 transition-transform duration-200" />
          </button>
          
          <div className="relative max-w-6xl max-h-full">
            <ImageWithFallback
              src={photos[currentPhotoIndex]}
              alt={`${cityName} - Photo ${currentPhotoIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {photos.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 hover:scale-110 transition-all duration-200 transform active:scale-95"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="size-6 transition-transform duration-200" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 hover:scale-110 transition-all duration-200 transform active:scale-95"
                  aria-label="Next photo"
                >
                  <ChevronRight className="size-6 transition-transform duration-200" />
                </button>
              </>
            )}
            
            {photos.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-2 rounded-full text-sm">
                {currentPhotoIndex + 1} / {photos.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
