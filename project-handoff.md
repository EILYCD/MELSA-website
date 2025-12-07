# 📂 Project Handoff: MELSA Wellness Website

* **Status:** Live (Light Theme / Cloudflare Hosted)
* **Brand Concept:** "The Rational Mystic" (Bridging Corporate Logic & Cosmic Wisdom)
* **Brand Identity:** MELSA Wellness bridges corporate strategy and shamanic wisdom, targeting high-achieving professionals. The website reflects this with a clean, structured "Light Theme" aesthetic (Cream & Teal) and tech-forward metaphors for spiritual services.
* **Architecture:** Split Directory (`/public` vs Root)
* **Version:** 2.3.0 (Security & Infrastructure Update)

### Live URLs
* **Production (Main):** [https://melsawellness.com](https://melsawellness.com) (Primary Domain)
* **Staging (UAT) Backup:** [https://uat.melsawellness.pages.dev](https://uat.melsawellness.pages.dev)
* **IST/Feature Developing:** [https://dev.melsawellness.pages.dev](https://dev.melsawellness.pages.dev)
* **Dev/Feature Testing:** [https://dev.melsawellness.pages.dev](https://dev.melsawellness.pages.dev)

---

## 1. Technical Stack & Infrastructure
* **Frontend:** HTML5, Tailwind CSS (via CDN), Vanilla JavaScript.
* **Structure:** Public files in `/public`, Admin files in Root.
* **Repository:** GitHub (Branches: `main` for Prod, `uat` for Staging  or version control, `ist` for wroking,`dev` for testing).
* **Hosting:** Cloudflare Pages (Migrated from Netlify,Static Site Hosting).
* **Domain:** `melsawellness.pages.dev` (Custom domain `melsawellness.com` pending DNS update).
* **Booking:** Calendly (`/free` for Intro, direct intake for paid).
* **SEO:** Configured via `robots.txt` (Block Admin) and `sitemap.xml` (Allow Public).
* ~~**Forms:** Formsubmit.co (Email backend).~~
* **Backend Logic:** Google Apps Script (Serverless function for form handling).
* **Database:** Google Sheets (Two tabs: Newsletter, Intake).

### Key Integrations
| Feature | Provider | Logic |
| :--- | :--- | :--- |
| **Forms** | Custom JS `fetch()` | Sends data to Google Apps Script Web App URL. |
| **Database** | Google Sheets | Script appends rows to specific sheets based on hidden `formType` input. |
| **Booking** | Calendly | Direct links for `/free` (Intro) and custom intake for paid sessions. |
| **Analytics** | Cloudflare | Built-in privacy-first web analytics. |


#### 1. Newsletter (Drumming Circle)
* **Location:** `index.html` (Bottom section).
* **Backend:** Formsubmit.co
* **Redirect:** Dynamically redirects to `/thank-you.html` based on the current environment (UAT or Prod).

#### 2. Client Intake (1-on-1 Services)
* **Location:** `intake.html`.
* **Backend:** Formsubmit.co
* **Redirect:** Dynamically redirects to `/intake-success.html`.

#### 3. Booking
* **Intro Call:** Linked to [Calendly Free Consultation](https://calendly.com/melsawellness/free) (15-min).
* **Paid Session:** Managed via Intake process.

---

## 2. Design System (Light Theme)
* **Background:** Cream (`bg-stone-50` / `#FAF9F6`).
* **Primary Text:** Charcoal (`text-stone-900`).
* **Brand Accent:** Teal (`text-sage-500` / `#4FB5B0`) used for buttons, logos, and emphasis.
* **Typography:** Serif headings (Georgia) + Sans-serif body (Helvetica/Arial).
* **Visual Style:** Glassmorphism cards, tech-based metaphors for spiritual services.

### Primary Colors
| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Stone 50** | `#FAF9F6` | Background (Cream) |
| **Stone 900** | `#1C1917` | Text (Charcoal) |
| **Sage 500** | `#4FB5B0` | Brand Accent (Teal) |

### Typography
* **Headings:** Georgia (Serif) — *Represents "Mystic/Wisdom"*
* **Body:** Helvetica Neue / Arial (Sans) — *Represents "Rational/Modern"*

---

## 3. File Structure & Key Logic
* **`index.html` (Landing):**
    * Services Grid: Reordered to Integration → Clearing → Power.
    * Hypnosis: Added as "Subconscious Strategy" (Metaphor: System Admin).
    * Newsletter: Linked to `thank-you.html`.
* **`about.html` (Bio):**
    * Headline: "Hello, Inner World."
    * Image: Uses absolute path `/images/profile.png` (Crucial for Cloudflare).
* **`intake.html` (Diagnostic):**
    * Functions as a "System Diagnostic" form.
    * Redirects to `intake-success.html`.
* **`thank-you.html`:** For Drumming Circle signups.
* **`intake-success.html`:** For Client Intake submissions.

---

## 4. File Structure & Critical Logic

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

---

## 5. Version History & Milestones

### **[v2.3.0] Security & Architecture (2025-12-06)**
* **Infrastructure:** Implemented "Front of House" vs. "Back of House" architecture. Moved all client-facing files (`*.html`, `/images`) into a new `/public` directory.
* **Access Control:** Admin files (`README.md`, `CHANGELOG.md`, `melsawellness-dashboard.html`) are now isolated in the root and blocked from public deployment.
* **SEO & Security:** Added `robots.txt` (to block admin crawling) and `sitemap.xml` (to guide indexing). Added `noindex` meta tags to the dashboard.

### **[v2.2.0] Marketing Attribution (2025-12-01)**
* **Referral Tracking:** Added "How did you find us?" dropdowns to Newsletter and Intake forms.
* **Data Parsing:** Updated Google Apps Script to capture and record the referral source in the Master Database.
* **Notifications:** Admin email alerts now include the lead source.

### **[v2.1.0] SEO & Indexing (2025-12-01)**
* **On-Page:** Injected standard `<meta>` tags (Description, Keywords) and Open Graph (`og:`) tags for social sharing previews.
* **Operational:** Verified domain with Google Search Console and established Google Business Profile.

### **[v2.0.1] Launch Day (2025-11-30)**
* **Production:** Connected custom domain `www.melsawellness.com`. Site is live.

### **[v2.0.0] Automation Release (2025-11-29)**
* **Backend:** Replaced Formsubmit.co with custom **Google Apps Script** integration.
* **Features:** Added "Drumming Circle" newsletter section and `intake.html` diagnostic form.
* **Documentation:** Created `melsawellness-dashboard.html`.

### **[v1.0.0] Rebrand & V1 Release (2025-11-27)**
* **Design:** Full migration to Light Theme (Cream/Teal) and fixed mobile navbar layouts.
* **Localization:** Updated Chinese copy for professional tone.
* **Assets:** Fixed profile image paths and updated Calendly links to `/free` endpoint.

---

## 6. Critical "Gotchas" & Rules (DO NOT FORGET)
> **⚠️ IMPORTANT:**
> 1. **Image Paths:** Always use absolute paths with a leading slash (e.g., `/images/logo-w.png`) to prevent 404 errors on Cloudflare Clean URLs.
> 2. **Case Sensitivity:** Cloudflare is case-sensitive. Filenames in code must match Git exactly (e.g., `profile.png`, not `Profile.png`).
> 3. **Localization:** Chinese elements must have `class="hidden-lang"` in the HTML source to prevent flickering.

**Deployment Workflow:**
1. **Local Preview:** Use VS Code / Chromebook to view files locally first (0 cost).
2. **UAT:** Push to `uat` branch to test.
3. **Prod:** Merge Pull Request from `uat` to `main`.
4. **Magic Command:** Use `[skip ci]` in commit messages for minor edits to save build quota.

---

## 7. Operational Workflows

### A. The "Credit-Saver" Dev Workflow
To avoid hitting Cloudflare build limits (500/mo):
1.  **Local First:** Always preview `index.html` on your local machine (VS Code / Chromebook) to fix typos and layout.
2.  **Batch Commits:** Use `[skip ci]` in commit messages for minor saves that don't need immediate deployment.
3.  **UAT Testing:** Push to the `uat` branch to test on mobile or share with friends.
4.  **Production Release:** Only merge `uat` to `main` when features are 100% ready.

### B. Content Management (CMS)
* **Updating Text:** Edit HTML files directly. Use `<span class="lang-en">` and `<span class="lang-zh hidden-lang">` for bilingual content.
* **Updating Images:**
    * **Rule 1:** Filenames must be lowercase (`profile.png`, not `Profile.png`).
    * **Rule 2:** Use absolute paths in HTML (`/images/profile.png`).
    * **Method:** To replace an image, delete the old file in GitHub and upload the new one with the **exact same name**.

### C. Client Management
* **New Leads:** Check the **"Intake"** tab in your Google Sheet.
* **Drumming Circle:** Check the **"Newsletter"** tab in your Google Sheet.
* **Email Notifications:** You will receive an email notification for every new submission (configured in Apps Script).

---

## 8. Known "Gotchas" & Troubleshooting

### Image 404 Errors
* **Cause:** Usually case sensitivity (e.g., referencing `Logo.png` in code but file is `logo.png`).
* **Fix:** Rename file to all lowercase and ensure code matches exactly. Use absolute paths (`/images/...`).

### Form "Bad Request" (400)
* **Cause:** Google Apps Script permissions not set correctly.
* **Fix:** Redeploy the script as "Web App", set **"Execute as: Me"**, and **"Who has access: Anyone"**. Use the `/exec` URL.

### Chinese Text "Flicker"
* **Fix:** Ensure all Chinese elements have the `hidden-lang` class in the HTML source code. Do not rely solely on JS to hide them.

---

## 9. Future Roadmap Items
- [ ] **Blog/Journal:** Create a simple blog layout for sharing articles.
- **SEO:** Add `<meta>` descriptions and Open Graph (OG) tags for better social sharing.
- ~~[ ] **Domain Email:** Set up Cloudflare Email Routing to forward `hello@melsawellness.ca` to your Gmail.~~

*End of Handoff Document*