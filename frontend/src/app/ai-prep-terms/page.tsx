"use client";
import React from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AIPrepTerms() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-blue-600" size={32} />
            <h1 className="text-4xl font-bold">AI Prep Terms & Conditions</h1>
          </div>
          <p className="text-muted-foreground text-lg">Last updated: March 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-justify">
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. AI Prep Services Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              HireHeaven's AI Prep services ("Services") provide AI-powered interview preparation, career guidance, resume analysis, and learning recommendations. These Terms govern your access to and use of these Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Service Description</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">2.1 Available Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our AI Prep services include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>AI-powered interview simulations and practice</li>
                  <li>Resume analysis with ATS compatibility scoring</li>
                  <li>Career path recommendations based on skills</li>
                  <li>Personalized learning roadmaps</li>
                  <li>Skill gap analysis and improvement suggestions</li>
                  <li>Cover letter generation and optimization</li>
                  <li>Job role insights and requirements analysis</li>
                  <li>Real-time feedback on interview performance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">2.2 "As-Is" Disclaimer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All AI services are provided on an "AS-IS" basis without warranties of accuracy, completeness, or fitness for specific purposes. AI recommendations are suggestions only and should not be considered professional advice.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              When using AI Prep services, you agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Provide accurate and truthful information</li>
              <li>Not use AI tools for illegal or unethical purposes</li>
              <li>Not attempt to reverse-engineer or misuse AI models</li>
              <li>Not copy or distribute AI-generated content without permission</li>
              <li>Use AI recommendations responsibly and critically</li>
              <li>Fact-check AI suggestions before implementation</li>
              <li>Not rely solely on AI for professional decisions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. AI Accuracy & Limitations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">4.1 Accuracy Disclaimer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive for accuracy, AI systems can make mistakes, bias, or provide incomplete information. We do not guarantee that AI recommendations will:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>Result in job offers or successful interviews</li>
                  <li>Pass ATS systems or employer filters</li>
                  <li>Be accurate for all industries or roles</li>
                  <li>Work for non-English content</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">4.2 Limitations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI Prep services have inherent limitations and cannot replace:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>Professional coaching or mentorship</li>
                  <li>Human interview experience</li>
                  <li>Industry-specific expertise advice</li>
                  <li>Legal or financial counseling</li>
                  <li>Certified career counseling</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">4.3 Bias & Fairness</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI systems may contain biases based on training data. While we work to minimize bias, AI recommendations may not be completely fair or objective. We encourage users to supplement AI insights with diverse professional perspectives.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Usage in AI Services</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">5.1 Data Collection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide AI services, we collect and process:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>Your resume and professional information</li>
                  <li>Skills and work experience data</li>
                  <li>Interview responses and practice content</li>
                  <li>Learning preferences and interests</li>
                  <li>Service usage patterns</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">5.2 AI Training</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your data may be used to improve AI models and services. Personal identifiers are removed, but anonymized data helps us enhance recommendation accuracy. You can opt-out of data collection for AI training by contacting us.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">5.3 Data Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We implement encryption and security measures to protect your data. However, no system is 100% secure. We are not liable for unauthorized access or data breaches beyond our reasonable control.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">6. Intellectual Property</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">6.1 AI-Generated Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Content generated by AI (cover letters, suggestions, recommendations) is owned by you for personal use. However, you cannot:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>Claim AI content as your own original work</li>
                  <li>Resell or redistribute without permission</li>
                  <li>Use AI content for commercial purposes without licensing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">6.2 Platform IP</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All AI algorithms, models, and platform features are HireHeaven's intellectual property. You may not reverse-engineer, copy, or misuse our technology.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">7. Subscription & Payments</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">7.1 AI Prep Plans</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI Prep services are available through subscription plans. Freemium access provides limited features; premium plans offer unlimited access.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">7.2 Billing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Billing is monthly or annual, depending on plan selection. Subscriptions auto-renew unless canceled. You can cancel anytime, effective at the end of your billing cycle.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">7.3 Refund Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI Prep subscriptions are non-refundable after purchase. However, a 7-day full refund is available if you cancel within 7 days of purchase.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">8. Service Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Limit usage to prevent abuse or overload</li>
              <li>Suspend access for violating these terms</li>
              <li>Modify, upgrade, or discontinue AI features</li>
              <li>Change service availability based on demand</li>
              <li>Implement usage quotas for free users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">9. No Professional Advice</h2>
            <p className="text-muted-foreground leading-relaxed">
              AI Prep services do not provide professional services or certified advice. HireHeaven is not a career counselor, recruiter, or advisor. For important career decisions, consult with qualified professionals. We are not liable for decisions made based on AI recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">10. Third-Party AI Models</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our AI services may use third-party models (Google Gemini, OpenAI, etc.). We are not responsible for third-party limitations, accuracy issues, or service disruptions. Use of third-party AI is subject to their respective terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">11. Prohibited Uses</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree not to use AI Prep for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Cheating on certification exams</li>
              <li>Creating fraudulent job applications</li>
              <li>Impersonating others in interviews</li>
              <li>Violating employment laws</li>
              <li>Creating misleading or false content</li>
              <li>Harassment or harmful purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">12. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              HireHeaven is not liable for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Job rejection or failure to pass interviews</li>
              <li>Inaccurate AI recommendations or suggestions</li>
              <li>Lost income or career opportunities</li>
              <li>Employer bias or discrimination</li>
              <li>Third-party AI model failures</li>
              <li>Service downtime or interruptions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">13. Feedback & Improvement</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you provide feedback or suggestions about AI Prep services, HireHeaven may use this feedback to improve services without compensation to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">14. Contact & Support</h2>
            <div className="mt-4 p-4 bg-muted rounded-lg text-muted-foreground">
              <p><strong>AI Prep Support:</strong> aiprep@hireheaven.com</p>
              <p><strong>General Support:</strong> support@hireheaven.com</p>
              <p><strong>Address:</strong> HireHeaven Headquarters, India</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
