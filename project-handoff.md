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
