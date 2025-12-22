This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Qutopia – Game-Based Learning & Student Monitoring System

## 📌 Overview

Qutopia is a **game-based learning system** integrated with a **web-based monitoring dashboard** designed to help teachers track student learning progress.

This system combines an **educational game (Unity)** with a **web application** that allows teachers to monitor:

* Student mastery levels
* Learning stages completed
* Quiz and assessment results

The project was developed as an **undergraduate thesis project** and simulates a real-world learning analytics system.

---

## 🎯 Problem Statement

Teachers often face difficulties in monitoring student learning progress when using game-based learning media. Progress data is scattered, not centralized, and difficult to analyze.

---

## 💡 Solution

Qutopia provides an integrated solution by:

* Capturing student learning progress directly from the game
* Sending progress data to a centralized server using REST APIs
* Presenting learning analytics through a web-based admin dashboard for teachers

This allows teachers to monitor student performance **efficiently and in real-time**.

---

## 🧑‍💻 User Roles

* **Student**: Plays the Qutopia educational game
* **Teacher (Admin)**: Monitors student progress and manages assessment data

---

## ⚙️ Main Features

### 🎮 Educational Game (Unity)

* Multiple learning stages
* Scoring and mastery system
* Player progress tracking
* API-based data synchronization

### 🌐 Web Admin Dashboard

* Authentication (Teacher/Admin)
* Student data management (CRUD)
* Question and quiz management
* Student mastery & stage monitoring
* Dashboard statistics and analytics
* Report generation (PDF/Excel if enabled)

---

## 🏗️ System Architecture

```
Unity Game (Qutopia)
        |
        | REST API (JSON)
        v
Web Server (PHP)
        |
        v
Database (MySQL)
```

The game communicates with the web system through RESTful APIs to synchronize learning data.

---

## 🛠️ Technology Stack

### Game Development

* Unity
* C#

### Frontend (Portfolio & Admin UI)
- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion

### Web Development

* PHP
* JavaScript
* HTML & CSS
* Bootstrap

### Database

* MySQL

### Communication

* REST API
* JSON

---

## 📸 Screenshots

*(Add screenshots of the game and web dashboard here)*

---

## ▶️ Live Demo

* **Game**: [https://ikhssan.itch.io/qutopia](https://ikhssan.itch.io/qutopia)
* **Web Dashboard**: [https://mclquiz.my.id/quiz/dashboard.php](https://mclquiz.my.id/quiz/dashboard.php)

---

## 🧪 Demo Account (Optional)

```
Username: admin
Password: admin234
```

*(Use dummy data only)*

---

## 👤 Author & Role

**Ikhsan**

* Full Stack Developer
* Responsible for game logic, API integration, database design, and web dashboard development

---

## 📄 License

This project is developed for educational and portfolio purposes.
