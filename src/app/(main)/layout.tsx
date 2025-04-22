import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className=''>{children}</div>
      <Footer />
    </>
  );
}
