import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-sm bg-background/20 border-b border-border/40">
    <Container variant={"fullMobileConstrainedPadded"}>
        <div className=" flex items-center justify-between py-4">
          <Link href="/" className="font-heading text-2xl font-bold text-primary">
            Duospense
          </Link>
          <div className="font-sans flex items-center space-x-4">
            <Link
              href="/login"
              className="text-foreground hover:text-primary"
            >
              Log In
            </Link> 
            <Button asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
    </Container>
    </nav>
  );
}
