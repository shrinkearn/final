import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Footer from '@/components/Footer';

export default function Home() {
  const { data: featuredProducts } = useQuery({
    queryKey: ['featured-products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('featured_in_offers', true)
        .eq('is_active', true)
        .limit(4);
      if (error) throw error;
      return data;
    },
  });

  const { data: recentReviews } = useQuery({
    queryKey: ['recent-reviews'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select(`
          *,
          profiles:user_id (full_name)
        `)
        .order('created_at', { ascending: false })
        .limit(3);
      if (error) throw error;
      return data;
    },
  });

  const { data: nonFeaturedProducts } = useQuery({
    queryKey: ['non-featured-products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('featured_in_offers', false)
        .eq('is_active', true)
        .limit(50);
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 md:py-40 min-h-[70vh] flex items-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/oil-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
              Sri Aarumugan Oil Mills
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-10 drop-shadow-lg">
              Premium manufacturer of cold-pressed gingelly oil, sesame seeds, and cotton seed cake. Tradition, purity, and quality since 2022.
            </p>
            <Link to="/products">
              <Button size="lg" className="text-xl px-10 py-7 shadow-2xl">
                <ShoppingBag className="mr-2 h-6 w-6" />
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
