
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>VEXTRIVO | Websites & Marketing</title>
<style>
:root {
  --bg:#080b14;
  --panel:#111a2d;
  --line:#293550;
  --text:#f4f7ff;
  --muted:#a9b7d1;
  --blue:#668aff;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  background:var(--bg);
  color:var(--text);
  font:16px/1.6 system-ui,-apple-system,Segoe UI,sans-serif;
}
a{color:inherit;text-decoration:none}
button,input,select,textarea{font:inherit}
button{cursor:pointer}
.wrap{max-width:1160px;margin:auto;padding:0 22px}
header{
  position:sticky;
  top:0;
  background:#080b14ed;
  border-bottom:1px solid var(--line);
  z-index:10;
}
.nav{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
  padding:15px 0;
}
.logo{font-size:24px;font-weight:900;letter-spacing:2px}
.logo span{color:var(--blue)}
nav{display:flex;align-items:center;gap:22px;flex-wrap:wrap}
nav a:hover{color:var(--blue)}
.btn{
  display:inline-block;
  background:var(--blue);
  border:0;
  border-radius:11px;
  padding:13px 19px;
  color:#081127;
  font-weight:800;
  text-align:center;
}
.btn:hover{filter:brightness(1.12)}
.btn.alt{background:#202d49;color:#fff}
.hero{
  padding:110px 0 95px;
  text-align:center;
  background:radial-gradient(circle at 50% 0,#213b794f,transparent 60%);
}
.eyebrow{
  color:#9ab1ff;
  font-size:12px;
  font-weight:800;
  letter-spacing:2px;
  text-transform:uppercase;
}
h1{
  font-size:clamp(42px,6.4vw,76px);
  line-height:1.08;
  margin:16px auto;
  max-width:950px;
}
h2{font-size:clamp(29px,4vw,44px);line-height:1.2}
h3{font-size:23px;margin:10px 0}
p{color:var(--muted)}
.hero p{max-width:670px;margin:20px auto 28px;font-size:19px}
.actions{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}
.section{padding:75px 0}
.center{text-align:center}
.grid{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:18px;
}
.card{
  background:var(--panel);
  border:1px solid var(--line);
  border-radius:18px;
  padding:25px;
}
.card.featured{border-color:var(--blue)}
.price{font-size:40px;font-weight:900;margin:12px 0}
.price small{font-size:15px;font-weight:400;color:var(--muted)}
ul{padding-left:20px;color:#c8d2e5;line-height:2}
.card .btn{margin-top:12px}
.tag{
  display:inline-block;
  border-radius:99px;
  background:#21365d;
  color:#c2d1ff;
  padding:5px 12px;
  font-size:12px;
  font-weight:700;
}
.page{display:none}
.page.active{display:block}
.form{
  max-width:820px;
  margin:30px auto;
  background:var(--panel);
  border:1px solid var(--line);
  border-radius:20px;
  padding:30px;
}
.fields{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:15px;
}
label{
  display:block;
  margin:14px 0 6px;
  color:#dce5f6;
  font-size:14px;
}
input,select,textarea{
  width:100%;
  padding:13px;
  background:#1c2941;
  border:1px solid #465776;
  border-radius:9px;
  color:white;
}
textarea{min-height:110px;resize:vertical}
input:focus,select:focus,textarea:focus{
  outline:2px solid var(--blue);
}
.note{
  background:#17243a;
  border:1px solid #34486b;
  padding:17px;
  border-radius:12px;
  margin:20px 0;
}
footer{
  border-top:1px solid var(--line);
  text-align:center;
  padding:28px;
  color:var(--muted);
}
.status{min-height:25px;color:#a9c2ff}
.calendar{
  display:grid;
  grid-template-columns:repeat(7,1fr);
  gap:5px;
  margin:14px 0;
}
.dayname{
  text-align:center;
  color:var(--muted);
  font-size:12px;
}
.day{
  background:#1d2a43;
  border:1px solid #344767;
  color:#fff;
  border-radius:8px;
  min-height:43px;
}
.day:disabled{opacity:.25;cursor:not-allowed}
.day.selected{background:var(--blue);color:#071024}
.monthbar{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
}
.monthbar button{
  background:#22304b;
  color:white;
  border:0;
  border-radius:8px;
  padding:7px 12px;
}
.monthbar button:disabled{opacity:.35;cursor:not-allowed}
.two{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:25px;
  align-items:start;
}
@media(max-width:820px){
  .grid,.two{grid-template-columns:1fr}
  .nav{flex-wrap:wrap}
  nav{order:3;width:100%;gap:14px}
  .fields{grid-template-columns:1fr}
  .hero{padding:75px 0}
  .form{padding:20px}
}
</style>
</head>

<body>
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
      <a href="#marketing" data-page="marketing">Marketing</a>
      <a href="#book" data-page="book">Book Demo</a>
    </nav>
    <a class="btn" href="#book" data-page="book">
      Book Free Demo
    </a>
  </div>
</header>

<main>
  <!-- HOME PAGE -->
  <section id="home" class="page active">
    <div class="hero">
      <div class="wrap">
        <div class="eyebrow">Websites built for your business</div>
        <h1>Get a custom website demo built around your vision.</h1>
        <p>
          Tell us about your business, the features you need,
          and the look you want. We'll discuss your project
          and prepare a personalized website demo.
        </p>
        <div class="actions">
          <a class="btn" href="#book" data-page="book">
            Book Your Free Demo
          </a>
          <a class="btn alt" href="#marketing" data-page="marketing">
            Explore Marketing
          </a>
        </div>
      </div>
    </div>

    <div class="wrap">
      <section class="section">
        <div class="center">
          <div class="eyebrow">How it works</div>
          <h2>From your idea to a custom demo</h2>
        </div>
        <div class="grid">
          <div class="card">
            <span class="tag">Step 1</span>
            <h3>Tell us about your business</h3>
            <p>
              Share your industry, current website,
              and what you'd like to improve.
            </p>
          </div>
          <div class="card">
            <span class="tag">Step 2</span>
            <h3>Request a meeting</h3>
            <p>
              Choose a preferred date and time and tell
              us which features matter most.
            </p>
          </div>
          <div class="card">
            <span class="tag">Step 3</span>
            <h3>Review your demo</h3>
            <p>
              We'll discuss your vision and the next
              steps for creating your website demo.
            </p>
          </div>
        </div>
      </section>

      <!-- WEBSITE PRICING -->
      <section id="pricing" class="section">
        <div class="center">
          <div class="eyebrow">Pricing</div>
          <h2>Start with a free website demo</h2>
        </div>

        <div class="grid">
          <div class="card featured">
            <span class="tag">No upfront cost to request</span>
            <h3>Free Demo Consultation</h3>
            <div class="price">$0</div>
            <p>
              Discuss your website idea with us before
              committing to a build.
            </p>
            <ul>
              <li>Website goals discussion</li>
              <li>Design and feature preferences</li>
              <li>Preferred meeting date and time</li>
              <li>Custom demo planning</li>
            </ul>
            <a class="btn" href="#book" data-page="book">
              Book Free Demo
            </a>
          </div>

          <div class="card">
            <h3>Simple Website</h3>
            <div class="price">
              $1,000 <small>starting price</small>
            </div>
            <p>A straightforward professional business website.</p>
            <ul>
              <li>Responsive layout</li>
              <li>Service and contact sections</li>
              <li>Custom branding</li>
            </ul>
            <a class="btn alt" href="#book" data-page="book"
               data-plan="Simple Website">
              Discuss This Website
            </a>
          </div>

          <div class="card">
            <h3>Advanced Website</h3>
            <div class="price">
              $2,000 <small>starting price</small>
            </div>
            <p>For more advanced designs, pages, and functionality.</p>
            <ul>
              <li>Custom interactive features</li>
              <li>Multiple pages or sections</li>
              <li>Project-specific integrations</li>
            </ul>
            <a class="btn alt" href="#book" data-page="book"
               data-plan="Advanced Website">
              Discuss This Website
            </a>
          </div>
        </div>

        <p class="center">
          Final website pricing depends on the requested scope.
          The free demo consultation is not a promise of a
          completed website at no charge.
        </p>
      </section>

      <section class="section center">
        <h2>Ready to see what's possible?</h2>
        <p>
          Request a meeting and tell us what you want
          your website to do.
        </p>
        <a class="btn" href="#book" data-page="book">
          Book a Free Demo Meeting
        </a>
      </section>
    </div>
  </section>

  <!-- MARKETING PAGE -->
  <section id="marketing" class="page">
    <div class="hero">
      <div class="wrap">
        <div class="eyebrow">VEXTRIVO Marketing</div>
        <h1>
          Websites that look great.
          Marketing that helps you grow.
        </h1>
        <p>
          Explore organic social media marketing,
          Meta Ads, and Google Ads management for your business.
        </p>
        <div class="actions">
          <a class="btn" href="#book" data-page="book"
             data-plan="Marketing Consultation">
            Request Marketing Meeting
          </a>
          <a class="btn alt" href="#marketing-pricing">
            See Marketing Prices
          </a>
        </div>
      </div>
    </div>

    <div class="wrap">
      <section id="marketing-pricing" class="section">
        <div class="center">
          <div class="eyebrow">Marketing services</div>
          <h2>Choose how you want to grow</h2>
        </div>

        <div class="grid">
          <div class="card">
            <h3>Organic Marketing</h3>
            <div class="price">$500 <small>/month</small></div>
            <p>
              Organic content and social media strategy
              to strengthen your brand.
            </p>
            <ul>
              <li>Content strategy</li>
              <li>Social media support</li>
              <li>Organic visibility</li>
            </ul>
            <a class="btn" href="#book" data-page="book"
               data-plan="Organic Marketing">
              Discuss Organic Marketing
            </a>
          </div>

          <div class="card featured">
            <h3>Meta Ads</h3>
            <div class="price">$1,700 <small>/month</small></div>
            <p>
              Facebook and Instagram advertising management,
              plus ad spend.
            </p>
            <ul>
              <li>Campaign strategy</li>
              <li>Audience targeting</li>
              <li>Management and optimization</li>
            </ul>
            <a class="btn" href="#book" data-page="book"
               data-plan="Meta Ads">
              Discuss Meta Ads
            </a>
          </div>

          <div class="card">
            <h3>Google Ads</h3>
            <div class="price">$1,700 <small>/month</small></div>
            <p>
              Google advertising management,
              plus ad spend.
            </p>
            <ul>
              <li>Keyword strategy</li>
              <li>Search campaigns</li>
              <li>Management and optimization</li>
            </ul>
            <a class="btn" href="#book" data-page="book"
               data-plan="Google Ads">
              Discuss Google Ads
            </a>
          </div>
        </div>

        <div class="note">
          <strong>Ad spend is separate.</strong>
          <p>
            The $1,700 monthly management fee does not
            include the amount paid to Meta or Google
            to run ads. You choose that additional
            advertising budget. Results are not guaranteed.
          </p>
        </div>
      </section>
    </div>
  </section>

  <!-- FREE DEMO BOOKING PAGE -->
  <section id="book" class="page">
    <div class="wrap">
      <section class="section">
        <div class="center">
          <div class="eyebrow">Free demo meeting</div>
          <h2>Tell us about your business</h2>
          <p>
            Choose a preferred meeting time and describe
            the website you want us to demo.
          </p>
        </div>

        <form id="bookingForm" class="form">
          <div class="fields">
            <div>
              <label for="fullName">Your name *</label>
              <input id="fullName" name="fullName"
                     autocomplete="name" required>
            </div>
            <div>
              <label for="email">Email *</label>
              <input id="email" name="email"
                     type="email" autocomplete="email" required>
            </div>
            <div>
              <label for="phone">Phone</label>
              <input id="phone" name="phone"
                     type="tel" autocomplete="tel">
            </div>
            <div>
              <label for="business">Business name *</label>
              <input id="business" name="business" required>
            </div>
            <div>
              <label for="industry">Business type *</label>
              <select id="industry" name="industry" required>
                <option value="">Select your industry</option>
                <option>Automotive</option>
                <option>Construction / Trades</option>
                <option>Landscaping</option>
                <option>Restaurant</option>
                <option>Clothing / E-commerce</option>
                <option>Real Estate</option>
                <option>Health / Fitness</option>
                <option>Professional Services</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label for="service">
                What are you interested in? *
              </label>
              <select id="service" name="service" required>
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

          <label for="website">Current website (optional)</label>
          <input id="website" name="website" type="url"
                 placeholder="https://yourbusiness.com">

          <label for="vision">
            What should your website look like and do? *
          </label>
          <textarea id="vision" name="vision" required
            placeholder="Example: A luxury black-and-gold website with photos, services, customer reviews, online booking, and a contact form."></textarea>

          <div class="two">
            <div>
              <label>Preferred meeting date *</label>
              <div class="monthbar">
                <button id="prevMonth" type="button"
                        aria-label="Previous month">‹</button>
                <strong id="monthLabel"></strong>
                <button id="nextMonth" type="button"
                        aria-label="Next month">›</button>
              </div>
              <div class="calendar" id="calendar"
                   aria-label="Choose a preferred date"></div>
              <input id="meetingDate" name="meetingDate"
                     type="hidden" required>
              <p id="dateDisplay" class="status">
                Select a date.
              </p>
            </div>

            <div>
              <label for="meetingTime">
                Preferred meeting time *
              </label>
              <select id="meetingTime" name="meetingTime" required>
                <option value="">Choose a time</option>
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
                <option>5:00 PM</option>
              </select>

              <label for="timezone">Your time zone *</label>
              <select id="timezone" name="timezone" required>
                <option>Mountain Time</option>
                <option>Pacific Time</option>
                <option>Central Time</option>
                <option>Eastern Time</option>
                <option>Other (mention in notes)</option>
              </select>

              <label for="notes">Anything else?</label>
              <textarea id="notes" name="notes"
                placeholder="Specific features, examples, budget, or questions."></textarea>
            </div>
          </div>

          <div class="note">
            <strong>
              Meeting request, not confirmed booking.
            </strong>
            <p>
              The calendar shows possible dates to request,
              not your live availability. After submitting,
              your email app opens with the meeting details.
              You must send the email and receive confirmation.
              For automatic booking, connect a scheduling service.
            </p>
          </div>

          <button class="btn" type="submit">
            Send Free Demo Meeting Request
          </button>

          <p class="status" id="bookingStatus"
             role="status"></p>
          <p style="font-size:13px">
            Meeting requests are addressed to VEXTRIVO.
          </p>
        </form>
      </section>
    </div>
  </section>
</main>

<footer>
  © <span id="year"></span> VEXTRIVO.
  Built for businesses ready to grow.
</footer>

<script>
'use strict';

const BOOKING_EMAIL = 'nkarpo419@gmail.com';
const pages = ['home', 'marketing', 'book'];
const $ = id => document.getElementById(id);

function showPage(name, scrollId) {
  if (!pages.includes(name)) name = 'home';

  pages.forEach(id => {
    $(id).classList.toggle('active', id === name);
  });

  window.scrollTo(0, 0);

  if (scrollId) {
    requestAnimationFrame(() => {
      $(scrollId)?.scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
}

// Make navigation and booking buttons clickable.
document.querySelectorAll('[data-page]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const page = link.dataset.page;

    if (link.dataset.plan) {
      $('service').value = link.dataset.plan;
    }

    showPage(page, link.dataset.scroll);
    history.replaceState(null, '', '#' + page);
  });
});

$('year').textContent = new Date().getFullYear();

// Calendar
const today = new Date();
today.setHours(0, 0, 0, 0);

let displayYear = today.getFullYear();
let displayMonth = today.getMonth();

const weekdays = [
  'Sun', 'Mon', 'Tue', 'Wed',
  'Thu', 'Fri', 'Sat'
];

function formatDate(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function renderCalendar() {
  const calendar = $('calendar');
  calendar.replaceChildren();

  $('monthLabel').textContent =
    new Date(displayYear, displayMonth, 1)
      .toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
      });

  $('prevMonth').disabled =
    displayYear === today.getFullYear() &&
    displayMonth === today.getMonth();

  weekdays.forEach(name => {
    const el = document.createElement('div');
    el.className = 'dayname';
    el.textContent = name;
    calendar.appendChild(el);
  });

  const first =
    new Date(displayYear, displayMonth, 1).getDay();

  for (let i = 0; i < first; i++) {
    calendar.appendChild(document.createElement('div'));
  }

  const count =
    new Date(displayYear, displayMonth + 1, 0).getDate();

  for (let day = 1; day <= count; day++) {
    const date = new Date(displayYear, displayMonth, day);
    const value = formatDate(displayYear, displayMonth, day);

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'day';
    button.textContent = day;
    button.disabled = date < today;

    button.setAttribute('aria-label', date.toDateString());
    button.setAttribute(
      'aria-pressed',
      String($('meetingDate').value === value)
    );

    if ($('meetingDate').value === value) {
      button.classList.add('selected');
    }

    button.addEventListener('click', () => {
      $('meetingDate').value = value;

      $('dateDisplay').textContent =
        'Requested: ' +
        date.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });

      renderCalendar();
    });

    calendar.appendChild(button);
  }
}

$('prevMonth').addEventListener('click', () => {
  displayMonth--;

  if (displayMonth < 0) {
    displayMonth = 11;
    displayYear--;
  }

  renderCalendar();
});

$('nextMonth').addEventListener('click', () => {
  displayMonth++;

  if (displayMonth > 11) {
    displayMonth = 0;
    displayYear++;
  }

  renderCalendar();
});

renderCalendar();

// Booking form sends the request to your email app.
$('bookingForm').addEventListener('submit', event => {
  event.preventDefault();

  if (!$('bookingForm').reportValidity()) return;

  if (!$('meetingDate').value) {
    $('bookingStatus').textContent =
      'Please choose a date on the calendar.';
    return;
  }

  const ids = [
    'fullName', 'email', 'phone', 'business',
    'industry', 'service', 'website', 'vision',
    'meetingDate', 'meetingTime', 'timezone', 'notes'
  ];

  const labels = [
    'Name', 'Email', 'Phone', 'Business',
    'Industry', 'Service', 'Current Website',
    'Website Vision', 'Requested Date',
    'Requested Time', 'Time Zone', 'Other Notes'
  ];

  const body = ids.map((id, i) =>
    labels[i] + ': ' + $(id).value
  ).join('\n');

  const subject = encodeURIComponent(
    'VEXTRIVO Free Demo Meeting Request — ' +
    $('business').value
  );

  $('bookingStatus').textContent =
    'Your email application is opening. ' +
    'Please send the prepared email to request the meeting.';

  window.location.href =
    'mailto:' + BOOKING_EMAIL +
    '?subject=' + subject +
    '&body=' + encodeURIComponent(body);
});

const initial = location.hash.replace('#', '');

if (pages.includes(initial)) {
  showPage(initial);
}
</script>
</body>
</html>
