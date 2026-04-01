## 🎥 Live Preview

[![Watch Demo](https://img.shields.io/badge/Watch%20Demo-Available-orange)](https://drive.google.com/file/d/1qQUIrXFno4cKQa6S_l4pYG4lDSzn1mhG/view?t=1.822)

# HireHeaven - Modern Job Portal 🚀

HireHeaven is a comprehensive, microservices-based job portal platform designed to connect talented job seekers with top employers across India. It features a modern, responsive UI, secure authentication, real-time job listings, and a premium subscription model to boost candidate profiles.

## ✨ Key Features

*   **For Job Seekers:**
    *   Browse and apply for thousands of latest jobs.
    *   AI-powered career guidance and resume tracking.
    *   Upload profile pictures, manage resumes (PDFs), and track applications.
    *   Purchase premium subscriptions (mocked or integrated via Razorpay) to get priority application visibility.
*   **For Companies / Recruiters:**
    *   Post new job listings and manage requirements.
    *   Review candidate applications and resumes.
    *   Detailed company profiles and hiring dashboards.
*   **Platform Features:**
    *   Secure authentication & JWT-based session management.
    *   Microservices architecture for Scalability.
    *   Cloud-hosted media storage (Cloudinary).
    *   Fully responsive interface (Mobile-Friendly) with Dark/Light mode support.

## 🛠️ Technology Stack

**Frontend:**
*   [Next.js](https://nextjs.org/) (React Framework for SSR/SSG & App Router)
*   [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/) (Styling & Components)
*   [Axios](https://axios-http.com/) (API Client)
*   [Zustand / Context API] (State Management)

**Backend (Microservices - Node.js & Express):**
*   **Auth Service (Port `5005`):** User registration, login, JWT token generation.
*   **User Service (Port `5002`):** User Profile management, company registration & resumes.
*   **Job Service (Port `5003`):** Job creation, listing, searching, applying.
*   **Payment Service (Port `5004`):** Razorpay integration, subscription management checkout flow.
*   **Utils Service (Port `5001`):** Shared utilities like Cloudinary PDF/Image uploading.

**Database & Cloud:**
*   [Neon Serverless PostgreSQL](https://neon.tech/) (Primary Database)
*   [Cloudinary](https://cloudinary.com/) (Asset / File Storage)
*   [Upstash Redis / Kafka] (Caching & Event Queues - configured for production, optionally bypassed locally)

## 🏗️ Project Architecture

```plaintext
job-portal/
├── frontend/             # Next.js Application UI
└── services/             # Node.js Express Microservices
    ├── auth/             # Authentication & User Sessions
    ├── job/              # Job Listings & Applications
    ├── payment/          # Subscription & Payments
    ├── user/             # Profiles & Resumes
    └── utils/            # Image/PDF Uploads (Cloudinary)
```

## 🚀 Getting Started (Local Development)

### Prerequisites
*   Node.js (v18+)
*   npm or yarn
*   PostgreSQL Database URL (e.g., via Neon DB)
*   Cloudinary Account (Cloud Name, API Key, API Secret)
*   Razorpay Account (Optional for mock mode testing)

### 1. Clone the repository
```bash
git clone https://github.com/ashurai1/hireheaven.git
cd hireheaven
```

### 2. Configure Environment Variables
You need to create a `.env` file in the `frontend` folder and inside each of the microservices in the `services/` directory.

**Example `services/auth/.env`:**
```env
PORT=5005
DB_URL=postgresql://[user]:[password]@[host]/[dbname]?sslmode=require
JWT_SEC=your_jwt_secret_key
UPSTASH_KAFKA_REST_URL=your_kafka_url (optional for local)
UPSTASH_KAFKA_REST_USERNAME=your_username (optional for local)
UPSTASH_KAFKA_REST_PASSWORD=your_password (optional for local)
```

**Example `services/utils/.env`:**
```env
PORT=5001
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. Start the Backend Microservices
Open separate terminal tabs for each service and run the following:

```bash
# General template for any service (e.g., Auth Service)
cd services/auth
npm install --legacy-peer-deps
npm run build
npm start
```
*Repeat this for `user`, `job`, `payment`, and `utils`.*

### 4. Start the Frontend
In a new terminal tab:

```bash
cd frontend
npm install --legacy-peer-deps
npm run dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000).

## 📝 License

&copy; 2026 Ashwani Rai. All rights reserved.

---

*For any issues or contributions, feel free to open a PR or raise an issue!*
