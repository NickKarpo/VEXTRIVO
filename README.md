<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>VEXTRIVO | Custom Websites & Marketing</title>
<meta name="description" content="Premium custom websites and digital marketing. Request a free custom website demo from VEXTRIVO.">

<style>
:root {
  --bg: #070e1d;
  --navy: #0c1730;
  --panel: #101d35;
  --field: #1b2c49;
  --border: #344b70;
  --blue: #2475ff;
  --lightblue: #6caaff;
  --white: #f8faff;
  --muted: #aebdd4;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--white);
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

button, input, select, textarea {
  font: inherit;
}

.container {
  width: min(1160px, 92%);
  margin: auto;
}

/* HEADER */

header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #080f20f5;
  border-bottom: 1px solid #ffffff20;
  backdrop-filter: blur(15px);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 17px 0;
}

.logo {
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 2px;
}

.logo span {
  color: var(--blue);
}

nav {
  display: flex;
  align-items: center;
  gap: 25px;
}

nav a {
  font-size: 14px;
  font-weight: bold;
}

nav a:hover {
  color: var(--lightblue);
}

.btn {
  display: inline-block;
  padding: 14px 23px;
  border-radius: 9px;
  background: var(--blue);
  color: white;
  font-weight: bold;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: .2s;
}

.btn:hover {
  background: #4b90ff;
  transform: translateY(-2px);
}

.btn.secondary {
  background: #213452;
  border: 1px solid #45618a;
}

/* HOME */

.hero {
  padding: 120px 20px 110px;
  text-align: center;
  background:
    radial-gradient(
      ellipse at 50% 0%,
      #1c4c9370,
      transparent 65%
    ),
    var(--bg);
}

.eyebrow {
  color: var(--lightblue);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 3px;
  text-transform: uppercase;
}

h1 {
  font-size: clamp(40px, 6vw, 75px);
  line-height: 1.1;
  max-width: 950px;
  margin: 22px auto;
}

h1 span,
.gradient {
  background: linear-gradient(
    90deg,
    #ffffff,
    #438cff
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

h2 {
  font-size: clamp(28px, 4vw, 44px);
  line-height: 1.2;
}

h3 {
  font-size: 22px;
}

p {
  color: var(--muted);
}

.hero p {
  max-width: 720px;
  margin: 20px auto 32px;
  font-size: 18px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.section {
  padding: 85px 0;
}

.center {
  text-align: center;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 35px;
}

.card {
  background: linear-gradient(
    145deg,
    #172945,
    #0e182b
  );
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 29px;
}

.card.featured {
  border-color: var(--blue);
  box-shadow: 0 0 35px #2475ff18;
}

.number {
  color: var(--lightblue);
  font-weight: bold;
  letter-spacing: 2px;
}

.price {
  font-size: 40px;
  font-weight: 900;
  margin: 16px 0;
}

.price small {
  font-size: 14px;
  color: var(--muted);
  font-weight: normal;
}

.card ul {
  color: #d4e0f1;
  line-height: 2;
  padding-left: 20px;
}

.card .btn {
  margin-top: 14px;
}

.banner {
  background: linear-gradient(
    120deg,
    #152e57,
    #0e1a30
  );
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 50px 25px;
  text-align: center;
}

.notice {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  color: #d5e2f4;
  margin-top: 25px;
}

/* FREE DEMO FORM */

.demo-section {
  position: relative;
  isolation: isolate;
  padding: 90px 18px 110px;
  background: #081225;
  overflow: hidden;
  scroll-margin-top: 75px;
}

.demo-section::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: -20%;
  background:
    radial-gradient(
      ellipse at 0% 45%,
      #12468b85,
      transparent 43%
    ),
    radial-gradient(
      ellipse at 100% 75%,
      #13478c70,
      transparent 43%
    );
  animation: flow 20s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes flow {
  from {
    transform: translate(-3%, 0);
  }
  to {
    transform: translate(3%, 3%);
  }
}

.demo-container {
  width: min(860px, 100%);
  margin: 0 auto;
}

.demo-heading {
  text-align: center;
  margin-bottom: 38px;
}

.demo-heading h2 {
  font-size: clamp(35px, 5vw, 52px);
  margin: 14px 0;
}

.demo-heading h2 span {
  color: var(--lightblue);
}

.demo-heading p {
  max-width: 680px;
  margin: auto;
  font-size: 17px;
}

.demo-form {
  background: linear-gradient(
    145deg,
    #101e37,
    #0a1529
  );
  border: 1px solid #4c6691;
  border-radius: 20px;
  padding: 36px;
  box-shadow: 0 30px 80px #0007;
}

.form-section {
  padding-bottom: 28px;
  margin-bottom: 28px;
  border-bottom: 1px solid #405575;
}

.form-section:last-of-type {
  border-bottom: none;
  margin-bottom: 0;
}

.form-title {
  font-size: 20px;
  font-weight: 800;
  margin: 0 0 22px;
}

.form-title span {
  color: var(--lightblue);
  margin-right: 9px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.field {
  margin-bottom: 19px;
}

.form-grid .field {
  margin-bottom: 0;
}

.field label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
}

.field input,
.field select,
.field textarea {
  width: 100%;
  background: var(--field);
  border: 1px solid #536b91;
  border-radius: 9px;
  color: white;
  padding: 13px 15px;
  outline: none;
}

.field textarea {
  min-height: 120px;
  resize: vertical;
}

.field input::placeholder,
.field textarea::placeholder {
  color: #aabbd2;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: var(--lightblue);
  box-shadow: 0 0 0 3px #2475ff30;
}

.field select option {
  background: var(--field);
}

.field.wide {
  margin-top: 19px;
}

.color-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 11px;
  margin: 18px 0 22px;
}

.color-option {
  display: flex;
  align-items: center;
  gap: 9px;
  background: #1b2c49;
  border: 1px solid #405b82;
  border-radius: 10px;
  padding: 12px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
}

.color-option:has(input:checked) {
  border-color: #78aeff;
  background: #25446d;
}

.color-option input {
  accent-color: var(--blue);
}

.swatch {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  border: 1px solid #ffffff80;
  flex-shrink: 0;
}

.black-gold {
  background: linear-gradient(
    135deg,
    #000 50%,
    #d8a72b 50%
  );
}

.black-blue {
  background: linear-gradient(
    135deg,
    #000 50%,
    #2475ff 50%
  );
}

.black-red {
  background: linear-gradient(
    135deg,
    #000 50%,
    #e83d4d 50%
  );
}

.white-blue {
  background: linear-gradient(
    135deg,
    #fff 50%,
    #2475ff 50%
  );
}

.white-green {
  background: linear-gradient(
    135deg,
    #fff 50%,
    #12ba66 50%
  );
}

.other {
  background: linear-gradient(
    135deg,
    #aaa,
    #4c5264
  );
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 11px;
}

.feature {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: var(--field);
  border: 1px solid var(--border);
  border-radius: 9px;
  font-size: 13px;
}

.feature input {
  accent-color: var(--blue);
}

.submit-btn {
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 17px;
  background: linear-gradient(
    90deg,
    #2879ff,
    #155bf0
  );
  color: white;
  font-weight: 900;
  font-size: 17px;
  cursor: pointer;
}

.submit-btn:hover {
  filter: brightness(1.12);
}

.submit-btn:disabled {
  opacity: .6;
  cursor: wait;
}

.status {
  min-height: 25px;
  text-align: center;
  color: #a7efd0;
}

.status.error {
  color: #ffbaba;
}

.privacy {
  font-size: 12px;
  text-align: center;
  margin-top: 17px;
}

footer {
  text-align: center;
  padding: 28px 15px;
  border-top: 1px solid var(--border);
  color: var(--muted);
  font-size: 13px;
}

#websites,
#marketing {
  scroll-margin-top: 85px;
}

@media(max-width: 900px) {
  .cards {
    grid-template-columns: 1fr;
  }

  .navbar {
    flex-wrap: wrap;
    justify-content: center;
  }

  nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media(max-width: 650px) {
  .hero {
    padding: 75px 15px;
  }

  .demo-section {
    padding: 55px 13px 75px;
  }

  .demo-form {
    padding: 23px 18px;
  }

  .form-grid,
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .color-options {
    grid-template-columns: repeat(2, 1fr);
  }

  nav {
    gap: 14px;
  }
}

@media(prefers-reduced-motion: reduce) {
  .demo-section::before {
    animation: none;
  }
}
</style>
</head>

<body>

<!-- NAVIGATION -->

<header>
  <div class="container navbar">

    <a href="#home" class="logo">
      VEX<span>TRIVO</span>
    </a>

    <nav>
      <a href="#home">Home</a>
      <a href="#websites">Websites</a>
      <a href="#marketing">Marketing</a>
      <a href="#demo">Request Demo</a>
    </nav>

    <a href="#demo" class="btn">
      Book Free Demo
    </a>

  </div>
</header>

<main>

<!-- HOMEPAGE -->

<section id="home" class="hero">
  <div class="container">

    <div class="eyebrow">
      Premium Websites & Digital Marketing
    </div>

    <h1>
      Your Business Deserves
      <span>Something Exceptional.</span>
    </h1>

    <p>
      We design professional, custom websites
      built around your business.
      Tell us what you're envisioning and
      we'll personally create a free website demo.
    </p>

    <div class="actions">
      <a href="#demo" class="btn">
        Book My Free Demo
      </a>

      <a href="#websites" class="btn secondary">
        Explore Our Websites
      </a>
    </div>

  </div>
</section>

<!-- HOW IT WORKS -->

<section class="section">
  <div class="container">

    <div class="center">
      <div class="eyebrow">Our Process</div>
      <h2>From Your Vision to Reality</h2>
      <p>
        Getting your custom website started is simple.
      </p>
    </div>

    <div class="cards">

      <article class="card">
        <div class="number">01</div>
        <h3>Tell Us About Your Business</h3>
        <p>
          Fill out our website request form
          and describe exactly what you want.
        </p>
      </article>

      <article class="card">
        <div class="number">02</div>
        <h3>We Build Your Demo</h3>
        <p>
          Our team personally creates a
          website demo based on your vision.
        </p>
      </article>

      <article class="card">
        <div class="number">03</div>
        <h3>Review & Launch</h3>
        <p>
          Review your demo, request changes,
          and decide whether to move forward.
        </p>
      </article>

    </div>

  </div>
</section>

<!-- WEBSITE PRICING -->

<section id="websites" class="section">
  <div class="container">

    <div class="center">
      <div class="eyebrow">Website Services</div>
      <h2>Websites Built to Impress</h2>
      <p>
        Custom design solutions for businesses
        of every size.
      </p>
    </div>

    <div class="cards">

      <article class="card featured">

        <div class="eyebrow">Start Here</div>

        <h3>Free Website Demo</h3>

        <div class="price">$0</div>

        <p>
          Request a custom website concept
          personally built for your business.
        </p>

        <ul>
          <li>Personal design consultation</li>
          <li>Business questionnaire</li>
          <li>Custom demo request</li>
          <li>No obligation to purchase</li>
        </ul>

        <a href="#demo" class="btn"
           data-service="Free Website Demo">
          Request Free Demo
        </a>

      </article>

      <article class="card">

        <h3>Simple Website</h3>

        <div class="price">
          $1,000 <small>starting at</small>
        </div>

        <p>
          Professional websites designed
          for growing businesses.
        </p>

        <ul>
          <li>Custom website design</li>
          <li>Mobile responsive layout</li>
          <li>Services and contact sections</li>
          <li>Business branding</li>
        </ul>

        <a href="#demo" class="btn secondary"
           data-service="Simple Website">
          Get My Website
        </a>

      </article>

      <article class="card">

        <h3>Advanced Website</h3>

        <div class="price">
          $2,000 <small>starting at</small>
        </div>

        <p>
          Premium website design with
          advanced interactive features.
        </p>

        <ul>
          <li>Premium custom layouts</li>
          <li>Interactive features</li>
          <li>Multiple pages</li>
          <li>Integrations as scoped</li>
        </ul>

        <a href="#demo" class="btn secondary"
           data-service="Advanced Website">
          Request a Quote
        </a>

      </article>

    </div>

    <p class="center">
      Final pricing depends on your project's scope.
    </p>

  </div>
</section>

<!-- MARKETING -->

<section id="marketing" class="section">
  <div class="container">

    <div class="center">
      <div class="eyebrow">Digital Marketing</div>
      <h2>Grow Your Business With VEXTRIVO</h2>
      <p>
        Marketing services designed to help
        your business reach more customers.
      </p>
    </div>

    <div class="cards">

      <article class="card">

        <h3>Organic Marketing</h3>

        <div class="price">
          $500 <small>/month</small>
        </div>

        <p>
          Organic content and social media
          marketing support.
        </p>

        <a href="#demo" class="btn"
           data-service="Organic Marketing">
          Get Started
        </a>

      </article>

      <article class="card featured">

        <h3>Meta Ads</h3>

        <div class="price">
          $1,700 <small>/month</small>
        </div>

        <p>
          Facebook and Instagram
          advertising management.
        </p>

        <a href="#demo" class="btn"
           data-service="Meta Ads">
          Get Started
        </a>

      </article>

      <article class="card">

        <h3>Google Ads</h3>

        <div class="price">
          $1,700 <small>/month</small>
        </div>

        <p>
          Google advertising campaign management.
        </p>

        <a href="#demo" class="btn"
           data-service="Google Ads">
          Get Started
        </a>

      </article>

    </div>

    <div class="notice">
      <strong>Ad spend is separate.</strong>
      Meta Ads and Google Ads management
      are $1,700 per month each, plus the
      advertising budget you choose.
      Results are not guaranteed.
    </div>

  </div>
</section>

<!-- CALL TO ACTION -->

<section class="section">
  <div class="container">

    <div class="banner">

      <div class="eyebrow">
        Let's Work Together
      </div>

      <h2>
        Ready to Build Something Exceptional?
      </h2>

      <p>
        Tell us what you want and we'll
        personally prepare a website demo.
      </p>

      <a href="#demo" class="btn">
        Book Free Demo
      </a>

    </div>

  </div>
</section>

<!-- NEW CENTERED DEMO FORM -->

<section id="demo" class="demo-section">

  <div class="demo-container">

    <div class="demo-heading">

      <div class="eyebrow">VEXTRIVO</div>

      <h2>
        Request Your <span>Website Demo</span>
      </h2>

      <p>
        Tell us about your business and your vision.
        We'll personally create a custom website
        demo for you.
      </p>

    </div>

    <form
      id="demoForm"
      class="demo-form"
      action="https://formsubmit.co/nkarpo49@gmail.com"
      method="POST">

      <input
        type="hidden"
        name="_subject"
        value="New VEXTRIVO Website Demo Request">

      <input
        type="hidden"
        name="_template"
        value="table">

      <input
        type="text"
        name="_honey"
        tabindex="-1"
        autocomplete="off"
        aria-hidden="true"
        style="position:absolute;left:-9999px">

      <!-- BUSINESS INFORMATION -->

      <div class="form-section">

        <h3 class="form-title">
          <span>▣</span> About Your Business
        </h3>

        <div class="form-grid">

          <div class="field">

            <label for="businessName">
              Business Name *
            </label>

            <input
              id="businessName"
              name="Business Name"
              placeholder="Enter your business name"
              maxlength="120"
              required>

          </div>

          <div class="field">

            <label for="businessType">
              Business Type *
            </label>

            <select
              id="businessType"
              name="Business Type"
              required>

              <option value="">
                Select your business type
              </option>

              <option>Automotive / Detailing</option>
              <option>Construction / Contracting</option>
              <option>Landscaping</option>
              <option>Restaurant / Food</option>
              <option>Clothing / E-commerce</option>
              <option>Real Estate</option>
              <option>Beauty / Barber / Tattoo</option>
              <option>Fitness / Wellness</option>
              <option>Professional Services</option>
              <option>Other</option>

            </select>

          </div>

        </div>

        <div class="field wide">

          <label for="businessDescription">
            What Does Your Business Do?
          </label>

          <textarea
            id="businessDescription"
            name="Business Description"
            maxlength="2500"
            placeholder="Tell us about your services, products, and customers."></textarea>

        </div>

      </div>

      <!-- WEBSITE VISION -->

      <div class="form-section">

        <h3 class="form-title">
          <span>◉</span> Your Website Vision
        </h3>

        <div class="field">

          <label for="vision">
            What Are You Envisioning for Your Website? *
          </label>

          <textarea
            id="vision"
            name="Website Vision"
            required
            maxlength="5000"
            placeholder="Describe the look, style, pages, features, photos, and anything you want included."></textarea>

        </div>

        <div class="form-grid">

          <div class="field">

            <label for="colorTheme">
              Preferred Color Theme *
            </label>

            <select
              id="colorTheme"
              name="Preferred Color Theme"
              required>

              <option value="">
                Choose a color theme
              </option>

              <option>Black & Gold</option>
              <option>Black & Blue</option>
              <option>Black & Red</option>
              <option>White & Blue</option>
              <option>White & Green</option>
              <option>Other / Custom Colors</option>

            </select>

          </div>

          <div class="field">

            <label for="websiteStyle">
              Website Style
            </label>

            <select
              id="websiteStyle"
              name="Website Style">

              <option value="">
                Select a style
              </option>

              <option>Luxury / Premium</option>
              <option>Modern / Minimal</option>
              <option>Bold / Creative</option>
              <option>Clean / Professional</option>
              <option>Dark / Futuristic</option>
              <option>Help Me Choose</option>

            </select>

          </div>

        </div>

        <!-- COLOR SELECTION -->

        <div class="color-options">

          <label class="color-option">
            <input
              type="radio"
              name="Color Preview"
              value="Black & Gold">
            <span class="swatch black-gold"></span>
            Black & Gold
          </label>

          <label class="color-option">
            <input
              type="radio"
              name="Color Preview"
              value="Black & Blue">
            <span class="swatch black-blue"></span>
            Black & Blue
          </label>

          <label class="color-option">
            <input
              type="radio"
              name="Color Preview"
              value="Black & Red">
            <span class="swatch black-red"></span>
            Black & Red
          </label>

          <label class="color-option">
            <input
              type="radio"
              name="Color Preview"
              value="White & Blue">
            <span class="swatch white-blue"></span>
            White & Blue
          </label>

          <label class="color-option">
            <input
              type="radio"
              name="Color Preview"
              value="White & Green">
            <span class="swatch white-green"></span>
            White & Green
          </label>

          <label class="color-option">
            <input
              type="radio"
              name="Color Preview"
              value="Other / Custom Colors">
            <span class="swatch other"></span>
            Other
          </label>

        </div>

        <div class="field">

          <label for="inspiration">
            Example Websites You Like
          </label>

          <textarea
            id="inspiration"
            name="Website Inspiration"
            placeholder="Paste links to websites you like or describe a design you love."></textarea>

        </div>

        <div class="field">

          <label>Features You Want Included</label>

          <div class="feature-grid">

            <label class="feature">
              <input type="checkbox"
                name="Features"
                value="Booking Calendar">
              Booking Calendar
            </label>

            <label class="feature">
              <input type="checkbox"
                name="Features"
                value="Photo Gallery">
              Photo Gallery
            </label>

            <label class="feature">
              <input type="checkbox"
                name="Features"
                value="Online Payments">
              Online Payments
            </label>

            <label class="feature">
              <input type="checkbox"
                name="Features"
                value="Customer Reviews">
              Customer Reviews
            </label>

            <label class="feature">
              <input type="checkbox"
                name="Features"
                value="Quote Form">
              Quote Request Form
            </label>

            <label class="feature">
              <input type="checkbox"
                name="Features"
                value="Online Store">
              Online Store
            </label>

          </div>

        </div>

        <div class="field wide">

          <label for="serviceInterest">
            Service You're Interested In
          </label>

          <select
            id="serviceInterest"
            name="Service Interest">

            <option>Free Website Demo</option>
            <option>Simple Website</option>
            <option>Advanced Website</option>
            <option>Organic Marketing</option>
            <option>Meta Ads</option>
            <option>Google Ads</option>

          </select>

        </div>

      </div>

      <!-- CONTACT INFORMATION -->

      <div class="form-section">

        <h3 class="form-title">
          <span>♙</span> Your Contact Information
        </h3>

        <div class="form-grid">

          <div class="field">

            <label for="fullName">
              Full Name *
            </label>

            <input
              id="fullName"
              name="Full Name"
              autocomplete="name"
              required
              maxlength="120"
              placeholder="Enter your full name">

          </div>

          <div class="field">

            <label for="email">
              Email Address *
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              placeholder="example@email.com">

          </div>

          <div class="field">

            <label for="phone">
              Phone Number *
            </label>

            <input
              id="phone"
              name="Phone Number"
              type="tel"
              autocomplete="tel"
              required
              maxlength="30"
              placeholder="(123) 456-7890">

          </div>

          <div class="field">

            <label for="contactPreference">
              Preferred Contact Method
            </label>

            <select
              id="contactPreference"
              name="Contact Preference">

              <option>Email</option>
              <option>Phone Call</option>
              <option>Text Message</option>

            </select>

          </div>

        </div>

      </div>

      <!-- SUBMIT -->

      <button
        type="submit"
        id="submitBtn"
        class="submit-btn">
        Request My Website Demo
      </button>

      <p
        id="formStatus"
        class="status"
        role="status"
        aria-live="polite"></p>

      <p class="privacy">
        Your information will be used to respond
        to your request and discuss your custom
        website demo. This is not an appointment booking.
      </p>

    </form>

  </div>

</section>

</main>

<footer>
  © <span id="year"></span>
  VEXTRIVO · Custom Websites & Digital Marketing
</footer>

<script>
'use strict';

// UPDATE COPYRIGHT YEAR

document.getElementById('year').textContent =
  new Date().getFullYear();

// BUTTON SERVICE SELECTION

document.querySelectorAll('[data-service]').forEach(
  button => {
    button.addEventListener('click', () => {
      const service = button.dataset.service;

      const selector =
        document.getElementById('serviceInterest');

      if (selector) {
        selector.value = service;
      }
    });
  }
);

// COLOR SELECTOR

const colorTheme =
  document.getElementById('colorTheme');

document.querySelectorAll(
  'input[name="Color Preview"]'
).forEach(radio => {

  radio.addEventListener('change', () => {
    colorTheme.value = radio.value;
  });

});

colorTheme.addEventListener('change', () => {

  const selected = colorTheme.value;

  document.querySelectorAll(
    'input[name="Color Preview"]'
  ).forEach(radio => {
    radio.checked = radio.value === selected;
  });

});

// REDIRECT OLD STUDIO HASH TO DEMO

if (
  location.hash === '#studio' ||
  location.hash === '#builder'
) {
  history.replaceState(null, '', '#demo');
}

// SEND FORM

const demoForm =
  document.getElementById('demoForm');

demoForm.addEventListener('submit', async event => {

  event.preventDefault();

  if (!demoForm.reportValidity()) {
    return;
  }

  const submitBtn =
    document.getElementById('submitBtn');

  const status =
    document.getElementById('formStatus');

  const formData = new FormData(demoForm);

  formData.set(
    '_subject',
    'New VEXTRIVO Demo Request - ' +
    formData.get('Business Name')
  );

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending Request...';

  status.classList.remove('error');
  status.textContent = 'Submitting your request...';

  try {

    const response = await fetch(
      'https://formsubmit.co/ajax/nkarpo49@gmail.com',
      {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      }
    );

    const result = await response.json();

    if (
      !response.ok ||
      result.success === false ||
      result.success === 'false'
    ) {
      throw new Error('Submission failed');
    }

    status.textContent =
      'Your request was submitted! ' +
      'We will contact you about your website demo.';

    demoForm.reset();

  } catch (error) {

    status.classList.add('error');

    status.textContent =
      'Unable to send your request. ' +
      'Please email nkarpo49@gmail.com directly.';

  } finally {

    submitBtn.disabled = false;

    submitBtn.textContent =
      'Request My Website Demo';

  }

});
</script>

</body>
</html>
