import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PieChart, Wallet, TrendingUp, Bell } from "lucide-react";

const features = [
  {
    icon: PieChart,
    title: "Smart Categorization",
    description:
      "Automatically categorize expenses for insightful spending analysis.",
  },
  {
    icon: Wallet,
    title: "Intelligent Budgeting",
    description: "Set and track budgets with AI-powered recommendations.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Insights",
    description:
      "Get personalized financial forecasts and saving opportunities.",
  },
  {
    icon: Bell,
    title: "Proactive Alerts",
    description:
      "Receive timely notifications for bills, overspending, and goals.",
  },
];

export function Features() {
  return (
    <section className="py-24 relative bg-background">
      <Container variant={"fullMobileConstrainedPadded"}>
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 via-background to-background" />
        <div className="relative z-10">
          <h2 className="font-heading text-4xl font-bold text-center mb-12 text-primary">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-sans text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
