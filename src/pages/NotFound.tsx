
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="container max-w-3xl py-16 text-center">
          <h1 className="text-6xl font-bold mb-6 gradient-text">404</h1>
          <p className="text-2xl font-medium mb-8">Page not found</p>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button size="lg" className="gradient-bg" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
