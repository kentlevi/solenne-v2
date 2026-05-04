import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="min-h-16 py-8 md:py-0 border-t border-luxury-border flex flex-col md:flex-row items-center justify-between px-6 md:px-12 text-luxury-muted text-[10px] uppercase tracking-[0.2em] bg-luxury-bg shrink-0 gap-6"
    >
      <div>
        &copy; {new Date().getFullYear()} Solenne Bay Resort. All Rights
        Reserved.
      </div>
      <div className="flex gap-8">
        <Link to="#" className="hover:text-brand-dark transition-colors">
          Privacy Policy
        </Link>
        <Link to="#" className="hover:text-brand-dark transition-colors">
          Careers
        </Link>
        <Link to="/contact" className="hover:text-brand-dark transition-colors">
          Contact
        </Link>
      </div>
    </footer>
  );
}
