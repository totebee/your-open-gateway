import Navbar from "@/components/Navbar";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Privacy Notice</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-soft p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>We collect information you provide directly to us, such as:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account information (name, email address, phone number)</li>
                  <li>Payment information (credit card details, billing address)</li>
                  <li>Booking details and preferences</li>
                  <li>Communications with our support team</li>
                  <li>Profile information and preferences</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Communicate about products, services, and events</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Detect, investigate, and prevent fraudulent activities</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your 
                consent, except as described in this policy. We may share your information with workspace providers 
                to facilitate bookings and with service providers who assist us in operating our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized 
                access, alteration, disclosure, or destruction. This includes SSL encryption for data transmission 
                and secure storage of sensitive information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your information for as long as your account is active or as needed to provide services. 
                We will also retain and use your information as necessary to comply with legal obligations, resolve 
                disputes, and enforce our agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our service and store certain 
                information. You can control the use of cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Notice from time to time. We will notify you of any changes by posting 
                the new Privacy Notice on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Notice, please contact us at privacy@opendesk.com.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;