Perfect! Now let me update the Home.tsx to add the video background:
Action: file_editor view /app/frontend/src/pages/Home.tsx
Observation: /app/frontend/src/pages/Home.tsx:
1|import { Link } from 'react-router-dom';
2|import Navbar from '@/components/Navbar';
3|import { Button } from '@/components/ui/button';
4|import { ShoppingBag, Shield, Truck, Award, Star } from 'lucide-react';
5|import { useQuery } from '@tanstack/react-query';
6|import { supabase } from '@/integrations/supabase/client';
7|import ProductCard from '@/components/ProductCard';
8|import { Card, CardContent } from '@/components/ui/card';
9|import Footer from '@/components/Footer';
10|
11|export default function Home() {
12|  const { data: featuredProducts } = useQuery({
13|    queryKey: ['featured-products'],
14|    queryFn: async () => {
15|      const { data, error } = await supabase
16|        .from('products')
17|        .select('*')
18|        .eq('featured_in_offers', true)
19|        .eq('is_active', true)
20|        .limit(4);
21|      if (error) throw error;
22|      return data;
23|    },
24|  });
25|
26|  const { data: recentReviews } = useQuery({
27|    queryKey: ['recent-reviews'],
28|    queryFn: async () => {
29|      const { data, error } = await supabase
30|        .from('reviews')
31|        .select(`
32|          *,
33|          profiles:user_id (full_name)
34|        `)
35|        .order('created_at', { ascending: false })
36|        .limit(3);
37|      if (error) throw error;
38|      return data;
39|    },
40|  });
41|
42|  const { data: nonFeaturedProducts } = useQuery({
43|    queryKey: ['non-featured-products'],
44|    queryFn: async () => {
45|      const { data, error } = await supabase
46|        .from('products')
47|        .select('*')
48|        .eq('featured_in_offers', false)
49|        .eq('is_active', true)
50|        .limit(50);
51|      if (error) throw error;
52|      return data;
53|    },
54|  });
55|
56|  return (
57|    <div className="min-h-screen bg-background">
58|      <Navbar />
59|      
60|      {/* Hero Section */}
61|      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-32 md:py-40 min-h-[70vh] flex items-center">
62|        <div className="container mx-auto px-4">
63|          <div className="max-w-6xl mx-auto text-center">
64|            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
65|              Sri Aarumugan Oil Mills
66|            </h1>
67|            <p className="text-2xl md:text-3xl text-muted-foreground mb-10">
68|              Premium manufacturer of cold-pressed gingelly oil, sesame seeds, and cotton seed cake. Tradition, purity, and quality since 2022.
69|            </p>
70|            <Link to="/products">
71|              <Button size="lg" className="text-xl px-10 py-7">
72|                <ShoppingBag className="mr-2 h-6 w-6" />
73|                Shop Now
74|              </Button>
75|            </Link>
76|          </div>
77|        </div>
78|      </section>
