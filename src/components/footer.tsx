import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Duospense</h3>
            <p className="font-sans text-sm text-muted-foreground">Your personal finance companion for smart expense tracking and budgeting.</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="font-sans space-y-2">
              <li><Link href="/about" className="text-sm hover:text-primary">About Us</Link></li>
              <li><Link href="/features" className="text-sm hover:text-primary">Features</Link></li>
              <li><Link href="/pricing" className="text-sm hover:text-primary">Pricing</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading ont-semibold mb-4">Legal</h4>
            <ul className="font-sans space-y-2">
              <li><Link href="/terms" className="text-sm hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="text-sm hover:text-primary">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="font-heading mt-8 pt-8 border-t border-muted-foreground/20 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Duospense. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

