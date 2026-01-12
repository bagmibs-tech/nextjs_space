
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI ROI Playbook | HumanAIze',
  description: 'Download our comprehensive guide to achieving measurable ROI from AI initiatives in 90 days.',
};

export default function AIROIPlaybook() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/resources">
            <ArrowLeft className="mr-2" size={18} />
            Back to Resources
          </Link>
        </Button>

        <Card className="shadow-2xl">
          <CardHeader className="text-center pb-8">
            <div className="bg-blue-100 p-4 rounded-full inline-block mb-4 mx-auto">
              <FileText className="text-blue-600" size={48} />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI ROI Playbook
            </CardTitle>
            <p className="text-lg text-gray-600">
              Your comprehensive guide to achieving measurable ROI from AI initiatives in 90 days
            </p>
          </CardHeader>
          <CardContent className="space-y-6 p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Inside</h2>
              <ul className="space-y-3 text-gray-700">
                <li>AI opportunity mapping framework for DACH and UAE enterprises</li>
                <li>90-day sprint methodology for rapid AI deployment</li>
                <li>ROI measurement and tracking templates</li>
                <li>Case studies from manufacturing, logistics, and healthcare sectors</li>
                <li>Governance and compliance considerations for DACH and UAE</li>
                <li>Partner ecosystem evaluation criteria</li>
              </ul>

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Request Your Copy
                </h3>
                <p className="text-gray-700 mb-4">
                  Contact us to receive the AI ROI Playbook and discuss how we can help accelerate your AI journey.
                </p>
                <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
