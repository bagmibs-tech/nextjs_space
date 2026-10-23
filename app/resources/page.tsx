import { pageMetadata } from '@/lib/site';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { FileText, Target } from 'lucide-react';

export const metadata = pageMetadata('/resources', 'Resources | HumanAIze', 'Access our AI readiness assessment and other resources for DACH and UAE enterprises.');

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resources
          </h1>
          <p className="text-lg text-gray-600">
            Tools and insights to help you on your AI transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-xl hover:shadow-2xl transition-shadow">
            <CardHeader>
              <div className="bg-blue-100 p-4 rounded-lg inline-block mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <CardTitle className="text-2xl">AI Readiness Assessment</CardTitle>
              <CardDescription className="text-base">
                Evaluate your organization's AI maturity across strategy, infrastructure, talent, governance, and execution.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/assessment">Start Assessment</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-xl hover:shadow-2xl transition-shadow">
            <CardHeader>
              <div className="bg-orange-100 p-4 rounded-lg inline-block mb-4">
                <FileText className="text-orange-600" size={32} />
              </div>
              <CardTitle className="text-2xl">AI Insights Blog</CardTitle>
              <CardDescription className="text-base">
                Strategic perspectives on AI transformation for DACH and UAE enterprises.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full border-2">
                <Link href="/blog">Read Articles</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
