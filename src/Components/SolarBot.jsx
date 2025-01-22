import React from "react";
import "./Solarbot.css";

const Falcon9Page = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="falcon9-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>SOLARIS V3</h1>
          <p>
            Revolutionizing solar panel maintenance with advanced cleaning
            technology.
          </p>
        </div>
      </section>
      {/* Specifications Section */}
      <section className="specs-section">
        <h2>Specifications</h2>
        <div className="specs-grid">
          <div className="spec-box">
            <h3>3-Stage Cleaning</h3>
            <p>AI-Powered Soiling Detection</p>
          </div>
          <div className="spec-box">
            <h3>100% Self-Sustaining</h3>
            <p>Powered by Flexible Solar Panels</p>
          </div>
          <div className="spec-box">
            <h3>24/7 Monitoring</h3>
            <p>Remote Control and Real-Time Insights</p>
          </div>
          <div className="spec-box">
            <h3>10 Kg</h3>
            <p>Lightweight Design</p>
          </div>
        </div>
      </section>
      {/* Features Sections */}
      <section className="feature-section feature-dark">
        <div className="feature-content">
          <h2>Intelligent and Autonomous Operation</h2>
          <p>
            Equipped with advanced sensors and AI-powered soiling detection, the
            bot autonomously navigates diverse solar panel layouts, identifies
            dust levels, and adjusts its three-stage cleaning process to light,
            moderate, or heavy soiling.
          </p>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/040/995/143/small/ai-generated-fields-of-solar-panels-and-systems-to-produce-green-electricity-ai-generated-photo.jpg"
          alt="Automated Cleaning"
          className="feature-image"
        />
      </section>

      <section className="feature-section feature-light">
        <div className="feature-content">
          <h2>Advanced Cleaning and Safety Mechanisms</h2>
          <p>
            Utilizes a gentle yet effective microfiber helical brush to maintain
            panel integrity while incorporating obstacle detection, anti-fall
            protection, and weather adaptability for seamless and safe operation
            under varying conditions.
          </p>
        </div>
        <img
          src="https://media.assettype.com/outlookbusiness/2024-10-14/vgj060ya/house-with-large-solar-panel-roof1270664-27345.jpg?w=640"
          alt="Eco-Friendly Design"
          className="feature-image"
        />
      </section>

      <section className="feature-section feature-dark">
        <div className="feature-content">
          <h2>Eco-Friendly and Self-Sustaining Design</h2>
          <p>
            Powered by integrated flexible solar panels, the bot operates
            independently without external energy sources, ensuring a
            sustainable and environmentally conscious solution.
          </p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Foto_aére_de_solnovas_y_torre_junio_2010.jpg/340px-Foto_aére_de_solnovas_y_torre_junio_2010.jpg"
          alt="Durability"
          className="feature-image"
        />
      </section>
      <section className="feature-section feature-light">
        <div className="feature-content">
          <h2>Real-Time Monitoring and Data Insights</h2>
          <p>
            Offers remote monitoring, scheduling, and performance tracking,
            while collecting valuable data on panel conditions to support
            proactive maintenance and operational efficiency.
          </p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Foto_aére_de_solnovas_y_torre_junio_2010.jpg/340px-Foto_aére_de_solnovas_y_torre_junio_2010.jpg"
          alt="Durability"
          className="feature-image"
        />
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <h4 className="footer-text">© 2025 Renergy</h4>
        <button className="go-to-top-button" onClick={scrollToTop}>
          Go to Top
        </button>
      </footer>
    </div>
  );
};

export default Falcon9Page;
