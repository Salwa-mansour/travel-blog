<div align="center">

# ✈️   Minimalist Headless CMS Travel Blog

A content-driven travel blog featuring dynamic Sanity CMS integration, fluid GSAP scroll animations, and a fully responsive layout built with Astro and React.

[**Explore Live Demo**](https://travel-blog-bay-five.vercel.app/) · [**Report Bug**](https://github.com/Salwa-mansour/travel-blog/issues)

</div>

<br>

---

## ⚡ About The Project

 a modern travel blog designed to blend rich storytelling with high-performance web animations. By decoupling the frontend presentation layer from a headless CMS, it provides a lightning-fast browsing experience while allowing seamless content management.

### ✨ Key Features
* **Headless CMS Integration:** Powered by Sanity.io for structured, real-time blog post management and content delivery.
* **Fluid GSAP Animations:** Implements smooth scroll-triggered transitions and motion paths to enhance the visual storytelling experience.
* **Fully Responsive Design:** Crafted with mobile-first layouts that scale gracefully across all screen sizes.
* **Optimized Performance:** Built using static-first architecture for fast load times and SEO readiness.

---

## 🛠️ Tech Stack

* **Frontend Framework:** Astro, React, Custom CSS
* **Content Management:** Sanity.io (GROQ queries)
* **Animations:** GSAP (GreenSock Animation Platform)
* **Deployment:** Vercel

---

## ⚙️ Architecture & Technical Highlights

* **Headless Content Pipelines:** Utilized Sanity client and GROQ queries to fetch dynamic post data, images, and frontmatter content cleanly into component views.
* **Scroll-Driven Motion Design:** Integrated GSAP ScrollTrigger plugins to orchestrate complex UI animations without sacrificing page performance or layout shift.
* **Component-Driven UI:** Leveraged Astro's island architecture to keep heavy JavaScript interactions (like animations and dynamic widgets) isolated to specific React components.

---

## 📂 Getting Started

To run this project locally:

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/Salwa-mansour/travel-blog.git](https://github.com/Salwa-mansour/travel-blog.git)
   ```
   Install Dependencies:

Bash
```
pnpm install
```
Configure Environment Variables:
Create a .env file in the root directory and add your Sanity project details:

Code snippet
```
PUBLIC_SANITY_PROJECT_ID="your_sanity_project_id"
PUBLIC_SANITY_DATASET="production"
```
Run Development Server:

Bash
```
pnpm run dev
```
💡 What I Learned
Building this blog sharpened my skills in working with headless CMS schemas, writing efficient GROQ queries, and orchestrating smooth, performance-conscious micro-interactions using GSAP.

📝 License
Distributed under the MIT License.
