# AI Fitness & Nutrition Landing Page

## Overview

This is an immersive landing page for an AI Fitness & Nutrition platform. The application features a visually stunning hero section with animated gradients, a multi-step form for collecting comprehensive user data, and a success confirmation page. Built with React and FastAPI, the system captures user health information including physical attributes, activity levels, and fitness goals.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: React 19 with Vite 7 as the build tool and development server.

**UI Framework**: TailwindCSS v4 with @tailwindcss/postcss for modern styling. Features include:
- Custom gradient animations for background effects
- Floating animations for visual elements
- Backdrop blur and glass-morphism effects
- Responsive design optimized for all screen sizes

**Form Management**: React Hook Form v7 for efficient form validation and state management:
- Multi-step form with progress indicator
- Real-time validation with error messages
- Seamless step transitions with animations
- Type-safe form handling

**Animation Library**: Framer Motion v12 for smooth, declarative animations:
- Page transitions with AnimatePresence
- Staggered animations for hero section elements
- Scale and opacity transitions
- Custom timing and easing

**Development Configuration**: 
- Vite dev server on port 5000 with host 0.0.0.0
- Proxy configuration routes `/api` requests to backend on port 8000
- Hot Module Replacement (HMR) enabled
- ESLint configured for React best practices

### Backend Architecture

**Framework**: FastAPI (Python) for high-performance API:
- Automatic OpenAPI/Swagger documentation
- Built-in Pydantic validation
- Async/await support
- Type hints for maintainability

**Data Models**: Pydantic UserData model validates:
- Name (min length 1)
- Age (13-120 years)
- Height and weight (positive values)
- Gender (male, female, other)
- Activity level (sedentary to extremely active)
- Fitness goals (array of selected goals)
- Automatic timestamp generation

**CORS Configuration**: Permissive CORS (`allow_origins=["*"]`) for development. Should be restricted in production.

**Data Storage**: In-memory list storage for development. Production requires persistent database.

**API Endpoints**:
- `GET /` - Health check
- `POST /api/submit-user-data` - Submit user fitness data
- `GET /api/users` - Retrieve all users (count + data)

### Component Structure

**HeroSection.jsx**: 
- Immersive hero with animated gradient background
- Floating blur circles for depth
- Feature cards with glass-morphism
- CTA button with hover effects

**MultiStepForm.jsx**:
- 4-step form with visual progress indicator
- Step 1: Personal information (name, age, gender)
- Step 2: Physical metrics (height, weight)
- Step 3: Activity level selection
- Step 4: Fitness goals (multi-select)
- Proper error handling with user alerts
- Success callback on valid submission

**SuccessPage.jsx**:
- Animated success confirmation
- Profile summary display
- Visual feedback with checkmark animation
- Loading animation while "AI processes data"

### Technical Dependencies

**Frontend**:
- React 19.1.1 - UI library
- Framer Motion 12.23.22 - Animations
- React Hook Form 7.64.0 - Form management
- TailwindCSS 4.x - Styling
- @tailwindcss/postcss - PostCSS plugin
- Vite 7.1.9 - Build tool

**Backend**:
- FastAPI - Web framework
- Uvicorn - ASGI server
- Pydantic - Data validation
- Python-multipart - Form data handling

### Deployment Configuration

**Development Ports**:
- Frontend: 5000 (user-facing)
- Backend: 8000 (API server)

**Workflows**:
- Frontend: `cd frontend && npm run dev`
- Backend: `cd backend && uvicorn main:app --host 0.0.0.0 --port 8000`

### Future Enhancements

The platform is designed for future AI integration:
- Personalized workout plan generation
- AI-powered nutrition recommendations
- Progress tracking and analytics
- Goal-based fitness coaching
- Real-time health insights
