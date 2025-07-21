import { Button } from "../components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b bg-white shadow-sm">
      <div className="flex items-center gap-2">
        {/* Logo Placeholder */}
        <span className="font-bold text-xl text-primary">MoneyMarket</span>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" asChild>
          <a href="/login">Login</a>
        </Button>
        <Button asChild>
          <a href="/register">Sign Up</a>
        </Button>
      </div>
    </nav>
  );
}
