# MELSA Wellness - Technical Documentation

## 🌍 Environments
| Environment | Branch | URL | Purpose |
| :--- | :--- | :--- | :--- |
| **Production** | main | https://melsawellness.pages.dev | Live public site |
| **UAT** | uat | https://uat.melsawellness.pages.dev | Versioning pre colour change |
| **IST** | ist | https://ist.melsawellness.pages.dev | Staging |
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
**Update (v2.0)**: We have migrated away from email-only forwarding (Formsubmit). Data is now sent via JavaScript fetch to a custom Google Apps Script, which appends rows to specific tabs in a secured Google Sheet.  
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

## 📂 Project Structure

```text
/
├── index.html                # Landing Page (Services, Philosophy, Drumming Circle)
├── about.html                # About Me Page (Profile, Story)
├── intake.html               # [NEW] Diagnostic Intake Form for 1-on-1 services
├── thank-you.html            # [NEW] Success page for Drumming Circle Signup
├── intake-success.html       # [NEW] Success page for Client Intake
├── melsawellness-dashboard.html # [NEW] Project Documentation Dashboard
├── README.md                 # This documentation
└── images/                   # Image Assets Folder
    ├── logo-w.png            # Primary Logo (Teal text, Transparent BG)
    └── profile.png           # Founder Portrait
```

> **⚠️ CRITICAL RULES FOR ASSETS:**
> 1.  **Case Sensitivity:** Cloudflare Pages is case-sensitive. `profile.png` ≠ `Profile.png`. Always use lowercase filenames.
> 2.  **Absolute Paths:** Always reference images with a leading slash (e.g., `/images/profile.png`). This prevents broken images when Cloudflare uses Clean URLs (e.g., `/about` instead of `/about.html`).

---

## 📝 Localization (EN / 中文)
The site uses a CSS-first class toggling system to prevent content flickering.

* **English elements:** `<span class="lang-en">...</span>`
* **Chinese elements:** `<span class="lang-zh hidden-lang">...</span>`

**Logic:** JavaScript toggles the `hidden-lang` class. Chinese is hidden by default in CSS.

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
