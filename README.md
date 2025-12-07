# MELSA Wellness - Technical Documentation

## 🌍 Environments
| Environment | Branch | URL | Purpose |
| :--- | :--- | :--- | :--- |
| **Production** | main | https://melsawellness.com https://melsawellness.pages.dev | Live public site |
| **UAT** | uat | https://uat.melsawellness.pages.dev | Versioning or Staging |
| **IST** | ist | https://ist.melsawellness.pages.dev | Developing new features |
| **DEV** | dev | https://dev.melsawellness.pages.dev | Testing new features |

---

## 🛠️ Tech Stack
* **Core:** Semantic HTML5
* **Styling:** Tailwind CSS (via CDN)
* **Scripting:** Vanilla JavaScript (No frameworks)
* **Hosting:** Cloudflare Pages (Unlimited bandwidth & requests)
* **Booking:** Calendly Integration
* **Forms:** Formsubmit.co (Email-based backend) => deprecated from IST, replaced by Backend Automation + Database
* **Backend Automation:** Google Apps Script (Serverless)
* **Database:** Google Sheets ("MELSA Website Database")
* **Structure:** Public files in `/public`, Admin files in Root.
---

## 🎨 Design System (Light Theme)
The website uses a custom **"Rational Mystic"** aesthetic, transitioning from dark mode to a welcoming combination of warm creams and professional teal accents.

### Color Palette (tailwind.config)

| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Stone 50** | `#FAF9F6` | Main Body Background (Cream) |
| **Stone 100** | `#F5F5F2` | Secondary Background (Footer/Services) |
| **Stone 900** | `#1C1917` | Primary Text (Charcoal) |
| **Sage 500** | `#4FB5B0` | Brand Teal (Buttons, Accents, Logo) |
| **Sage 600** | `#3D9C98` | Hover State |

### Typography
* **Headings:** Georgia (Serif) — *Represents the "Mystic/Classic" side.*
* **Body:** Helvetica Neue / Arial (Sans-serif) — *Represents the "Rational/Modern" side.*

---

## 📐 Website Architecture Blueprint (網頁架構藍圖)
Based on the "Rational Mystic" brand positioning.
**Visual Keywords:** Whitespace, Editorial, Grounded (Stone/Sage), Structured.

### 1. Navbar ("The Compass")
* **Function:** Unobtrusive navigation.
* **Visuals:** Frosted glass background.
* **Key Element:** Prominent EN/ZH toggle button.
* **Logo:** `logo-w.png` (Teal brand color with transparent background).

### 2. Hero Section ("The Hook")
* **Visuals:** Cream background (`stone-50`) with centered typography. **No full-width hero images.**
* **Copy:** "Beyond the Right Path. Find Your Own Answers."

### 3. Philosophy Section ("The Differentiator")
* **Structure:** 50/50 Split layout.
* **Left:** Abstract nature texture (High-quality Pexels image).
* **Right:** "Cut Off the Middleman" manifesto.

### 4. Services Section ("The Methodology")
* **Structure:** 3-Column Grid, ordered by logic flow: Integration → Clearing → Power.
* **Flagship:** Independent full-width card for Harner Shamanic Counseling (HSC).
* **Metaphors:** Uses rational metaphors (e.g., "System Administrator Access", "Digital Security Key") to explain spiritual concepts.

### 5. About Page (`about.html`)
* **Style:** Glassmorphism card design.
* **Headline:** "Hello, Inner World." / "你好，內在世界。"
* **Asset:** Full-color profile photo (`profile.png`).

### 6. Footer ("The Anchor")
* **Visuals:** Light warm grey (`stone-100`).
* **Content:** Social links, copyright, and location info.

---

## 📐 Architecture: Front vs. Back of House
We use a split-directory structure to secure admin documentation.

### 1. Root Directory (Admin Only)
Contains documentation, logs, and the developer dashboard. These files are **NOT** uploaded to the public web server.
* `README.md`
* `CHANGELOG.md`
* `melsawellness-dashboard.html`

### 2. Public Directory (Client Facing)
The `/public` folder is the "Build Output" for Cloudflare. Only files inside this folder are accessible at `melsawellness.com`.
* `index.html`
* `about.html`
* `intake.html`
* `images/`

---

## 📂 Project Structure Map

```text

/ (Root)         <-- ADMIN ONLY (Not Published)
├── README.md                       # Admin Project Documentation (Private)
├── CHANGELOG.md                    # Version History (Private)
├── melsawellness-dashboard.html    # Operations Manual (Private) / Developer Documentation Dashboard
└── public/      <-- PUBLISHED SITE # 🌍 THE LIVE SITE
    ├── index.html                  # Landing Page
    │   ├── Logic: Language Toggle, Mobile Menu, Newsletter Form Submission
    │   └── Key Sections: Hero, Philosophy, Services Grid, Newsletter
    ├── about.html                  # Bio
    │   ├── Logic: Language Toggle
    │   └── Assets: Uses absolute path /images/profile.png    
    ├── intake.html                 # Diagnostic Form
    │   ├── Logic: Form Submission -> Redirect to intake-success.html
    │   └── Fields: Name, Email, Current Challenge, Desired Outcome
    ├── thank-you.html              # Success Page for Newsletter (Drumming Circle)
    ├── intake-success.html         # Success Page for Client Intake
    ├── robots.txt                  # SEO Rules
    ├── sitemap.xml                 # SEO Map
    └── images/                     # Image Assets
        ├── logo-w.png              # Teal Logo (Transparent BG) wide version
        ├── logo-v.png              # Teal Logo (Transparent BG) verticle version - for SEO
        └── profile.png             # Emily's Photo

```

> **⚠️ CRITICAL RULES FOR ASSETS:**
> 1.  **Case Sensitivity:** Cloudflare Pages is case-sensitive. `profile.png` ≠ `Profile.png`. Always use lowercase filenames.
> 2.  **Absolute Paths:** Always reference images with a leading slash (e.g., `/images/profile.png`). This prevents broken images when Cloudflare uses Clean URLs (e.g., `/about` instead of `/about.html`).
> 3.  **Front Office:** All images and HTML pages intended for the public MUST be placed inside the public/ folder. If you leave them in the root, the website will not see them.

---

## 📝 Localization (EN / 中文)
The site uses a CSS-first class toggling system to prevent content flickering.

* **English elements:** `<span class="lang-en">...</span>`
* **Chinese elements:** `<span class="lang-zh hidden-lang">...</span>`

* **Logic:** JavaScript toggles the `hidden-lang` class. Chinese is hidden by default in CSS.

---

## 🚀 Development Workflow (The "Credit-Saver" Method)
To avoid exhausting Cloudflare build limits (500/month), follow this workflow:

1.  **Local Development (0 Cost)**
    * Download the code to your computer/Chromebook.
    * Use VS Code or a browser to preview files locally.
    * Make all edits (typos, colors, layout) locally first.

2.  **UAT Deployment (1 Credit)**
    * When features are ready to share or test on mobile:
    * Push code to the `uat` branch.
    * Cloudflare automatically builds to `https://uat.melsawellness.pages.dev`.

3.  **Production Release (1 Credit)**
    * When UAT is verified:
    * Create a Pull Request on GitHub: **base: main ← compare: uat**.
    * Merge the Pull Request.

### 💡 Skip Build Trick
If you are saving code to GitHub but don't need a deployment immediately, add `[skip ci]` to your commit message.

```bash
git commit -m "Update README docs [skip ci]"
```

---

## 🔌 Integrations

| Feature | Provider | Logic |
| :--- | :--- | :--- |
| **Forms** | Custom JS `fetch()` | Sends data to Google Apps Script Web App URL. |
| **Database** | Google Sheets | Script appends rows to specific sheets based on hidden `formType` input. |
| **Booking** | Calendly | Direct links for `/free` (Intro) and custom intake for paid sessions. |
| **Analytics** | Cloudflare | Built-in privacy-first web analytics. |

### 1. Newsletter (Drumming Circle)
* **Location:** `index.html` (Bottom section).
* **Backend:** Formsubmit.co
* **Redirect:** Dynamically redirects to `/thank-you.html` based on the current environment (UAT or Prod).

### 2. Client Intake (1-on-1 Services)
* **Location:** `intake.html`.
* **Backend:** Formsubmit.co
* **Redirect:** Dynamically redirects to `/intake-success.html`.

### 3. Booking
* **Intro Call:** Linked to [Calendly Free Consultation](https://calendly.com/melsawellness/free) (15-min).
* **Paid Session:** Managed via Intake process.


---

## V2.0 🌟 Key Features Update

### 1. Newsletter & Community (Drumming Circle)
* **Location:** `index.html` (Bottom section) + Nav Bar link.
* **Design:** "Coming Soon" card style with Toronto/Markham location tags.
* **Workflow:** User submits form → Data sent to Google Sheets (Newsletter tab) → Auto-redirect to `thank-you.html`.

### 2. Client Intake System (Diagnostic)
* **Location:** `intake.html` (Linked from Services CTA).
* **Concept:** Framed as a "System Diagnostic" (identifying bugs/challenges) rather than a menu order.
* **Workflow:** User submits diagnostic → Data sent to Google Sheets (Intake tab) → Auto-redirect to `intake-success.html`.

### 3. Backend Automation (Google Sheets)
* **Upgrade:** We moved away from email forwarding (Formsubmit) to a true database.
* **Mechanism:** Custom Google Apps Script (`doPost`) receives form data via JS Fetch API and appends it to specific tabs in the Master Google Sheet.
* **Security:** Script executes as "Me" (Owner), protecting the database from public access while allowing public submissions.

### 4. Developer Dashboard
* **File:** `melsawellness-dashboard.html`
* **Purpose:** A single-page view to check live environment status, copy brand hex codes, view tech stack composition, and reference development workflows.

---
## V2.1 🔍 SEO & Indexing Update

### 1. Social Previews (Open Graph)
* **Location:** `index.html` (`<head>` section).
* **Upgrade:** Added Open Graph (`og:`) tags and standard metadata (Description, Keywords).
* **Result:** Links shared on LinkedIn, Facebook, or WhatsApp now generate professional previews with the brand image and description.

### 2. Search Visibility
* **Integration:** Google Search Console & Google Business Profile.
* **Workflow:** Domain ownership verified via DNS. Sitemap submitted to ensure Google correctly indexes `melsawellness.com` while ignoring utility pages.

---

## V2.2 📊 Marketing Attribution Update

### 1. Referral Tracking
* **Location:** `index.html` (Newsletter) and `intake.html` (Intake).
* **Feature:** Added "How did you find us?" dropdown menu with options (Instagram, LinkedIn, Friend, etc.).
* **Workflow:** User selects source → Data sent via Fetch API → Backend records source.

### 2. Backend Parsing
* **Backend:** Google Apps Script (`doPost`).
* **Upgrade:** Script updated to parse the new `referral` parameter.
* **Database:** Automatically appends the source data to the 4th column (Newsletter) or 6th column (Intake) in the Master Google Sheet.

---

## V2.3 🏗️ Security & Architecture Update

### 1. Split Directory Architecture
* **Upgrade:** Implemented "Front of House" vs. "Back of House" separation.
* **Mechanism:** All public files (`*.html`, `/images`) moved to `/public`. Admin files (`README`, `CHANGELOG`, `Dashboard`) remain in Root.
* **Security:** Cloudflare now builds strictly from `/public`. Admin documentation is physically excluded from the production build, preventing public access.

### 2. Access Control (The Bouncer)
* **Location:** `robots.txt` (in `/public`).
* **Function:** Explicitly disallows bots from crawling success pages (`thank-you.html`) or legacy admin files.
* **Dashboard:** Added `<meta name="robots" content="noindex">` to the dashboard file for double-layered security.

### 3. SEO Mapping
* **Location:** `sitemap.xml` (in `/public`).
* **Function:** Provides a strict map to search engines, listing only the valid entry points: Home, About, and Intake.