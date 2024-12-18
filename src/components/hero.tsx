import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExpenseChart } from "@/components/ui/expense-chart";
import { Container } from "@/components/ui/container";
import { FlipWords } from "@/components/ui/flip-words";

export function Hero() {
  const words = ["Budgets", "Savings", "Goals"];

  return (
    <div className="relative bg-background pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-background" />
      <Container variant={"fullMobileConstrainedPadded"}>
        <div className="relative overflow-hidden">
          <div className="mx-auto py-16 sm:py-32">
            <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h1 className="font-heading text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                  Track Your<FlipWords words={words}/>with Ease
                </h1>
                <p className="font-sans mt-6 max-w-3xl text-xl text-muted-foreground">
                  Duospense helps you manage your finances effortlessly. Stay on
                  top of your spending and achieve your financial goals.
                </p>
                <div className="mt-10 flex items-center gap-x-3">
                  <Button asChild>
                    <Link href="/dashboard">Get Started</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/learn-more">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="mt-10 backdrop-blur-sm lg:mt-0 bg-card rounded-xl shadow-lg p-6 border">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                <h2 className="font-heading text-2xl font-bold mb-4 text-card-foreground">
                  Expense Overview
                </h2>
                <ExpenseChart />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
