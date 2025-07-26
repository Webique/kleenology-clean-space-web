import { Card, CardContent } from "@/components/ui/card";
import { Play, ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import vid1Thumbnail from "@/assets/vid1-thumbnail.jpg";
import vid2Thumbnail from "@/assets/vid2-thumbnail.jpg";
import vid3Thumbnail from "@/assets/vid3-thumbnail.jpg";

export const BeforeAfterShowcase = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const videos = [
    { id: "vid1", title: "Deep Cleaning Process", thumbnail: vid1Thumbnail },
    { id: "vid2", title: "Kitchen Transformation", thumbnail: vid2Thumbnail },
    { id: "vid3", title: "Office Sanitization", thumbnail: vid3Thumbnail }
  ];

  // Close modal on Esc key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setActiveVideo(null);
      setActiveImage(null);
    }
  }, []);

  useEffect(() => {
    if (activeVideo || activeImage) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeVideo, activeImage, handleKeyDown]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateSliderPositionTouch(e);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e);
    }
  }, [isDragging]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging) {
      e.preventDefault();
      updateSliderPositionTouch(e);
    }
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const updateSliderPosition = (e: MouseEvent | React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    }
  };

  const updateSliderPositionTouch = (e: TouchEvent | React.TouchEvent) => {
    if (containerRef.current && e.touches[0]) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <section id="showcase" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See the Difference We Make
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the transformation through our before & after results and watch our professional team in action.
          </p>
        </div>

        {/* Interactive Before/After Comparison */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Before & After</h3>
          <div className="max-w-2xl mx-auto">
            <div 
              ref={containerRef}
              className="relative overflow-hidden rounded-lg cursor-grab active:cursor-grabbing group touch-none"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              {/* Before Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/before.jpg" 
                  alt="Before cleaning" 
                  className="w-full h-96 object-cover select-none"
                  draggable={false}
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Before
                </div>
              </div>

              {/* After Image Overlay */}
              <div 
                className="absolute top-0 left-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src="/lovable-uploads/after.jpg" 
                  alt="After cleaning" 
                  className="w-full h-96 object-cover select-none"
                  draggable={false}
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  After
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg flex items-center justify-center group-hover:w-2 transition-all duration-200"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute w-8 h-8 bg-white rounded-full shadow-lg border-2 border-primary flex items-center justify-center cursor-grab active:cursor-grabbing">
                  <div className="w-1 h-4 bg-primary rounded-full"></div>
                </div>
              </div>

              {/* Instructions */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                Drag to compare
              </div>
            </div>
          </div>
        </div>

        {/* Video Gallery */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Our Team in Action</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {videos.map((video) => (
              <Card 
                key={video.id} 
                className="overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setActiveVideo(video.id)}
              >
                <CardContent className="p-0 relative">
                  <video 
                    className="w-full h-48 object-cover"
                    preload="metadata"
                    muted
                    playsInline
                  >
                    <source src={`/lovable-uploads/${video.id}.mp4`} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-primary fill-current" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setActiveVideo(null)}
          >
            <div className="relative max-w-4xl w-full cursor-default" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-2 right-2 text-white hover:text-gray-300 text-3xl z-10 bg-black/60 rounded-full px-3 py-1"
                aria-label="Close video"
              >
                ✕
              </button>
              <video 
                className="w-full h-auto rounded-lg"
                controls
                autoPlay
                tabIndex={0}
              >
                <source src={`/lovable-uploads/${activeVideo}.mp4`} type="video/mp4" />
              </video>
            </div>
          </div>
        )}
        {/* Image Modal */}
        {activeImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <div className="relative max-w-3xl w-full flex items-center justify-center">
              <img 
                src={`/lovable-uploads/${activeImage}`} 
                alt={activeImage.replace('.jpg', '')}
                className="w-full h-auto max-h-[80vh] rounded-lg object-contain"
                onClick={e => e.stopPropagation()}
              />
              <button 
                onClick={() => setActiveImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl"
              >
                ✕ Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}