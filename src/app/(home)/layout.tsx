import Footer from "@/components/footer";
import Header from "@/components/navbar";

export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
          <Header />
          {children}
          <Footer />
        </div>
    );
  }