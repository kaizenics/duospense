"use client"

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Container } from "@/components/ui/container";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Small Business Owner",
    content:
      "Duospense has revolutionized how I manage my business expenses. It's intuitive and saves me hours each month!",
    avatar: "AJ",
  },
  {
    name: "Mark Thompson",
    role: "Freelance Designer",
    content:
      "As a freelancer, keeping track of expenses is crucial. Duospense makes it effortless and even enjoyable!",
    avatar: "MT",
  },
  {
    name: "Sarah Lee",
    role: "Student",
    content:
      "Duospense helped me stick to my budget and save for my goals. It's a game-changer for students!",
    avatar: "SL",
  },
];

export function Testimonials() {
  return (
    <Container variant={"fullMobileConstrainedPadded"}>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-heading text-4xl font-bold text-center mb-12 text-primary"
          >
            What Our Users Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1 
                  }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between">
                    <CardContent className="pt-6">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        className="mb-4"
                      >
                        <svg
                          className="w-8 h-8 text-primary/40"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                      </motion.div>
                      <p className="font-sans text-lg mb-4">{testimonial.content}</p>
                    </CardContent>
                    <CardFooter className="flex items-center mt-4 space-x-4">
                      <Avatar>
                        <AvatarImage
                          src={`https://api.dicebear.com/6.x/initials/svg?seed=${testimonial.avatar}`}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-heading font-semibold">{testimonial.name}</p>
                        <p className="font-sans text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </Container>
  );
}
