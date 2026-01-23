# ☕ MoodBrewer - AI-Powered Coffee Curator

A sophisticated, AI-driven coffee and snack recommendation system that personalizes your beverage selection based on mood, taste preferences, and time of day. Experience the perfect blend of technology and coffee culture.

![MoodBrewer](https://img.shields.io/badge/MoodBrewer-AI%20Coffee%20Curator-D4AF37?style=for-the-badge&logo=coffee)
![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![FastAPI](https://img.shields.io/badge/FastAPI-0.127.0-009688?style=for-the-badge&logo=fastapi)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

## 🌟 Features

- **AI-Powered Recommendations**: Intelligent algorithm that matches beverages to your mood and preferences
- **Personalized Experience**: Tailored suggestions based on mood, taste, time of day, and caffeine preferences
- **Comprehensive Menu**: Extensive selection of coffee, tea, shakes, and food items
- **Beautiful UI**: Elegant, modern interface with smooth animations and coffee-themed design
- **Responsive Design**: Seamlessly works on desktop, tablet, and mobile devices
- **Real-time Interaction**: Instant recommendations with smooth loading states

## 🛠️ Tech Stack

### Frontend

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript 5.0](https://www.typescriptlang.org/) - Type-safe JavaScript
- **UI Library**: [React 19.2.3](https://react.dev/) - Modern React with latest features
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion 12.25.0](https://www.framer.com/motion/) - Production-ready motion library
- **HTTP Client**: [Axios 1.13.2](https://axios-http.com/) - Promise-based HTTP client
- **Icons**: [Lucide React 0.562.0](https://lucide.dev/) - Beautiful, customizable icons
- **Fonts**: 
  - [Geist Sans & Geist Mono](https://vercel.com/font) - Modern, clean fonts
  - [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) - Elegant serif for headings
  - [Raleway](https://fonts.google.com/specimen/Raleway) - Refined sans-serif for body text

### Backend

- **Framework**: [FastAPI 0.127.0](https://fastapi.tiangolo.com/) - Modern, fast web framework for building APIs
- **Language**: Python 3.13
- **ASGI Server**: [Uvicorn 0.40.0](https://www.uvicorn.org/) - Lightning-fast ASGI server
- **Data Validation**: [Pydantic 2.12.5](https://docs.pydantic.dev/) - Data validation using Python type annotations
- **CORS**: FastAPI CORS Middleware - Cross-origin resource sharing

### Development Tools

- **Linting**: ESLint 9 with Next.js config
- **Package Manager**: npm
- **Build Tool**: Next.js built-in bundler
- **PostCSS**: Tailwind CSS PostCSS plugin

## 📁 Project Structure

```
MoodBrewer/
├── backend/
│   ├── main.py              # FastAPI application entry point
│   ├── menu.py              # Menu data with all beverages and food items
│   ├── recommender.py       # AI recommendation algorithm
│   ├── schemas.py           # Pydantic data models (currently empty)
│   └── requirements.txt     # Python dependencies
│
├── frontend/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ChatInterface.tsx    # Main recommendation interface
│   │   │   ├── Hero.tsx             # Hero section with branding
│   │   │   ├── Navbar.tsx           # Navigation bar
│   │   │   └── Footer.tsx            # Footer component
│   │   ├── globals.css              # Global styles and Tailwind config
│   │   ├── layout.tsx               # Root layout with fonts and metadata
│   │   └── page.tsx                 # Main page component
│   ├── public/                      # Static assets
│   ├── package.json                 # Node.js dependencies
│   ├── tsconfig.json                # TypeScript configuration
│   ├── next.config.ts               # Next.js configuration
│   ├── postcss.config.mjs           # PostCSS configuration
│   └── eslint.config.mjs            # ESLint configuration
│
└── README.md                        # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **Python** 3.13 or higher
- **npm** or **yarn** package manager

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the FastAPI server:
```bash
uvicorn main:app --reload --port 8000
```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the frontend directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

4. Run the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Production Build

**Backend:**
```bash
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000
```

**Frontend:**
```bash
cd frontend
npm run build
npm start
```

## 🎨 Design System

### Color Palette

- **Coffee Bean**: `#1A1110` - Primary background
- **Espresso**: `#592720` - Secondary background
- **Chocolate Brown**: `#964B00` - Accent color
- **Toffee Brown**: `#926644` - Secondary accent
- **Dark Coffee**: `#3D2B1F` - Card backgrounds
- **Cream**: `#F5E6D3` - Primary text color
- **Gold**: `#D4AF37` - Primary accent and highlights
- **Warm White**: `#FFF8F0` - Light backgrounds

### Typography

- **Headings**: Playfair Display (serif) - Elegant, sophisticated
- **Body**: Raleway (sans-serif) - Clean, readable
- **Monospace**: Geist Mono - Code and technical content

## 🧠 How It Works

### Recommendation Algorithm

The recommendation system uses a scoring algorithm that evaluates menu items based on:

1. **Mood Match** (3 points): Matches user's current mood
2. **Taste Preference** (3 points): Aligns with desired taste profile
3. **Time of Day** (2 points): Appropriate for the selected time
4. **Caffeine Level** (2 points): Matches caffeine preference
5. **Temperature** (1 point): Hot or cold preference

The item with the highest score is recommended to the user.

### API Endpoints

#### `GET /`
Health check endpoint
```json
{
  "status": "MoodBrewer backend running"
}
```

#### `POST /chat`
Get coffee recommendation
**Request Body:**
```json
{
  "mood": "focused",
  "taste": "bold",
  "time": "morning",
  "temperature": "hot",
  "caffeine": "high"
}
```

**Response:**
```json
{
  "recommendation": "Robusta Hot Americano",
  "price": 150,
  "reason": "Perfect for a focused mood in the morning."
}
```

## 📦 Dependencies

### Backend Dependencies

Key dependencies from `requirements.txt`:
- `fastapi==0.127.0` - Web framework
- `uvicorn==0.40.0` - ASGI server
- `pydantic==2.12.5` - Data validation
- `python-multipart==0.0.21` - Form data handling

### Frontend Dependencies

From `package.json`:
- `next@16.1.1` - React framework
- `react@19.2.3` & `react-dom@19.2.3` - React library
- `typescript@5` - TypeScript compiler
- `tailwindcss@4` - CSS framework
- `framer-motion@12.25.0` - Animation library
- `axios@1.13.2` - HTTP client
- `lucide-react@0.562.0` - Icon library

## 🎯 Features in Detail

### Chat Interface
- Interactive mood and taste selection
- Time of day picker
- Real-time API communication
- Smooth loading states
- Beautiful recommendation cards with animations

### Hero Section
- Animated background elements
- Gradient text effects
- Brand messaging
- Responsive typography

### Navigation
- Fixed navbar with backdrop blur
- Smooth scroll animations
- Mobile-responsive hamburger menu
- Call-to-action button

### Footer
- Multi-column layout
- Contact information
- Social media links
- Decorative accents

## 🔧 Configuration

### Environment Variables

**Frontend** (`.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**Backend** (CORS):
Currently configured to allow all origins (`allow_origins=["*"]`). For production, restrict to your frontend domain.

### CORS Configuration

The backend is configured with CORS middleware to allow cross-origin requests. Update `main.py` to restrict origins in production:

```python
allow_origins=["https://yourdomain.com"]
```

## 🚢 Deployment

### Backend (Render/Railway/Heroku)

1. Set Python version to 3.13
2. Install dependencies: `pip install -r requirements.txt`
3. Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

### Frontend (Vercel/Netlify)

1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `.next`
4. Add environment variable: `NEXT_PUBLIC_API_URL` pointing to your backend

## 📝 Menu Categories

The menu includes:

- **Robusta Specialty** (Cold & Hot)
- **Blend Coffee** (Cold & Hot)
- **Manual Brew** (Cold Brew, Pour Over)
- **Shakes** (Chocolate, Biscoff, Nutella)
- **Tea** (Lemon, Peach, Ginger Fizz)
- **Food** (Fries, Pizza, Bagels, Croissants)

Each item includes:
- Name
- Temperature (hot/cold/room)
- Base (milk/non-milk/tea/food)
- Taste profile
- Mood compatibility
- Caffeine level
- Time appropriateness
- Price

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

MoodBrewer - Crafted with ☕ and AI

---

**Made with ❤️ and lots of ☕**
