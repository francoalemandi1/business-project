# Advanced Next.js 14 Project

This project is a comprehensive Next.js 14 application that demonstrates various advanced features and best practices for building modern web applications.

## Features

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- NextUI component library
- ESLint with Airbnb configuration
- Prettier for code formatting
- PostgreSQL database
- Prisma ORM for database management
- Next-Auth for authentication (Google provider)
- React Testing Library and Jest for testing
- Storybook for component development
- Token expiration and refresh mechanism
- CRUD API endpoints
- Parallel and intercepting routes
- Responsive layout with sidebar, header, and rightbar

## Project Structure


## Getting Started

1. Clone the repository:

```
  git clone [https://github.com/yourusername/my-nextjs-project.git](https://github.com/yourusername/my-nextjs-project.git)
  cd my-nextjs-project
```


2. Install dependencies:

```
  npm install
```

3. Set up your environment variables:
Create a `.env` file in the root directory and add the following variables:

```
  DATABASE_URL="postgresql://username:password@localhost:5432/your_database"
  GOOGLE_CLIENT_ID="your_google_client_id"
  GOOGLE_CLIENT_SECRET="your_google_client_secret"
  NEXTAUTH_SECRET="your_nextauth_secret"
```


4. Set up the database:

```
  npx prisma generate
  npx prisma db push
```


5. Run the development server:

```
  npm run dev
```


6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm start`: Runs the built app in production mode
- `npm test`: Runs the test suite
- `npm run lint`: Runs the linter
- `npm run storybook`: Starts the Storybook server

## Testing

This project uses Jest and React Testing Library for testing. Run the tests with:

```
  npm test
```


## Storybook

To view the components in Storybook, run:
```
  npm run storybook
```



Then open [http://localhost:6006](http://localhost:6006) in your browser.

## API Routes

The project includes CRUD endpoints for the Product model:

- GET /api/products
- POST /api/products
- GET /api/products/[id]
- PUT /api/products/[id]
- DELETE /api/products/[id]

## Authentication

This project uses Next-Auth for authentication with Google as the provider. The authentication flow includes email verification and token refresh. The token expiration is set to 30 days, with a refresh every 30 minutes.

## Database Models

The project includes two main models: User and Product. These are defined in the `prisma/schema.prisma` file. The User model includes fields for authentication and profile information, while the Product model represents items that can be created and managed by users.

## UI Components

The project uses NextUI, a React UI library built on top of Tailwind CSS. The main layout includes:

- A responsive sidebar with navigation links
- A header with branding and user actions
- A main content area
- A right sidebar for additional information or actions

## Parallel and Intercepting Routes

The project demonstrates the use of Next.js 14's parallel and intercepting routes:

- Parallel route: An analytics dashboard that renders alongside the main content
- Intercepting route: A modal for displaying product details without navigating away from the current page

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

This project was built using various open-source libraries and tools. We'd like to thank the developers and maintainers of Next.js, React, Tailwind CSS, NextUI, Prisma, and all other dependencies that made this project possible.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.

Happy coding!