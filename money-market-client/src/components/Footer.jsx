export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-6 mt-12 border-t text-center text-gray-600 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4">
        <span>&copy; {new Date().getFullYear()} MoneyMarket. All rights reserved.</span>
        <div className="flex gap-4 justify-center">
          <a href="/about" className="hover:underline">About</a>
          <a href="/offers" className="hover:underline">Offers</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
} 