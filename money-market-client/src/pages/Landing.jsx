import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Invest Smarter, Grow Faster</h1>
          <p className="mb-6 text-lg text-muted-foreground max-w-xl">Virtual investment in treasury bonds, international stocks, and cryptocurrencies. Track your portfolio, get real-time data, and learn as you grow.</p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <a href="/register">Get Started</a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href="/login">Login</a>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          {/* Hero Image Placeholder */}
          <div className="w-72 h-72 bg-primary/10 rounded-xl flex items-center justify-center">
            <span className="text-7xl">💸</span>
          </div>
        </div>
      </section>
      {/* Overview Section */}
      <section className="px-8 py-16 bg-white border-b">
        <h2 className="text-3xl font-bold mb-8 text-primary">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">📝</span>
            <h3 className="font-semibold text-lg mb-2">Sign Up</h3>
            <p>Create your free account in seconds and start exploring investment opportunities.</p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">📈</span>
            <h3 className="font-semibold text-lg mb-2">Invest Virtually</h3>
            <p>Simulate investments in bonds, stocks, and crypto with real-time data—no real money needed.</p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">📊</span>
            <h3 className="font-semibold text-lg mb-2">Track & Learn</h3>
            <p>Monitor your portfolio, analyze performance, and learn with our educational resources.</p>
          </Card>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="px-8 py-16 bg-background border-b">
        <h2 className="text-3xl font-bold mb-8 text-primary">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">🌟</span>
            <p className="mb-2">“This platform made investing easy and fun. I learned so much!”</p>
            <span className="font-semibold">— Alex</span>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">🚀</span>
            <p className="mb-2">“Real-time data and a beautiful dashboard. Highly recommended!”</p>
            <span className="font-semibold">— Jamie</span>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">💡</span>
            <p className="mb-2">“I love tracking my virtual portfolio and testing strategies risk-free.”</p>
            <span className="font-semibold">— Casey</span>
          </Card>
        </div>
      </section>
      {/* Offers Section */}
      <section className="px-8 py-16 bg-white border-b">
        <h2 className="text-3xl font-bold mb-8 text-primary">Special Offers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">🎁</span>
            <h3 className="font-semibold text-lg mb-2">Free Virtual Funds</h3>
            <p>Get started with free virtual funds to practice investing and build your skills.</p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">📚</span>
            <h3 className="font-semibold text-lg mb-2">Learning Resources</h3>
            <p>Access articles, guides, and tips to become a smarter investor.</p>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
} 