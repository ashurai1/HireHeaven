"use client";
import React from "react";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
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
            <Shield className="text-blue-600" size={32} />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-muted-foreground text-lg">Last updated: March 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-justify">
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              HireHeaven ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.

              Please read this privacy policy carefully. If you do not agree with our policies and practices, please do not use our Services. By accessing and using HireHeaven, you acknowledge that you have read, understood, and agree to be bound by all the provisions of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">2.1 Personal Information You Provide</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you voluntarily provide when you register, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>Name, email address, phone number</li>
                  <li>Professional information (resume, skills, experience)</li>
                  <li>Profile pictures and educational background</li>
                  <li>Payment information for subscriptions</li>
                  <li>Communications and correspondence</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">2.2 Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you visit our platform, we automatically collect:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent, click patterns)</li>
                  <li>Cookies and tracking technologies</li>
                  <li>Location data (if permitted)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect for various purposes including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Providing and improving our services</li>
              <li>Processing your job applications</li>
              <li>Sending job recommendations and alerts</li>
              <li>Processing payments and subscriptions</li>
              <li>Communicating with you about updates and changes</li>
              <li>Analyzing usage patterns to enhance user experience</li>
              <li>Preventing fraud and ensuring security</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Sharing & Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal information to third parties. However, we may share your information with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li><strong>Recruiters & Employers:</strong> Your profile and resume (with your consent)</li>
              <li><strong>Service Providers:</strong> Companies assisting us (Cloudinary, payment processors)</li>
              <li><strong>Legal Requirements:</strong> When required by law or court orders</li>
              <li><strong>Business Partners:</strong> For integrated services (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but commit to protecting your data with reasonable safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">6. Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Right to access your personal data</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to delete your information</li>
              <li>Right to opt-out of marketing communications</li>
              <li>Right to data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">7. Cookies & Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies to enhance your experience. You can control cookie settings through your browser, but this may affect functionality. We do not use cookies for tracking behavior without consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">8. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our platform may contain links to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies before sharing information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              HireHeaven is not intended for children under 18. We do not knowingly collect information from minors. If we become aware of such collection, we will delete the information immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">10. Policy Updates</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy periodically. Changes will be effective immediately upon posting. Your continued use of the platform constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For privacy-related inquiries, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg text-muted-foreground">
              <p><strong>Email:</strong> privacy@hireheaven.com</p>
              <p><strong>Address:</strong> HireHeaven Headquarters, India</p>
              <p><strong>Phone:</strong> Support Team (Available on Contact Page)</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
