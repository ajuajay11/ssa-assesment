# Social Support Application (SSA)

SSA is a modern, AI-powered web application designed to help citizens apply for government support with ease. It features a bilingual interface (English & Arabic), a fluid 3-step application wizard, and an integrated AI assistant to help users describe their situation.

## 🔗 Links

- **Live Demo**: [https://aiassistance-sable.vercel.app/](https://aiassistance-sable.vercel.app/)
- **GitHub Repository**: [https://github.com/ajuajay11/ssa-assesment](https://github.com/ajuajay11/ssa-assesment)

> **Note**: The live demo uses Vercel serverless functions to securely access the OpenAI API. Environment variables are protected and not exposed to the client.

## Prerequisites

- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/)
- An OpenAI API key (for AI features)
- [Vercel CLI](https://vercel.com/cli) (optional, for local serverless function testing)

## Getting Started

1. **Clone the repository**:
```bash
git clone https://github.com/ajuajay11/ssa-assesment
cd ssa-assesment
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up Environment Variables**:
   - Create a `.env.local` file in the root directory:
```bash
touch .env.local
```
   - Add your [OpenAI API Key](https://platform.openai.com/api-keys) to the `.env.local` file:
```env
OPENAI_API_KEY=your_actual_api_key_here
```

> **Important Security Note**: 
> - Never use `.env` file as API keys can be exposed in the browser
> - Always use `.env.local` for local development
> - For production, use Vercel serverless functions with environment variables stored securely in Vercel dashboard

## AI Configuration (OpenAI GPT-3.5 Turbo)

This project uses **OpenAI GPT-3.5 Turbo** via **Vercel Serverless Functions** to power the "Help Me Write" feature.

### Why Serverless Functions?
Direct API calls from the browser expose your API key to the public. Serverless functions act as a secure proxy:
- API keys stay server-side only
- Client never has access to credentials
- Better rate limiting and error handling

### Obtaining an API Key
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in
3. Create a new API key
4. Copy the key and add it to your `.env.local` file

## Running the Project

### Option 1: Standard Development Mode (Port 5173)
For frontend development without AI features:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

> **Note**: AI features will not work in this mode as serverless functions require Vercel environment.

### Option 2: Vercel Development Mode (Port 3000) - Recommended
To test with serverless functions and AI features:
```bash
# Install Vercel CLI globally if not already installed
npm install -g vercel

# Run in Vercel development environment
vercel dev
```
The application will be available at `http://localhost:3000` with full AI functionality.

### Build for Production
To create an optimized production build:
```bash
npm run build
```

### Preview Production Build
To preview the production build locally:
```bash
npm run preview
```

---

## 🚀 Deployment

### Vercel Deployment with Serverless Functions

This application uses **Vercel Serverless Functions** to securely handle OpenAI API requests.

#### Serverless Function Setup
The API endpoint is located at `/api/generate` and handles AI text generation requests securely on the server-side.

#### Environment Variables on Vercel
Configure the following in your Vercel project settings (Settings → Environment Variables):
```
OPENAI_API_KEY=your_openai_api_key_here
```

#### Deployment Steps
1. **Push your code to GitHub**:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

2. **Import to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Environment Variables**:
   - In Vercel project settings, go to "Environment Variables"
   - Add `OPENAI_API_KEY` with your OpenAI API key
   - Apply to Production, Preview, and Development environments

4. **Deploy**:
   - Vercel will automatically deploy on every push to main branch
   - Serverless functions will be automatically deployed

#### Access & Security
- ✅ Live demo is publicly accessible
- ✅ API keys are securely stored in Vercel environment variables
- ✅ Client-side code never exposes API credentials
- ✅ Serverless functions handle all OpenAI API communication
- ✅ Rate limiting and error handling built-in

---
 
### 2. State Management & Persistence
Used **Redux Toolkit** with local storage persistence. This ensures that if a user accidentally refreshes their browser mid-application, their data is not lost. The application state is automatically saved to localStorage and restored on page reload.

### 3. Internationalization (i18n)
Used **react-i18next** to support English and Arabic. The layout dynamically switches between LTR and RTL based on the selected language, providing a native experience for all users. All UI text, form labels, validation messages, and navigation elements are fully translated.

### 4. Form Validation
Implemented **React Hook Form** with custom regex patterns:
- **Names/Cities**: Restricted to alphabetical characters to ensure data cleanliness
- **National ID/Address**: Refined to allow alphanumeric characters and common punctuation
- **Email**: Standard email format validation
- **Phone**: Minimum 7 digits required
- **Numbers**: Enforced positive-only values (greater than 0) for income and dependents
- **Text Areas**: Minimum 10 characters for detailed responses

### 5. AI Integration
- **OpenAI GPT-3.5 Turbo**: Powers the "Help Me Write" feature
- **Serverless Architecture**: Secure API calls via Vercel serverless functions
- **Context-Aware**: AI suggestions are based on the field label and any existing user input
- **Editable Suggestions**: Users can review and edit AI-generated text before accepting
- **Error Handling**: Graceful fallbacks if AI service is unavailable
- **Loading States**: Skeleton loaders during AI generation

### 6. Performance Optimizations
- **Component Optimization**: Moved `ControlledField` outside component to prevent re-renders
- **Lazy Loading**: Routes are lazy-loaded to reduce the initial bundle size
- **Smooth Scrolling**: Integrated **Lenis** for a premium, fluid navigation feel
- **Code Splitting**: Automatic code splitting via Vite for optimal load times
- **Memoization**: Strategic use of React.memo and useMemo for expensive operations

### 7. UI/UX Enhancements
- **Material-UI**: Professional, accessible component library
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Mobile Drawer**: Elegant side navigation for mobile devices
- **Loading States**: Skeleton loaders for AI generation
- **Success Feedback**: Snackbar notifications and animated success screens
- **Error Handling**: Clear, translated error messages
- **Gradient Design**: Modern purple gradient theme throughout

## ✨ Key Features

- ✅ **Multi-step Form**: 3-step wizard with progress indicator
- ✅ **AI Assistant**: Integrated "Help Me Write" feature for text fields
- ✅ **Serverless Architecture**: Secure AI API calls via Vercel functions
- ✅ **Bilingual Support**: Full English and Arabic translation with RTL support
- ✅ **Form Persistence**: Automatic save to localStorage
- ✅ **Real-time Validation**: Instant feedback on form errors
- ✅ **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- ✅ **Mobile Drawer**: Beautiful side navigation for mobile devices
- ✅ **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- ✅ **Custom 404 Page**: Professional error handling with bilingual support
- ✅ **SEO Optimized**: Meta tags for search engines and social media
- ✅ **Smooth Animations**: Lenis smooth scrolling and Material-UI transitions

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Form Management**: React Hook Form
- **UI Library**: Material-UI (MUI)
- **Routing**: React Router v7
- **Internationalization**: react-i18next
- **AI Integration**: OpenAI GPT-3.5 Turbo
- **Serverless Functions**: Vercel
- **Smooth Scrolling**: Lenis
- **Deployment**: Vercel

## 📝 Environment Variables

### Local Development (.env.local)
```env
OPENAI_API_KEY=your_openai_api_key_here
```

### Vercel Production
Configure in Vercel Dashboard → Settings → Environment Variables:
```
OPENAI_API_KEY=your_openai_api_key_here
```

## 🔒 Security Considerations

- ✅ API keys are never exposed to the client-side code
- ✅ All AI requests go through Vercel serverless functions
- ✅ Environment variables are securely stored on Vercel
- ✅ `.env.local` is in `.gitignore` to prevent accidental commits
- ✅ Form data is only stored locally (localStorage)
- ✅ No sensitive user data is transmitted to external servers
- ✅ CORS and rate limiting handled by Vercel

## 🚦 Development Workflow

### For Frontend Development Only
```bash
npm run dev
# Runs on http://localhost:5173
# AI features will not work
```

### For Full Stack Development (with AI)
```bash
vercel dev
# Runs on http://localhost:3000
# Full AI functionality with serverless functions
```

### Building for Production
```bash
npm run build
npm run preview
```
 
## 👨‍💻 Author

**AjayK**
- GitHub: [@ajuajay11](https://github.com/ajuajay11)
 