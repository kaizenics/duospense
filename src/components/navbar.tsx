"use client"

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-sm bg-background/10 border-b border-border/40">
      <Container variant={"fullMobileConstrainedPadded"}>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="font-heading text-2xl font-bold text-primary">
            Duospense
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex font-sans items-center space-x-4">
            <Link
              href="/login"
              className="text-foreground hover:text-primary"
            >
              Log In
            </Link>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <>
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link
                      href="/login"
                      onClick={() => setIsOpen(false)}
                      className="text-foreground hover:text-primary"
                    >
                      Log In
                    </Link>
                    <Button asChild onClick={() => setIsOpen(false)}>
                      <Link href="/signup">Get Started</Link>
                    </Button>
                  </div>
                </>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </nav>
  );
}
