import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import { CartProvider } from '@/context/CartContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CartProvider>
        <Header />
        <div className=''>{children}</div>
        <Footer />
      </CartProvider>
    </>
  );
}
