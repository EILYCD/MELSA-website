# Changelog
All notable changes to the MELSA Wellness project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
