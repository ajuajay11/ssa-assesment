# Social Support Application (SSA)

SSA is a modern, AI-powered web application designed to help citizens apply for government support with ease. It features a bilingual interface (English & Arabic), a fluid 3-step application wizard, and an integrated AI assistant to help users describe their situation.

## 🔗 Links

- **Live Demo**: [https://ssa-theta-steel.vercel.app/apply](https://ssa-theta-steel.vercel.app/apply)
- **GitHub Repository**: [https://github.com/ajuajay11/ssa](https://github.com/ajuajay11/ssa)

## Prerequisites

- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/)

## Getting Started

1. **Clone the repository**:
```bash
   git clone https://github.com/ajuajay11/ssa.git
   cd ssa
```

2. **Install dependencies**:
```bash
   npm install
```

3. **Set up Environment Variables**:
   - Create a `.env` file in the root directory:
```bash
   touch .env
```
   - Add your [Google Gemini API Key](https://aistudio.google.com/) to the `.env` file:
```env
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

## AI Configuration (Google Gemini)

This project uses the **Google Gemini AI SDK** to power the "Help Me Write" feature.

### Obtaining an API Key
1. Go to [Google AI Studio](https://aistudio.google.com/).
2. Click on "Get API key".
3. Copy the key and paste it into your `.env` file as `VITE_GEMINI_API_KEY`.

## Running the Project

### Development Mode
To start the development server with hot-reload:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Build for Production
To create an optimized production build:
```bash
npm run build
```

---

## 🏗️ Technical Architecture & Decisions

### 1. Folder Structure
- `src/components`: Reusable UI components (Form inputs, Buttons, AI Assistant).
- `src/pages`: Main view components (Home, Application Form, About, 404).
- `src/store`: Redux Toolkit logic for application state and persistence.
- `src/locales`: JSON translation files for bilingual support.
- `src/hooks`: Custom hooks for AI logic and smooth scrolling.

### 2. State Management & Persistence
Used **Redux Toolkit** with local storage persistence. This ensures that if a user accidentally refreshes their browser mid-application, their data is not lost.

### 3. Internationalization (i18n)
Used **react-i18next** to support English and Arabic. The layout dynamically switches between LTR and RTL based on the selected language, providing a native experience for all users.

### 4. Form Validation
Implemented **React Hook Form** with custom regex patterns:
- **Names/Cities**: Restricted to alphabetical characters to ensure data cleaness.
- **National ID/Address**: Refined to allow alphanumeric characters and common punctuations.
- **Numbers**: Enforced positive-only values (greater than 0) for income and dependents.

### 5. Performance Optimizations
- **React.memo**: Applied to heavy form components to prevent redundant re-renders while typing.
- **Lazy Loading**: Routes are lazy-loaded to reduce the initial bundle size.
- **Smooth Scrolling**: Integrated **Lenis** for a premium, fluid navigation feel.

## ✨ Improvements Made
- **Real-time Feedback**: Form validation mode set to `all` for instant error reporting.
- **Bilingual 404 Page**: Custom professional 404 page for better user retention.
- **Accessibility**: Optimized meta tags for SEO and Social Media sharing.

## License
This project is licensed under the MIT License.