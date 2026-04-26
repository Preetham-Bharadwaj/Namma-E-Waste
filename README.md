# ♻️ Namma E-Waste — User App

> Smart, responsible, and effortless e-waste disposal at your doorstep.

---

## 🚀 Overview

**Namma E-Waste** is a modern, user-friendly platform designed to simplify electronic waste disposal.
With just a few steps, users can schedule a pickup, track the process in real time, and contribute to a greener environment.

This application focuses on **consumer experience**, making e-waste recycling **accessible, transparent, and rewarding**.

---

## ✨ Key Features

### 🏠 Home

* Quick overview of your activity
* Easy access to **Schedule Pickup**
* Displays active pickups dynamically (no dummy data)

---

### 📅 Schedule Pickup

* Select electronic category (mobile, laptop, etc.)
* Upload images of your device
* AI-based **condition analysis & price estimation**
* Choose pickup address and time slot
* Confirm request in a structured flow

---

### 📍 Track Pickup

* Real-time status updates:

  * `Pending` → Searching for collector
  * `Accepted` → Collector assigned
  * `En Route` → Live tracking
  * `Completed` → Pickup successful
* Seamless sync with backend (Firestore)

---

### 📊 Impact

* Tracks your environmental contribution
* Shows:

  * Total items recycled
  * Credits earned
  * Sustainability impact

---

### 👤 Profile

* Manage saved pickup addresses
* View pickup history
* Access support and certificates

---

## 🧠 Smart AI Integration

* Uses **Google Gemini Vision API**
* Analyzes uploaded images
* Determines:

  * Device condition
  * Estimated resale/recycle value

> AI enhances decision-making but does not replace user control.

---

## ⚙️ Tech Stack

* **Frontend:** React (Vite)
* **Database:** Firebase Firestore
* **Storage:** Firebase Storage
* **Authentication:** Firebase Auth
* **AI:** Google Gemini API
* **State Management:** React Hooks

---

## 🔄 Real-Time Workflow

```text
User schedules pickup
        ↓
Stored in Firestore (status: pending)
        ↓
Collector app receives request
        ↓
Status updates in real-time
        ↓
User tracks live progress
```

---

## 📦 Project Structure

```text
src/
 ├── components/
 ├── pages/
 ├── services/
 │    ├── orderService.ts
 │    ├── aiService.ts
 ├── firebase.ts
 └── context/
```

---

## 🔐 Environment Setup

Create a `.env` file:

```env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_GEMINI_API_KEY=your_gemini_key
```

---

## 🛠️ Installation

```bash
npm install
npm run dev
```

---

## 📌 Important Notes

* No dummy data — everything is **Firebase-driven**
* UI is **mobile-first and responsive**
* AI runs only after user confirmation (controlled flow)
* Secure environment variables (no secrets in repo)

---

## 🌱 Vision

To create a **scalable, real-time e-waste ecosystem** where:

* Users dispose responsibly
* Collectors operate efficiently
* Cities become cleaner

---

## 🤝 Contribution

Open to improvements, ideas, and collaboration!

---

## 📣 Tagline

> *Dispose E-Waste with Ease.*

---
