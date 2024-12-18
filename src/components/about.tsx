"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, PieChart, Wallet, TrendingUp } from "lucide-react";

const features = [
  {
    icon: PieChart,
    title: "Expense Insights",
    description:
      "Gain deep insights into your spending patterns with interactive charts and graphs.",
  },
  {
    icon: Wallet,
    title: "Smart Budgeting",
    description:
      "Set intelligent budgets that adapt to your spending habits and financial goals.",
  },
  {
    icon: TrendingUp,
    title: "Financial Forecasting",
    description:
      "Predict future expenses and savings with our advanced AI-powered forecasting.",
  },
];

import dashboard from "@/assets/dashboard.png";
import expenses from "@/assets/expenses.png";
import insights from "@/assets/insights.png";

export function About() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className="py-24 relative bg-background">
      <Container variant="fullMobileConstrainedPadded">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 via-background to-background" />
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.h2
                className="font-heading text-4xl font-bold tracking-tight text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Revolutionize Your Finances with Duospense
              </motion.h2>
              <motion.p
                className="font-sans text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Your intelligent financial companion, designed to simplify
                expense tracking and empower your financial decisions.
              </motion.p>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="relative overflow-hidden transition-all duration-300 ease-in-out"
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          hoveredFeature === index
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-heading text-lg font-semibold">
                          {feature.title}
                        </h3>
                        <p className="font-sans text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                    <motion.div
                      className="absolute inset-0 bg-primary/10"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: hoveredFeature === index ? 1 : 0,
                        opacity: hoveredFeature === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </Card>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button size="lg" className="group">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Tabs defaultValue="dashboard" className="w-full h-full">
                <TabsList className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur-sm">
                  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                  <TabsTrigger value="expenses">Expenses</TabsTrigger>
                  <TabsTrigger value="insights">Insights</TabsTrigger>
                </TabsList>
                <TabsContent value="dashboard" className="w-full h-full">
                  <Image
                    src={dashboard}
                    alt="Duospense Dashboard"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </TabsContent>
                <TabsContent value="expenses" className="w-full h-full">
                  <Image
                    src={expenses}
                    alt="Duospense Expenses"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </TabsContent>
                <TabsContent value="insights" className="w-full h-full">
                  <Image
                    src={insights}
                    alt="Duospense Insights"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </TabsContent>
              </Tabs>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
