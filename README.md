<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="VEXTRIVO custom websites and marketing. Request your free custom website demo.">
<title>VEXTRIVO | Custom Websites & Marketing</title>

<style>
:root {
  --bg: #090d19;
  --panel: #121b2e;
  --field: #1d2b45;
  --border: #30415e;
  --blue: #5682ff;
  --text: #f6f8ff;
  --muted: #b0bed7;
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
  font-family: system-ui, Arial, sans-serif;
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

button, input, textarea, select {
  font: inherit;
}

button {
  cursor: pointer;
}

.wrap {
  width: min(1140px, 92%);
  margin: auto;
}

header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: #090d19f5;
  border-bottom: 1px solid var(--border);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  padding: 15px 0;
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
  gap: 20px;
  flex-wrap: wrap;
}

nav a:hover {
  color: #a8bdff;
}

.btn {
  display: inline-block;
  border: 0;
  border-radius: 11px;
  padding: 13px 21px;
  background: var(--blue);
  color: white;
  font-weight: 750;
  text-align: center;
}

.btn:hover {
  filter: brightness(1.12);
}

.btn.alt {
  background: #273754;
}

.btn:disabled {
  opacity: .55;
  cursor: wait;
}

.page {
  display: none;
}

.page.active {
  display: block;
}

.hero {
  text-align: center;
  padding: 100px 20px;
  background: radial-gradient(
    ellipse at 50% 0%,
    #29498777,
    transparent 65%
  );
}

.eyebrow {
  font-size: 12px;
  color: #a1b9ff;
  font-weight: 850;
  letter-spacing: 2px;
  text-transform: uppercase;
}

h1 {
  font-size: clamp(40px, 6vw, 74px);
  line-height: 1.08;
  max-width: 900px;
  margin: 17px auto;
}

h2 {
  font-size: clamp(28px, 4vw, 42px);
  line-height: 1.2;
}

h3 {
  font-size: 22px;
}

p {
  color: var(--muted);
}

.lead {
  max-width: 720px;
  margin: 20px auto 30px;
  font-size: 19px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.section {
  padding: 72px 0;
}

.center {
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.card {
  background: linear-gradient(145deg, #1a2741, #101827);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 26px;
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
  font-weight: 400;
  color: var(--muted);
}

ul {
  padding-left: 20px;
  color: #d6e0f2;
  line-height: 2;
}

.banner {
  padding: 38px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 18px;
  text-align: center;
}

.notice {
  padding: 16px;
  background: #1b2942;
  border: 1px solid var(--border);
  border-radius: 12px;
  color: #d6e0f2;
  margin: 20px 0;
}

/* FREE DEMO PAGE */

.demo-layout {
  min-height: calc(100vh - 160px);
  padding: 62px 16px 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(
    circle at 50% 0%,
    #1c325c 0%,
    var(--bg) 65%
  );
}

.demo-heading {
  max-width: 760px;
  text-align: center;
}

.demo-form {
  width: min(820px, 100%);
  margin: 26px auto 0;
  padding: 32px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: 0 20px 70px #0005;
}

.demo-form h3 {
  margin: 30px 0 14px;
}

.demo-form h3:first-child {
  margin-top: 0;
}

.formgrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.field {
  margin-bottom: 17px;
}

.field label,
.group-label {
  display: block;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 7px;
}

.field input,
.field select,
.field textarea {
  display: block;
  width: 100%;
  padding: 13px;
  background: var(--field);
  color: var(--text);
  border: 1px solid #485a79;
  border-radius: 9px;
  min-height: 47px;
}

.field textarea {
  min-height: 112px;
  resize: vertical;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: 2px solid var(--blue);
}

.checkgrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.check {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 11px 13px;
  background: var(--field);
  border: 1px solid var(--border);
  border-radius: 9px;
}

.check input {
  accent-color: var(--blue);
  width: 18px;
  height: 18px;
}

.status {
  min-height: 28px;
  margin-top: 13px;
  color: #b1f0d1;
}

.status.error {
  color: #ffb6b6;
}

.muted-small {
  font-size: 13px;
  color: var(--muted);
}

footer {
  text-align: center;
  padding: 28px;
  border-top: 1px solid var(--border);
  color: var(--muted);
}

@media(max-width: 850px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .nav {
    justify-content: center;
  }

  .hero {
    padding: 74px 15px;
  }
}

@media(max-width: 580px) {
  .formgrid,
  .checkgrid {
    grid-template-columns: 1fr;
  }

  .demo-form {
    padding: 20px;
  }

  nav {
    justify-content: center;
    gap: 12px;
  }
}
</style>
</head>

<body>

<!-- NAVIGATION -->

<header>
  <div class="wrap nav">
    <a class="logo" href="#home" data-page="home">
      VEX<span>TRIVO</span>
    </a>

    <nav>
      <a href="#home" data-page="home">Home</a>
      <a href="#pricing" data-page="home" data-scroll="pricing">
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

<!-- HOME PAGE -->

<section id="home" class="page active">

  <div class="hero">
    <div class="wrap">
      <div class="eyebrow">
        Custom Websites & Digital Marketing
      </div>

      <h1>
        Your Business Deserves a Website That Stands Out.
      </h1>

      <p class="lead">
        Tell us about your business and the website
        you envision. Our team will personally review
        your request and create a custom demo for you.
      </p>

      <div class="actions">
        <a class="btn" href="#demo" data-page="demo">
          Request My Free Demo
        </a>

        <a class="btn alt"
           href="#pricing"
           data-page="home"
           data-scroll="pricing">
          See Website Pricing
        </a>
      </div>
    </div>
  </div>

  <div class="wrap">

    <section class="section">
      <div class="center">
        <div class="eyebrow">How It Works</div>
        <h2>Your Vision. Our Design.</h2>
      </div>

      <div class="grid">

        <article class="card">
          <h3>01. Tell Us About Your Business</h3>
          <p>
            Fill out the demo request form with
            your industry, colors, goals, and features.
          </p>
        </article>

        <article class="card">
          <h3>02. We Build Your Demo</h3>
          <p>
            We personally review your request and
            prepare a website demo based on your vision.
          </p>
        </article>

        <article class="card">
          <h3>03. Review & Launch</h3>
          <p>
            We discuss your demo, refine the scope,
            and plan the next steps if you decide
            to move forward.
          </p>
        </article>

      </div>
    </section>

    <!-- WEBSITE PRICING -->

    <section id="pricing" class="section">

      <div class="center">
        <div class="eyebrow">Website Pricing</div>
        <h2>Professional Websites for Every Business</h2>
      </div>

      <div class="grid">

        <article class="card featured">
          <h3>Free Demo Request</h3>
          <div class="price">$0</div>
          <p>
            Tell us what you want so we can prepare
            a custom website demo.
          </p>

          <ul>
            <li>Detailed design questionnaire</li>
            <li>Feature and page preferences</li>
            <li>Personal follow-up</li>
          </ul>

          <a class="btn" href="#demo" data-page="demo"
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
            A polished, mobile-friendly website
            for your business.
          </p>

          <ul>
            <li>Custom branding</li>
            <li>Services and contact sections</li>
            <li>Responsive design</li>
          </ul>

          <a class="btn alt" href="#demo" data-page="demo"
             data-service="Simple Website">
            Request a Quote
          </a>
        </article>

        <article class="card">
          <h3>Advanced Website</h3>
          <div class="price">
            $2,000 <small>starting at</small>
          </div>

          <p>
            Custom layouts and more complex
            website features.
          </p>

          <ul>
            <li>Interactive sections</li>
            <li>Multiple pages</li>
            <li>Custom integrations as scoped</li>
          </ul>

          <a class="btn alt" href="#demo" data-page="demo"
             data-service="Advanced Website">
            Request a Quote
          </a>
        </article>

      </div>

      <p class="center">
        Final project pricing depends on the
        features and scope requested.
      </p>

    </section>

    <section class="section">
      <div class="banner">
        <h2>Let's Build Something for Your Business.</h2>
        <p>
          Send us your ideas and we'll reach out
          about your custom demo.
        </p>

        <a class="btn" href="#demo" data-page="demo">
          Start My Free Demo Request
        </a>
      </div>
    </section>

  </div>
</section>

<!-- MARKETING PAGE -->

<section id="marketing" class="page">

  <div class="hero">
    <div class="wrap">
      <div class="eyebrow">VEXTRIVO Marketing</div>

      <h1>More Visibility. More Opportunities.</h1>

      <p class="lead">
        Organic content and paid advertising services
        to help businesses reach more potential customers.
      </p>

      <a class="btn" href="#demo" data-page="demo"
         data-service="Marketing Consultation">
        Request a Marketing Consultation
      </a>
    </div>
  </div>

  <div class="wrap section">

    <div class="grid">

      <article class="card">
        <h3>Organic Marketing</h3>
        <div class="price">
          $500 <small>/month</small>
        </div>

        <p>
          Content strategy and organic
          social media support.
        </p>

        <a class="btn" href="#demo" data-page="demo"
           data-service="Organic Marketing">
          Ask About Organic
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

        <a class="btn" href="#demo" data-page="demo"
           data-service="Meta Ads">
          Ask About Meta Ads
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

        <a class="btn" href="#demo" data-page="demo"
           data-service="Google Ads">
          Ask About Google Ads
        </a>
      </article>

    </div>

    <div class="notice">
      <strong>Ad spend is separate.</strong>
      Meta and Google management fees do not include
      the client's advertising budget.
      Results are not guaranteed.
    </div>

  </div>
</section>

<!-- FREE DEMO REQUEST PAGE -->

<section id="demo" class="page">

  <div class="demo-layout">

    <div class="demo-heading">
      <div class="eyebrow">
        Free Custom Website Demo
      </div>

      <h2>Tell Us Exactly What You Want Built.</h2>

      <p>
        We'll use your answers to understand your
        business and personally build a website
        demo tailored to your vision.
      </p>
    </div>

    <form id="demoForm" class="demo-form"
      action="https://formsubmit.co/nkarpo49@gmail.com"
      method="POST">

      <!-- BUSINESS DETAILS -->

      <h3>1. About Your Business</h3>

      <div class="formgrid">

        <div class="field">
          <label for="businessName">
            Business Name *
          </label>

          <input
            id="businessName"
            name="business_name"
            required
            maxlength="120"
            placeholder="Your business name">
        </div>

        <div class="field">
          <label for="businessType">
            Business Type *
          </label>

          <select id="businessType"
                  name="business_type" required>

            <option value="">Select your industry</option>
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
        <label for="businessDescription">
          What Does Your Business Do? *
        </label>

        <textarea
          id="businessDescription"
          name="business_description"
          required
          maxlength="2000"
          placeholder="What services or products do you offer? Who are your customers?"></textarea>
      </div>

      <div class="formgrid">

        <div class="field">
          <label for="existingWebsite">
            Existing Website (optional)
          </label>

          <input
            id="existingWebsite"
            name="existing_website"
            type="url"
            placeholder="https://example.com">
        </div>

        <div class="field">
          <label for="businessLocation">
            City / Service Area
          </label>

          <input
            id="businessLocation"
            name="business_location"
            placeholder="Example: Denver, Colorado">
        </div>

      </div>

      <!-- DESIGN -->

      <h3>2. Website Design & Style</h3>

      <div class="formgrid">

        <div class="field">
          <label for="colorTheme">
            Preferred Color Theme *
          </label>

          <select id="colorTheme"
                  name="color_theme" required>

            <option value="">Select colors</option>
            <option>Black and Gold</option>
            <option>Black and Blue</option>
            <option>Black and White</option>
            <option>White and Blue</option>
            <option>White and Green</option>
            <option>Plum and Orange</option>
            <option>Earth Tones</option>
            <option>Custom Colors</option>
            <option>Help Me Choose</option>

          </select>
        </div>

        <div class="field">
          <label for="designStyle">
            Website Style *
          </label>

          <select id="designStyle"
                  name="design_style" required>

            <option value="">Choose a style</option>
            <option>Luxury / Premium</option>
            <option>Modern / Minimal</option>
            <option>Bold / High Energy</option>
            <option>Clean / Professional</option>
            <option>Creative / Artistic</option>
            <option>Not Sure</option>

          </select>
        </div>

      </div>

      <div class="field">
        <label for="specificColors">
          Specific Colors, Fonts, or Branding
        </label>

        <input
          id="specificColors"
          name="specific_colors_branding"
          placeholder="Example: Dark navy, orange buttons, elegant fonts">
      </div>

      <div class="field">
        <label for="inspiration">
          Websites You Like (optional)
        </label>

        <textarea
          id="inspiration"
          name="inspiration_websites"
          placeholder="Paste example website links or describe styles you like."></textarea>
      </div>

      <!-- PAGES AND FEATURES -->

      <h3>3. Pages & Features</h3>

      <span class="group-label">
        Which pages should your website have?
      </span>

      <div class="checkgrid">

        <label class="check">
          <input type="checkbox" name="pages" value="Home">
          Home
        </label>

        <label class="check">
          <input type="checkbox" name="pages" value="About">
          About Us
        </label>

        <label class="check">
          <input type="checkbox" name="pages" value="Services">
          Services
        </label>

        <label class="check">
          <input type="checkbox" name="pages" value="Pricing">
          Pricing
        </label>

        <label class="check">
          <input type="checkbox" name="pages" value="Gallery">
          Gallery / Portfolio
        </label>

        <label class="check">
          <input type="checkbox" name="pages" value="Contact">
          Contact
        </label>

        <label class="check">
          <input type="checkbox" name="pages" value="Shop">
          Online Shop
        </label>

        <label class="check">
          <input type="checkbox" name="pages" value="Other">
          Other / Not Sure
        </label>

      </div>

      <span class="group-label" style="margin-top:22px">
        What features would you like?
      </span>

      <div class="checkgrid">

        <label class="check">
          <input type="checkbox" name="features"
                 value="Online Booking">
          Online Booking / Calendar
        </label>

        <label class="check">
          <input type="checkbox" name="features"
                 value="Photo Gallery">
          Photo Gallery
        </label>

        <label class="check">
          <input type="checkbox" name="features"
                 value="Online Payments">
          Online Payments / Store
        </label>

        <label class="check">
          <input type="checkbox" name="features"
                 value="Customer Reviews">
          Customer Reviews
        </label>

        <label class="check">
          <input type="checkbox" name="features"
                 value="Quote Request">
          Quote Request Form
        </label>

        <label class="check">
          <input type="checkbox" name="features"
                 value="Animations">
          Animations / Interactive Design
        </label>

        <label class="check">
          <input type="checkbox" name="features"
                 value="Maps">
          Location Map
        </label>

        <label class="check">
          <input type="checkbox" name="features"
                 value="Other">
          Other / Need Advice
        </label>

      </div>

      <div class="field" style="margin-top:22px">
        <label for="vision">
          Describe Your Dream Website *
        </label>

        <textarea
          id="vision"
          name="website_vision"
          required
          maxlength="4000"
          placeholder="Tell us what you want visitors to see, what buttons should do, the photos you want, and anything else we should know."></textarea>
      </div>

      <div class="field">
        <label for="assets">
          Do You Already Have a Logo or Photos?
        </label>

        <select id="assets" name="logo_and_photos">
          <option>Yes, I have both</option>
          <option>I have a logo only</option>
          <option>I have photos only</option>
          <option>No, I need help with both</option>
        </select>
      </div>

      <!-- PROJECT DETAILS -->

      <h3>4. Project Details</h3>

      <div class="formgrid">

        <div class="field">
          <label for="service">
            What Are You Interested In?
          </label>

          <select id="service" name="service_interest">
            <option>Free Website Demo</option>
            <option>Simple Website</option>
            <option>Advanced Website</option>
            <option>Marketing Consultation</option>
            <option>Organic Marketing</option>
            <option>Meta Ads</option>
            <option>Google Ads</option>
          </select>
        </div>

        <div class="field">
          <label for="budget">
            Estimated Website Budget
          </label>

          <select id="budget" name="estimated_budget">
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
            When Do You Need Your Website?
          </label>

          <select id="timeline" name="project_timeline">
            <option>Just exploring</option>
            <option>As soon as possible</option>
            <option>Within 2 weeks</option>
            <option>Within 1 month</option>
            <option>Within 2–3 months</option>
            <option>Flexible</option>
          </select>
        </div>

        <div class="field">
          <label for="goal">
            Main Website Goal
          </label>

          <select id="goal" name="main_goal">
            <option>Get more leads / calls</option>
            <option>Book more appointments</option>
            <option>Sell products online</option>
            <option>Showcase my work</option>
            <option>Improve my brand</option>
            <option>Other</option>
          </select>
        </div>

      </div>

      <!-- CONTACT DETAILS -->

      <h3>5. How Can We Reach You?</h3>

      <div class="formgrid">

        <div class="field">
          <label for="fullName">
            Full Name *
          </label>

          <input
            id="fullName"
            name="full_name"
            autocomplete="name"
            required
            maxlength="120">
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
            name="phone"
            type="tel"
            autocomplete="tel"
            required
            minlength="7"
            maxlength="30"
            placeholder="(555) 123-4567">
        </div>

        <div class="field">
          <label for="contactMethod">
            Preferred Contact Method
          </label>

          <select
            id="contactMethod"
            name="preferred_contact_method">
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
          name="additional_notes"
          maxlength="2000"
          placeholder="Any special requests, questions, or other details?"></textarea>
      </div>

      <div class="notice">
        By submitting, you agree that VEXTRIVO may
        contact you about your request. This is a
        request for a custom demo, not an automatically
        confirmed appointment.
      </div>

      <!-- SPAM PROTECTION -->

      <input
        type="text"
        name="_honey"
        tabindex="-1"
        autocomplete="off"
        aria-hidden="true"
        style="position:absolute;left:-9999px">

      <!-- SUBMIT BUTTON -->

      <button
        id="submitDemo"
        type="submit"
        class="btn">
        Send My Free Demo Request
      </button>

      <p id="formStatus"
         class="status"
         role="status"
         aria-live="polite"></p>

      <p class="muted-small">
        Your request will be sent to VEXTRIVO.
        No automatic website is generated.
      </p>

    </form>

  </div>
</section>

</main>

<footer>
  © <span id="year"></span> VEXTRIVO.
  Custom Websites & Marketing.
</footer>

<script>
'use strict';

// EMAIL DESTINATION
const BOOKING_EMAIL = 'nkarpo49@gmail.com';

// NAVIGATION
const pages = ['home', 'marketing', 'demo'];

const $ = id => document.getElementById(id);

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

// ALL NAVIGATION BUTTONS
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
$('year').textContent = new Date().getFullYear();

// SUPPORT DIRECT PAGE LINKS
const initial = location.hash.slice(1);

if (pages.includes(initial)) {
  navigate(initial);
} else if (initial === 'pricing') {
  navigate('home', 'pricing');
}

// FREE DEMO FORM SUBMISSION
$('demoForm').addEventListener('submit', async event => {
  event.preventDefault();

  const form = $('demoForm');

  if (!form.reportValidity()) {
    return;
  }

  const button = $('submitDemo');
  const status = $('formStatus');

  const data = new FormData(form);

  data.set(
    '_subject',
    'New VEXTRIVO Demo Request - ' +
    data.get('business_name')
  );

  data.set('_template', 'table');
  data.set('_captcha', 'true');

  button.disabled = true;
  button.textContent = 'Sending Request...';

  status.textContent = 'Sending your request...';
  status.classList.remove('error');

  try {
    const response = await fetch(
      'https://formsubmit.co/ajax/' + BOOKING_EMAIL,
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
      throw new Error(
        result.message || 'Request failed'
      );
    }

    status.textContent =
      'Your request was submitted. ' +
      'We will contact you about your custom demo.';

    form.reset();

  } catch (error) {
    status.textContent =
      'Could not send the request. ' +
      'Please email ' + BOOKING_EMAIL + ' directly.';

    status.classList.add('error');

  } finally {
    button.disabled = false;
    button.textContent = 'Send My Free Demo Request';
  }
});
</script>

</body>
</html>
