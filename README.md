<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>VEXTRIVO | Request Your Free Website Demo</title>
<meta name="description" content="Tell VEXTRIVO about your business and request a personally designed website demo.">

<style>
:root {
  --bg:#0b1224;
  --panel:#121e35;
  --field:#1d2b44;
  --line:#3b4b67;
  --text:#f6f8ff;
  --muted:#b9c6db;
  --accent:#5481ff;
}

* { box-sizing:border-box; }

html { scroll-behavior:smooth; }

body {
  margin:0;
  color:var(--text);
  font:16px/1.55 system-ui,-apple-system,Segoe UI,Arial,sans-serif;
  background:var(--bg);
  min-height:100vh;
  overflow-x:hidden;
}

body:before {
  content:"";
  position:fixed;
  inset:-30%;
  pointer-events:none;
  z-index:-1;
  background:
    radial-gradient(ellipse at 45% 38%,#213a69 0%,transparent 48%),
    radial-gradient(ellipse at 80% 75%,#14294a 0%,transparent 45%);
  animation:flow 22s ease-in-out infinite alternate;
  opacity:.65;
}

@keyframes flow {
  0% { transform:translate(-3%,0); }
  100% { transform:translate(4%,3%); }
}

@media(prefers-reduced-motion:reduce) {
  body:before { animation:none; }
}

header {
  border-bottom:1px solid #ffffff16;
  background:#0b1224e8;
}

header .inner {
  max-width:960px;
  margin:auto;
  padding:20px 22px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:14px;
}

.logo {
  font-weight:900;
  letter-spacing:2px;
  font-size:23px;
}

.logo span { color:var(--accent); }

.header-note {
  color:var(--muted);
  font-size:13px;
}

main {
  max-width:860px;
  margin:0 auto;
  padding:58px 20px 90px;
}

.intro {
  text-align:center;
  margin:0 auto 30px;
  max-width:690px;
}

.eyebrow {
  color:#a9c0ff;
  font-weight:800;
  letter-spacing:2px;
  font-size:12px;
  text-transform:uppercase;
}

h1 {
  font-size:clamp(32px,5vw,49px);
  line-height:1.12;
  margin:14px 0;
}

p { color:var(--muted); }

.intro p { font-size:17px; }

form {
  background:var(--panel);
  border:1px solid var(--line);
  border-radius:20px;
  padding:36px;
  box-shadow:0 25px 65px #0003;
}

.section-title {
  font-size:19px;
  margin:32px 0 18px;
  padding-bottom:10px;
  border-bottom:1px solid #ffffff1c;
}

.section-title:first-child { margin-top:0; }

.grid {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:16px;
}

.field { margin-bottom:17px; }

.field label,
.group-label {
  display:block;
  font-size:14px;
  font-weight:700;
  margin-bottom:8px;
}

input:not([type=checkbox]),
select,
textarea {
  width:100%;
  background:var(--field);
  border:1px solid #52617b;
  border-radius:10px;
  padding:13px 14px;
  color:var(--text);
  font:inherit;
}

input::placeholder,
textarea::placeholder {
  color:#a3b0c5;
}

textarea {
  resize:vertical;
  min-height:110px;
}

input:focus,
select:focus,
textarea:focus {
  outline:2px solid var(--accent);
  outline-offset:1px;
}

select option { background:var(--field); }

.checks {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
  margin-bottom:18px;
}

.check {
  display:flex;
  align-items:center;
  gap:10px;
  border:1px solid var(--line);
  border-radius:10px;
  background:var(--field);
  padding:11px 13px;
  font-size:14px;
}

.check input {
  accent-color:var(--accent);
  width:17px;
  height:17px;
  flex-shrink:0;
}

.hint {
  font-size:13px;
  color:var(--muted);
  margin-top:5px;
}

.submit {
  width:100%;
  border:0;
  border-radius:11px;
  padding:16px 22px;
  background:var(--accent);
  color:white;
  font:800 16px system-ui;
  cursor:pointer;
}

.submit:hover { filter:brightness(1.1); }

.submit:disabled {
  opacity:.6;
  cursor:wait;
}

.status {
  min-height:25px;
  text-align:center;
  color:#b6f0d0;
}

.status.error { color:#ffbdbd; }

.privacy {
  font-size:12px;
  text-align:center;
  margin-top:14px;
}

.hidden {
  position:absolute;
  left:-9999px;
}

.foot {
  text-align:center;
  color:var(--muted);
  padding:0 20px 30px;
  font-size:13px;
}

@media(max-width:640px) {
  main { padding:42px 14px 70px; }
  form { padding:22px 18px; }
  .grid,.checks { grid-template-columns:1fr; }
  .header-note { display:none; }
}
</style>
</head>

<body>

<header>
  <div class="inner">
    <div class="logo">VEX<span>TRIVO</span></div>
    <div class="header-note">
      Custom Websites & Digital Marketing
    </div>
  </div>
</header>

<main>

  <div class="intro">
    <div class="eyebrow">
      VEXTRIVO · FREE CUSTOM WEBSITE DEMO
    </div>

    <h1>Tell Us About Your Dream Website</h1>

    <p>
      Answer a few questions so we can personally design
      a custom website demo for your business.
      No automatic generator — a real person will review
      your request.
    </p>
  </div>

  <form
    id="demoForm"
    action="https://formsubmit.co/nkarpo49@gmail.com"
    method="POST">

    <h2 class="section-title">1. About Your Business</h2>

    <div class="grid">
      <div class="field">
        <label for="business">Business Name *</label>
        <input
          id="business"
          name="Business Name"
          required
          placeholder="Your business name"
          maxlength="120">
      </div>

      <div class="field">
        <label for="industry">Business Type *</label>
        <select id="industry" name="Business Type" required>
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
        required
        maxlength="2500"
        placeholder="Tell us about your services, products, and customers."></textarea>
    </div>

    <div class="grid">
      <div class="field">
        <label for="location">City / Service Area</label>
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

    <h2 class="section-title">2. Your Website Style</h2>

    <div class="grid">
      <div class="field">
        <label for="colors">Color Theme *</label>
        <select id="colors" name="Color Theme" required>
          <option value="">Select a theme</option>
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
        <label for="style">Website Style *</label>
        <select id="style" name="Website Style" required>
          <option value="">Select a style</option>
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
      <label for="inspiration">
        Example Websites or Design Inspiration
      </label>
      <textarea
        id="inspiration"
        name="Website Inspiration"
        placeholder="Paste links to websites you like or describe the look you want."></textarea>
    </div>

    <h2 class="section-title">3. Pages & Features</h2>

    <div class="group-label">What pages do you want?</div>

    <div class="checks">
      <label class="check">
        <input type="checkbox" name="Pages" value="Home">
        Home
      </label>
      <label class="check">
        <input type="checkbox" name="Pages" value="About">
        About Us
      </label>
      <label class="check">
        <input type="checkbox" name="Pages" value="Services">
        Services
      </label>
      <label class="check">
        <input type="checkbox" name="Pages" value="Pricing">
        Pricing
      </label>
      <label class="check">
        <input type="checkbox" name="Pages" value="Gallery">
        Gallery / Portfolio
      </label>
      <label class="check">
        <input type="checkbox" name="Pages" value="Contact">
        Contact
      </label>
      <label class="check">
        <input type="checkbox" name="Pages" value="Online Shop">
        Online Shop
      </label>
      <label class="check">
        <input type="checkbox" name="Pages" value="Other">
        Other / Not Sure
      </label>
    </div>

    <div class="group-label">
      What features should it include?
    </div>

    <div class="checks">
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
               value="Reviews">
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
               value="Location Map">
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
        required
        maxlength="5000"
        placeholder="Describe the homepage, photos, colors, buttons, features, and anything specific you want us to build."></textarea>
    </div>

    <div class="field">
      <label for="assets">
        Do You Have a Logo and Photos?
      </label>
      <select id="assets" name="Logo and Photos">
        <option>Yes, I have both</option>
        <option>I have a logo only</option>
        <option>I have photos only</option>
        <option>No, I need help with both</option>
      </select>
    </div>

    <h2 class="section-title">4. Project Goals</h2>

    <div class="grid">
      <div class="field">
        <label for="goal">Main Goal</label>
        <select id="goal" name="Website Goal">
          <option>Get more calls / leads</option>
          <option>Book appointments</option>
          <option>Sell products</option>
          <option>Showcase my work</option>
          <option>Improve my brand</option>
          <option>Other</option>
        </select>
      </div>

      <div class="field">
        <label for="budget">Estimated Budget</label>
        <select id="budget" name="Estimated Budget">
          <option>Not sure yet</option>
          <option>Under $1,000</option>
          <option>$1,000–$1,500</option>
          <option>$1,500–$2,500</option>
          <option>$2,500–$5,000</option>
          <option>$5,000+</option>
        </select>
      </div>

      <div class="field">
        <label for="timeline">Desired Timeline</label>
        <select id="timeline" name="Timeline">
          <option>Just exploring</option>
          <option>As soon as possible</option>
          <option>Within 2 weeks</option>
          <option>Within 1 month</option>
          <option>Within 2–3 months</option>
          <option>Flexible</option>
        </select>
      </div>

      <div class="field">
        <label for="interest">Interested In</label>
        <select id="interest" name="Service Interest">
          <option>Free Website Demo</option>
          <option>Simple Website</option>
          <option>Advanced Website</option>
          <option>Organic Marketing</option>
          <option>Meta Ads</option>
          <option>Google Ads</option>
        </select>
      </div>
    </div>

    <h2 class="section-title">
      5. Your Contact Information
    </h2>

    <div class="grid">
      <div class="field">
        <label for="name">Full Name *</label>
        <input
          id="name"
          name="Full Name"
          autocomplete="name"
          required
          maxlength="120">
      </div>

      <div class="field">
        <label for="email">Email Address *</label>
        <input
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          required>
      </div>

      <div class="field">
        <label for="phone">Phone Number *</label>
        <input
          id="phone"
          name="Phone Number"
          type="tel"
          autocomplete="tel"
          required
          maxlength="30">
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
        placeholder="Other requests, questions, or important details."></textarea>
    </div>

    <input
      class="hidden"
      type="text"
      name="_honey"
      tabindex="-1"
      autocomplete="off"
      aria-hidden="true">

    <button
      class="submit"
      id="submit"
      type="submit">
      Send My Free Demo Request
    </button>

    <p
      class="status"
      id="status"
      role="status"
      aria-live="polite"></p>

    <p class="privacy">
      By submitting, you agree that VEXTRIVO
      may contact you about your request.
      This is not a confirmed appointment.
    </p>

  </form>
</main>

<div class="foot">
  © <span id="year"></span>
  VEXTRIVO · Custom Websites & Marketing
</div>

<script>
'use strict';

document.getElementById('year').textContent =
  new Date().getFullYear();

const form = document.getElementById('demoForm');

form.addEventListener('submit', async event => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  const button = document.getElementById('submit');
  const status = document.getElementById('status');

  const data = new FormData(form);

  data.set(
    '_subject',
    'VEXTRIVO Free Demo Request - ' +
    data.get('Business Name')
  );

  data.set('_template', 'table');

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
      throw new Error('Submission not accepted');
    }

    status.textContent =
      'Your request was submitted! ' +
      'We will contact you about your custom demo.';

    form.reset();

  } catch(error) {
    status.classList.add('error');
    status.textContent =
      'The request could not be sent. ' +
      'Please email nk arpo49@gmail.com directly.'
        .replace('nk arpo','nkarpo');
  } finally {
    button.disabled = false;
    button.textContent = 'Send My Free Demo Request';
  }
});
</script>

</body>
</html>
