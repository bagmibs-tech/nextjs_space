
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies - AI & Digital Transformation | HumanAIze',
  description: 'Explore success stories of AI and digital transformation projects across DACH and UAE enterprises.',
};

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Case Studies
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proven ROI across DACH & UAE use cases in manufacturing, logistics, healthcare, and more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-xl hover:shadow-2xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Manufacturing (DACH)</CardTitle>
              <CardDescription>AI-Driven Quality Assurance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-2xl font-bold text-blue-600">+15pp</div>
                  <div className="text-sm text-gray-600">defect detection (80% → 95%)</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-2xl font-bold text-blue-600">30%</div>
                  <div className="text-sm text-gray-600">throughput gain</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">ERP traceability for audits</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl hover:shadow-2xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Logistics (DACH & UAE)</CardTitle>
              <CardDescription>AI-Powered AGV</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-4">
                  <div className="text-2xl font-bold text-orange-600">20–40%</div>
                  <div className="text-sm text-gray-600">manpower capacity freed</div>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <div className="text-2xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600">automated material flow</div>
                </div>
                <div className="border-l-4 border-orange-600 pl-4">
                  <div className="text-2xl font-bold text-orange-600">Real-time</div>
                  <div className="text-sm text-gray-600">order scheduling</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl hover:shadow-2xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Insurance & Healthcare</CardTitle>
              <CardDescription>Medical Forms AI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-2xl font-bold text-blue-600">92%</div>
                  <div className="text-sm text-gray-600">extraction accuracy</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-2xl font-bold text-blue-600">&lt;1 day</div>
                  <div className="text-sm text-gray-600">turnaround (from 5–7 days)</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-2xl font-bold text-blue-600">50%</div>
                  <div className="text-sm text-gray-600">cost reduction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">
              Discuss Your Use Case
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
