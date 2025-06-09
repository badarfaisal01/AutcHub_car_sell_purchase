

## ✨ Features

### 🔥 Core Features
- **🔐 User Authentication**: Secure signup/login with JWT
- **🚗 Car Listings**: Create, read, update, delete car listings with advanced search
- **🔍 Smart Search & Filters**: Filter by brand, price, location, condition, year
- **📸 Image Upload**: Multiple car images with preview functionality
- **🤖 AI Chatbot**: Google Gemini-powered assistant for car advice
- **📊 User Dashboard**: Manage listings, favorites, and profile
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **⭐ Favorites System**: Save and manage favorite car listings

### 🤖 AI Chatbot Features
- Car buying tips and inspection advice
- Market price guidance for Pakistani cars
- Technical specifications help
- Maintenance recommendations
- Smart car recommendations based on budget
- Local market knowledge (Toyota, Honda, Suzuki, etc.)

## 🛠️ Technology Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 14, React 18, Tailwind CSS |
| **Backend** | Next.js API Routes |
| **AI** | Google Gemini API (Free Tier) |
| **Database** | PostgreSQL (Optional - works with mock data) |
| **Authentication** | JWT with bcrypt |
| **UI Components** | shadcn/ui, Radix UI |
| **Icons** | Lucide React |
| **Styling** | Tailwind CSS |

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Git** ([Download](https://git-scm.com/))

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/yourusername/autohub-car-marketplace.git
cd autohub-car-marketplace
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Set Up Environment Variables

Create a \`.env.local\` file in the root directory:

\`\`\`env
# Google Gemini API (Required for AI Chatbot)
GOOGLE_GENERATIVE_AI_API_KEY=your-gemini-api-key-here

# Authentication (Optional - for enhanced security)
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters
NEXTAUTH_SECRET=your-nextauth-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Database (Optional - works with mock data by default)
DATABASE_URL=postgresql://username:password@localhost:5432/autohub

# Image Upload (Optional)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
\`\`\`

### 4. Get Google Gemini API Key (FREE!)

1. **Visit Google AI Studio**: [https://aistudio.google.com/](https://aistudio.google.com/)
2. **Sign in** with your Google account
3. **Click "Get API key"** in the left sidebar
4. **Create API key** in new project
5. **Copy the key** (starts with \`AIzaSy...\`)
6. **Add to \`.env.local\`** file

### 5. Run the Development Server

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

🎉 **Open [http://localhost:3000](http://localhost:3000)** to view the application!


## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| \`npm run dev\` | Start development server |
| \`npm run build\` | Build for production |
| \`npm start\` | Start production server |
| \`npm run lint\` | Run ESLint |

## 🌐 Application Pages

Once running, you can access:

| Page | URL | Description |
|------|-----|-------------|
| **Home** | [http://localhost:3000](http://localhost:3000) | Landing page with featured cars |
| **Browse Cars** | [http://localhost:3000/cars](http://localhost:3000/cars) | Search and filter cars |
| **Car Details** | [http://localhost:3000/cars/[id]](http://localhost:3000/cars/1) | Individual car information |
| **Login** | [http://localhost:3000/login](http://localhost:3000/login) | User authentication |
| **Register** | [http://localhost:3000/register](http://localhost:3000/register) | Create new account |
| **Sell Car** | [http://localhost:3000/sell](http://localhost:3000/sell) | Post car listing |
| **Dashboard** | [http://localhost:3000/dashboard](http://localhost:3000/dashboard) | User management panel |


# Install PostgreSQL
# Create database
createdb autohub

# Run setup scripts
psql -d autohub -f scripts/create-database.sql
psql -d autohub -f scripts/seed-data.sql
\`\`\`

### Option 2: Cloud Database (Supabase)

1. Create account at [Supabase](https://supabase.com/)
2. Create new project
3. Get connection string from Settings > Database
4. Add to \`.env.local\`:
   \`\`\`env
   DATABASE_URL=postgresql://postgres:[password]@[host]:5432/postgres
   \`\`\`









**Landing Page:**
![image](https://github.com/user-attachments/assets/53bf3538-981f-414a-96b1-1bdd17c91700)



