# Evently App

## Introduction

Built on Next.js 14, the events application stands as a comprehensive, full-stack platform for managing events. It serves as a hub, spotlighting diverse events taking place globally. Featuring seamless payment processing through Stripe, you have the capability to purchase tickets for any event or even initiate and manage your own events.

You can try it out here: **[https://evently-fikasp.vercel.app](https://evently-fikasp.vercel.app)**

## Technologies

- **[Node.js](https://nodejs.org/en/docs/)** - JavaScript runtime environment for executing server-side code.
- **[Next.js](https://nextjs.org/docs)** - React framework for building efficient and scalable web applications.
- **[TypeScipt](https://www.typescriptlang.org/docs/)** - Typed superset of JavaScript for building maintainable applications.
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Utility-first CSS framework for building custom designs with ease.
- **[Shadcn/UI](https://ui.shadcn.com/docs)** - Comprehensive components library for building modern user interfaces.
- **[MongoDB](https://docs.mongodb.com/)** - NoSQL database for flexible and scalable data storage solutions.
- **[Uploadthing](https://docs.uploadthing.com/)** - Convenient data storage service for easily integrating file upload.
- **[Clerk](https://clerk.com/docs)** - User authentication service for seamless and secure authentication.

## Features

- **Authentication (CRUD) with Clerk:** User management through Clerk, ensuring secure and efficient authentication.

- **Events (CRUD):** Comprehensive functionality for creating, reading, updating, and deleting events, giving users full control over event management.
  - **Create Events:** Users can effortlessly generate new events, providing essential details such as title, date, location, and any additional information.
  - **Read Events:** Seamless access to a detailed view of all events, allowing users to explore event specifics, including descriptions, schedules, and related information.
  - **Update Events:** Empowering users to modify event details dynamically, ensuring that event information remains accurate and up-to-date.
  - **Delete Events:** A straightforward process for removing events from the system, giving administrators the ability to manage and curate the platform effectively.
        
- **Related Events:** Smartly connects events that are related and displaying on the event details page, making it more engaging for users
    
- **Organized Events:** Efficient organization of events, ensuring a structured and user-friendly display for the audience, i.e., showing events created by the user on the user profile
    
- **Search & Filter:** Empowering users with a robust search and filter system, enabling them to easily find the events that match their preferences.
    
- **New Category:** Dynamic categorization allows for the seamless addition of new event categories, keeping your platform adaptable.
    
- **Checkout and Pay with Stripe:** Smooth and secure payment transactions using Stripe, enhancing user experience during the checkout process.
    
- **Event Orders:** Comprehensive order management system, providing a clear overview of all event-related transactions.
    
- **Search Orders:** Quick and efficient search functionality for orders, facilitating easy tracking and management.


## Structure
- `/app` - Application routing
  - `(auth)` - Routes for authentication
  - `(root)` - Routes for core application
  - `/api` - API routes
  - `favicon.ico` - Icon displayed in the browser
  - `globals.css` - Global CSS and Tailwind styles
  - `layout.tsx` - Root application layout
- `/public` - Static files
  - `/assets` - Images, fonts etc.
- `/src` - Source files of the application
  - `/actions` - Server actions
  - `/components` - UI components
  - `/constants` - Constant values
  - `/database` - Database-related files
  - `/types` - TypeScript type definitions
  - `/utils` - Utility functions


- `/` - Configurations files in root directory:
  
  - `.gitignore` - List of files to ignore by git
  - `components.json` - Shadcn components configuration
  - `middleware.ts` - Authentication middleware for the Clerk
  - `next.config.js` - Configuration file for Next.js
  - `tailwind.config.js` - Tailwind CSS configuration
  - `tsconfig.json` - TypeScript configuration
  - `package.json` - Lists project metadata and dependencies
  - `README.md` - Documentation of the project

## Setup

Follow these steps to set up the project locally.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the repository**

```bash
git clone https://github.com/fikasp/evently.git
cd evently
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Setup Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# MONGODB
MONGODB_URI=
MONGODB_DB=evently

#UPLOADTHING
UPLOADTHING_SECRET=s
UPLOADTHING_APP_ID=

# CLERK
WEBHOOK_SECRET=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# STRIPE
NEXT_PUBLIC_SERVER_URL=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_SECRET_KEY=
```

Fill in the environmental variable values with your actual credentials.
You can obtain these credentials by signing up on the [MongoDB](https://www.mongodb.com/), [Uploadthing](https://uploadthing.com), [Clerk](https://clerk.com/) and [Stripe](https://stripe.com).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.


## More
For more information please contact [fikasp@gmail.com](mailto:fikasp@gmail.com).
