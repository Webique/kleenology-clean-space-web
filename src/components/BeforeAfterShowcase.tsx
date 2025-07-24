import { Card, CardContent } from "@/components/ui/card";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";

export const BeforeAfterShowcase = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    { id: "vid1", title: "Deep Cleaning Process" },
    { id: "vid2", title: "Kitchen Transformation" },
    { id: "vid3", title: "Office Sanitization" }
  ];

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

        {/* Before/After Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Before & After</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0 relative">
                <img 
                  src="/lovable-uploads/before.jpg" 
                  alt="Before cleaning" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Before
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0 relative">
                <img 
                  src="/lovable-uploads/after.jpg" 
                  alt="After cleaning" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  After
                </div>
                <div className="absolute top-4 right-4 text-green-500">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
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
                    poster="/lovable-uploads/after.jpg"
                    preload="metadata"
                  >
                    <source src={`/lovable-uploads/${video.id}.mp4`} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-primary fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold text-sm bg-black/50 px-2 py-1 rounded">
                      {video.title}
                    </h4>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div className="relative max-w-4xl w-full">
              <video 
                className="w-full h-auto rounded-lg"
                controls
                autoPlay
                onClick={(e) => e.stopPropagation()}
              >
                <source src={`/lovable-uploads/${activeVideo}.mp4`} type="video/mp4" />
              </video>
              <button 
                onClick={() => setActiveVideo(null)}
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
};