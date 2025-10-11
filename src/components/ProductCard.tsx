import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    image_url: string | null;
    price_per_litre: number;
    offer_price_per_litre: number | null;
    stock_quantity: number;
  };
  onUpdate?: () => void;
}

export default function ProductCard({ product, onUpdate }: ProductCardProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isAddingToCart] = useState(false);
  const [isAddingToWishlist] = useState(false);

  return (
    <Card
      className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[var(--shadow-hover)]"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image_url || '/placeholder.svg'}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
      </CardContent>
    </Card>
  );
}