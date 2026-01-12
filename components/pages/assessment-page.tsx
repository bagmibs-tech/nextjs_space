
'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  ArrowLeft, 
  Target,
  Zap,
  Users,
  Shield,
  Database,
  TrendingUp
} from 'lucide-react';
import { toast } from 'sonner';

const questionCategories = [
  {
    id: 'strategy',
    icon: Target,
    title: { en: 'AI Strategy', de: 'KI-Strategie', ar: 'استراتيجية الذكاء الاصطناعي' },
    questions: [
      {
        id: 'q1',
        text: {
          en: 'Does your organization have a clearly defined AI strategy aligned with business objectives?',
          de: 'Hat Ihre Organisation eine klar definierte KI-Strategie, die an den Geschäftszielen ausgerichtet ist?',
          ar: 'هل لدى مؤسستك استراتيجية واضحة للذكاء الاصطناعي تتماشى مع أهداف العمل؟',
        },
        options: [
          { value: 5, label: { en: 'Comprehensive strategy in place', de: 'Umfassende Strategie vorhanden', ar: 'استراتيجية شاملة موجودة' } },
          { value: 3, label: { en: 'Strategy in development', de: 'Strategie in Entwicklung', ar: 'استراتيجية قيد التطوير' } },
          { value: 1, label: { en: 'No formal strategy', de: 'Keine formale Strategie', ar: 'لا توجد استراتيجية رسمية' } },
        ],
      },
      {
        id: 'q2',
        text: {
          en: 'Are AI use cases prioritized based on business value and feasibility?',
          de: 'Werden KI-Anwendungsfälle nach Geschäftswert und Machbarkeit priorisiert?',
          ar: 'هل يتم تحديد أولويات حالات استخدام الذكاء الاصطناعي بناءً على القيمة التجارية والجدوى؟',
        },
        options: [
          { value: 5, label: { en: 'Systematic prioritization process', de: 'Systematischer Priorisierungsprozess', ar: 'عملية تحديد أولويات منهجية' } },
          { value: 3, label: { en: 'Ad-hoc prioritization', de: 'Ad-hoc-Priorisierung', ar: 'تحديد الأولويات المخصص' } },
          { value: 1, label: { en: 'No prioritization framework', de: 'Kein Priorisierungs-Framework', ar: 'لا يوجد إطار لتحديد الأولويات' } },
        ],
      },
    ],
  },
  {
    id: 'infrastructure',
    icon: Database,
    title: { en: 'Infrastructure & Data', de: 'Infrastruktur & Daten', ar: 'البنية التحتية والبيانات' },
    questions: [
      {
        id: 'q3',
        text: {
          en: 'Is your data infrastructure ready to support AI initiatives (quality, accessibility, governance)?',
          de: 'Ist Ihre Dateninfrastruktur bereit, KI-Initiativen zu unterstützen (Qualität, Zugänglichkeit, Governance)?',
          ar: 'هل بنيتك التحتية للبيانات جاهزة لدعم مبادرات الذكاء الاصطناعي (الجودة، إمكانية الوصول، الحوكمة)؟',
        },
        options: [
          { value: 5, label: { en: 'Enterprise-grade data platform', de: 'Datenplattform auf Unternehmensebene', ar: 'منصة بيانات على مستوى المؤسسة' } },
          { value: 3, label: { en: 'Basic infrastructure in place', de: 'Grundinfrastruktur vorhanden', ar: 'البنية التحتية الأساسية موجودة' } },
          { value: 1, label: { en: 'Significant gaps exist', de: 'Erhebliche Lücken vorhanden', ar: 'توجد فجوات كبيرة' } },
        ],
      },
      {
        id: 'q4',
        text: {
          en: 'Do you have cloud infrastructure or computing resources for AI workloads?',
          de: 'Verfügen Sie über Cloud-Infrastruktur oder Rechenressourcen für KI-Workloads?',
          ar: 'هل لديك بنية تحتية سحابية أو موارد حوسبة لأحمال عمل الذكاء الاصطناعي؟',
        },
        options: [
          { value: 5, label: { en: 'Scalable cloud/on-prem resources', de: 'Skalierbare Cloud-/On-Prem-Ressourcen', ar: 'موارد سحابية/محلية قابلة للتطوير' } },
          { value: 3, label: { en: 'Limited resources available', de: 'Begrenzte Ressourcen verfügbar', ar: 'موارد محدودة متاحة' } },
          { value: 1, label: { en: 'No dedicated AI infrastructure', de: 'Keine dedizierte KI-Infrastruktur', ar: 'لا توجد بنية تحتية مخصصة للذكاء الاصطناعي' } },
        ],
      },
    ],
  },
  {
    id: 'talent',
    icon: Users,
    title: { en: 'Talent & Skills', de: 'Talent & Fähigkeiten', ar: 'المواهب والمهارات' },
    questions: [
      {
        id: 'q5',
        text: {
          en: 'Does your organization have AI/ML expertise (data scientists, ML engineers)?',
          de: 'Verfügt Ihre Organisation über KI-/ML-Expertise (Data Scientists, ML-Ingenieure)?',
          ar: 'هل لدى مؤسستك خبرة في الذكاء الاصطناعي/التعلم الآلي (علماء البيانات، مهندسو التعلم الآلي)؟',
        },
        options: [
          { value: 5, label: { en: 'Dedicated AI team', de: 'Dediziertes KI-Team', ar: 'فريق مخصص للذكاء الاصطناعي' } },
          { value: 3, label: { en: 'Some AI capabilities', de: 'Einige KI-Fähigkeiten', ar: 'بعض قدرات الذكاء الاصطناعي' } },
          { value: 1, label: { en: 'No AI expertise', de: 'Keine KI-Expertise', ar: 'لا توجد خبرة في الذكاء الاصطناعي' } },
        ],
      },
      {
        id: 'q6',
        text: {
          en: 'Are employees trained on AI concepts and tools relevant to their roles?',
          de: 'Werden Mitarbeiter in KI-Konzepten und Tools geschult, die für ihre Rollen relevant sind?',
          ar: 'هل يتم تدريب الموظفين على مفاهيم وأدوات الذكاء الاصطناعي ذات الصلة بأدوارهم؟',
        },
        options: [
          { value: 5, label: { en: 'Comprehensive training program', de: 'Umfassendes Schulungsprogramm', ar: 'برنامج تدريب شامل' } },
          { value: 3, label: { en: 'Basic awareness training', de: 'Grundlegende Awareness-Schulung', ar: 'تدريب أساسي على الوعي' } },
          { value: 1, label: { en: 'No AI training', de: 'Keine KI-Schulung', ar: 'لا يوجد تدريب على الذكاء الاصطناعي' } },
        ],
      },
    ],
  },
  {
    id: 'governance',
    icon: Shield,
    title: { en: 'Governance & Ethics', de: 'Governance & Ethik', ar: 'الحوكمة والأخلاق' },
    questions: [
      {
        id: 'q7',
        text: {
          en: 'Are AI governance policies and ethical guidelines established?',
          de: 'Sind KI-Governance-Richtlinien und ethische Leitlinien etabliert?',
          ar: 'هل تم وضع سياسات حوكمة الذكاء الاصطناعي والمبادئ التوجيهية الأخلاقية؟',
        },
        options: [
          { value: 5, label: { en: 'Comprehensive governance framework', de: 'Umfassendes Governance-Framework', ar: 'إطار حوكمة شامل' } },
          { value: 3, label: { en: 'Basic policies in place', de: 'Grundlegende Richtlinien vorhanden', ar: 'سياسات أساسية موجودة' } },
          { value: 1, label: { en: 'No formal governance', de: 'Keine formale Governance', ar: 'لا توجد حوكمة رسمية' } },
        ],
      },
      {
        id: 'q8',
        text: {
          en: 'Do you have processes to ensure AI transparency, fairness, and accountability?',
          de: 'Haben Sie Prozesse, um KI-Transparenz, Fairness und Rechenschaftspflicht sicherzustellen?',
          ar: 'هل لديك عمليات لضمان شفافية ونزاهة ومساءلة الذكاء الاصطناعي؟',
        },
        options: [
          { value: 5, label: { en: 'Robust oversight mechanisms', de: 'Robuste Überwachungsmechanismen', ar: 'آليات رقابة قوية' } },
          { value: 3, label: { en: 'Basic oversight in place', de: 'Grundlegende Überwachung vorhanden', ar: 'رقابة أساسية موجودة' } },
          { value: 1, label: { en: 'No formal processes', de: 'Keine formalen Prozesse', ar: 'لا توجد عمليات رسمية' } },
        ],
      },
    ],
  },
  {
    id: 'execution',
    icon: Zap,
    title: { en: 'Execution & Innovation', de: 'Umsetzung & Innovation', ar: 'التنفيذ والابتكار' },
    questions: [
      {
        id: 'q9',
        text: {
          en: 'How many AI projects or pilots has your organization successfully deployed?',
          de: 'Wie viele KI-Projekte oder Piloten hat Ihre Organisation erfolgreich eingesetzt?',
          ar: 'كم عدد مشاريع أو تجارب الذكاء الاصطناعي التي نجحت مؤسستك في نشرها؟',
        },
        options: [
          { value: 5, label: { en: '5+ projects in production', de: '5+ Projekte in Produktion', ar: '5+ مشاريع قيد الإنتاج' } },
          { value: 3, label: { en: '1-4 projects/pilots', de: '1-4 Projekte/Piloten', ar: '1-4 مشاريع/تجارب' } },
          { value: 1, label: { en: 'No projects yet', de: 'Noch keine Projekte', ar: 'لا توجد مشاريع بعد' } },
        ],
      },
      {
        id: 'q10',
        text: {
          en: 'Is there a culture of experimentation and innovation around AI in your organization?',
          de: 'Gibt es in Ihrer Organisation eine Kultur der Experimentierung und Innovation rund um KI?',
          ar: 'هل توجد ثقافة التجريب والابتكار حول الذكاء الاصطناعي في مؤسستك؟',
        },
        options: [
          { value: 5, label: { en: 'Strong innovation culture', de: 'Starke Innovationskultur', ar: 'ثقافة ابتكار قوية' } },
          { value: 3, label: { en: 'Some innovation initiatives', de: 'Einige Innovationsinitiativen', ar: 'بعض مبادرات الابتكار' } },
          { value: 1, label: { en: 'Risk-averse culture', de: 'Risikoaverse Kultur', ar: 'ثقافة تجنب المخاطر' } },
        ],
      },
    ],
  },
];

export default function AssessmentPage() {
  const { language } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const [step, setStep] = useState<'info' | 'questions' | 'results'>('info');
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [userInfo, setUserInfo] = useState({ email: '', companyName: '', industryType: '', companySize: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const texts = {
    en: {
      title: 'AI Readiness Assessment',
      subtitle: 'Evaluate your organization\'s AI maturity across key dimensions',
      startButton: 'Start Assessment',
      nextButton: 'Next',
      backButton: 'Back',
      submitButton: 'Get Results',
      emailLabel: 'Email',
      companyLabel: 'Company Name',
      industryLabel: 'Industry',
      sizeLabel: 'Company Size',
      resultsTitle: 'Your AI Readiness Score',
      overallScore: 'Overall Score',
      categoryScores: 'Category Breakdown',
      recommendations: 'Recommendations',
      lowScore: 'Your organization is in the early stages of AI adoption. Focus on building foundational capabilities in strategy, infrastructure, and talent.',
      mediumScore: 'Your organization has made progress in AI adoption but has room for improvement. Prioritize filling gaps in governance and execution.',
      highScore: 'Your organization demonstrates strong AI readiness. Continue to innovate and scale AI initiatives while maintaining robust governance.',
    },
    de: {
      title: 'KI-Reife-Assessment',
      subtitle: 'Bewerten Sie die KI-Reife Ihrer Organisation über wichtige Dimensionen hinweg',
      startButton: 'Assessment starten',
      nextButton: 'Weiter',
      backButton: 'Zurück',
      submitButton: 'Ergebnisse abrufen',
      emailLabel: 'E-Mail',
      companyLabel: 'Firmenname',
      industryLabel: 'Branche',
      sizeLabel: 'Firmengröße',
      resultsTitle: 'Ihre KI-Reife-Punktzahl',
      overallScore: 'Gesamtpunktzahl',
      categoryScores: 'Kategorie-Aufschlüsselung',
      recommendations: 'Empfehlungen',
      lowScore: 'Ihre Organisation befindet sich in den frühen Phasen der KI-Einführung. Konzentrieren Sie sich auf den Aufbau grundlegender Fähigkeiten in Strategie, Infrastruktur und Talent.',
      mediumScore: 'Ihre Organisation hat Fortschritte bei der KI-Einführung gemacht, hat aber Verbesserungspotenzial. Priorisieren Sie das Schließen von Lücken in Governance und Umsetzung.',
      highScore: 'Ihre Organisation zeigt starke KI-Bereitschaft. Innovieren und skalieren Sie weiterhin KI-Initiativen bei gleichzeitiger Aufrechterhaltung robuster Governance.',
    },
    ar: {
      title: 'تقييم جاهزية الذكاء الاصطناعي',
      subtitle: 'قيم نضج مؤسستك في الذكاء الاصطناعي عبر الأبعاد الرئيسية',
      startButton: 'ابدأ التقييم',
      nextButton: 'التالي',
      backButton: 'رجوع',
      submitButton: 'احصل على النتائج',
      emailLabel: 'البريد الإلكتروني',
      companyLabel: 'اسم الشركة',
      industryLabel: 'الصناعة',
      sizeLabel: 'حجم الشركة',
      resultsTitle: 'درجة جاهزية الذكاء الاصطناعي الخاصة بك',
      overallScore: 'النتيجة الإجمالية',
      categoryScores: 'تفصيل الفئة',
      recommendations: 'التوصيات',
      lowScore: 'مؤسستك في المراحل المبكرة من اعتماد الذكاء الاصطناعي. ركز على بناء القدرات الأساسية في الاستراتيجية والبنية التحتية والمواهب.',
      mediumScore: 'حققت مؤسستك تقدمًا في اعتماد الذكاء الاصطناعي ولكن لديها مجال للتحسين. أعط الأولوية لسد الفجوات في الحوكمة والتنفيذ.',
      highScore: 'تظهر مؤسستك جاهزية قوية للذكاء الاصطناعي. استمر في الابتكار وتوسيع نطاق مبادرات الذكاء الاصطناعي مع الحفاظ على حوكمة قوية.',
    },
  };

  const t = texts[language as keyof typeof texts] || texts.en;

  const totalQuestions = questionCategories.reduce((sum, cat) => sum + cat?.questions?.length, 0);
  const currentQuestionIndex = 
    questionCategories.slice(0, currentCategory).reduce((sum, cat) => sum + cat?.questions?.length, 0) + currentQuestion;
  const progress = (Object.keys(answers).length / totalQuestions) * 100;

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    const category = questionCategories?.[currentCategory];
    if (currentQuestion < (category?.questions?.length || 0) - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentCategory < questionCategories.length - 1) {
      setCurrentCategory(currentCategory + 1);
      setCurrentQuestion(0);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentCategory > 0) {
      setCurrentCategory(currentCategory - 1);
      const prevCategory = questionCategories?.[currentCategory - 1];
      setCurrentQuestion((prevCategory?.questions?.length || 1) - 1);
    }
  };

  const handleSubmit = async () => {
    if (!userInfo?.email) {
      toast.error('Please provide your email');
      return;
    }

    setIsSubmitting(true);

    try {
      // Calculate scores
      const categoryScores: Record<string, number> = {};
      questionCategories.forEach((category) => {
        const categoryAnswers = category?.questions
          ?.map?.((q) => answers?.[q?.id] || 0)
          ?.filter?.((score) => score > 0);
        const avgScore = categoryAnswers?.length 
          ? categoryAnswers.reduce((sum, score) => sum + score, 0) / categoryAnswers.length
          : 0;
        categoryScores[category?.id] = avgScore;
      });

      const overallScore = Object.values(categoryScores).reduce((sum, score) => sum + score, 0) / Object.keys(categoryScores).length;

      const recommendations = overallScore < 2.5 ? t.lowScore : overallScore < 4 ? t.mediumScore : t.highScore;

      // Save to database
      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...userInfo,
          responses: answers,
          scores: categoryScores,
          overallScore,
          recommendations,
        }),
      });

      if (response?.ok) {
        setStep('results');
      } else {
        toast.error('Failed to save assessment');
      }
    } catch (error) {
      console.error('Assessment error:', error);
      toast.error('An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCategoryScore = (categoryId: string) => {
    const category = questionCategories?.find?.((c) => c?.id === categoryId);
    const categoryAnswers = category?.questions
      ?.map?.((q) => answers?.[q?.id] || 0)
      ?.filter?.((score) => score > 0);
    return categoryAnswers?.length
      ? categoryAnswers.reduce((sum, score) => sum + score, 0) / categoryAnswers.length
      : 0;
  };

  const overallScore = questionCategories
    .map((cat) => getCategoryScore(cat?.id))
    .filter((score) => score > 0)
    .reduce((sum, score, _, arr) => sum + score / arr.length, 0);

  // Info Step
  if (step === 'info') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <Card className="shadow-2xl">
              <CardHeader className="text-center pb-8">
                <div className="bg-blue-100 p-4 rounded-full inline-block mb-4 mx-auto">
                  <TrendingUp className="text-blue-600" size={48} />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t.title}
                </CardTitle>
                <p className="text-lg text-gray-600">
                  {t.subtitle}
                </p>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="email"
                    placeholder={t.emailLabel}
                    value={userInfo?.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e?.target?.value || '' })}
                    className="h-12"
                    required
                  />
                  <Input
                    type="text"
                    placeholder={t.companyLabel}
                    value={userInfo?.companyName}
                    onChange={(e) => setUserInfo({ ...userInfo, companyName: e?.target?.value || '' })}
                    className="h-12"
                  />
                  <Input
                    type="text"
                    placeholder={t.industryLabel}
                    value={userInfo?.industryType}
                    onChange={(e) => setUserInfo({ ...userInfo, industryType: e?.target?.value || '' })}
                    className="h-12"
                  />
                  <Input
                    type="text"
                    placeholder={t.sizeLabel}
                    value={userInfo?.companySize}
                    onChange={(e) => setUserInfo({ ...userInfo, companySize: e?.target?.value || '' })}
                    className="h-12"
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-8">
                  {questionCategories?.map?.((category) => {
                    const Icon = category?.icon;
                    return (
                      <div key={category?.id} className="text-center">
                        <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-4 rounded-xl mb-2 mx-auto inline-block">
                          <Icon className="text-blue-600" size={24} />
                        </div>
                        <p className="text-xs text-gray-700 font-medium">
                          {category?.title?.[language] || category?.title?.en}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <Button
                  onClick={() => setStep('questions')}
                  disabled={!userInfo?.email}
                  className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-lg"
                >
                  {t.startButton}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  // Questions Step
  if (step === 'questions') {
    const category = questionCategories?.[currentCategory];
    const question = category?.questions?.[currentQuestion];
    const CategoryIcon = category?.icon;
    const currentAnswer = answers?.[question?.id || ''];

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    {language === 'de' ? 'Fortschritt' : language === 'ar' ? 'التقدم' : 'Progress'}
                  </span>
                  <span className="text-sm font-medium text-blue-600">
                    {currentQuestionIndex + 1} / {totalQuestions}
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Category & Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentCategory}-${currentQuestion}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <CategoryIcon className="text-blue-600" size={28} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                        {category?.title?.[language] || category?.title?.en}
                      </p>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {question?.text?.[language] || question?.text?.en}
                      </h2>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="space-y-3">
                    {question?.options?.map?.((option) => (
                      <button
                        key={option?.value}
                        onClick={() => handleAnswer(question?.id || '', option?.value)}
                        className={`w-full p-6 rounded-xl border-2 text-left transition-all ${
                          currentAnswer === option?.value
                            ? 'border-blue-600 bg-blue-50 shadow-md'
                            : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          {currentAnswer === option?.value ? (
                            <CheckCircle2 className="text-blue-600 flex-shrink-0" size={24} />
                          ) : (
                            <Circle className="text-gray-400 flex-shrink-0" size={24} />
                          )}
                          <span className="text-gray-900 font-medium">
                            {option?.label?.[language] || option?.label?.en}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-4 pt-6">
                    {(currentCategory > 0 || currentQuestion > 0) && (
                      <Button
                        onClick={handleBack}
                        variant="outline"
                        className="flex-1 h-12"
                      >
                        <ArrowLeft className="mr-2" size={18} />
                        {t.backButton}
                      </Button>
                    )}
                    <Button
                      onClick={handleNext}
                      disabled={!currentAnswer || isSubmitting}
                      className="flex-1 h-12 bg-blue-600 hover:bg-blue-700"
                    >
                      {currentCategory === questionCategories.length - 1 &&
                      currentQuestion === (category?.questions?.length || 0) - 1
                        ? t.submitButton
                        : t.nextButton}
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Results Step
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Overall Score */}
          <Card className="shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                {t.resultsTitle}
              </CardTitle>
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-2">
                    {overallScore.toFixed(1)}
                  </div>
                  <p className="text-gray-600">{t.overallScore} / 5.0</p>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Category Scores */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {t.categoryScores}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {questionCategories?.map?.((category) => {
                const score = getCategoryScore(category?.id);
                const Icon = category?.icon;
                return (
                  <div key={category?.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="text-blue-600" size={20} />
                        <span className="font-medium text-gray-900">
                          {category?.title?.[language] || category?.title?.en}
                        </span>
                      </div>
                      <span className="text-lg font-bold text-blue-600">
                        {score.toFixed(1)} / 5.0
                      </span>
                    </div>
                    <Progress value={(score / 5) * 100} className="h-2" />
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {t.recommendations}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {overallScore < 2.5 ? t.lowScore : overallScore < 4 ? t.mediumScore : t.highScore}
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">
                {language === 'de' ? 'Kontakt aufnehmen' : language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
