# HomeAway

HomeAway is a Next.js application that allows users to book properties, manage reservations, and create profiles. This project utilizes Clerk for authentication, Prisma for database management, and Supabase for storage.

## Features

- User authentication with Clerk
- Property listings and bookings
- User profiles and management
- Responsive design with Tailwind CSS
- Admin dashboard for managing users and properties

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/mohamedrehan1/home-away.git
   ```

2. Navigate into the project directory:

   ```sh
   cd home-away
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   DATABASE_URL=your_database_url
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

## Running the Application

To start the development server, run:

```sh
 npm run dev
```

Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Creating a Property**: Navigate to the create property page to add new listings.
- **Booking a Property**: Users can view available properties and make bookings.
- **Managing Reservations**: Users can view and manage their reservations from their profile.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Clerk](https://clerk.dev/)
- [Prisma](https://www.prisma.io/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/)
