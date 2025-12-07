# Changelog
All notable changes to the MELSA Wellness project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---
## [2.3.0] - 2025-12-06 (Security & Architecture)
### 🏗️ Infrastructure
- **Directory Split:** Implemented "Front of House" vs "Back of House" architecture. Moved all client-facing files (`*.html`, `/images`) into a new `/public` directory.
- **Access Control:** Admin files (`README.md`, `CHANGELOG.md`, `melsawellness-dashboard.html`) are now isolated in the root and blocked from public deployment.

### 🔒 Security & SEO
- **Robots.txt:** Added `robots.txt` to strictly disallow crawling of admin documentation and success pages.
- **Sitemap:** Added `sitemap.xml` to explicitly guide search engines to `index`, `about`, and `intake` pages.
- **Dashboard:** Added `<meta name="robots" content="noindex">` tag to the dashboard for double-layered security.

## [2.2.0] - 2025-12-01 (Marketing Attribution)
### 🚀 Features (Marketing)
- **Referral Tracking:** Added a "How did you find us?" dropdown menu to both the Newsletter form (`index.html`) and Diagnostic Intake form (`intake.html`).
- **Options:** Added sources: Instagram, LinkedIn, Google Search, Friend/Colleague, FSS/Community.

### 🔧 Backend & Database
- **Google Apps Script:** Updated the `doPost` function to parse and capture the new `referral` parameter from frontend fetch requests.
- **Database Schema:** Added "Referral" column headers to the 4th column (Newsletter) and 6th column (Intake) in the Master Google Sheet.
- **Notifications:** Updated automated email alerts to include the "Source" field for immediate attribution visibility.

## [2.1.0] - 2025-12-01 (SEO & Indexing)
### 🔍 SEO & Metadata
- **On-Page SEO:** Injected standard `<meta>` tags into `index.html` (Description, Keywords: "Shamanic Healing Toronto", Author).
- **Social Sharing:** Implemented Open Graph (`og:`) tags to ensure professional link previews (Title, Description, Brand Image) on LinkedIn and Facebook.

### 🏢 Operational
- **Google Search Console:** Verified domain ownership (`melsawellness.ca`) via Cloudflare DNS and submitted indexing request.
- **Google Business Profile:** Established local presence for "MELSA Wellness" in Markham/Toronto to capture "near me" traffic.


---

## [2.0.1] - 2025-11-30 (Launch Day)
### 🚀 Launch
- **Domain:** Purchased and connected custom domain `www.melsawellness.com` (and `.ca` alias).
- **Production:** Site is now live and fully accessible via custom domain.

## [2.0.0] - 2025-11-29 (Automation Release)
### ✨ Added
- **Newsletter:** Added "Drumming Circle" section with "Coming Soon" card design.
- **Intake System:** Implemented `intake.html` diagnostic form with "System Bug/Desired State" fields.
- **Backend Automation:** Replaced Formsubmit.co with custom **Google Apps Script** integration for secure data entry into Google Sheets.
- **Dashboard:** Created `melsawellness-dashboard.html` for developer documentation.
- **Success Pages:** Added `thank-you.html` (Newsletter) and `intake-success.html` (Intake) for better UX.

### 🔧 Fixed
- **Data Flow:** Solved Formsubmit redirection issues by using custom JS `fetch()` logic.

## [1.0.0] - 2025-11-27 (Rebrand & V1 Release)
### 🎨 Changed
- **Theme:** Full migration to Light Theme (Cream `stone-50` & Teal `sage-500`).
- **Logo:** Integrated `logo-w.png` and removed text-based headers.
- **Service Architecture:** Restructured services grid to: Integration → Clearing → Power.

### 🐛 Fixed
- **Mobile Layout:** Adjusted mobile navbar logo height and button spacing.
- **Assets:** Fixed 404 error on profile image by enforcing absolute paths (`/images/profile.png`) for Cloudflare.

## [0.2.0] - 2025-11-26 (MVP Infrastructure)
### 🏗️ Infrastructure
- **Hosting:** Migrated from Netlify to Cloudflare Pages (Unlimited Bandwidth).
- **Environment:** Established UAT (Staging) and Main (Production) branching strategy.
- **Booking:** Integrated Calendly for scheduling.

### 🐛 Fixed
- **Netlify Limits:** Resolved issue with Netlify free tier credit exhaustion during development.

## [0.1.0] - 2025-11-25 (Proof of Concept)
### 🎉 Initial
- **Repo:** Set up GitHub repository `EILYCD/MELSA-website`.
- **Deploy:** First successful static deployment (via Netlify).
