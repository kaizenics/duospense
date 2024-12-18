import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I add a new transaction?",
    answer: "To add a new transaction, click on the 'Add Transaction' button on the dashboard. Fill in the transaction details in the modal that appears and click 'Add'."
  },
  {
    question: "How can I edit my budget?",
    answer: "Navigate to the Budget page from the sidebar. Here you can view your current budget and make changes by clicking on the 'Edit Budget' button for each category."
  },
  {
    question: "How do I set up savings goals?",
    answer: "Go to the Savings page from the sidebar. You can set up a new savings goal by clicking on 'Add Savings Goal' and entering the details of your goal."
  },
  {
    question: "Can I export my financial data?",
    answer: "Yes, you can export your data from the Settings page. Look for the 'Export Data' button under the Data Management section."
  }
]

export default function HelpPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="font-heading text-3xl font-bold text-primary mb-6">Help Center</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Frequently Asked Questions</CardTitle>
          <CardDescription className="font-sans">Find answers to common questions about using Duospense</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="font-sans w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Contact Support</CardTitle>
          <CardDescription className="font-sans">Need more help? Get in touch with our support team</CardDescription>
        </CardHeader>
        <CardContent className="font-sans">
          <p className="mb-4">Our support team is available Monday to Friday, 9am to 5pm EST.</p>
          <p className="mb-2"><strong>Email:</strong> support@duospense.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Video Tutorials</CardTitle>
          <CardDescription>Learn how to use Duospense with our video guides</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Getting Started with Duospense</li>
            <li>Managing Your Transactions</li>
            <li>Setting and Tracking Budgets</li>
            <li>Creating Savings Goals</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

