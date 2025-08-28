import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">OD</span>
          </div>
          <span className="font-bold text-xl">Open Desk</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/terms" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/terms') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Terms of Service
          </Link>
          <Link 
            to="/privacy" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/privacy') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Privacy Notice
          </Link>
          <Link 
            to="/refund" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/refund') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Refund Policy
          </Link>
        </div>

        <Button variant="professional" size="sm">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;