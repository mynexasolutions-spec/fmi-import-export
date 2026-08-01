import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Your trusted partner in international trade.</p>
        </div>
      </section>

      {/* Company Info */}
      <section className="about-info section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">WHO WE ARE</span>
            <h2>FMI International General Trading FZE</h2>
            <p>We import and export a wide range of quality products across the globe with reliability, transparency, and on-time delivery.</p>
          </div>

          <div className="about-grid">
            
            {/* License Details Card */}
            <div className="about-card">
              <h3>Official Company Details</h3>
              
              <ul className="about-list">
                <li className="about-list-item">
                  <strong>Company Name</strong>
                  <span>FMI INTERNATIONAL GENERAL TRADING FZE</span>
                </li>
                <li className="about-list-item">
                  <strong>Legal Status</strong>
                  <span>FZE (Limited Liability)</span>
                </li>
                <li className="about-list-item">
                  <strong>License Number</strong>
                  <span>125694083</span>
                </li>
                <li className="about-list-item">
                  <strong>Company Manager</strong>
                  <span>FAJLU REHMAN MOHAMMAD SALEEM</span>
                </li>
                <li className="about-list-item">
                  <strong>Activities</strong>
                  <span>General Trading</span>
                </li>
                <li className="about-list-item">
                  <strong>Business Unit</strong>
                  <span>Jebel Ali Free Zone</span>
                </li>
              </ul>
            </div>

            {/* Address & Licensing Card */}
            <div className="about-card">
              <h3>Registration & Location</h3>
              
              <ul className="about-list">
                <li className="about-list-item">
                  <strong>Registered Address</strong>
                  <span style={{ lineHeight: '1.6' }}>
                    Unit No. 1105-11, BCW, Eleventh Floor, Jafza One,<br />
                    Jebel Ali Free Zone,<br />
                    Dubai, United Arab Emirates
                  </span>
                </li>
              </ul>

              <div className="about-note">
                <p>
                  Registered and licensed by the Government of Dubai under the Jebel Ali Free Zone Authority.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default About;
