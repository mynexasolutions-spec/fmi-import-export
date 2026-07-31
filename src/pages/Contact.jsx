import CTA from '../components/CTA';

function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for inquiries and support.</p>
        </div>
      </section>

      {/* Main Contact Section - Using the CTA component which already has the form and details */}
      <CTA />
    </>
  );
}

export default Contact;
