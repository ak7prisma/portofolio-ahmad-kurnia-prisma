# 🚀 Personal Portfolio - Ahmad Kurnia Prisma

![Project Banner](public/Preview.png)

> A modern, responsive, and interactive portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Designed to showcase my projects, skills, and professional journey with smooth animations and clean architecture.

🔗 **Live Demo:** [https://portofolio-ahmad-kurnia-prisma.vercel.app/](https://portofolio-ahmad-kurnia-prisma.vercel.app/)

---

## 🛠️ Tech Stack

This project leverages the latest web technologies for optimal performance and developer experience:

-   **Framework:** [Next.js 14/15 (App Router)](https://nextjs.org/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animation:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
-   **Deployment:** [Vercel](https://vercel.com/)

---

## ✨ Key Features

-   **🎨 Modern UI/UX:** Dark-themed, sleek design with glassmorphism effects.
-   **📱 Fully Responsive:** Optimized for all devices (Mobile, Tablet, Desktop).
-   **⚡ High Performance:** Static site generation and optimized assets via Next.js.
-   **🎭 Smooth Animations:** Scroll-reveal effects and interactive elements using Framer Motion.
-   **🧩 Modular Architecture:** Data, Logic (Hooks), and UI are strictly separated for maintainability.
-   **📧 Working Contact Form:** Integrated with Formspree/EmailJS (custom hook implementation).

---

## 📂 Project Structure

The project follows a "Clean Code" structure to ensure scalability:

```bash
root/
├── app/               # Next.js App Router pages
├── components/        # Reusable UI components
│   ├── ui/            # Atomic components (Buttons, Inputs, Cards)
│   ├── project/       # Project-specific components (Preview, Details)
│   ├── contact/       # Contact form & info components
│   └── .../           # Other component (about, hero, etc)
├── data/              # ALL content (Text, Links, Projects) lives here
├── hooks/             # Custom React Hooks (e.g., useContactForm)
└── lib/               # Utilities (Animation variants, helpers)

```

---

## 🚀 Getting Started Locally

Follow these steps to run the project on your local machine:

1. **Clone the repository**
```bash
git clone [https://github.com/ak7prisma/portofolio-ahmad-kurnia-prisma.git](https://github.com/ak7prisma/portofolio-ahmad-kurnia-prisma.git)
cd portfolio-ahmad-kurnia-prisma

```


2. **Install Dependencies**
```bash
npm install
# or
yarn install

```


3. **Run Development Server**
```bash
npm run dev

```


4. **Open in Browser**
Visit `http://localhost:3001` to see the app in action.

---

## 📝 Customization

Because of the **Data-Driven** architecture, you can update the content easily without touching the UI code:

* **Update Bio/Stats:** Edit `root/data/about.tsx`
* **Update Projects:** Edit `root/data/projects.tsx`
* **Update Social Links:** Edit `root/data/socials.tsx`
* **Update Contact Info:** Edit `root/data/contact.tsx`

---

## 📬 Contact

Feel free to reach out if you want to collaborate or just say hi!

* **Email:** ahmadkurniaprisma@gmail.com
* **LinkedIn:** [Ahmad Kurnia Prisma](https://www.google.com/search?q=https://www.linkedin.com/in/ahmad-kurnia-prisma-1b639a313)
* **Instagram:** [@akprisma](https://www.google.com/search?q=https://www.instagram.com/akprisma)

---

Developed by **Ahmad Kurnia Prisma**

```

```