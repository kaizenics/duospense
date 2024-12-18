"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart2,
  PiggyBank,
  TrendingUp,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const cardHoverVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
};

const features = [
  {
    icon: BarChart2,
    title: "Expense Tracking",
    description:
      "Easily log and categorize your expenses to get a clear picture of your spending habits.",
  },
  {
    icon: TrendingUp,
    title: "Budget Management",
    description:
      "Set and manage budgets for different categories to keep your finances on track.",
  },
  {
    icon: PiggyBank,
    title: "Savings Goals",
    description:
      "Create and track savings goals to achieve your financial objectives.",
  },
  {
    icon: Users,
    title: "Shared Finances",
    description:
      "Collaborate with family or partners to manage shared expenses and budgets.",
  },
];

export default function LearnMorePage() {
  return (
    <>
      <Navbar />
      <Container variant="fullMobileConstrainedPadded">
        <motion.div 
          className="container mx-auto p-6 space-y-8 my-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="font-heading text-4xl font-bold text-primary"
            variants={itemVariants}
          >
            Learn More About Duospense
          </motion.h1>
          <motion.p 
            className="font-sans text-xl text-muted-foreground mb-8"
            variants={itemVariants}
          >
            Discover how Duospense can help you take control of your finances
            and achieve your financial goals.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.div variants={cardHoverVariants}>
                  <Card>
                    <CardHeader>
                      <feature.icon className="h-10 w-10 text-primary mb-2" />
                      <CardTitle className="font-heading">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="font-sans">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="font-heading">Getting Started with Duospense</CardTitle>
              </CardHeader>
              <CardContent className="font-sans space-y-4">
                <p>
                  Follow these simple steps to begin your journey to financial
                  wellness:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Sign up for a Duospense account</li>
                  <li>
                    Connect your bank accounts or manually enter your transactions
                  </li>
                  <li>Set up your budget categories and allocate funds</li>
                  <li>Start tracking your expenses and monitor your spending</li>
                  <li>Create savings goals and watch your progress</li>
                </ol>
                <Button className="mt-4">
                  Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="font-heading">Why Choose Duospense?</CardTitle>
              </CardHeader>
              <CardContent className="font-sans space-y-4">
                <p>
                  Duospense offers a comprehensive solution for personal finance
                  management:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Intuitive and user-friendly interface</li>
                  <li>Powerful analytics and insights</li>
                  <li>Secure and private - your data is always protected</li>
                  <li>Customizable categories and budgets</li>
                  <li>Regular updates and new features</li>
                  <li>Excellent customer support</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <h2 className="font-heading text-2xl font-bold mb-4">
              Ready to take control of your finances?
            </h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="font-sans">
                Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
      <Footer />
    </>
  );
}
