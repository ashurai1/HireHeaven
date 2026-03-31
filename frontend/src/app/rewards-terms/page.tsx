"use client";
import React from "react";
import { ArrowLeft, Gift } from "lucide-react";
import Link from "next/link";

export default function RewardsTerms() {
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
            <Gift className="text-blue-600" size={32} />
            <h1 className="text-4xl font-bold">Rewards Terms & Conditions</h1>
          </div>
          <p className="text-muted-foreground text-lg">Last updated: March 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-justify">
          
          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Rewards Program Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              The HireHeaven Rewards Program ("Program") allows users to earn rewards points, bonuses, and exclusive benefits through various activities on our platform. These terms govern participation in and use of the Program.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              To participate in the Rewards Program, you must:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Be at least 18 years old</li>
              <li>Have a valid HireHeaven account in good standing</li>
              <li>Comply with all program terms and platform policies</li>
              <li>Be a resident of India</li>
              <li>Not have violated HireHeaven terms previously</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. How to Earn Rewards</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">3.1 Reward Activities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You can earn rewards points by:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>Completing job applications (1-10 points per application)</li>
                  <li>Uploading and verifying resume (5-20 points)</li>
                  <li>Adding professional skills and certifications (2-5 points each)</li>
                  <li>Purchasing premium subscriptions (20-100 points)</li>
                  <li>Referring friends (30-50 points per successful referral)</li>
                  <li>Completing profile information (10-25 points)</li>
                  <li>Participating in surveys or feedback (5-15 points)</li>
                  <li>Attending webinars or career guidance sessions (10 points)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">3.2 Point Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Points values are determined solely by HireHeaven and may be adjusted without notice. Activities must be completed fully and legitimately to earn points.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Reward Redemption</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">4.1 Redemption Options</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Accumulated points can be redeemed for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                  <li>Premium subscription discounts</li>
                  <li>Resume analysis and AI tools credit</li>
                  <li>Course recommendations and certificates</li>
                  <li>Cash rewards (minimum redemption threshold applies)</li>
                  <li>Exclusive job listings access</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">4.2 Redemption Process</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Redemption requests are processed within 5-7 business days. You must maintain a minimum points balance to be eligible for redemption. Redemption is final and non-reversible.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">4.3 Redemption Value</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The monetary or service value of points is determined by HireHeaven and may vary. 100 points = minimum redemption unit.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Points Expiration</h2>
            <p className="text-muted-foreground leading-relaxed">
              Points are valid for 12 months from the date earned. Unused points automatically expire after this period. Expired points cannot be recovered or restored. HireHeaven reserves the right to change the expiration policy with 30 days notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">6. Program Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              HireHeaven reserves the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Modify reward point values and earning activities</li>
              <li>Change redemption options and values</li>
              <li>Suspend or terminate the program</li>
              <li>Change eligibility requirements</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Users will be notified of significant changes 30 days in advance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">7. Fraud & Abuse Prevention</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Engage in fraudulent activities to earn points</li>
              <li>Share rewards account with others</li>
              <li>Exploit technical glitches to accumulate points</li>
              <li>Use bots or automated systems</li>
              <li>Attempt to transfer points to other users</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Detected fraud will result in immediate account suspension and forfeiture of all earned points.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">8. Account Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              Upon account termination (voluntary or involuntary), all accumulated points are forfeited and cannot be transferred or redeemed. No compensation is provided for unredeemed points.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">9. No Monetary Value</h2>
            <p className="text-muted-foreground leading-relaxed">
              Reward points are virtual currency with no intrinsic monetary value. They cannot be exchanged for direct cash unless explicitly stated in the redemption policy. Points are non-transferable and are not legal tender.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">10. Referral Program</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">10.1 Referral Eligibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You must have a valid account and follow referral guidelines to earn referral rewards.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">10.2 Referral Rewards</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You earn 30-50 points when someone you refer successfully registers and completes their first activity. The referred person also receives bonus points.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">10.3 Invalid Referrals</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Referrals from identical IP addresses, shared devices, or involving fraudulent signups are invalid. HireHeaven reserves the right to void referral rewards if fraud is detected.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">11. Limitations of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              HireHeaven is not liable for loss of points due to technical errors, account security breaches, or system failures. We recommend keeping your account secure and reporting any suspicious activity immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">12. Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed">
              For reward-related disputes, contact support@hireheaven.com with documentation. HireHeaven's decision is final and binding. Disputes must be filed within 30 days of the disputed activity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground">13. Contact Us</h2>
            <div className="mt-4 p-4 bg-muted rounded-lg text-muted-foreground">
              <p><strong>Email:</strong> rewards@hireheaven.com</p>
              <p><strong>Support:</strong> support@hireheaven.com</p>
              <p><strong>Address:</strong> HireHeaven Headquarters, India</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
