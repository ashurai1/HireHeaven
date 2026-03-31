"use client";
import React from "react";
import { ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";

export default function TermsConditions() {
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
            <FileText className="text-blue-600" size={32} />
            <h1 className="text-4xl font-bold">Terms & Conditions</h1>
          </div>
          <p className="text-muted-foreground text-lg">Last updated: March 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-justify">
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using HireHeaven ("Platform"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the platform. We reserve the right to modify these terms at any time. Your continued use following modifications constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. User Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              To use HireHeaven, you must be at least 18 years old and capable of entering into binding legal agreements. By registering, you represent and warrant that all information you provide is accurate, current, and complete.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. User Accounts</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">3.1 Account Registration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">3.2 Account Suspension</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to suspend or terminate your account if you violate these terms or engage in fraudulent, abusive, or unlawful conduct.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Upload false, misleading, or fraudulent information</li>
              <li>Engage in harassment, discrimination, or abusive behavior</li>
              <li>Attempt to unauthorized access or breach security features</li>
              <li>Use bots, scrapers, or automated tools without permission</li>
              <li>Post spam, malware, or harmful content</li>
              <li>Violate intellectual property or privacy rights of others</li>
              <li>Use the platform for illegal activities</li>
              <li>Impersonate other individuals or entities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Job Applications & Services</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">5.1 Job Listings</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Job listings are provided by employers. HireHeaven does not guarantee employment or verify employer legitimacy. We recommend users exercise due diligence when applying for jobs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">5.2 Application Accuracy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You are responsible for the accuracy of information in your profile and job applications. Providing false information may result in account termination.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">5.3 AI-Powered Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI-powered features (career guidance, resume analysis) are provided on an "as-is" basis. While we strive for accuracy, these tools are not substitutes for professional advice. We are not liable for decisions based on AI recommendations.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">6. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on HireHeaven, including logos, text, graphics, and software, is owned by or licensed to us. You may not reproduce, distribute, or transmit any content without our express written permission. User-generated content (resumes, profiles) remains your property, but you grant us a license to use it for platform operations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum permitted by law, HireHeaven shall not be liable for indirect, incidental, special, or consequential damages arising from your use of the platform, including lost profits, data loss, or business interruption. Our total liability shall not exceed the amount you paid for services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">8. Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              HireHeaven is provided "as-is" without warranties of any kind. We do not warrant that the platform will be uninterrupted, secure, or error-free. We disclaim all implied warranties including merchantability and fitness for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">9. Payments & Subscriptions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">9.1 Subscription Charges</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Premium subscriptions are charged monthly or annually as selected. All charges are non-refundable unless otherwise required by law.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">9.2 Cancellation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You can cancel your subscription anytime. Cancellation will take effect at the end of your current billing cycle.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">9.3 Payment Methods</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We accept credit cards and other payment methods. By providing payment information, you authorize us to charge your account. You are responsible for keeping payment information current.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">10. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify and hold harmless HireHeaven, its officers, directors, and employees from any claims, damages, or expenses arising from your use of the platform or violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">11. Dispute Resolution</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">11.1 Governing Law</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These terms are governed by and construed in accordance with the laws of India, without regard to its conflicts of law provisions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">11.2 Jurisdiction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to submit to the exclusive jurisdiction of courts located in India for resolution of any disputes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">12. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms and Conditions, please contact:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg text-muted-foreground">
              <p><strong>Email:</strong> support@hireheaven.com</p>
              <p><strong>Address:</strong> HireHeaven Headquarters, India</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
