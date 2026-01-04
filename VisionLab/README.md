# MELSA Wellness OS | Vision Lab (Web Edition) 🌿

**Spiritual Autonomy for the Modern Mind.**
> *"We suffer more often in imagination than in reality." — Seneca*

The **MELSA Vision Lab** is a minimalist, privacy-focused web application designed to help you align your daily actions with your core purpose. By digitizing the **Design Your Life (DYL)** framework and **Stoic philosophy**, it acts as a "mirror" for your internal state.
This repository contains the **Web Edition**: a lightweight, serverless implementation that runs on Cloudflare Pages, utilizing Google Gemini AI for intelligence while maintaining strict data privacy.

---

## 🏗️ Architecture & Philosophy

This project is built on a **Trust-First Architecture**. Unlike typical SaaS products, this tool does not store your life data on a central server. It combines the power of Large Language Models (LLMs) with the privacy of local storage.

### The Transformation Pipeline

The Vision Lab guides you through a proprietary 4-stage cognitive workflow:
1. **Ingestion (The Audit):** Collecting raw reflections on vitality (energy givers/takers) and alignment (Workview vs. Lifeview).
2. **Synthesis (The Oracle):** Using **Gemini 1.5 Flash**, the system identifies "Coherency Gaps"—conflicts between what you believe and how you act.
3. **Pressure Testing (The Stoic):** Applying Tim Ferriss’s "Fear Setting" protocol to define, prevent, and repair potential failures.
4. **Reframing (The Advisor):** Utilizing the **Solomon’s Paradox** psychological effect to bypass ego and access objective wisdom.

### 🧠 Intelligence Layer
The app uses a "Backend-for-Frontend" pattern to secure AI interactions.

| Module | AI Model | Function |
| --- | --- | --- |
| **Oracle Report** | `gemini-1.5-flash` | Analyzes "Vitality Highs/Lows" to detect energy patterns and generate a structured Markdown insight report. |
| **Solomon Advisor** | `gemini-1.5-flash` | Facilitates "Psychological Distancing" by rewriting user struggles into a third-person narrative to trigger objective problem solving. |

---

## 🛠 Technical Stack

This version removes the complexity of build steps (Webpack/Vite) in favor of a standard web standards approach, deployable instantly to the edge.

* **Frontend:** Semantic HTML5, Vanilla JavaScript (ES Modules).
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN) utilizing the Stone & Sage design system.
* **Icons:** [Lucide](https://lucide.dev/) (via CDN).
* **Persistence:** Browser `localStorage` (No database required).
* **Backend/Proxy:** [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/platform/functions/) (Serverless).
* **AI Provider:** Google Gemini API.

---

## 🚀 Deployment Guide

This project is optimized for **Cloudflare Pages**.

### 1. Folder Structure
Ensure your repository looks exactly like this:

```text
/
├── index.html                 # The main application UI
└── functions/
    └── api/
        └── generate.js        # The serverless function hiding your API key

```

### 2. Cloudflare Setup

1. Log in to the **Cloudflare Dashboard**.
2. Navigate to **Workers & Pages** > **Create Application** > **Connect to Git**.
3. Select this repository.
4. **Build Settings:**
* Framework Preset: `None`
* Build Command: `(Leave Empty)`
* Output Directory: `(Leave Empty)`



### 3. Environment Variables (Critical)

To enable the AI features, you must provide your Google Gemini API key via Cloudflare.

1. Go to your Project Settings in Cloudflare.
2. Select **Environment Variables**.
3. Add a new variable:
* **Variable Name:** `GEMINI_API_KEY`
* **Value:** `AIzaSy...` (Your actual Google API Key)


4. Redeploy the project.

---

## 🔒 Privacy & Governance

* **Local-First Storage:** All user inputs (reflections, fears, plans) are saved to your browser's `localStorage`. Clearing your browser cache will reset the app.
* **Transient Intelligence:** User data is sent to the Google Gemini API *only* during the generation request. It is not stored on our servers, nor is it used to train the model (per Google's API data privacy terms).
* **Secure Proxy:** Your API key is stored securely in Cloudflare's environment variables, never exposed to the client-side browser code.

---

## ⚖️ Credits & Frameworks

* **Design Your Life (DYL):** Bill Burnett & Dave Evans (Stanford).
* **Fear Setting:** Tim Ferriss & Seneca.
* **Solomon's Paradox:** Igor Grossmann (University of Waterloo).
* **LLM Integration:** Google DeepMind / Vertex AI.
