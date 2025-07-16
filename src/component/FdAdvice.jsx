import React from 'react';
import './FdAdvice.css';

const FdAdvice = () => {
  return (
    <div 
    className="FDADVICE-container">
      {/* Header */}
      {/* <header className="FDADVICE-header">
        <div className="FDADVICE-header-content">
          <div className="FDADVICE-logo-section">
            <div className="FDADVICE-logo">
              <div className="FDADVICE-logo-icon">NB</div>
              <div className="FDADVICE-logo-text">
                <div className="FDADVICE-bank-name">Neo Bank</div>
                <div className="FDADVICE-tagline">of India</div>
              </div>
            </div>
          </div>
          <nav className="FDADVICE-nav">
            <a href="#" className="FDADVICE-nav-link">Home</a>
            <a href="#" className="FDADVICE-nav-link">Services</a>
            <a href="#" className="FDADVICE-nav-link">FAQ</a>
            <a href="#" className="FDADVICE-nav-link">Corporate Website</a>
            <a href="#" className="FDADVICE-nav-link">Mobile/OTP Re-charge</a>
            <a href="#" className="FDADVICE-nav-link">State Bank Collect</a>
            <a href="#" className="FDADVICE-nav-link FDADVICE-nav-highlight">Online FD Account Application</a>
          </nav>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="FDADVICE-main">
        <div className="FDADVICE-content-wrapper">

          {/* Left Section - Warning */}
          <div className="FDADVICE-left-section">
            <div className="FDADVICE-warning-card">
              <h3 className="FDADVICE-warning-title">
                <span className="FDADVICE-never">NEVER</span> respond to any popup, email, SMS or phone call,{' '}
                <span className="FDADVICE-highlight">no matter how appealing or official looking</span>, seeking your personal information such as username, password(s), mobile number, ATM Card details, etc.
              </h3>
              <p className="FDADVICE-warning-text">
                Such communications are sent or created by fraudsters to trick you into parting with your information.
              </p>
              <p className="FDADVICE-warning-text">
                Do not use Internet Banking if your computer is not free of malware (Viruses, Trojans, etc.)
              </p>
              <div className="FDADVICE-warning-icon">
                <div className="FDADVICE-exclamation"></div>
                <div className="FDADVICE-security-mascot">
                  <div className="FDADVICE-mascot-body"></div>
                  <div className="FDADVICE-mascot-eyes"></div>
                  <div className="FDADVICE-mascot-phone"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - FD Advice Hero */}
          <div className="FDADVICE-right-section">
            <div className="FDADVICE-hero-card">
              <div className="FDADVICE-hero-content">
                <div className="FDADVICE-hero-text">
                  <h1 className="FDADVICE-hero-title">Welcome to</h1>
                  <h2 className="FDADVICE-hero-subtitle">Neo Bank</h2>
                  <h3 className="FDADVICE-hero-service">FIXED DEPOSIT ADVISORY</h3>
                </div>
                <div className="FDADVICE-hero-icons">
                  <div className="FDADVICE-banking-icon">
                    <div className="FDADVICE-bank-building"></div>
                  </div>
                  <div className="FDADVICE-fd-icon">
                    <div className="FDADVICE-money-stack"></div>
                  </div>
                </div>
              </div>
              <div className="FDADVICE-hero-rating">
                <div className="FDADVICE-stars">5 Star Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Banking Services Section */}
        <div className="FDADVICE-services-section">
          <div className="FDADVICE-service-card">
            <h3 className="FDADVICE-service-title">
              PERSONAL <span className="FDADVICE-service-type">BANKING</span>
            </h3>
            <button className="FDADVICE-login-btn FDADVICE-login-btn-personal">Login →</button>
            <p className="FDADVICE-service-desc">
              Neo Bank of India provides various personal banking services that gives you complete freedom over all your banking demands anytime.
            </p>
            <div className="FDADVICE-features">
              <h4 className="FDADVICE-features-title">Features</h4>
              <ul className="FDADVICE-features-list">
                <li>Buy Affordable e-Life Insurance Cover from Rs 199</li>
                <li>Instant Money Transfer</li>
              </ul>
            </div>
          </div>

          <div className="FDADVICE-service-card">
            <h3 className="FDADVICE-service-title">
              CORPORATE <span className="FDADVICE-service-type">BANKING</span>
            </h3>
            <button className="FDADVICE-login-btn FDADVICE-login-btn-corporate">Login →</button>
            <p className="FDADVICE-service-desc">
              Corporate Banking application provides features to administer and manage ten personal accounts online.
            </p>
            <div className="FDADVICE-features">
              <h4 className="FDADVICE-features-title">Features</h4>
              <ul className="FDADVICE-features-list">
                <li>User management at your fingertips</li>
                <li>Online synchronisation with Corporate ERP System</li>
                <li>Instant alert facility for payments</li>
              </ul>
            </div>
          </div>

          <div className="FDADVICE-service-card">
            <h3 className="FDADVICE-service-title">
              OTHER <span className="FDADVICE-service-type">SERVICES</span>
            </h3>
            <div className="FDADVICE-features">
              <h4 className="FDADVICE-features-title">Complaints</h4>
              <ul className="FDADVICE-features-list">
                <li>Online Shopping</li>
                <li>Foreign Travel/Ez Pay/Gift Cards</li>
                <li>Mobile Banking Services</li>
                <li>Neo Quick</li>
                <li>OnlineSBI Global</li>
                <li>Neo Anywhere Personal</li>
                <li>e-Services</li>
                <li>Neo T.A.S.T.</li>
                <li>Neo Bank e-Transactions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FD Advisory CTA Section */}
        <div className="FDADVICE-cta-section">
          <div className="FDADVICE-cta-card">
            <h2 className="FDADVICE-cta-title">Get Expert FD Advice</h2>
            <p className="FDADVICE-cta-desc">
              Maximize your returns with our personalized Fixed Deposit advisory services. 
              Compare rates, tenure options, and get tailored recommendations.
            </p>
            <button className="FDADVICE-cta-btn">Start FD Advisory</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FdAdvice;