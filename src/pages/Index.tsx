import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { MapPin, Shield, Clock, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Your Professional Workspace
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover and book premium workspaces tailored to your needs. From hot desks to private offices, 
              find your perfect professional environment with Open Desk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="professional" size="lg" className="text-lg px-8 py-6">
                Find Workspace
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                List Your Space
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Open Desk</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional workspace solutions designed for modern professionals and businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Prime Locations</h3>
                <p className="text-muted-foreground text-sm">
                  Access premium workspaces in the heart of business districts
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Secure & Safe</h3>
                <p className="text-muted-foreground text-sm">
                  All locations are verified and provide secure access controls
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Flexible Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Book hourly, daily, or monthly based on your schedule
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Professional Network</h3>
                <p className="text-muted-foreground text-sm">
                  Connect with like-minded professionals and grow your network
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Perfect Workspace?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of professionals who trust Open Desk for their workspace needs
            </p>
            <Button variant="professional" size="lg" className="text-lg px-8 py-6">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Open Desk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
