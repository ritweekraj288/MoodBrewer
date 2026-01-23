# ☕ MoodBrewer - AI-Powered Coffee Curator

**MoodBrewer** is a sophisticated, AI-driven coffee and snack recommendation system. It enhances the coffee experience by curating personalized beverage selections based on the user's current mood, taste preferences, time of day, and caffeine tolerance.

Designed with a **premium aesthetic**, MoodBrewer merges advanced technology with the art of coffee culture, offering a fluid, immersive, and visually stunning interface.

![MoodBrewer](https://img.shields.io/badge/MoodBrewer-AI%20Coffee%20Curator-D4AF37?style=for-the-badge&logo=coffee)
![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![FastAPI](https://img.shields.io/badge/FastAPI-0.127.0-009688?style=for-the-badge&logo=fastapi)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## 🌟 Features

-   **AI-Driven Recommendations**: A smart algorithm that accounts for mood, taste (sweet, bold, creamy), temperature preference, and caffeine levels.
-   **Premium Design System**: A "Deep Espresso" & "Warm Gold" aesthetic featuring glassmorphism, smooth gradients, and micro-interactions.
-   **Interactive Chat Interface**: A concierge-like experience where users input their preferences and receive instant, curated suggestions.
-   **Dynamic Menu**: A comprehensive catalog involving Specialty Coffees, Manual Brews, Shakes, Teas, and Food items.
-   **Responsive & Smooth**: Built with **Framer Motion** for production-ready animations and seamless transitions across all devices.

---

## 🛠️ Tech Stack

### **Frontend** (Client-Side)

The frontend is a high-performance web application built with the latest React ecosystem tools.

-   **Framework**: [Next.js 16.1.1](https://nextjs.org/) (App Router)
-   **Core Library**: [React 19.2.3](https://react.dev/)
-   **Language**: [TypeScript 5](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (Utility-first framework)
-   **Animations**: [Framer Motion 12.25.0](https://www.framer.com/motion/)
-   **HTTP Client**: [Axios 1.13.2](https://axios-http.com/)
-   **Icons**: [Lucide React 0.562.0](https://lucide.dev/)
-   **Fonts**:
    -   *Inter* (Sans-serif) - Primary UI font.
    -   *Playfair Display* (Serif) - Headings and accent text.
    -   *Geist Mono* (Monospace) - Technical elements.

### **Backend** (Server-Side)

The backend is a lightweight, high-speed API powered by modern Python tools.

-   **Framework**: [FastAPI 0.127.0](https://fastapi.tiangolo.com/)
-   **Server**: [Uvicorn 0.40.0](https://www.uvicorn.org/) (ASGI)
-   **Validation**: [Pydantic 2.12.5](https://docs.pydantic.dev/)
-   **Language**: Python 3.13+
-   **CORS**: Configured for flexible development and secure production deployment.

---

## 📁 Project Structure

```bash
MoodBrewer/
├── backend/
│   ├── main.py              # FastAPI entry point & API routes
│   ├── menu.py              # Coffee & Food menu data structure
│   ├── recommender.py       # Recommendation logic & scoring algorithm
│   ├── schemas.py           # Pydantic models (Data validation)
│   └── requirements.txt     # Python dependencies
│
├── frontend/
│   ├── app/
│   │   ├── components/      # React Components
│   │   │   ├── ChatInterface.tsx  # Core interaction component
│   │   │   ├── Hero.tsx           # Landing page hero section
│   │   │   ├── Navbar.tsx         # Navigation & branding
│   │   │   └── Footer.tsx         # Site footer
│   │   ├── globals.css      # Global styles, variables & Tailwind directives
│   │   ├── layout.tsx       # Root layout (Fonts, Metadata)
│   │   └── page.tsx         # Main entry page
│   ├── public/              # Static assets (images, icons)
│   ├── package.json         # Frontend dependencies
│   ├── next.config.ts       # Next.js configuration
│   └── tsconfig.json        # TypeScript configuration
└── README.md                # Project documentation
```

---

## 🎨 Design System

MoodBrewer utilizes a custom CSS variable system to maintain visual consistency.

### **Color Palette**

| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Coffee Black** | `#050505` | Main Background |
| **Coffee Dark** | `#0F0F0F` | Secondary Backgrounds |
| **Coffee Bean** | `#241A15` | UI Elements |
| **Espresso** | `#3C2A20` | Borders / Accents |
| **Crema** | `#C69C6D` | Primary Text / Gradients |
| **Gold Bright** | `#D4AF37` | Highlights / Active States |
| **Foam** | `#F5E6D3` | Body Text |

### **Typography**

-   **Headings**: `Playfair Display` (Serif) – Adds elegance and sophistication.
-   **Body**: `Inter` (Sans-serif) – Ensures clean readability.
-   **Accents**: `Geist Mono` – Used for prices, tags, and technical specs.

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

-   **Node.js** v18+
-   **Python** 3.13+
-   **npm** or **yarn**

### 1. Backend Setup

1.  Navigate to the backend folder:
    ```bash
    cd backend
    ```
2.  Create a virtual environment (optional but recommended):
    ```bash
    python -m venv venv
    source venv/bin/activate  # Mac/Linux
    # or
    venv\Scripts\activate     # Windows
    ```
3.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4.  Start the server:
    ```bash
    uvicorn main:app --reload --port 8000
    ```
    > The API will be live at `http://localhost:8000`

### 2. Frontend Setup

1.  Navigate to the frontend folder:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env.local` file:
    ```bash
    echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
    > The app will be accessible at `http://localhost:3000`

---

## 🧠 How It Works

### The Recommendation Engine

The core logic (`recommender.py`) scores every item in the menu based on the user's input. The scoring system assigns points:

1.  **Mood Match (3 pts)**: Does the drink align with "Focused", "Relaxed", etc.?
2.  **Taste Match (3 pts)**: Sweet, Bold, Creamy, etc.
3.  **Time of Day (2 pts)**: Morning, Afternoon, Evening suitability.
4.  **Caffeine Match (2 pts)**: High vs Low caffeine needs.
5.  **Temperature (1 pt)**: Hot vs Cold preference.

The item with the highest total score is returned.

### API Endpoints

-   `GET /`: Health check. Returns `{"status": "MoodBrewer backend running"}`.
-   `POST /chat`: Accepting user preferences and returning a recommendation.
    -   **Body**: `{"mood": "focused", "taste": "bold", "time": "morning", ...}`
    -   **Response**: `{"recommendation": "Espresso", "reason": "...", "price": 120}`

---

## 🔧 Configuration & Deployment

### Environment Variables
-   **Frontend**: `NEXT_PUBLIC_API_URL` (points to the backend URL).
-   **Backend**: CORS settings in `main.py` can be adjusted to restrict origins in production.

### Production Build

**Frontend**:
```bash
npm run build
npm start
```

**Backend**:
```bash
uvicorn main:app --host 0.0.0.0 --port $PORT
```

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements.

## 📄 License

This project is open source and available under the MIT License.

---

**MoodBrewer** — *Crafted with ❤️, Code, and Coffee.*
