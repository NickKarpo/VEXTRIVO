<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>VEXTRIVO | Websites & Marketing</title>
<style>
:root {
  --bg:#090d19;
  --panel:#11192b;
  --panel2:#1c2941;
  --border:#30415e;
  --blue:#4d7cff;
  --white:#f6f8ff;
  --muted:#adbad2;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  background:var(--bg);
  color:var(--white);
  font:16px/1.6 system-ui,-apple-system,Segoe UI,Arial,sans-serif;
}
a{color:inherit;text-decoration:none}
button,input,select,textarea{font:inherit}
button{cursor:pointer}
.container{width:min(1150px,92%);margin:auto}
header{
  position:sticky;top:0;z-index:30;
  background:#090d19f2;
  border-bottom:1px solid var(--border);
}
.nav{
  display:flex;align-items:center;
  justify-content:space-between;gap:18px;
  flex-wrap:wrap;padding:15px 0;
}
.logo{font-size:25px;font-weight:900;letter-spacing:2px}
.logo span{color:var(--blue)}
nav{display:flex;gap:20px;flex-wrap:wrap}
nav a:hover{color:#91adff}
.btn{
  display:inline-block;border:0;border-radius:10px;
  padding:13px 21px;background:var(--blue);
  color:white;font-weight:750;text-align:center;
}
.btn:hover{filter:brightness(1.14)}
.btn.alt{background:#263650}
.btn:disabled{opacity:.6;cursor:wait}
.page{display:none}
.page.active{display:block}
.hero{
  padding:105px 20px;text-align:center;
  background:radial-gradient(
    ellipse at 50% 0%,#27478366,transparent 65%
  );
}
.eyebrow{
  font-size:12px;color:#9ab6ff;font-weight:800;
  letter-spacing:2px;text-transform:uppercase;
}
h1{
  font-size:clamp(40px,6vw,74px);
  line-height:1.1;max-width:950px;margin:17px auto;
}
h2{font-size:clamp(28px,4vw,42px);line-height:1.2}
h3{font-size:22px}
p{color:var(--muted)}
.lead{max-width:710px;margin:20px auto 30px;font-size:19px}
.actions{
  display:flex;justify-content:center;
  gap:12px;flex-wrap:wrap;
}
.section{padding:70px 0}
.center{text-align:center}
.grid{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:20px;margin-top:32px;
}
.card{
  background:linear-gradient(140deg,#18243b,#111827);
  border:1px solid var(--border);
  border-radius:18px;padding:26px;
}
.card.featured{border-color:var(--blue)}
.price{font-size:38px;font-weight:900}
.price small{
  font-size:15px;color:var(--muted);font-weight:400;
}
ul{color:#d4def0;line-height:2;padding-left:20px}
.banner{
  background:var(--panel);
  border:1px solid var(--border);
  border-radius:18px;padding:35px;text-align:center;
}
.notice{
  background:#192741;border:1px solid var(--border);
  border-radius:12px;padding:16px;
  color:#cbd7ed;margin:20px 0;
}

/* Centered Free Demo form */
.demo-layout{
  min-height:calc(100vh - 160px);
  padding:65px 18px 85px;
  background:radial-gradient(
    circle at 50% 0%,#1b3056 0%,var(--bg) 60%
  );
  display:flex;
  flex-direction:column;
  align-items:center;
}
.demo-heading{text-align:center;max-width:760px}
.demo-form{
  width:min(780px,100%);
  margin:28px auto 0;
  padding:30px;
  background:var(--panel);
  border:1px solid var(--border);
  border-radius:20px;
  box-shadow:0 20px 65px #0005;
}
.demo-form h3{margin:30px 0 16px}
.formgrid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:16px;
}
.field{margin-bottom:17px}
.field label{
  display:block;font-size:14px;
  font-weight:700;margin-bottom:7px;
}
.field input,.field select,.field textarea{
  width:100%;background:var(--panel2);
  border:1px solid #475979;color:white;
  border-radius:9px;padding:13px;min-height:46px;
}
.field textarea{min-height:115px;resize:vertical}
.field input:focus,.field select:focus,.field textarea:focus{
  outline:2px solid var(--blue);
}
.checkgrid{
  display:grid;grid-template-columns:1fr 1fr;gap:10px;
}
.check{
  display:flex;align-items:center;gap:9px;
  padding:11px;background:var(--panel2);
  border:1px solid var(--border);border-radius:9px;
}
.check input{
  accent-color:var(--blue);width:17px;height:17px;
}
.status{min-height:25px;color:#a8ebc8}

/* Website Studio */
.studio-shell{
  display:grid;
  grid-template-columns:320px minmax(0,1fr);
  border:1px solid var(--border);
  border-radius:15px;
  overflow:hidden;
  margin:25px 0 70px;
  background:var(--bg);
}
.studio-sidebar{
  background:#101727;padding:24px;
  border-right:1px solid var(--border);
}
.studio-sidebar label{
  display:block;margin:16px 0 6px;font-size:14px;
}
.studio-sidebar input,.studio-sidebar textarea{
  width:100%;background:var(--panel2);
  color:white;border:1px solid #465776;
  border-radius:9px;padding:12px;
}
.studio-sidebar textarea{min-height:115px}
.studio-main{min-width:0;background:#0c1220}
.toolbar{
  display:flex;flex-wrap:wrap;gap:8px;
  padding:13px;border-bottom:1px solid var(--border);
}
.toolbar button{
  background:#26344f;color:white;
  border:0;border-radius:8px;padding:10px 12px;
}
.toolbar button:hover{background:var(--blue)}
.preview{
  padding:18px;background:#0c1220;
  min-height:610px;overflow:auto;
}
#siteFrame{
  display:block;width:100%;height:570px;
  margin:0 auto;border:1px solid #31415d;
  border-radius:12px;background:#0b1020;color:white;
}
#codeEditor{
  display:none;width:100%;height:610px;
  border:0;background:#0a1020;color:#e5edff;
  padding:18px;font:13px/1.55 monospace;
  resize:vertical;
}
footer{
  text-align:center;padding:28px;
  border-top:1px solid var(--border);
  color:var(--muted);
}
@media(max-width:850px){
  .grid,.studio-shell{grid-template-columns:1fr}
  .studio-sidebar{
    border-right:0;
    border-bottom:1px solid var(--border);
  }
  .nav{justify-content:center}
  .hero{padding:75px 15px}
}
@media(max-width:560px){
  .formgrid,.checkgrid{grid-template-columns:1fr}
  .demo-form{padding:20px}
  nav{justify-content:center;gap:12px}
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
      <a href="#pricing" data-page="home" data-scroll="pricing">
        Pricing
      </a>
      <a href="#marketing" data-page="marketing">Marketing</a>
      <a href="#studio" data-page="studio">Website Studio</a>
      <a href="#demo" data-page="demo">Free Demo</a>
    </nav>
    <a class="btn" href="#demo" data-page="demo">
      Book Free Demo
    </a>
  </div>
</header>

<!-- HOME -->
<section class="page active" id="home">
  <div class="hero">
    <div class="container">
      <div class="eyebrow">
        Custom Websites & Digital Marketing
      </div>
      <h1>
        Your Business Deserves a Website That Stands Out.
      </h1>
      <p class="lead">
        Professional websites tailored to your business.
        Tell us your vision, preferred colors, and the
        features you need.
      </p>
      <div class="actions">
        <a class="btn" href="#demo" data-page="demo">
          Get My Free Website Demo
        </a>
        <a class="btn alt" href="#studio" data-page="studio">
          Explore Website Studio
        </a>
      </div>
    </div>
  </div>

  <div class="container">
    <section class="section">
      <div class="center">
        <div class="eyebrow">How It Works</div>
        <h2>From Idea to Launch</h2>
      </div>
      <div class="grid">
        <div class="card">
          <h3>01. Tell Us Your Vision</h3>
          <p>
            Describe your business, colors, style and
            the features you need.
          </p>
        </div>
        <div class="card">
          <h3>02. We Get in Touch</h3>
          <p>
            We review your request and contact you
            about your demo.
          </p>
        </div>
        <div class="card">
          <h3>03. Build & Grow</h3>
          <p>
            Choose a custom website and marketing
            services for your business.
          </p>
        </div>
      </div>
    </section>

    <section id="pricing" class="section">
      <div class="center">
        <div class="eyebrow">Website Pricing</div>
        <h2>Websites for Every Business</h2>
      </div>
      <div class="grid">
        <div class="card featured">
          <h3>Free Demo Request</h3>
          <div class="price">$0</div>
          <p>
            Share your goals and request a free
            demo consultation.
          </p>
          <ul>
            <li>Business questionnaire</li>
            <li>Design preferences</li>
            <li>Feature requests</li>
          </ul>
          <a class="btn" href="#demo" data-page="demo">
            Request Free Demo
          </a>
        </div>

        <div class="card">
          <h3>Simple Website</h3>
          <div class="price">
            $1,000 <small>starting at</small>
          </div>
          <p>
            Professional mobile-friendly business websites.
          </p>
          <ul>
            <li>Responsive design</li>
            <li>Services and contact</li>
            <li>Custom branding</li>
          </ul>
          <a class="btn alt" href="#demo" data-page="demo"
             data-service="Simple Website">
            Request a Quote
          </a>
        </div>

        <div class="card">
          <h3>Advanced Website</h3>
          <div class="price">
            $2,000 <small>starting at</small>
          </div>
          <p>
            Advanced layouts and custom interactive features.
          </p>
          <ul>
            <li>Custom design</li>
            <li>Interactive features</li>
            <li>Project-specific integrations</li>
          </ul>
          <a class="btn alt" href="#demo" data-page="demo"
             data-service="Advanced Website">
            Request a Quote
          </a>
        </div>
      </div>
      <p class="center">
        Final pricing depends on the scope of your project.
      </p>
    </section>

    <section class="section">
      <div class="banner">
        <h2>Ready for Your Custom Website?</h2>
        <p>
          Tell us what you need and request your free demo.
        </p>
        <a class="btn" href="#demo" data-page="demo">
          Book Your Free Demo
        </a>
      </div>
    </section>
  </div>
</section>

<!-- MARKETING -->
<section class="page" id="marketing">
  <div class="hero">
    <div class="container">
      <div class="eyebrow">VEXTRIVO Marketing</div>
      <h1>More Visibility. More Opportunities.</h1>
      <p class="lead">
        Organic marketing, Meta Ads and Google Ads
        management for growing businesses.
      </p>
      <a class="btn" href="#demo" data-page="demo"
         data-service="Marketing Consultation">
        Discuss Marketing
      </a>
    </div>
  </div>

  <div class="container section">
    <div class="grid">
      <div class="card">
        <h3>Organic Marketing</h3>
        <div class="price">$500 <small>/month</small></div>
        <p>Content strategy and organic social media support.</p>
        <a class="btn" href="#demo" data-page="demo"
           data-service="Organic Marketing">
          Get Started
        </a>
      </div>
      <div class="card featured">
        <h3>Meta Ads</h3>
        <div class="price">$1,700 <small>/month</small></div>
        <p>Facebook and Instagram advertising management.</p>
        <a class="btn" href="#demo" data-page="demo"
           data-service="Meta Ads">
          Get Started
        </a>
      </div>
      <div class="card">
        <h3>Google Ads</h3>
        <div class="price">$1,700 <small>/month</small></div>
        <p>Google advertising management.</p>
        <a class="btn" href="#demo" data-page="demo"
           data-service="Google Ads">
          Get Started
        </a>
      </div>
    </div>
    <div class="notice">
      <strong>Ad spend is separate.</strong>
      The $1,700 monthly fee covers management;
      the advertising budget is additional and chosen
      by the client. Results are not guaranteed.
    </div>
  </div>
</section>

<!-- FREE DEMO FORM -->
<section class="page" id="demo">
  <div class="demo-layout">
    <div class="demo-heading">
      <div class="eyebrow">Free Website Demo</div>
      <h2>Tell Us About Your Dream Website.</h2>
      <p>
        Fill out the form below. We'll reach out
        to discuss your custom website demo.
      </p>
    </div>

    <form class="demo-form" id="demoForm">
      <h3>Your Business</h3>
      <div class="formgrid">
        <div class="field">
          <label for="businessName">Business Name *</label>
          <input id="businessName" name="business_name"
                 maxlength="120" required
                 placeholder="Your business name">
        </div>
        <div class="field">
          <label for="businessType">Type of Business *</label>
          <select id="businessType" name="business_type" required>
            <option value="">Select business type</option>
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

      <h3>Your Website Design</h3>
      <div class="formgrid">
        <div class="field">
          <label for="colorTheme">Preferred Color Theme *</label>
          <select id="colorTheme" name="color_theme" required>
            <option value="">Choose colors</option>
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
          <label for="websiteStyle">Website Style *</label>
          <select id="websiteStyle" name="website_style" required>
            <option value="">Choose style</option>
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
        <label for="inspiration">
          Custom Colors or Example Websites
        </label>
        <input id="inspiration"
               name="colors_and_inspiration"
               placeholder="Example: Navy blue and silver">
      </div>

      <h3>What Features Do You Want?</h3>
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

      <div class="field" style="margin-top:22px">
        <label for="vision">
          Describe Your Dream Website *
        </label>
        <textarea id="vision" name="website_vision"
                  maxlength="2500" required
                  placeholder="Tell us about photos, pages, buttons, animations, and anything else you want."></textarea>
      </div>

      <div class="field">
        <label for="service">Service You're Interested In</label>
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

      <h3>How Can We Reach You?</h3>
      <div class="formgrid">
        <div class="field">
          <label for="fullName">Full Name *</label>
          <input id="fullName" name="full_name"
                 autocomplete="name" required>
        </div>
        <div class="field">
          <label for="contactEmail">Email Address *</label>
          <input id="contactEmail" name="email"
                 type="email" autocomplete="email"
                 required placeholder="you@example.com">
        </div>
        <div class="field">
          <label for="phone">Phone Number *</label>
          <input id="phone" name="phone"
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
        may contact you about your request.
        This is a demo request, not a confirmed appointment.
      </div>

      <input type="text" name="_honey"
             tabindex="-1" autocomplete="off"
             aria-hidden="true"
             style="position:absolute;left:-9999px">

      <button id="submitDemo" class="btn" type="submit">
        Send My Free Demo Request
      </button>
      <p id="formStatus" class="status" role="status"></p>
    </form>
  </div>
</section>

<!-- WEBSITE STUDIO -->
<section class="page" id="studio">
  <div class="container section">
    <div class="eyebrow">VEXTRIVO Studio</div>
    <h2>Website Creation Studio</h2>
    <p>
      Customize a starter website, preview it,
      edit the HTML, and download your template.
    </p>

    <div class="studio-shell">
      <aside class="studio-sidebar">
        <h2>Build Your Website</h2>
        <p>Customize your website template.</p>

        <label for="studioPrompt">Website Description</label>
        <textarea id="studioPrompt"
                  placeholder="Describe the website you want"></textarea>

        <label for="studioName">Business Name</label>
        <input id="studioName" value="Your Business">

        <label for="studioHeadline">Headline</label>
        <input id="studioHeadline"
               value="A Better Experience Starts Here">

        <label for="studioColor">Accent Color</label>
        <input id="studioColor" type="color"
               value="#4d7cff"
               style="height:50px;padding:5px">

        <button id="generateSite" class="btn"
                style="width:100%;margin-top:20px">
          Generate Website Template
        </button>

        <p style="font-size:13px">
          This is a customizable template generator,
          not an AI website builder.
        </p>

        <a href="#demo" data-page="demo"
           class="btn alt"
           style="margin-top:15px;width:100%">
          Request a Free Demo
        </a>
      </aside>

      <div class="studio-main">
        <div class="toolbar">
          <button id="desktopBtn" type="button">Desktop</button>
          <button id="mobileBtn" type="button">Mobile</button>
          <button id="editorBtn" type="button">Code Editor</button>
          <button id="applyBtn" type="button">Apply Code</button>
          <button id="downloadBtn" type="button">
            Download HTML
          </button>
        </div>

        <div class="preview" id="previewBox">
          <iframe id="siteFrame"
                  title="Website Preview"
                  sandbox="allow-scripts"></iframe>
        </div>

        <textarea id="codeEditor"
                  spellcheck="false"
                  aria-label="Website HTML Code"></textarea>
      </div>
    </div>
  </div>
</section>

<footer>
  © <span id="year"></span> VEXTRIVO.
  Custom Websites & Marketing.
</footer>

<script>
'use strict';

const BOOKING_EMAIL = 'nkarpo49@gmail.com';
const $ = id => document.getElementById(id);
const pages = ['home','marketing','demo','studio'];

function navigate(page,scroll) {
  if (!pages.includes(page)) page = 'home';

  pages.forEach(id => {
    $(id).classList.toggle('active',id===page);
  });

  history.replaceState(
    null,'','#'+(scroll||page)
  );

  window.scrollTo(0,0);

  if (scroll) {
    requestAnimationFrame(() => {
      $(scroll)?.scrollIntoView({behavior:'smooth'});
    });
  }
}

document.querySelectorAll('[data-page]').forEach(link => {
  link.addEventListener('click',e => {
    e.preventDefault();

    if (link.dataset.service) {
      $('service').value = link.dataset.service;
    }

    navigate(link.dataset.page,link.dataset.scroll);
  });
});

$('year').textContent = new Date().getFullYear();

const initial = location.hash.slice(1);

if (pages.includes(initial)) {
  navigate(initial);
} else if (initial === 'pricing') {
  navigate('home','pricing');
}

// FormSubmit email submission
$('demoForm').addEventListener('submit',async e => {
  e.preventDefault();

  const form = $('demoForm');
  const button = $('submitDemo');
  const status = $('formStatus');

  if (!form.reportValidity()) return;

  const data = new FormData(form);

  data.set(
    '_subject',
    'New VEXTRIVO Demo Request - ' +
    data.get('business_name')
  );

  data.set('_captcha','true');
  data.set('_template','table');

  button.disabled = true;
  button.textContent = 'Sending Request...';
  status.textContent = '';

  try {
    const response = await fetch(
      'https://formsubmit.co/ajax/' + BOOKING_EMAIL,
      {
        method:'POST',
        body:data,
        headers:{Accept:'application/json'}
      }
    );

    const result = await response.json();

    if (
      !response.ok ||
      result.success === false ||
      result.success === 'false'
    ) {
      throw Error(result.message || 'Request failed');
    }

    status.textContent =
      'Request submitted. If this is the first submission, ' +
      'the recipient must activate FormSubmit by email ' +
      'before requests can be delivered.';

    form.reset();

  } catch(error) {
    status.textContent =
      'Submission failed. Please email ' +
      BOOKING_EMAIL + ' directly.';
  } finally {
    button.disabled = false;
    button.textContent = 'Send My Free Demo Request';
  }
});

// Safe text for generated HTML
function esc(value) {
  return String(value).replace(/[&<>"']/g,c => ({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#39;'
  }[c]));
}

let generated = '';

function makeTemplate() {
  const name = esc(
    $('studioName').value || 'Your Business'
  );
  const headline = esc(
    $('studioHeadline').value || 'Welcome'
  );
  const description = esc(
    $('studioPrompt').value ||
    'Professional services tailored to your needs.'
  );
  const color = $('studioColor').value;

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
  background:#0b1020;
  color:#fff;
  font-family:Arial,sans-serif;
}
header{
  padding:24px 7%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  background:#0d1425;
}
nav{display:flex;gap:20px}
a{color:inherit;text-decoration:none}
.hero{
  padding:100px 7%;
  background:radial-gradient(
    circle at 80% 20%,
    ${color}44,
    transparent 55%
  ),#101725;
}
.hero h1{
  font-size:clamp(36px,6vw,72px);
  max-width:800px;
}
.hero p{color:#c2cce0;line-height:1.7}
.button{
  display:inline-block;
  padding:15px 25px;
  background:${color};
  border-radius:9px;
  margin-top:20px;
}
section{padding:70px 7%}
.cards{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}
.card{
  padding:25px;
  background:#1b2940;
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
<section id="services">
  <h2>Our Services</h2>
  <div class="cards">
    <div class="card"><h3>Quality Work</h3></div>
    <div class="card"><h3>Personal Service</h3></div>
    <div class="card"><h3>Reliable Support</h3></div>
  </div>
</section>
<section id="about">
  <h2>About Us</h2>
  <p>${description}</p>
</section>
<section id="contact">
  <h2>Contact Us</h2>
  <p>Add your contact information here.</p>
</section>
<footer>© ${new Date().getFullYear()} ${name}</footer>
</body>
</html>`;
}

function updatePreview() {
  $('siteFrame').srcdoc = generated;
  $('codeEditor').value = generated;
}

$('generateSite').addEventListener('click',() => {
  generated = makeTemplate();
  updatePreview();
  $('previewBox').style.display = 'block';
  $('codeEditor').style.display = 'none';
});

$('desktopBtn').addEventListener('click',() => {
  $('previewBox').style.display = 'block';
  $('codeEditor').style.display = 'none';
  $('siteFrame').style.width = '100%';
});

$('mobileBtn').addEventListener('click',() => {
  $('previewBox').style.display = 'block';
  $('codeEditor').style.display = 'none';
  $('siteFrame').style.width = 'min(375px,100%)';
});

$('editorBtn').addEventListener('click',() => {
  $('previewBox').style.display = 'none';
  $('codeEditor').style.display = 'block';
});

$('applyBtn').addEventListener('click',() => {
  generated = $('codeEditor').value;
  updatePreview();
  $('previewBox').style.display = 'block';
  $('codeEditor').style.display = 'none';
});

$('downloadBtn').addEventListener('click',() => {
  const blob = new Blob(
    [generated],
    {type:'text/html'}
  );

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');

  a.href = url;
  a.download = 'website-demo.html';
  a.click();

  setTimeout(() => URL.revokeObjectURL(url),1000);
});

// Show a dark starter website immediately
generated = makeTemplate();
updatePreview();
</script>
</body>
</html>
