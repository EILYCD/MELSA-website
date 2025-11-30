MELSA Wellness - Official Website

"Spiritual Autonomy for the Modern Mind"

This repository hosts the source code for the MELSA Wellness website. It is a lightweight, high-performance static site built with HTML5 and Tailwind CSS, deployed via Cloudflare Pages.

🌐 Live Environments

Environment|Branch|URL|Purpose
Production | main | https://melsawellness.pages.dev | Live public site
UAT | uat | https://uat.melsawellness.pages.dev | Versioning pre colour change
IST | ist | https://ist.melsawellness.pages.dev | Staging
DEV | dev | https://dev.melsawellness.pages.dev | Testing new features

🛠️ Tech Stack

Core: Semantic HTML5

Styling: Tailwind CSS (via CDN)

Scripting: Vanilla JavaScript (No frameworks)

Hosting: Cloudflare Pages

Forms: Formsubmit.co (Email-based backend)

Booking: Calendly Integration

🎨 Design System (Light Theme)

The website uses a custom "Rational Mystic" aesthetic, combining warm creams with professional teal accents.

Color Palette (tailwind.config)

Color Name

Hex Code

Usage

Stone 50

#FAF9F6

Main Body Background (Cream)

Stone 100

#F5F5F2

Secondary Background (Footer/Services)

Stone 900

#1C1917

Primary Text (Charcoal)

Sage 500

#4FB5B0

Brand Teal (Buttons, Accents, Logo)

Sage 600

#3D9C98

Hover State

Typography

Headings: Georgia (Serif) - Represents the "Mystic/Classic" side.

Body: Helvetica Neue / Arial (Sans-serif) - Represents the "Rational/Modern" side.

📐 Website Architecture Blueprint (網頁架構藍圖)

基於「理性的神秘主義者 (Rational Mystic)」品牌定位的設計規劃。

整體視覺關鍵字： 留白 (Whitespace)、雜誌感 (Editorial)、沉穩 (Stone/Sage)、結構化 (Structured)。

1. 導航列 (Navbar) —— 「安靜的指引」

功能： 讓使用者隨時能找到路，但不搶眼。

視覺： 背景採用半透明的毛玻璃效果（Frosted Glass），滑動時不會遮擋內容。

Logo： 左側使用襯線體 (Serif)，展現經典與優雅。

連結： 右側使用無襯線體 (Sans-serif) 全大寫，字距拉開，展現現代感與紀律。

重點： 右上角的「中/英切換」按鈕需要精緻顯眼。

2. 首頁主視覺 (Hero Section) —— 「定調與鉤子」

功能： 在 3 秒內告訴訪客「這裡不一樣」。不是一般的算命網站，而是給現代人的心靈方案。

視覺： 不使用滿版大圖，改用大量的米白色 (stone-50) 留白背景。

文字排版： 置中。

主標題： 大字號襯線體（例如："Beyond the Right Path"）。

副標題： 手寫感或斜體（"Find Your Own Answers"），增加人味。

按鈕： 兩個並排（左實心黑/綠：開始旅程；右空心框：閱讀故事）。

3. 核心理念 (Philosophy) —— 「建立差異化」

功能： 解決「為什麼我要找你？」並打破迷思（不需要大師，你需要的是自己）。

架構： 左右分割佈局 (50/50 Split)。

左側： 一張非常有質感的抽象圖片（例如岩石紋理或平靜水面），黑白或低飽和度。

右側： 文字區塊。標題「Cut Off the Middleman (無需中間人)」。

亮點： 中間穿插一句引用句 (Blockquote)，左邊有一條鼠尾草綠 (Sage Green) 的豎線裝飾。

4. 關於我 (About) —— 「理性與感性的橋樑」

功能： 證明您懂「現實世界」的壓力（MBA背景），也懂「靈性世界」的療癒。

視覺： 背景切換為淺灰色 (stone-100)，區分區塊。(註：目前已獨立為 about.html 頁面)

架構：

上方： 文字故事（A+ Student -> Shaman 的轉變）。

下方： 「憑證網格 (Credentials Grid)」。用四個整齊的小方格列出您的身份（薩滿、催眠、靈氣、MBA），用極細線條區隔，像一張精緻的規格表。

5. 服務項目 (Services) —— 「清晰的產品階梯」

功能： 讓訪客知道能買什麼。

視覺： 與整體淺色主題一致。

架構：

旗艦產品 (HSC)： 獨立大卡片，強調「心靈導航系統 (Spiritual GPS)」隱喻。

核心服務網格： 分為三大類 Integration (整合) -> Clearing (清理) -> Power (力量)。

內容： 結合科技隱喻（如 System Defragmentation, Battery Recharging）來解釋靈性服務。

行動： 按鈕連結到 Calendly 或 Intake Form。

6. 頁尾 (Footer) —— 「結尾」

視覺： 淺灰色背景 (stone-100)。

內容： 簡單的聯絡資訊、Email、IG/LinkedIn 連結。

📂 Project Structure

/
├── index.html          # Landing Page (Services, Philosophy, Newsletter)
├── about.html          # About Me Page (Profile, Story)
├── intake.html         # Client Intake Form (Diagnostic)
├── thank-you.html      # Success page for Newsletter signup
├── intake-success.html # Success page for Client Intake
├── README.md           # Project Documentation
└── images/             # Image Assets Folder
    ├── logo-w.png      # Primary Logo (Teal text, Transparent BG)
    └── profile.png     # Founder Portrait (MUST be lowercase)


⚠️ CRITICAL NOTE ON IMAGES:
Cloudflare Pages (Linux environment) is case-sensitive.

Always use lowercase filenames (e.g., profile.png, not Profile.png).

Always use absolute paths in HTML (e.g., /images/profile.png) to support Clean URLs.

🚀 Development Workflow (The "Credit-Saver" Method)

To avoid exhausting Cloudflare build limits, follow this workflow:

1. Local Development (0 Cost)

Download the code to your computer/Chromebook.

Use VS Code or a browser to preview index.html locally.

Make all edits (typos, colors, layout) locally first.

2. UAT Deployment (1 Credit)

When features are ready to test on mobile or share with others:

Push code to the uat branch.

Cloudflare automatically builds to the UAT URL.

3. Production Release (1 Credit)

When UAT is verified and perfect:

Create a Pull Request on GitHub: base: main ← compare: uat.

Merge the Pull Request.

💡 Skip Build Trick

If you are just saving code to GitHub (e.g., fixing a typo in a comment) and don't need a new deployment immediately, add [skip ci] to your commit message.

Example: git commit -m "Update comments [skip ci]"

🔌 Integrations

1. Newsletter (Drumming Circle)

Location: index.html (Bottom section).

Backend: Formsubmit.co

Redirect: Dynamically redirects to /thank-you.html based on the current environment.

2. Client Intake (1-on-1 Services)

Location: intake.html.

Backend: Formsubmit.co

Redirect: Dynamically redirects to /intake-success.html.

3. Booking

Intro Call: Linked to https://calendly.com/melsawellness/free.

Paid Session: Managed via Intake process or direct Calendly link.

📝 Localization (EN / 中文)

The site uses a class-based toggling system.

English elements: <span class="lang-en">...</span>

Chinese elements: <span class="lang-zh hidden-lang">...</span>

Logic: JavaScript toggles the hidden-lang class. Chinese is hidden by default in CSS to prevent layout flickering.

------
Here is a comprehensive **Project Handoff Summary** for MELSA Wellness. You can copy and paste this entire block into a new chat to resume work immediately without losing context.

---

# 📂 Project Handoff: MELSA Wellness Website

**Status:** Live (Light Theme / Cloudflare Hosted)
**Brand Concept:** "The Rational Mystic" (Bridging Corporate Logic & Cosmic Wisdom)

## 1. Technical Stack & Infrastructure
* **Frontend:** HTML5, Tailwind CSS (via CDN), Vanilla JavaScript.
* **Repository:** GitHub (Branches: `main` for Prod, `uat` for Testing).
* **Hosting:** **Cloudflare Pages** (Migrated from Netlify).
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
    * **Services Grid:** Reordered to **Integration $\rightarrow$ Clearing $\rightarrow$ Power**.
    * **Hypnosis:** Added as "Subconscious Strategy" (Metaphor: System Admin).
    * **Newsletter:** Linked to `thank-you.html`.
* **`about.html` (Bio):**
    * **Headline:** "Hello, Inner World."
    * **Image:** Uses absolute path `/images/profile.png` (Crucial for Cloudflare).
* **`intake.html` (Diagnostic):**
    * Functions as a "System Diagnostic" form.
    * Redirects to `intake-success.html`.
* **`thank-you.html`:** For Drumming Circle signups.
* **`intake-success.html`:** For Client Intake submissions.

## 4. Critical "Gotchas" & Rules (DO NOT FORGET)
1.  **Image Paths:** Always use **absolute paths** with a leading slash (e.g., `/images/logo-w.png`) to prevent 404 errors on Cloudflare Clean URLs.
2.  **Case Sensitivity:** Cloudflare is case-sensitive. Filenames in code must match Git exactly (e.g., `profile.png`, not `Profile.png`).
3.  **Localization:** Chinese elements must have `class="hidden-lang"` in the HTML source to prevent flickering.
4.  **Deployment Workflow:**
    * **Local Preview:** Use VS Code / Chromebook to view files locally first (0 cost).
    * **UAT:** Push to `uat` branch to test.
    * **Prod:** Merge Pull Request from `uat` to `main`.
    * **Magic Command:** Use `[skip ci]` in commit messages for minor edits to save build quota.

## 5. Latest Updates Completed
* Full migration to **Light Theme** (Cream/Teal).
* Fixed mobile navbar layout (Logo height `h-7`, `whitespace-nowrap` on buttons).
* Updated Chinese copy for professional tone ("類比", "預約線上諮詢").
* Fixed broken profile image by renaming to `profile.png` and using absolute paths.
* Updated Calendly link to specific `/free` endpoint.

---

### 🚀 Prompt to Start New Chat
*Copy and paste the following into your new chat session:*

> "I am working on the MELSA Wellness website (Static HTML/Tailwind on Cloudflare).
>
> **Current State:**
> 1. We have fully migrated to a Light Theme (Cream/Teal).
> 2. Services are structured: Integration -> Clearing -> Power.
> 3. We use a 'Credit-Saving' workflow: Local preview first, then push to UAT branch.
> 4. Critical technical rule: Images must use absolute paths (e.g., `/images/file.png`) and lowercase filenames.
>
> **My next task is:** [Insert your next goal here, e.g., 'Connect my custom domain', 'Add a blog section', 'Refine the mobile footer']"
