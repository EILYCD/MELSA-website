# 📂 Project Handoff: MELSA Wellness Website

* **Status:** Live (Light Theme / Cloudflare Hosted)
* **Brand Concept:** "The Rational Mystic" (Bridging Corporate Logic & Cosmic Wisdom)

---

## 1. Technical Stack & Infrastructure
* **Frontend:** HTML5, Tailwind CSS (via CDN), Vanilla JavaScript.
* **Repository:** GitHub (Branches: `main` for Prod, `uat` for Testing).
* **Hosting:** Cloudflare Pages (Migrated from Netlify).
* **Domain:** `melsawellness.pages.dev` (Custom domain `melsawellness.com` pending DNS update).
* **Forms:** Formsubmit.co (Email backend).
* **Booking:** Calendly (`/free` for Intro, direct intake for paid).

## 2. Design System (Light Theme)
* **Background:** Cream (`bg-stone-50` / `#FAF9F6`).
* **Primary Text:** Charcoal (`text-stone-900`).
* **Brand Accent:** Teal (`text-sage-500` / `#4FB5B0`) used for buttons, logos, and emphasis.
* **Typography:** Serif headings (Georgia) + Sans-serif body (Helvetica/Arial).
* **Visual Style:** Glassmorphism cards, tech-based metaphors for spiritual services.

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

## 4. Critical "Gotchas" & Rules (DO NOT FORGET)
> **⚠️ IMPORTANT:**
> 1. **Image Paths:** Always use absolute paths with a leading slash (e.g., `/images/logo-w.png`) to prevent 404 errors on Cloudflare Clean URLs.
> 2. **Case Sensitivity:** Cloudflare is case-sensitive. Filenames in code must match Git exactly (e.g., `profile.png`, not `Profile.png`).
> 3. **Localization:** Chinese elements must have `class="hidden-lang"` in the HTML source to prevent flickering.

**Deployment Workflow:**
1. **Local Preview:** Use VS Code / Chromebook to view files locally first (0 cost).
2. **UAT:** Push to `uat` branch to test.
3. **Prod:** Merge Pull Request from `uat` to `main`.
4. **Magic Command:** Use `[skip ci]` in commit messages for minor edits to save build quota.

## 5. Latest Updates Completed
* [x] Full migration to Light Theme (Cream/Teal).
* [x] Fixed mobile navbar layout (Logo height `h-7`, `whitespace-nowrap` on buttons).
* [x] Updated Chinese copy for professional tone ("類比", "預約線上諮詢").
* [x] Fixed broken profile image by renaming to `profile.png` and using absolute paths.
* [x] Updated Calendly link to specific `/free` endpoint.

---

## 🚀 Prompt to Start New Chat
*Copy and paste the following into your new chat session:*

```text
I am working on the MELSA Wellness website (Static HTML/Tailwind on Cloudflare).

Current State:
We have fully migrated to a Light Theme (Cream/Teal).
Services are structured: Integration -> Clearing -> Power.
We use a 'Credit-Saving' workflow: Local preview first, then push to UAT branch.
Critical technical rule: Images must use absolute paths (e.g., /images/file.png) and lowercase filenames.

My next task is: [Insert your next goal here, e.g., 'Connect my custom domain', 'Add a blog section', 'Refine the mobile footer']
```
---
# 📦 MELSA Wellness Project Handoff

> **Version:** 2.0 (Live Release)
> **Date:** November 30, 2025
> **Status:** ✅ Production Active

---

## 1. Project Overview
**Brand Identity:** "The Rational Mystic"
MELSA Wellness bridges corporate strategy and shamanic wisdom, targeting high-achieving professionals. The website reflects this with a clean, structured "Light Theme" aesthetic (Cream & Teal) and tech-forward metaphors for spiritual services.

### Live URLs
* **Production (Main):** [https://melsawellness.com](https://melsawellness.com) (Primary Domain)
* **Staging (UAT) Backup:** [https://uat.melsawellness.pages.dev](https://uat.melsawellness.pages.dev)
* **IST/Feature Testing:** [https://dev.melsawellness.pages.dev](https://dev.melsawellness.pages.dev)
* **Dev/Feature Testing:** [https://dev.melsawellness.pages.dev](https://dev.melsawellness.pages.dev)

---

## 2. Technical Architecture

### Stack
* **Frontend:** HTML5, Vanilla JavaScript, Tailwind CSS (CDN).
* **Hosting:** Cloudflare Pages (Static Site Hosting).
* **Backend Logic:** Google Apps Script (Serverless function for form handling).
* **Database:** Google Sheets (Two tabs: Newsletter, Intake).
* **Booking System:** Calendly.

### Key Integrations

| Feature | Provider | Logic |
| :--- | :--- | :--- |
| **Forms** | Custom JS `fetch()` | Sends data to Google Apps Script Web App URL. |
| **Database** | Google Sheets | Script appends rows to specific sheets based on hidden `formType` input. |
| **Booking** | Calendly | Direct links for `/free` (Intro) and custom intake for paid sessions. |
| **Analytics** | Cloudflare | Built-in privacy-first web analytics. |

---

## 3. File Structure & Critical Logic

```text
/
├── index.html             # Landing Page
│   ├── Logic: Language Toggle, Mobile Menu, Newsletter Form Submission
│   └── Key Sections: Hero, Philosophy, Services Grid, Newsletter
├── about.html             # About Page
│   ├── Logic: Language Toggle
│   └── Assets: Uses absolute path /images/profile.png
├── intake.html            # Diagnostic Intake Form
│   ├── Logic: Form Submission -> Redirect to intake-success.html
│   └── Fields: Name, Email, Current Challenge, Desired Outcome
├── thank-you.html         # Success Page for Newsletter (Drumming Circle)
├── intake-success.html    # Success Page for Client Intake
├── melsawellness-dashboard.html # Developer Documentation Dashboard
├── README.md              # Project Documentation
└── images/                # Asset Folder (Case Sensitive!)
    ├── logo-w.png         # Teal Logo (Transparent BG)
    └── profile.png        # Emily's Photo
```

---

## 4. Design System (Light Theme)

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

## 5. Operational Workflows

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

## 6. Known "Gotchas" & Troubleshooting

### Image 404 Errors
* **Cause:** Usually case sensitivity (e.g., referencing `Logo.png` in code but file is `logo.png`).
* **Fix:** Rename file to all lowercase and ensure code matches exactly. Use absolute paths (`/images/...`).

### Form "Bad Request" (400)
* **Cause:** Google Apps Script permissions not set correctly.
* **Fix:** Redeploy the script as "Web App", set **"Execute as: Me"**, and **"Who has access: Anyone"**. Use the `/exec` URL.

### Chinese Text "Flicker"
* **Fix:** Ensure all Chinese elements have the `hidden-lang` class in the HTML source code. Do not rely solely on JS to hide them.

---

## 7. Future Roadmap Items
- [ ] **Blog/Journal:** Create a simple blog layout for sharing articles.
- [ ] **SEO:** Add `<meta>` descriptions and Open Graph (OG) tags for better social sharing.
- [ ] **Domain Email:** Set up Cloudflare Email Routing to forward `hello@melsawellness.ca` to your Gmail.

*End of Handoff Document*
