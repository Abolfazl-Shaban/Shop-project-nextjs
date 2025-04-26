import { Product } from "@/components/Product/Product.type";
import { CartItem } from "@/context/CartContext";


export const calculateCartTotals = (cartItems: CartItem[]) => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  
    const discount = cartItems.reduce(
      (sum, item) => sum + 
        (item.product.price - calculateDiscountedPrice(item.product)) * item.quantity,
      0
    );
  
    const tax = cartItems.reduce(
      (sum, item) => sum + calculateDiscountedPrice(item.product) * item.quantity * 0.1,
      0
    );
  
    const total = subtotal - discount + tax;
  
    return {
      subtotal,
      discount,
      tax,
      total,
    };
  };
  
  const calculateDiscountedPrice = (product: Product) => {
    return product.price * (1 - product.discount / 100);
  };