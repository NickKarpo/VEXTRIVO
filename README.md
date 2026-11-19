<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="VEXTRIVO custom websites and digital marketing. Request your free website demo.">
<title>VEXTRIVO | Websites & Marketing</title>

<style>
:root {
  --bg: #0b1224;
  --panel: #14213a;
  --field: #202f4b;
  --border: #344765;
  --text: #f6f8ff;
  --muted: #b7c5da;
  --blue: #5683ff;
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
  color: var(--text);
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.container {
  width: min(1150px, 92%);
  margin: auto;
}

/* HEADER */

header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #0b1224;
  border-bottom: 1px solid var(--border);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
  padding: 18px 0;
}

.logo {
  font-size: 25px;
  font-weight: 900;
  letter-spacing: 2px;
}

.logo span {
  color: var(--blue);
}

nav {
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
}

nav a:hover {
  color: var(--blue);
}

.btn {
  display: inline-block;
  background: var(--blue);
  color: white;
  padding: 14px 22px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
}

.btn:hover {
  filter: brightness(1.12);
}

.btn.secondary {
  background: #263756;
}

.btn:disabled {
  opacity: .6;
  cursor: wait;
}

/* PAGE NAVIGATION */

.page {
  display: none;
}

.page.active {
  display: block;
}

/* HOMEPAGE */

.hero {
  padding: 110px 20px;
  text-align: center;
  background: radial-gradient(
    ellipse at top,
    #25447b77,
    transparent 65%
  );
}

.eyebrow {
  color: #a7beff;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
}

h1 {
  font-size: clamp(38px, 6vw, 72px);
  line-height: 1.1;
  max-width: 950px;
  margin: 20px auto;
}

h2 {
  font-size: clamp(28px, 4vw, 43px);
}

h3 {
  font-size: 22px;
}

p {
  color: var(--muted);
}

.hero p {
  max-width: 720px;
  margin: 20px auto 30px;
  font-size: 19px;
}

.actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
}

.section {
  padding: 75px 0;
}

.center {
  text-align: center;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 35px;
}

.card {
  background: linear-gradient(
    145deg,
    #1b2943,
    #10192a
  );
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 28px;
}

.card.featured {
  border-color: var(--blue);
}

.price {
  font-size: 39px;
  font-weight: 900;
}

.price small {
  font-size: 15px;
  font-weight: normal;
  color: var(--muted);
}

ul {
  color: #d6e0f2;
  line-height: 2;
  padding-left: 20px;
}

.banner {
  text-align: center;
  padding: 45px 25px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 18px;
}

.notice {
  padding: 18px;
  margin-top: 25px;
  background: #1b2943;
  border: 1px solid var(--border);
  border-radius: 12px;
  color: #dce5f5;
}

/* CENTERED FREE DEMO FORM */

.demo-page {
  position: relative;
  isolation: isolate;
  min-height: 100vh;
  padding: 70px 18px 90px;
  overflow: hidden;
  background: #0b1224;
}

.demo-page::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: -25%;
  background:
    radial-gradient(
      ellipse at 50% 25%,
      #233d6b,
      transparent 48%
    ),
    radial-gradient(
      ellipse at 80% 70%,
      #162c4c,
      transparent 42%
    );
  opacity: .7;
  animation: flow 22s ease-in-out infinite alternate;
}

@keyframes flow {
  from {
    transform: translate(-3%, 0);
  }
  to {
    transform: translate(3%, 3%);
  }
}

.demo-intro {
  text-align: center;
  max-width: 740px;
  margin: 0 auto 35px;
}

.demo-intro h1 {
  font-size: clamp(34px, 5vw, 49px);
}

.demo-form {
  width: min(810px, 100%);
  margin: 0 auto;
  padding: 36px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: 0 22px 65px #0004;
}

.demo-form h2 {
  font-size: 21px;
  margin: 32px 0 18px;
  padding-bottom: 12px;
  border-bottom: 1px solid #ffffff22;
}

.demo-form h2:first-child {
  margin-top: 0;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.field {
  margin-bottom: 18px;
}

.field label,
.group-label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
}

.field input,
.field select,
.field textarea {
  display: block;
  width: 100%;
  min-height: 48px;
  padding: 13px;
  background: var(--field);
  color: white;
  border: 1px solid #526481;
  border-radius: 10px;
}

.field textarea {
  min-height: 115px;
  resize: vertical;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: 2px solid var(--blue);
}

.field input::placeholder,
.field textarea::placeholder {
  color: #aebbd0;
}

.check-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 22px;
}

.check {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: var(--field);
  border: 1px solid var(--border);
  border-radius: 9px;
  font-size: 14px;
}

.check input {
  accent-color: var(--blue);
  width: 17px;
  height: 17px;
}

.submit {
  width: 100%;
  margin-top: 15px;
  padding: 17px;
}

.status {
  min-height: 25px;
  text-align: center;
  color: #b5f0d0;
}

.status.error {
  color: #ffbcbc;
}

.fine {
  text-align: center;
  font-size: 12px;
}

.honeypot {
  position: absolute;
  left: -9999px;
}

footer {
  text-align: center;
  padding: 30px 15px;
  border-top: 1px solid var(--border);
  color: var(--muted);
}

/* MOBILE */

@media(max-width: 850px) {
  .cards {
    grid-template-columns: 1fr;
  }

  .navbar {
    justify-content: center;
  }

  .hero {
    padding: 80px 15px;
  }
}

@media(max-width: 600px) {
  .form-row,
  .check-grid {
    grid-template-columns: 1fr;
  }

  .demo-form {
    padding: 22px;
  }

  .demo-page {
    padding: 45px 14px 70px;
  }

  nav {
    justify-content: center;
    gap: 12px;
  }
}

@media(prefers-reduced-motion: reduce) {
  .demo-page::before {
    animation: none;
  }
}
</style>
</head>

<body>

<!-- HEADER -->

<header>
  <div class="container navbar">

    <a class="logo" href="#home" data-page="home">
      VEX<span>TRIVO</span>
    </a>

    <nav>
      <a href="#home" data-page="home">Home</a>

      <a href="#pricing"
         data-page="home"
         data-scroll="pricing">
        Pricing
      </a>

      <a href="#marketing" data-page="marketing">
        Marketing
      </a>

      <a href="#demo" data-page="demo">
        Free Demo
      </a>
    </nav>

    <a class="btn" href="#demo" data-page="demo">
      Book Free Demo
    </a>

  </div>
</header>

<main>

<!-- HOME -->

<section id="home" class="page active">

  <div class="hero">
    <div class="container">

      <div class="eyebrow">
        Custom Websites & Digital Marketing
      </div>

      <h1>
        Your Business Deserves a Website That Stands Out.
      </h1>

      <p>
        We create custom websites designed around
        your business. Tell us what you envision,
        and we'll personally prepare a free website
        demo for you.
      </p>

      <div class="actions">
        <a class="btn" href="#demo" data-page="demo">
          Request My Free Demo
        </a>

        <a class="btn secondary"
           href="#pricing"
           data-page="home"
           data-scroll="pricing">
          View Website Pricing
        </a>
      </div>

    </div>
  </div>

  <div class="container">

    <section class="section">

      <div class="center">
        <div class="eyebrow">How It Works</div>
        <h2>Your Vision. Our Design.</h2>
      </div>

      <div class="cards">

        <article class="card">
          <h3>01. Tell Us Your Vision</h3>
          <p>
            Complete our questionnaire with your
            business, style, and website requirements.
          </p>
        </article>

        <article class="card">
          <h3>02. We Build Your Demo</h3>
          <p>
            Our team personally reviews your request
            and creates a demo tailored to your business.
          </p>
        </article>

        <article class="card">
          <h3>03. Review & Launch</h3>
          <p>
            Review your demo, discuss changes,
            and choose the right next steps.
          </p>
        </article>

      </div>
    </section>

    <!-- PRICING -->

    <section id="pricing" class="section">

      <div class="center">
        <div class="eyebrow">Website Pricing</div>
        <h2>Built for Your Business</h2>
      </div>

      <div class="cards">

        <article class="card featured">

          <h3>Free Website Demo</h3>
          <div class="price">$0</div>

          <p>
            Share your ideas and request a custom
            website preview.
          </p>

          <ul>
            <li>Detailed design questionnaire</li>
            <li>Personal review</li>
            <li>Custom demo request</li>
          </ul>

          <a class="btn" href="#demo"
             data-page="demo"
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
            Professional responsive websites
            for growing businesses.
          </p>

          <ul>
            <li>Mobile-friendly design</li>
            <li>Services and contact sections</li>
            <li>Custom branding</li>
          </ul>

          <a class="btn secondary"
             href="#demo"
             data-page="demo"
             data-service="Simple Website">
            Request Quote
          </a>

        </article>

        <article class="card">

          <h3>Advanced Website</h3>

          <div class="price">
            $2,000 <small>starting at</small>
          </div>

          <p>
            Advanced website design with
            interactive features.
          </p>

          <ul>
            <li>Custom page layouts</li>
            <li>Interactive elements</li>
            <li>Integrations as scoped</li>
          </ul>

          <a class="btn secondary"
             href="#demo"
             data-page="demo"
             data-service="Advanced Website">
            Request Quote
          </a>

        </article>

      </div>

      <p class="center">
        Final prices depend on the project
        scope and requested features.
      </p>

    </section>

    <section class="section">
      <div class="banner">

        <h2>Let's Build Something Exceptional.</h2>

        <p>
          Tell us about your business and we'll
          reach out about your custom website demo.
        </p>

        <a class="btn" href="#demo" data-page="demo">
          Book My Free Demo
        </a>

      </div>
    </section>

  </div>
</section>

<!-- MARKETING -->

<section id="marketing" class="page">

  <div class="hero">
    <div class="container">

      <div class="eyebrow">
        VEXTRIVO Marketing
      </div>

      <h1>
        More Visibility. More Opportunities.
      </h1>

      <p>
        Organic marketing and paid advertising
        management to help your business
        connect with customers.
      </p>

      <a class="btn" href="#demo"
         data-page="demo"
         data-service="Marketing Consultation">
        Request a Consultation
      </a>

    </div>
  </div>

  <div class="container section">

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

        <a class="btn" href="#demo"
           data-page="demo"
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

        <a class="btn" href="#demo"
           data-page="demo"
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
          Google advertising
          campaign management.
        </p>

        <a class="btn" href="#demo"
           data-page="demo"
           data-service="Google Ads">
          Get Started
        </a>

      </article>

    </div>

    <div class="notice">
      <strong>Ad spend is separate.</strong>
      The $1,700 monthly Meta or Google Ads
      management fee does not include the
      advertising budget you choose.
      Results are not guaranteed.
    </div>

  </div>
</section>

<!-- FREE DEMO PAGE -->

<section id="demo" class="page">

  <div class="demo-page">

    <div class="demo-intro">

      <div class="eyebrow">
        VEXTRIVO · FREE CUSTOM WEBSITE DEMO
      </div>

      <h1>Tell Us About Your Dream Website</h1>

      <p>
        Answer the questions below so we can
        personally design a website demo based
        on your business, style, and goals.
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
        value="New VEXTRIVO Free Website Demo Request">

      <input
        type="hidden"
        name="_template"
        value="table">

      <input
        class="honeypot"
        type="text"
        name="_honey"
        tabindex="-1"
        autocomplete="off"
        aria-hidden="true">

      <!-- SECTION 1 -->

      <h2>1. About Your Business</h2>

      <div class="form-row">

        <div class="field">
          <label for="business">
            Business Name *
          </label>

          <input
            id="business"
            name="Business Name"
            placeholder="Your business name"
            maxlength="120"
            required>
        </div>

        <div class="field">
          <label for="industry">
            Business Type *
          </label>

          <select
            id="industry"
            name="Business Type"
            required>

            <option value="">Select industry</option>
            <option>Automotive / Detailing</option>
            <option>Construction / Contracting</option>
            <option>Landscaping / Outdoor Services</option>
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

      <div class="field">
        <label for="description">
          What Does Your Business Do? *
        </label>

        <textarea
          id="description"
          name="Business Description"
          maxlength="2500"
          required
          placeholder="Tell us about your services, products, and customers."></textarea>
      </div>

      <div class="form-row">

        <div class="field">
          <label for="location">
            City / Service Area
          </label>

          <input
            id="location"
            name="Service Area"
            placeholder="Denver, Colorado">
        </div>

        <div class="field">
          <label for="existing">
            Existing Website (optional)
          </label>

          <input
            id="existing"
            name="Existing Website"
            type="url"
            placeholder="https://example.com">
        </div>

      </div>

      <!-- SECTION 2 -->

      <h2>2. Website Style</h2>

      <div class="form-row">

        <div class="field">
          <label for="colors">
            Preferred Color Theme *
          </label>

          <select
            id="colors"
            name="Color Theme"
            required>

            <option value="">Choose colors</option>
            <option>Black & Gold</option>
            <option>Black & Blue</option>
            <option>Black & Red</option>
            <option>Black & White</option>
            <option>White & Blue</option>
            <option>White & Green</option>
            <option>Plum & Orange</option>
            <option>Earth Tones</option>
            <option>Custom Colors</option>
            <option>Help Me Choose</option>

          </select>
        </div>

        <div class="field">
          <label for="style">
            Website Style *
          </label>

          <select
            id="style"
            name="Website Style"
            required>

            <option value="">Choose style</option>
            <option>Luxury / Premium</option>
            <option>Modern / Minimal</option>
            <option>Bold / High Energy</option>
            <option>Clean / Professional</option>
            <option>Creative / Artistic</option>
            <option>Help Me Choose</option>

          </select>
        </div>

      </div>

      <div class="field">
        <label for="branding">
          Specific Colors, Fonts, or Branding
        </label>

        <input
          id="branding"
          name="Branding Preferences"
          placeholder="Example: Dark navy, orange buttons, elegant fonts">
      </div>

      <div class="field">
        <label for="inspiration">
          Example Websites You Like
        </label>

        <textarea
          id="inspiration"
          name="Website Inspiration"
          placeholder="Paste website links or describe designs you like."></textarea>
      </div>

      <!-- SECTION 3 -->

      <h2>3. Pages & Features</h2>

      <div class="group-label">
        Which pages should your website have?
      </div>

      <div class="check-grid">

        <label class="check">
          <input type="checkbox"
                 name="Pages"
                 value="Home">
          Home
        </label>

        <label class="check">
          <input type="checkbox"
                 name="Pages"
                 value="About">
          About Us
        </label>

        <label class="check">
          <input type="checkbox"
                 name="Pages"
                 value="Services">
          Services
        </label>

        <label class="check">
          <input type="checkbox"
                 name="Pages"
                 value="Pricing">
          Pricing
        </label>

        <label class="check">
          <input type="checkbox"
                 name="Pages"
                 value="Gallery">
          Gallery / Portfolio
        </label>

        <label class="check">
          <input type="checkbox"
                 name="Pages"
                 value="Contact">
          Contact
        </label>

        <label class="check">
          <input type="checkbox"
                 name="Pages"
                 value="Shop">
          Online Shop
        </label>

        <label class="check">
          <input type="checkbox"
                 name="Pages"
                 value="Other">
          Other / Not Sure
        </label>

      </div>

      <div class="group-label">
        Which features do you want?
      </div>

      <div class="check-grid">

        <label class="check">
          <input type="checkbox"
                 name="Features"
                 value="Booking Calendar">
          Booking Calendar
        </label>

        <label class="check">
          <input type="checkbox"
                 name="Features"
                 value="Photo Gallery">
          Photo Gallery
        </label>

        <label class="check">
          <input type="checkbox"
                 name="Features"
                 value="Online Payments">
          Online Payments
        </label>

        <label class="check">
          <input type="checkbox"
                 name="Features"
                 value="Customer Reviews">
          Customer Reviews
        </label>

        <label class="check">
          <input type="checkbox"
                 name="Features"
                 value="Quote Form">
          Quote Request Form
        </label>

        <label class="check">
          <input type="checkbox"
                 name="Features"
                 value="Animations">
          Animations / Interactive Design
        </label>

        <label class="check">
          <input type="checkbox"
                 name="Features"
                 value="Map">
          Location Map
        </label>

        <label class="check">
          <input type="checkbox"
                 name="Features"
                 value="Other">
          Other / Need Advice
        </label>

      </div>

      <div class="field">
        <label for="vision">
          Describe Your Dream Website *
        </label>

        <textarea
          id="vision"
          name="Dream Website Description"
          maxlength="5000"
          required
          placeholder="Describe the homepage, photos, colors, buttons, features, and everything you want us to build."></textarea>
      </div>

      <div class="field">
        <label for="assets">
          Do You Have a Logo and Photos?
        </label>

        <select
          id="assets"
          name="Logo and Photos">

          <option>Yes, I have both</option>
          <option>I have a logo only</option>
          <option>I have photos only</option>
          <option>No, I need help with both</option>

        </select>
      </div>

      <!-- SECTION 4 -->

      <h2>4. Project Details</h2>

      <div class="form-row">

        <div class="field">
          <label for="goal">
            Main Website Goal
          </label>

          <select
            id="goal"
            name="Main Goal">

            <option>Get more calls / leads</option>
            <option>Book appointments</option>
            <option>Sell products</option>
            <option>Showcase my work</option>
            <option>Improve my brand</option>
            <option>Other</option>

          </select>
        </div>

        <div class="field">
          <label for="budget">
            Estimated Budget
          </label>

          <select
            id="budget"
            name="Estimated Budget">

            <option>Not sure yet</option>
            <option>Under $1,000</option>
            <option>$1,000–$1,500</option>
            <option>$1,500–$2,500</option>
            <option>$2,500–$5,000</option>
            <option>$5,000+</option>

          </select>
        </div>

        <div class="field">
          <label for="timeline">
            Desired Timeline
          </label>

          <select
            id="timeline"
            name="Desired Timeline">

            <option>Just exploring</option>
            <option>As soon as possible</option>
            <option>Within 2 weeks</option>
            <option>Within 1 month</option>
            <option>Within 2–3 months</option>
            <option>Flexible</option>

          </select>
        </div>

        <div class="field">
          <label for="service">
            Service Interested In
          </label>

          <select
            id="service"
            name="Service Interest">

            <option>Free Website Demo</option>
            <option>Simple Website</option>
            <option>Advanced Website</option>
            <option>Marketing Consultation</option>
            <option>Organic Marketing</option>
            <option>Meta Ads</option>
            <option>Google Ads</option>

          </select>
        </div>

      </div>

      <!-- SECTION 5 -->

      <h2>5. Contact Information</h2>

      <div class="form-row">

        <div class="field">
          <label for="name">
            Full Name *
          </label>

          <input
            id="name"
            name="Full Name"
            autocomplete="name"
            maxlength="120"
            required>
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
            required>
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
            maxlength="30"
            required>
        </div>

        <div class="field">
          <label for="contact">
            Preferred Contact Method
          </label>

          <select
            id="contact"
            name="Contact Preference">

            <option>Email</option>
            <option>Phone Call</option>
            <option>Text Message</option>

          </select>
        </div>

      </div>

      <div class="field">
        <label for="notes">
          Anything Else We Should Know?
        </label>

        <textarea
          id="notes"
          name="Additional Notes"
          maxlength="2500"
          placeholder="Any questions, special requests, or details we should know?"></textarea>
      </div>

      <div class="notice">
        By submitting, you agree that VEXTRIVO
        may contact you about your request.
        This requests a custom demo;
        it does not confirm an appointment.
      </div>

      <button
        class="btn submit"
        type="submit"
        id="submitBtn">
        Send My Free Demo Request
      </button>

      <p
        id="formStatus"
        class="status"
        role="status"
        aria-live="polite"></p>

      <p class="fine">
        Your answers are sent to VEXTRIVO.
        No website is automatically generated.
      </p>

    </form>

  </div>
</section>

</main>

<footer>
  © <span id="year"></span>
  VEXTRIVO · Custom Websites & Marketing
</footer>

<script>
'use strict';

const $ = id => document.getElementById(id);

const pages = [
  'home',
  'marketing',
  'demo'
];

// PAGE NAVIGATION

function navigate(page, scroll) {

  if (!pages.includes(page)) {
    page = 'home';
  }

  pages.forEach(id => {
    $(id).classList.toggle(
      'active',
      id === page
    );
  });

  history.replaceState(
    null,
    '',
    '#' + (scroll || page)
  );

  window.scrollTo(0, 0);

  if (scroll) {
    requestAnimationFrame(() => {
      $(scroll)?.scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
}

// BUTTON NAVIGATION

document.querySelectorAll('[data-page]').forEach(link => {

  link.addEventListener('click', event => {
    event.preventDefault();

    if (link.dataset.service) {
      $('service').value = link.dataset.service;
    }

    navigate(
      link.dataset.page,
      link.dataset.scroll
    );
  });

});

// COPYRIGHT YEAR

$('year').textContent =
  new Date().getFullYear();

// SUPPORT DIRECT LINKS

const hash = location.hash.slice(1);

if (pages.includes(hash)) {
  navigate(hash);
} else if (hash === 'pricing') {
  navigate('home', 'pricing');
} else if (hash === 'studio') {
  // Redirect old Studio links to the new form
  navigate('demo');
}

// FREE DEMO FORM

$('demoForm').addEventListener('submit', async event => {

  event.preventDefault();

  const form = $('demoForm');

  if (!form.reportValidity()) {
    return;
  }

  const button = $('submitBtn');
  const status = $('formStatus');

  const data = new FormData(form);

  data.set(
    '_subject',
    'New VEXTRIVO Demo Request - ' +
    data.get('Business Name')
  );

  button.disabled = true;
  button.textContent = 'Sending Request...';

  status.classList.remove('error');
  status.textContent = 'Submitting your request...';

  try {

    const response = await fetch(
      'https://formsubmit.co/ajax/nkarpo49@gmail.com',
      {
        method: 'POST',
        body: data,
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
      'Your request was submitted. ' +
      'We will contact you about your custom demo.';

    form.reset();

  } catch (error) {

    status.classList.add('error');

    status.textContent =
      'Could not send the request. ' +
      'Please email nk arpo49@gmail.com directly.'
        .replace('nk arpo', 'nkarpo');

  } finally {

    button.disabled = false;
    button.textContent = 'Send My Free Demo Request';

  }

});
</script>

</body>
</html>
