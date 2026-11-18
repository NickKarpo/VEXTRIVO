<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>VEXTRIVO | Websites & Marketing</title>
<style>
:root {
  --bg: #080b15;
  --panel: #111a2c;
  --panel2: #1b2942;
  --border: #30405e;
  --blue: #4b7cff;
  --white: #f5f7ff;
  --muted: #acb9d0;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--white);
  font-family: Arial, sans-serif;
  line-height: 1.6;
}
a { color: inherit; text-decoration: none; }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
.container {
  width: min(1150px, 92%);
  margin: auto;
}
header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: #080b15f5;
  border-bottom: 1px solid var(--border);
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 16px 0;
}
.logo {
  font-size: 25px;
  font-weight: 900;
  letter-spacing: 2px;
}
.logo span { color: var(--blue); }
nav {
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
}
nav a:hover { color: var(--blue); }
.btn {
  display: inline-block;
  border: none;
  border-radius: 10px;
  background: var(--blue);
  color: white;
  font-weight: bold;
  padding: 14px 22px;
  text-align: center;
  transition: .2s;
}
.btn:hover {
  filter: brightness(1.15);
  transform: translateY(-2px);
}
.btn.secondary { background: #263550; }
.page { display: none; }
.page.active { display: block; }
.hero {
  text-align: center;
  padding: 105px 20px;
  background: radial-gradient(
    ellipse at 50% 0%,
    #294b9566,
    transparent 65%
  );
}
.kicker {
  color: #9bb7ff;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
}
h1 {
  font-size: clamp(40px, 6vw, 76px);
  line-height: 1.1;
  max-width: 950px;
  margin: 20px auto;
}
h2 { font-size: clamp(28px, 4vw, 42px); }
h3 { font-size: 23px; }
p { color: var(--muted); }
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
.section { padding: 75px 0; }
.center { text-align: center; }
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 35px;
}
.card {
  background: linear-gradient(145deg, #18243d, #101827);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 28px;
}
.card.featured { border-color: var(--blue); }
.price {
  font-size: 39px;
  font-weight: 900;
  margin: 15px 0;
}
.price small {
  font-size: 15px;
  color: var(--muted);
  font-weight: normal;
}
.card ul {
  padding-left: 20px;
  color: #d4def0;
  line-height: 2;
}
.card .btn { margin-top: 12px; }
.banner {
  text-align: center;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 35px;
}
.formbox {
  max-width: 900px;
  margin: 30px auto 75px;
  padding: 32px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 20px;
}
.formgrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 17px;
}
.field { margin-bottom: 18px; }
.field label {
  display: block;
  margin-bottom: 7px;
  font-weight: bold;
  font-size: 14px;
}
.field input,
.field select,
.field textarea,
.studio input,
.studio textarea {
  width: 100%;
  background: var(--panel2);
  border: 1px solid #455779;
  border-radius: 10px;
  color: white;
  padding: 13px;
}
.field textarea { min-height: 130px; }
.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: 2px solid var(--blue);
}
.checkgrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.check {
  display: flex !important;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: var(--panel2);
  border: 1px solid var(--border);
  border-radius: 9px;
  font-weight: normal !important;
}
.check input {
  width: 18px;
  height: 18px;
  accent-color: var(--blue);
}
.notice {
  background: #1b2942;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 17px;
  color: #c9d6ee;
  margin: 20px 0;
}
.status {
  min-height: 25px;
  color: #9ae6c2;
}
.studio {
  display: grid;
  grid-template-columns: 320px 1fr;
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  margin: 30px 0 65px;
}
.studio aside {
  background: #101827;
  padding: 24px;
  border-right: 1px solid var(--border);
}
.studio label {
  display: block;
  margin: 15px 0 6px;
}
.studio textarea { min-height: 130px; }
.studio main {
  min-width: 0;
  background: #111827;
}
.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 13px;
  border-bottom: 1px solid var(--border);
}
.toolbar button {
  background: #293753;
  color: white;
  border: 0;
  border-radius: 8px;
  padding: 10px 12px;
}
.toolbar button:hover { background: var(--blue); }
.preview { padding: 15px; overflow: auto; }
iframe {
  display: block;
  width: 100%;
  height: 580px;
  margin: auto;
  background: white;
  border: none;
}
#codeEditor {
  display: none;
  width: 100%;
  height: 610px;
  border: none;
  border-radius: 0;
  background: #0a1020;
  color: #e3edff;
  padding: 18px;
  font: 13px/1.5 monospace;
}
footer {
  text-align: center;
  border-top: 1px solid var(--border);
  padding: 30px;
  color: var(--muted);
}
@media (max-width: 850px) {
  .grid, .formgrid, .studio {
    grid-template-columns: 1fr;
  }
  .studio aside {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
  .nav { justify-content: center; }
  .hero { padding: 75px 15px; }
}
@media (max-width: 520px) {
  .checkgrid { grid-template-columns: 1fr; }
  .formbox { padding: 20px; }
  nav { justify-content: center; gap: 12px; }
}
</style>
</head>
<body>

<header>
  <div class="container nav">
    <a class="logo" href="#home" data-page="home">
      VEX<span>TRIVO</span>
    </a>
    <nav>
      <a href="#home" data-page="home">Home</a>
      <a href="#pricing" data-page="home"
         data-scroll="pricing">Pricing</a>
      <a href="#marketing" data-page="marketing">Marketing</a>
      <a href="#studio" data-page="studio">Website Studio</a>
      <a href="#demo" data-page="demo">Free Demo</a>
    </nav>
    <a href="#demo" data-page="demo" class="btn">
      Book Free Demo
    </a>
  </div>
</header>

<!-- HOME PAGE -->
<div id="home" class="page active">
  <section class="hero">
    <div class="container">
      <div class="kicker">Custom Websites & Digital Marketing</div>
      <h1>Your Business Deserves a Website That Stands Out.</h1>
      <p class="lead">
        We build professional websites tailored to your business.
        Tell us your vision, your preferred colors, and the
        features you need.
      </p>
      <div class="actions">
        <a href="#demo" data-page="demo" class="btn">
          Get My Free Website Demo
        </a>
        <a href="#studio" data-page="studio"
           class="btn secondary">
          Explore Website Studio
        </a>
      </div>
    </div>
  </section>

  <div class="container">
    <section class="section">
      <div class="center">
        <div class="kicker">Our Process</div>
        <h2>From Idea to Launch</h2>
      </div>
      <div class="grid">
        <div class="card">
          <h3>01. Tell Us Your Vision</h3>
          <p>
            Describe your business, colors,
            style, and website features.
          </p>
        </div>
        <div class="card">
          <h3>02. Review Your Needs</h3>
          <p>
            We contact you to discuss your custom
            website demo and project goals.
          </p>
        </div>
        <div class="card">
          <h3>03. Build & Grow</h3>
          <p>
            Choose the right website and
            marketing services for your business.
          </p>
        </div>
      </div>
    </section>

    <section id="pricing" class="section">
      <div class="center">
        <div class="kicker">Website Pricing</div>
        <h2>Professional Websites for Every Business</h2>
      </div>

      <div class="grid">
        <div class="card featured">
          <h3>Free Demo Request</h3>
          <div class="price">$0</div>
          <p>
            Tell us what you need and request
            a free website demo consultation.
          </p>
          <ul>
            <li>Business questionnaire</li>
            <li>Design preferences</li>
            <li>Feature requests</li>
          </ul>
          <a href="#demo" data-page="demo" class="btn">
            Request Free Demo
          </a>
        </div>

        <div class="card">
          <h3>Simple Website</h3>
          <div class="price">
            $1,000 <small>starting at</small>
          </div>
          <p>
            A professional mobile-friendly website
            for your business.
          </p>
          <ul>
            <li>Responsive design</li>
            <li>Services and contact information</li>
            <li>Custom branding</li>
          </ul>
          <a href="#demo" data-page="demo"
             data-service="Simple Website"
             class="btn secondary">
            Request a Quote
          </a>
        </div>

        <div class="card">
          <h3>Advanced Website</h3>
          <div class="price">
            $2,000 <small>starting at</small>
          </div>
          <p>
            More advanced designs, pages,
            and interactive functionality.
          </p>
          <ul>
            <li>Advanced custom design</li>
            <li>Interactive features</li>
            <li>Custom integrations</li>
          </ul>
          <a href="#demo" data-page="demo"
             data-service="Advanced Website"
             class="btn secondary">
            Request a Quote
          </a>
        </div>
      </div>
      <p class="center">
        Final pricing depends on project requirements.
      </p>
    </section>

    <section class="section">
      <div class="banner">
        <h2>Ready for Your Custom Website?</h2>
        <p>Tell us about your business and request a free demo.</p>
        <a href="#demo" data-page="demo" class="btn">
          Book Your Free Demo
        </a>
      </div>
    </section>
  </div>
</div>

<!-- MARKETING PAGE -->
<div id="marketing" class="page">
  <section class="hero">
    <div class="container">
      <div class="kicker">VEXTRIVO Marketing</div>
      <h1>More Visibility. More Opportunities.</h1>
      <p class="lead">
        Organic marketing, Meta Ads, and Google Ads
        management for growing businesses.
      </p>
      <a href="#demo" data-page="demo"
         data-service="Marketing Consultation"
         class="btn">
        Discuss Marketing
      </a>
    </div>
  </section>

  <div class="container section">
    <div class="grid">
      <div class="card">
        <h3>Organic Marketing</h3>
        <div class="price">$500 <small>/month</small></div>
        <p>Content strategy and social media support.</p>
        <a href="#demo" data-page="demo"
           data-service="Organic Marketing" class="btn">
          Get Started
        </a>
      </div>
      <div class="card featured">
        <h3>Meta Ads</h3>
        <div class="price">$1,700 <small>/month</small></div>
        <p>Facebook and Instagram ad management.</p>
        <a href="#demo" data-page="demo"
           data-service="Meta Ads" class="btn">
          Get Started
        </a>
      </div>
      <div class="card">
        <h3>Google Ads</h3>
        <div class="price">$1,700 <small>/month</small></div>
        <p>Google advertising campaign management.</p>
        <a href="#demo" data-page="demo"
           data-service="Google Ads" class="btn">
          Get Started
        </a>
      </div>
    </div>
    <div class="notice">
      <strong>Ad spend is separate.</strong>
      The $1,700 monthly fee covers advertising management.
      The amount spent on ads is additional and chosen
      by the client. Results are not guaranteed.
    </div>
  </div>
</div>

<!-- FREE DEMO FORM -->
<div id="demo" class="page">
  <section class="hero" style="padding:70px 15px 40px">
    <div class="container">
      <div class="kicker">Free Website Demo</div>
      <h1>Tell Us About Your Dream Website.</h1>
      <p class="lead">
        Complete the questionnaire below.
        We'll reach out to discuss your custom website demo.
      </p>
    </div>
  </section>

  <div class="container">
    <form id="demoForm" class="formbox">

      <h2>Your Business</h2>

      <div class="formgrid">
        <div class="field">
          <label for="businessName">Business Name *</label>
          <input id="businessName" name="business_name"
                 required maxlength="120"
                 placeholder="Your business name">
        </div>

        <div class="field">
          <label for="businessType">
            What Type of Business Do You Have? *
          </label>
          <select id="businessType" name="business_type" required>
            <option value="">Select Business Type</option>
            <option>Automotive / Detailing</option>
            <option>Construction / Contracting</option>
            <option>Landscaping</option>
            <option>Restaurant</option>
            <option>Clothing / E-commerce</option>
            <option>Real Estate</option>
            <option>Beauty / Tattoo / Barber</option>
            <option>Health / Fitness</option>
            <option>Professional Services</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div class="field">
        <label for="businessDescription">
          What Does Your Business Do?
        </label>
        <textarea id="businessDescription"
                  name="business_description"
                  placeholder="Tell us about your services."></textarea>
      </div>

      <h2>Your Website Design</h2>

      <div class="formgrid">
        <div class="field">
          <label for="colorTheme">
            What Color Theme Do You Want? *
          </label>
          <select id="colorTheme" name="color_theme" required>
            <option value="">Select Color Theme</option>
            <option>Black and Gold</option>
            <option>Black and Blue</option>
            <option>Black and White</option>
            <option>White and Blue</option>
            <option>White and Green</option>
            <option>Plum and Orange</option>
            <option>Earth Tones</option>
            <option>Custom Colors</option>
            <option>Not Sure - Help Me Choose</option>
          </select>
        </div>

        <div class="field">
          <label for="websiteStyle">
            What Style Do You Like? *
          </label>
          <select id="websiteStyle" name="website_style" required>
            <option value="">Select Website Style</option>
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
        <label for="customColors">
          Specific Colors or Websites You Like
        </label>
        <input id="customColors"
               name="custom_colors_and_inspiration"
               placeholder="Example: Navy blue and silver">
      </div>

      <h2>Website Features</h2>
      <p>What would you like your website to include?</p>

      <div class="checkgrid">
        <label class="check">
          <input type="checkbox" name="features"
                 value="Online Booking">
          Online Booking / Calendar
        </label>
        <label class="check">
          <input type="checkbox" name="features"
                 value="Photo Gallery">
          Photo Gallery / Portfolio
        </label>
        <label class="check">
          <input type="checkbox" name="features"
                 value="Online Store">
          Online Store / Payments
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
                 value="Services and Pricing">
          Services and Pricing
        </label>
        <label class="check">
          <input type="checkbox" name="features"
                 value="Contact Form">
          Contact Form
        </label>
        <label class="check">
          <input type="checkbox" name="features"
                 value="Other">
          Other / Not Sure
        </label>
      </div>

      <div class="field" style="margin-top:25px">
        <label for="websiteVision">
          Describe Your Dream Website *
        </label>
        <textarea id="websiteVision"
                  name="website_vision"
                  required maxlength="2500"
                  placeholder="Tell us about the colors, photos, pages, buttons, animations, and other features you want."></textarea>
      </div>

      <div class="field">
        <label for="service">
          What Service Are You Interested In?
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

      <h2>How Can We Reach You?</h2>

      <div class="formgrid">
        <div class="field">
          <label for="contactName">Full Name *</label>
          <input id="contactName" name="full_name"
                 autocomplete="name" required>
        </div>

        <div class="field">
          <label for="contactEmail">Email Address *</label>
          <input id="contactEmail" name="email"
                 type="email" autocomplete="email"
                 required placeholder="you@example.com">
        </div>

        <div class="field">
          <label for="contactPhone">Phone Number *</label>
          <input id="contactPhone" name="phone"
                 type="tel" autocomplete="tel"
                 minlength="7" maxlength="30" required
                 placeholder="(555) 123-4567">
        </div>

        <div class="field">
          <label for="contactPreference">
            Preferred Contact Method
          </label>
          <select id="contactPreference"
                  name="contact_preference">
            <option>Email</option>
            <option>Phone Call</option>
            <option>Text Message</option>
          </select>
        </div>
      </div>

      <div class="notice">
        By submitting, you agree that VEXTRIVO
        may contact you about your website or
        marketing request. This is a demo request,
        not a confirmed appointment.
      </div>

      <input type="text" name="_honey"
             tabindex="-1" autocomplete="off"
             style="position:absolute;left:-9999px"
             aria-hidden="true">

      <button id="submitDemo" type="submit" class="btn">
        Send My Free Demo Request
      </button>

      <p id="formStatus" class="status" role="status"></p>
    </form>
  </div>
</div>

<!-- WEBSITE STUDIO -->
<div id="studio" class="page">
  <div class="container section">
    <div class="kicker">VEXTRIVO Studio</div>
    <h2>Website Creation Studio</h2>
    <p>
      Customize a starter website, preview it,
      edit the HTML, and download your template.
    </p>

    <div class="studio">
      <aside>
        <h2>Build Your Website</h2>
        <p>Customize your website template.</p>

        <label for="studioPrompt">
          Website Description
        </label>
        <textarea id="studioPrompt"
                  placeholder="Describe the website you want"></textarea>

        <label for="studioName">Business Name</label>
        <input id="studioName" value="Your Business">

        <label for="studioHeadline">Headline</label>
        <input id="studioHeadline"
               value="A Better Experience Starts Here">

        <label for="studioColor">Accent Color</label>
        <input id="studioColor" type="color"
               value="#4b7cff"
               style="height:50px;padding:5px">

        <button id="generateSite" class="btn"
                style="width:100%;margin-top:20px">
          Generate Website Template
        </button>
        <p style="font-size:13px">
          This studio uses a customizable template,
          not an AI website-generation service.
        </p>
      </aside>

      <main>
        <div class="toolbar">
          <button id="desktopBtn" type="button">Desktop</button>
          <button id="mobileBtn" type="button">Mobile</button>
          <button id="editorBtn" type="button">Code Editor</button>
          <button id="applyBtn" type="button">Apply Code</button>
          <button id="downloadBtn" type="button">Download HTML</button>
        </div>

        <div id="previewBox" class="preview">
          <iframe id="siteFrame"
                  title="Website Preview"
                  sandbox="allow-scripts"></iframe>
        </div>

        <textarea id="codeEditor"
                  spellcheck="false"
                  aria-label="Website HTML Code"></textarea>
      </main>
    </div>
  </div>
</div>

<footer>
  © <span id="year"></span> VEXTRIVO.
  Custom Websites & Marketing.
</footer>

<script>
'use strict';

// Booking requests go to this email.
const BOOKING_EMAIL = 'nkarpo49@gmail.com';

const pages = ['home', 'marketing', 'demo', 'studio'];
const el = id => document.getElementById(id);

// Website navigation
function navigate(page, scroll) {
  if (!pages.includes(page)) page = 'home';

  pages.forEach(id => {
    el(id).classList.toggle('active', id === page);
  });

  history.replaceState(
    null, '',
    '#' + (scroll || page)
  );

  window.scrollTo(0, 0);

  if (scroll) {
    setTimeout(() => {
      el(scroll)?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 60);
  }
}

document.querySelectorAll('[data-page]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    if (link.dataset.service) {
      el('service').value = link.dataset.service;
    }

    navigate(link.dataset.page, link.dataset.scroll);
  });
});

const hash = location.hash.slice(1);
if (pages.includes(hash)) {
  navigate(hash);
} else if (hash === 'pricing') {
  navigate('home', 'pricing');
}

el('year').textContent = new Date().getFullYear();

// FREE DEMO FORM
// Uses FormSubmit. First-time email activation is required.
el('demoForm').addEventListener('submit', async event => {
  event.preventDefault();

  const form = el('demoForm');
  const button = el('submitDemo');
  const status = el('formStatus');

  if (!form.reportValidity()) return;

  const data = new FormData(form);

  data.set(
    '_subject',
    'New VEXTRIVO Free Demo Request - ' +
    data.get('business_name')
  );
  data.set('_captcha', 'true');
  data.set('_template', 'table');

  button.disabled = true;
  button.textContent = 'Sending Request...';
  status.textContent = '';

  try {
    const response = await fetch(
      'https://formsubmit.co/ajax/' + BOOKING_EMAIL,
      {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      }
    );

    const result = await response.json();

    if (
      !response.ok ||
      result.success === false ||
      result.success === 'false'
    ) {
      throw new Error(
        result.message || 'Unable to submit request'
      );
    }

    status.textContent =
      'Your request has been submitted! ' +
      'We will reach out to you soon.';

    form.reset();

  } catch (error) {
    status.textContent =
      'There was a problem submitting your request. ' +
      'Please email ' + BOOKING_EMAIL + ' directly.';
  } finally {
    button.disabled = false;
    button.textContent = 'Send My Free Demo Request';
  }
});

// WEBSITE STUDIO
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}

let generated = '';

function makeTemplate() {
  const name = escapeHTML(
    el('studioName').value || 'Your Business'
  );
  const headline = escapeHTML(
    el('studioHeadline').value || 'Welcome'
  );
  const description = escapeHTML(
    el('studioPrompt').value ||
    'Professional services tailored to your needs.'
  );
  const color = el('studioColor').value;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${name}</title>
<style>
*{box-sizing:border-box}
body{
  margin:0;
  background:#0b0e16;
  color:white;
  font-family:Arial,sans-serif;
}
header{
  padding:24px 7%;
  display:flex;
  justify-content:space-between;
  align-items:center;
}
nav{display:flex;gap:20px}
a{color:inherit;text-decoration:none}
.hero{
  padding:110px 7%;
  background:radial-gradient(
    circle at 80% 20%,
    ${color}44,
    transparent 55%
  ),#101725;
}
.hero h1{
  font-size:clamp(40px,6vw,75px);
  max-width:800px;
}
.hero p{color:#bbc5d7;line-height:1.7}
.button{
  display:inline-block;
  padding:15px 25px;
  background:${color};
  border-radius:9px;
  margin-top:20px;
}
section.content{padding:70px 7%}
.cards{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}
.card{
  padding:25px;
  background:#182033;
  border-radius:14px;
}
footer{
  padding:30px 7%;
  border-top:1px solid #293653;
}
@media(max-width:700px){
  .cards{grid-template-columns:1fr}
  nav{display:none}
}
</style>
</head>
<body>
<header>
  <strong>${name}</strong>
  <nav>
    <a href="#services">Services</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>
</header>
<div class="hero">
  <small>WELCOME TO ${name}</small>
  <h1>${headline}</h1>
  <p>${description}</p>
  <a class="button" href="#contact">Get in Touch</a>
</div>
<section class="content" id="services">
  <h2>Our Services</h2>
  <div class="cards">
    <div class="card"><h3>Quality Work</h3></div>
    <div class="card"><h3>Personal Service</h3></div>
    <div class="card"><h3>Reliable Support</h3></div>
  </div>
</section>
<section class="content" id="about">
  <h2>About Us</h2>
  <p>${description}</p>
</section>
<section class="content" id="contact">
  <h2>Contact Us</h2>
  <p>Add your contact information here.</p>
</section>
<footer>© ${new Date().getFullYear()} ${name}</footer>
</body>
</html>`;
}

function updatePreview() {
  el('siteFrame').srcdoc = generated;
  el('codeEditor').value = generated;
}

el('generateSite').addEventListener('click', () => {
  generated = makeTemplate();
  updatePreview();
  el('previewBox').style.display = 'block';
  el('codeEditor').style.display = 'none';
});

el('desktopBtn').addEventListener('click', () => {
  el('previewBox').style.display = 'block';
  el('codeEditor').style.display = 'none';
  el('siteFrame').style.width = '100%';
});

el('mobileBtn').addEventListener('click', () => {
  el('previewBox').style.display = 'block';
  el('codeEditor').style.display = 'none';
  el('siteFrame').style.width = 'min(375px,100%)';
});

el('editorBtn').addEventListener('click', () => {
  el('previewBox').style.display = 'none';
  el('codeEditor').style.display = 'block';
});

el('applyBtn').addEventListener('click', () => {
  generated = el('codeEditor').value;
  updatePreview();
  el('previewBox').style.display = 'block';
  el('codeEditor').style.display = 'none';
});

el('downloadBtn').addEventListener('click', () => {
  const blob = new Blob(
    [generated],
    { type: 'text/html' }
  );

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = 'website-demo.html';
  link.click();

  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

generated = makeTemplate();
updatePreview();
</script>
</body>
</html>
