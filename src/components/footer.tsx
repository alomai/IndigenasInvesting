export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-gray-900">Logo</div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-8 text-gray-800 font-medium mb-8">
          <a href="#about" className="hover:text-black transition">
            About Us
          </a>
          <a href="#invest" className="hover:text-black transition">
            Invest Now
          </a>
          <a href="#impact" className="hover:text-black transition">
            Our Impact
          </a>
          <a href="#start" className="hover:text-black transition">
            Get Started
          </a>
          <a href="#contact" className="hover:text-black transition">
            Contact Us
          </a>
        </nav>
      </div>

      {/* Inset black divider */}
      <div className="border-t border-black mx-12"></div>

      {/* Bottom legal links with padding */}
      <div className="max-w-[1200px] mx-auto px-6 pt-4 pb-6 flex flex-col md:flex-row justify-between items-center md:items-start text-sm text-gray-600">
        {/* Left-aligned copyright */}
        <p className="w-full md:w-auto text-left">
          © 2025 Indígenas. All rights reserved.
        </p>

        {/* Right-aligned links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#privacy" className="hover:text-black transition">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-black transition">
            Terms of Use
          </a>
          <a href="#cookies" className="hover:text-black transition">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
