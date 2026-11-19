<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="VEXTRIVO creates custom websites and provides digital marketing services. Request your free website demo.">
<title>VEXTRIVO | Custom Websites & Marketing</title>

<style>
:root{
  --bg:#080f20;
  --navy:#0d1930;
  --panel:#101d35;
  --field:#1d2d49;
  --line:#344b70;
  --blue:#2874ff;
  --blue2:#64a1ff;
  --white:#f7f9ff;
  --muted:#aebed6;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  background:var(--bg);
  color:var(--white);
  font-family:Inter,system-ui,-apple-system,Arial,sans-serif;
  line-height:1.6;
}
a{color:inherit;text-decoration:none}
button,input,select,textarea{font:inherit}
button{cursor:pointer}
.container{width:min(1180px,92%);margin:auto}
header{
  position:sticky;
  top:0;
  z-index:50;
  background:#080f20f5;
  border-bottom:1px solid #ffffff17;
  backdrop-filter:blur(14px);
}
.navbar{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
  padding:17px 0;
}
.logo{
  font-size:25px;
  font-weight:900;
  letter-spacing:2px;
  white-space:nowrap;
}
.logo span{color:var(--blue2)}
nav{display:flex;align-items:center;gap:25px}
nav a{font-size:14px;font-weight:600}
nav a:hover{color:var(--blue2)}
.btn{
  display:inline-flex;
  justify-content:center;
  align-items:center;
  gap:10px;
  border:1px solid transparent;
  border-radius:10px;
  padding:14px 23px;
  background:var(--blue);
  color:white;
  font-weight:750;
  text-align:center;
  transition:.2s ease;
}
.btn:hover{
  background:#478aff;
  transform:translateY(-2px);
}
.btn.outline{
  background:#ffffff0b;
  border-color:#4c6385;
}
.btn.outline:hover{background:#ffffff18}
.btn:disabled{opacity:.6;cursor:wait}
.page{display:none}
.page.active{display:block}

/* HOME */
.hero{
  position:relative;
  isolation:isolate;
  text-align:center;
  padding:120px 20px 110px;
  overflow:hidden;
}
.hero:before{
  content:"";
  position:absolute;
  inset:0;
  z-index:-1;
  background:
    radial-gradient(ellipse at 50% 0%,#1d4e9a80,transparent 60%),
    radial-gradient(ellipse at 90% 90%,#12305b70,transparent 50%);
}
.eyebrow{
  color:#8cb7ff;
  text-transform:uppercase;
  letter-spacing:3px;
  font-size:12px;
  font-weight:800;
}
h1{
  font-size:clamp(40px,6vw,76px);
  line-height:1.08;
  letter-spacing:-2px;
  max-width:960px;
  margin:20px auto;
}
h1 span,.gradient{
  background:linear-gradient(90deg,#ffffff,#4e95ff);
  -webkit-background-clip:text;
  background-clip:text;
  color:transparent;
}
h2{
  font-size:clamp(29px,4vw,45px);
  line-height:1.18;
  letter-spacing:-1px;
}
h3{font-size:21px}
p{color:var(--muted)}
.lead{
  max-width:730px;
  margin:20px auto 30px;
  font-size:18px;
}
.actions{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:13px;
}
.section{padding:85px 0}
.center{text-align:center}
.cards{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:20px;
  margin-top:35px;
}
.card{
  background:linear-gradient(145deg,#182945,#0e182b);
  border:1px solid var(--line);
  border-radius:18px;
  padding:29px;
  transition:.2s;
}
.card:hover{
  transform:translateY(-4px);
  border-color:#5b84c4;
}
.card.featured{
  border-color:var(--blue);
  box-shadow:0 0 35px #246fff12;
}
.card .number{
  color:var(--blue2);
  font-size:14px;
  font-weight:900;
  letter-spacing:2px;
}
.price{
  font-size:39px;
  font-weight:900;
  margin:15px 0;
}
.price small{
  font-size:14px;
  font-weight:400;
  color:var(--muted);
}
ul{padding-left:20px;color:#d2dff2;line-height:2}
.card .btn{margin-top:12px}
.banner{
  padding:48px 28px;
  text-align:center;
  border-radius:20px;
  background:linear-gradient(125deg,#172e57,#101b30);
  border:1px solid var(--line);
}
.notice{
  padding:19px;
  border-radius:12px;
  border:1px solid var(--line);
  background:var(--panel);
  color:#d1dff3;
  margin-top:25px;
}

/* DEMO REQUEST PAGE */
.demo-page{
  position:relative;
  isolation:isolate;
  min-height:100vh;
  padding:65px 20px 95px;
  background:#081225;
  overflow:hidden;
}
.demo-page:before{
  content:"";
  position:absolute;
  z-index:-1;
  inset:-20%;
  background:
    radial-gradient(ellipse at 0% 40%,#17458790,transparent 43%),
    radial-gradient(ellipse at 100% 70%,#103e8470,transparent 42%);
  animation:flow 20s ease-in-out infinite alternate;
  pointer-events:none;
}
@keyframes flow{
  from{transform:translate(-2%,0)}
  to{transform:translate(3%,3%)}
}
.demo-container{
  width:min(940px,100%);
  margin:0 auto;
}
.demo-heading{
  text-align:center;
  margin:0 auto 42px;
}
.demo-heading h1{
  font-size:clamp(35px,5vw,53px);
  letter-spacing:-1.5px;
  margin:17px auto;
}
.demo-heading p{
  font-size:17px;
  max-width:730px;
  margin:auto;
}
.demo-form{
  padding:38px;
  background:linear-gradient(145deg,#101e36,#0b1529);
  border:1px solid #49638c;
  border-radius:22px;
  box-shadow:0 30px 90px #0007,0 0 40px #2874ff0c;
}
.form-section{
  margin-bottom:31px;
  padding-bottom:28px;
  border-bottom:1px solid #425777;
}
.form-section:last-of-type{
  border-bottom:0;
  margin-bottom:0;
}
.form-title{
  display:flex;
  align-items:center;
  gap:12px;
  font-size:21px;
  font-weight:800;
  margin:0 0 23px;
}
.form-title .symbol{
  color:#74acff;
  font-size:25px;
}
.form-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:17px 23px;
}
.field{margin-bottom:18px}
.form-grid .field{margin-bottom:0}
.field label{
  display:block;
  margin-bottom:8px;
  font-size:14px;
  font-weight:700;
}
.field input,
.field select,
.field textarea{
  width:100%;
  padding:13px 15px;
  min-height:48px;
  background:var(--field);
  color:white;
  border:1px solid #526a91;
  border-radius:10px;
  outline:none;
}
.field textarea{
  min-height:116px;
  resize:vertical;
}
.field input::placeholder,
.field textarea::placeholder{
  color:#aab9d0;
}
.field input:focus,
.field select:focus,
.field textarea:focus{
  border-color:#73a7ff;
  box-shadow:0 0 0 3px #2874ff30;
}
.field select option{background:#1d2d49}
.field.wide{margin-top:19px}
.color-options{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:10px;
  margin-top:13px;
}
.color-option{
  position:relative;
  display:flex;
  align-items:center;
  gap:9px;
  padding:11px;
  border:1px solid #465d80;
  background:#192842;
  border-radius:10px;
  cursor:pointer;
  font-size:12px;
  font-weight:700;
}
.color-option:has(input:checked){
  border-color:#6ca3ff;
  background:#243e65;
}
.color-option input{
  position:absolute;
  opacity:0;
  width:1px;
  height:1px;
}
.color-option:focus-within{
  outline:2px solid #73a7ff;
  outline-offset:2px;
}
.swatch{
  width:24px;
  height:24px;
  border-radius:50%;
  border:2px solid #ffffff70;
  flex-shrink:0;
}
.black-gold{background:linear-gradient(135deg,#000 50%,#d9a52b 50%)}
.black-blue{background:linear-gradient(135deg,#000 50%,#2874ff 50%)}
.black-red{background:linear-gradient(135deg,#000 50%,#eb334d 50%)}
.white-blue{background:linear-gradient(135deg,#fff 50%,#2874ff 50%)}
.white-green{background:linear-gradient(135deg,#fff 50%,#0cb963 50%)}
.other{background:linear-gradient(135deg,#929aaa,#343e52)}
.feature-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:10px;
}
.feature{
  display:flex;
  align-items:center;
  gap:10px;
  padding:12px;
  background:#1d2d49;
  border:1px solid #3e5375;
  border-radius:10px;
  font-size:13px;
}
.feature input{
  accent-color:var(--blue);
  width:17px;
  height:17px;
}
.submit-btn{
  width:100%;
  margin-top:8px;
  padding:18px;
  border:0;
  border-radius:11px;
  color:white;
  background:linear-gradient(90deg,#2874ff,#1761f2);
  font-size:17px;
  font-weight:850;
  cursor:pointer;
}
.submit-btn:hover{filter:brightness(1.13)}
.submit-btn:disabled{opacity:.6;cursor:wait}
.privacy{
  text-align:center;
  font-size:12px;
  margin-top:18px;
}
.status{
  min-height:25px;
  text-align:center;
  color:#a9efce;
  margin-top:12px;
}
.status.error{color:#ffb9b9}
footer{
  text-align:center;
  padding:28px 15px;
  border-top:1px solid var(--line);
  color:var(--muted);
  font-size:13px;
}
@media(max-width:900px){
  .cards{grid-template-columns:1fr}
  .navbar{flex-wrap:wrap;justify-content:center}
  nav{flex-wrap:wrap;justify-content:center}
}
@media(max-width:650px){
  .hero{padding:75px 15px}
  .demo-page{padding:45px 13px 70px}
  .demo-form{padding:22px 18px}
  .form-grid,.feature-grid{grid-template-columns:1fr}
  .color-options{grid-template-columns:repeat(2,1fr)}
  nav{gap:14px}
  .navbar>.btn{padding:10px 16px}
}
@media(prefers-reduced-motion:reduce){
  .demo-page:before{animation:none}
  .btn,.card{transition:none}
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
      <a href="#websites" data-page="home"
         data-scroll="websites">Websites</a>
      <a href="#marketing" data-page="marketing">Marketing</a>
      <a href="#demo" data-page="demo">Request Demo</a>
    </nav>

    <a href="#demo" class="btn" data-page="demo">
      Request a Demo
    </a>
  </div>
</header>

<main>

<!-- HOMEPAGE -->
<section id="home" class="page active">

  <div class="hero">
    <div class="container">
      <div class="eyebrow">
        Premium Websites & Digital Marketing
      </div>

      <h1>
        Your Business Deserves
        <span>Something Exceptional.</span>
      </h1>

      <p class="lead">
        We design modern, high-performing websites
        built around your business. Tell us your vision,
        and we'll personally create a custom website
        demo for you.
      </p>

      <div class="actions">
        <a href="#demo" class="btn" data-page="demo">
          Book Free Demo
        </a>
        <a href="#websites" class="btn outline"
           data-page="home" data-scroll="websites">
          Explore Our Websites
        </a>
      </div>
    </div>
  </div>

  <!-- HOW IT WORKS -->
  <div class="container section">
    <div class="center">
      <div class="eyebrow">Our Process</div>
      <h2>From Your Vision to Reality</h2>
      <p>Getting your custom website started is simple.</p>
    </div>

    <div class="cards">
      <article class="card">
        <div class="number">01 — YOUR BUSINESS</div>
        <h3>Tell Us What You Need</h3>
        <p>
          Complete our request form with your business
          details, preferred design, and website vision.
        </p>
      </article>

      <article class="card">
        <div class="number">02 — CUSTOM DESIGN</div>
        <h3>We Personally Build Your Demo</h3>
        <p>
          Our team reviews your request and creates
          a personalized website demo for your business.
        </p>
      </article>

      <article class="card">
        <div class="number">03 — NEXT STEPS</div>
        <h3>Review & Launch</h3>
        <p>
          Review the design, discuss any changes,
          and decide whether you'd like to move forward.
        </p>
      </article>
    </div>
  </div>

  <!-- WEBSITE PRICING -->
  <div id="websites" class="container section">
    <div class="center">
      <div class="eyebrow">Website Services</div>
      <h2>Websites Built to Impress</h2>
      <p>
        Every project starts with understanding your business.
      </p>
    </div>

    <div class="cards">
      <article class="card featured">
        <div class="eyebrow">Start Here</div>
        <h3>Free Website Demo</h3>
        <div class="price">$0</div>
        <p>
          Request a personally designed website demo
          based on your vision.
        </p>
        <ul>
          <li>Personalized demo request</li>
          <li>Business and design questionnaire</li>
          <li>Custom website concept</li>
          <li>No obligation to purchase</li>
        </ul>
        <a href="#demo" class="btn" data-page="demo"
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
          A professional, responsive website
          that represents your business.
        </p>
        <ul>
          <li>Modern custom design</li>
          <li>Mobile-friendly layout</li>
          <li>Services and contact sections</li>
          <li>Business branding</li>
        </ul>
        <a href="#demo" class="btn outline"
           data-page="demo" data-service="Simple Website">
          Get My Website
        </a>
      </article>

      <article class="card">
        <h3>Advanced Website</h3>
        <div class="price">
          $2,000 <small>starting at</small>
        </div>
        <p>
          An advanced website with interactive
          features tailored to your goals.
        </p>
        <ul>
          <li>Premium design</li>
          <li>Interactive experiences</li>
          <li>Multiple custom pages</li>
          <li>Integrations as scoped</li>
        </ul>
        <a href="#demo" class="btn outline"
           data-page="demo" data-service="Advanced Website">
          Request a Quote
        </a>
      </article>
    </div>
    <p class="center">
      Final website pricing depends on your project's scope.
    </p>
  </div>

  <div class="container section">
    <div class="banner">
      <div class="eyebrow">Let's Work Together</div>
      <h2>Ready for a Website That Stands Out?</h2>
      <p>
        Tell us what you're envisioning and
        we'll personally prepare a demo.
      </p>
      <a href="#demo" class="btn" data-page="demo">
        Book My Free Demo
      </a>
    </div>
  </div>

</section>

<!-- MARKETING PAGE -->
<section id="marketing" class="page">

  <div class="hero">
    <div class="container">
      <div class="eyebrow">Digital Marketing</div>
      <h1>
        Get Seen. Get Leads.
        <span>Grow Your Business.</span>
      </h1>
      <p class="lead">
        Organic marketing, Meta Ads, and Google Ads
        services designed to support business growth.
      </p>
      <a href="#demo" class="btn" data-page="demo"
         data-service="Marketing Consultation">
        Request a Consultation
      </a>
    </div>
  </div>

  <div class="container section">
    <div class="cards">

      <article class="card">
        <h3>Organic Marketing</h3>
        <div class="price">$500 <small>/month</small></div>
        <p>
          Organic content strategy and social media support.
        </p>
        <a href="#demo" class="btn" data-page="demo"
           data-service="Organic Marketing">
          Get Started
        </a>
      </article>

      <article class="card featured">
        <h3>Meta Ads</h3>
        <div class="price">$1,700 <small>/month</small></div>
        <p>
          Facebook and Instagram advertising management.
        </p>
        <a href="#demo" class="btn" data-page="demo"
           data-service="Meta Ads">
          Get Started
        </a>
      </article>

      <article class="card">
        <h3>Google Ads</h3>
        <div class="price">$1,700 <small>/month</small></div>
        <p>
          Google Ads campaign management.
        </p>
        <a href="#demo" class="btn" data-page="demo"
           data-service="Google Ads">
          Get Started
        </a>
      </article>

    </div>

    <div class="notice">
      <strong>Ad spend is separate.</strong>
      Meta Ads and Google Ads management cost $1,700
      per month each, plus the advertising budget
      you choose to spend. Results are not guaranteed.
    </div>
  </div>

</section>

<!-- REQUEST DEMO PAGE -->
<section id="demo" class="page">
  <div class="demo-page">
    <div class="demo-container">

      <div class="demo-heading">
        <div class="eyebrow">VEXTRIVO</div>
        <h1>
          Request Your <span>Website Demo</span>
        </h1>
        <p>
          Tell us about your business and your vision.
          We'll personally create a custom website demo for you.
        </p>
      </div>

      <form
        id="demoForm"
        class="demo-form"
        action="https://formsubmit.co/nkarpo49@gmail.com"
        method="POST">

        <input type="hidden" name="_subject"
          value="New VEXTRIVO Website Demo Request">

        <input type="hidden" name="_template"
          value="table">

        <input type="text" name="_honey"
          tabindex="-1" autocomplete="off"
          aria-hidden="true"
          style="position:absolute;left:-9999px">

        <!-- BUSINESS DETAILS -->
        <div class="form-section">
          <h2 class="form-title">
            <span class="symbol">▣</span>
            About Your Business
          </h2>

          <div class="form-grid">
            <div class="field">
              <label for="businessName">
                Business Name *
              </label>
              <input id="businessName"
                name="Business Name"
                required maxlength="120"
                placeholder="Enter your business name">
            </div>

            <div class="field">
              <label for="businessType">
                Business Type *
              </label>
              <select id="businessType"
                name="Business Type" required>
                <option value="">Select your business type</option>
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
            <textarea id="businessDescription"
              name="Business Description"
              maxlength="2500"
              placeholder="Describe your services, products, and customers."></textarea>
          </div>
        </div>

        <!-- WEBSITE VISION -->
        <div class="form-section">
          <h2 class="form-title">
            <span class="symbol">◉</span>
            Your Website Vision
          </h2>

          <div class="field">
            <label for="websiteVision">
              What Are You Envisioning for Your Website? *
            </label>
            <textarea id="websiteVision"
              name="Website Vision"
              required maxlength="5000"
              placeholder="Describe the look, style, pages, features, photos, and anything you want included."></textarea>
          </div>

          <div class="form-grid">
            <div class="field">
              <label for="colorTheme">
                Preferred Color Theme *
              </label>
              <select id="colorTheme"
                name="Preferred Color Theme" required>
                <option value="">Choose a color theme</option>
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
              <select id="websiteStyle" name="Website Style">
                <option value="">Select a style</option>
                <option>Luxury / Premium</option>
                <option>Modern / Minimal</option>
                <option>Bold / Creative</option>
                <option>Clean / Professional</option>
                <option>Dark / Futuristic</option>
                <option>Help Me Choose</option>
              </select>
            </div>
          </div>

          <!-- COLOR SWATCHES -->
          <div class="color-options">
            <label class="color-option">
              <input type="radio" name="Color Preview"
                value="Black & Gold">
              <span class="swatch black-gold"></span>
              Black & Gold
            </label>

            <label class="color-option">
              <input type="radio" name="Color Preview"
                value="Black & Blue">
              <span class="swatch black-blue"></span>
              Black & Blue
            </label>

            <label class="color-option">
              <input type="radio" name="Color Preview"
                value="Black & Red">
              <span class="swatch black-red"></span>
              Black & Red
            </label>

            <label class="color-option">
              <input type="radio" name="Color Preview"
                value="White & Blue">
              <span class="swatch white-blue"></span>
              White & Blue
            </label>

            <label class="color-option">
              <input type="radio" name="Color Preview"
                value="White & Green">
              <span class="swatch white-green"></span>
              White & Green
            </label>

            <label class="color-option">
              <input type="radio" name="Color Preview"
                value="Other / Custom Colors">
              <span class="swatch other"></span>
              Other
            </label>
          </div>

          <div class="field wide">
            <label for="inspiration">
              Example Websites You Like (Optional)
            </label>
            <textarea id="inspiration"
              name="Website Inspiration"
              placeholder="Paste links or describe websites you like."></textarea>
          </div>

          <div class="field">
            <label>
              Features You Want Included
            </label>
            <div class="feature-grid">
              <label class="feature">
                <input type="checkbox" name="Features"
                  value="Booking Calendar">
                Booking Calendar
              </label>
              <label class="feature">
                <input type="checkbox" name="Features"
                  value="Photo Gallery">
                Photo Gallery
              </label>
              <label class="feature">
                <input type="checkbox" name="Features"
                  value="Online Payments">
                Online Payments
              </label>
              <label class="feature">
                <input type="checkbox" name="Features"
                  value="Customer Reviews">
                Customer Reviews
              </label>
              <label class="feature">
                <input type="checkbox" name="Features"
                  value="Quote Form">
                Quote Request Form
              </label>
              <label class="feature">
                <input type="checkbox" name="Features"
                  value="Online Store">
                Online Store
              </label>
            </div>
          </div>

          <div class="field">
            <label for="serviceInterest">
              What Service Are You Interested In?
            </label>
            <select id="serviceInterest"
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

        <!-- CONTACT DETAILS -->
        <div class="form-section">
          <h2 class="form-title">
            <span class="symbol">♙</span>
            Your Contact Information
          </h2>

          <div class="form-grid">
            <div class="field">
              <label for="fullName">
                Full Name *
              </label>
              <input id="fullName"
                name="Full Name"
                autocomplete="name"
                required maxlength="120"
                placeholder="Enter your full name">
            </div>

            <div class="field">
              <label for="email">
                Email Address *
              </label>
              <input id="email"
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
              <input id="phone"
                name="Phone Number"
                type="tel"
                autocomplete="tel"
                required maxlength="30"
                placeholder="(123) 456-7890">
            </div>

            <div class="field">
              <label for="contactPreference">
                Preferred Contact Method
              </label>
              <select id="contactPreference"
                name="Contact Preference">
                <option>Email</option>
                <option>Phone Call</option>
                <option>Text Message</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit"
          id="submitBtn" class="submit-btn">
          Request My Website Demo
        </button>

        <p id="formStatus" class="status"
          role="status" aria-live="polite"></p>

        <p class="privacy">
          Your information will only be used to
          respond to your request and discuss your
          custom website demo.
        </p>

      </form>
    </div>
  </div>
</section>

</main>

<footer>
  © <span id="year"></span>
  VEXTRIVO · Custom Websites & Digital Marketing
</footer>

<script>
'use strict';

const $ = id => document.getElementById(id);

const pages = ['home','marketing','demo'];

// NAVIGATION
function navigate(page,scroll){
  if(!pages.includes(page)) page='home';

  pages.forEach(id=>{
    $(id).classList.toggle('active',id===page);
  });

  history.replaceState(
    null,'','#'+(scroll||page)
  );

  window.scrollTo(0,0);

  if(scroll){
    requestAnimationFrame(()=>{
      $(scroll)?.scrollIntoView({
        behavior:'smooth'
      });
    });
  }
}

// ALL DEMO BUTTONS
document.querySelectorAll('[data-page]').forEach(link=>{
  link.addEventListener('click',event=>{
    event.preventDefault();

    if(link.dataset.service){
      $('serviceInterest').value=link.dataset.service;
    }

    navigate(
      link.dataset.page,
      link.dataset.scroll
    );
  });
});

// DIRECT LINKS
const initialHash=location.hash.slice(1);

if(pages.includes(initialHash)){
  navigate(initialHash);
}else if(initialHash==='websites' ||
         initialHash==='pricing'){
  navigate('home','websites');
}else if(initialHash==='studio'){
  navigate('demo');
}

// COLOR SELECTOR
document.querySelectorAll(
  'input[name="Color Preview"]'
).forEach(radio=>{
  radio.addEventListener('change',()=>{
    $('colorTheme').value=radio.value;
  });
});

$('colorTheme').addEventListener('change',()=>{
  const selected=$('colorTheme').value;

  document.querySelectorAll(
    'input[name="Color Preview"]'
  ).forEach(radio=>{
    radio.checked=radio.value===selected;
  });
});

// COPYRIGHT YEAR
$('year').textContent=new Date().getFullYear();

// FORM SUBMISSION
$('demoForm').addEventListener('submit',async event=>{
  event.preventDefault();

  const form=$('demoForm');

  if(!form.reportValidity()) return;

  const button=$('submitBtn');
  const status=$('formStatus');
  const data=new FormData(form);

  data.set(
    '_subject',
    'New VEXTRIVO Demo Request - '+
    data.get('Business Name')
  );

  data.set('_template','table');

  button.disabled=true;
  button.textContent='Sending Request...';

  status.classList.remove('error');
  status.textContent='Submitting your request...';

  try{
    const response=await fetch(
      'https://formsubmit.co/ajax/nkarpo49@gmail.com',
      {
        method:'POST',
        body:data,
        headers:{
          Accept:'application/json'
        }
      }
    );

    const result=await response.json();

    if(
      !response.ok ||
      result.success===false ||
      result.success==='false'
    ){
      throw new Error('Submission failed');
    }

    status.textContent=
      'Your request has been submitted! '+
      'We will contact you about your custom demo.';

    form.reset();

  }catch(error){
    status.classList.add('error');

    status.textContent=
      'Your request could not be sent. '+
      'Please email nkanpo49@gmail.com.'
        .replace('nkanpo','nkarpo');

  }finally{
    button.disabled=false;
    button.textContent='Request My Website Demo';
  }
});
</script>

</body>
</html>
