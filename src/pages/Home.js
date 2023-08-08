import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to EDP Startup</h1>
        <p>Discover amazing features and benefits of our product.</p>
        <button className="btn">Get Started</button>
      </header>

      <div className="about-section">
        <h2 className="about-title">About </h2>
      </div>

      <div className="about-section">
        <div className="about-card">
          <p>
            Sebuah startup membuat suatu website seperti ERP untuk memudahkan
            seorang pengusaha dalam mencatat setiap barang yang keluar masuk dan
            mencatat setiap keuntungan yang mereka dapatkan setiap harinya.
          </p>
        </div>
      </div>

      <div className="pricing-section">
        <h2 className="pricing-title">Pricing</h2>
      </div>

      <div className="card-section">
        <div className="card">
          <h2>TIER 1/Basic</h2>
          <p>a. Mencatat barang masuk</p>
          <p>b. Mencatat barang keluar</p>
          <p>c. Mencatat hasil keuntungan</p>
          <h2>$ 10 / Month </h2>
        </div>
        <div className="card">
          <h2>TIER 2/Business</h2>
          <p>a. Mencatat barang masuk dan keluar</p>
          <p>b. Mencatat Keuntungan</p>
          <p>c. Dapat menganalisa hasil penjualan dengan CHART</p>
          <p>d. Support 7x24 Jam</p>
          <h2>$ 15 / Month </h2>
        </div>
        <div className="card">
          <h2>TIER 3/Entrepreneur</h2>
          <p>a. Mencatat barang masuk dan keluar</p>
          <p>b. Mencatat Keuntungan</p>
          <p>c. Dapat menganalisa hasil penjualan dengan CHART</p>
          <p>d. Support 7x24 Jam</p>
          <p>e. Export data ke Excel</p>
          <p>f. AI Prediksi penghasilan</p>
          <h2>$ 38 / Month </h2>
        </div>
      </div>

      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <p>Have any questions or inquiries? Feel free to reach out to us.</p>
        <a className="contact-link" href="mailto:contact@example.com">
          contact@example.com
        </a>
      </div>

      <footer className="footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
