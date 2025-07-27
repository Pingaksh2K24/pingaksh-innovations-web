# Project Structure

This Next.js project follows a well-organized folder structure for better maintainability and scalability.

## Directory Structure

```
pingaksh-innovations-web/
│
├── public/
│   └── images/          # Static images and assets
│
├── src/
│   ├── app/             # App Router pages & routes
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   │
│   ├── components/      # Reusable UI Components
│   │   └── index.ts     # Component exports
│   │
│   ├── lib/             # Utility Functions, helpers
│   │   └── utils.ts     # Common utility functions
│   │
│   ├── styles/          # Tailwind/global styles
│   │   └── globals.css  # Global CSS with Tailwind
│   │
│   ├── types/           # TypeScript interfaces/types
│   │   └── index.ts     # Common type definitions
│   │
│   ├── constants/       # Static values
│   │   └── index.ts     # App constants and config
│   │
│   ├── hooks/           # Custom React hooks
│   │   └── index.ts     # Custom hooks exports
│   │
│   └── services/        # API calls, axios etc.
│       └── api.ts       # API client and services
│
├── .eslintrc.json
├── tailwind.config.ts
└── next.config.js
```

## Directory Descriptions

### `/public/images/`
- Store static images, icons, and other media assets
- Accessible directly via URL

### `/src/components/`
- Reusable UI components
- Each component should be in its own file
- Export all components from `index.ts`

### `/src/lib/`
- Utility functions and helper methods
- Common functions like `cn()` for class merging
- Date formatting, validation, etc.

### `/src/styles/`
- Global CSS styles
- Tailwind CSS customizations
- Custom component and utility classes

### `/src/types/`
- TypeScript type definitions
- Interfaces for API responses, components, etc.
- Shared types across the application

### `/src/constants/`
- Application constants
- Configuration values
- Route definitions
- API endpoints

### `/src/hooks/`
- Custom React hooks
- Reusable state logic
- API integration hooks

### `/src/services/`
- API client configuration
- Service functions for different API endpoints
- HTTP request handling

## Best Practices

1. **Components**: Create reusable, composable components
2. **Types**: Define proper TypeScript interfaces for all data structures
3. **Constants**: Use constants for magic strings and configuration
4. **Services**: Centralize API calls and external service integrations
5. **Hooks**: Extract reusable logic into custom hooks
6. **Utils**: Keep utility functions pure and testable

## Getting Started

1. Add new components to `/src/components/`
2. Define types in `/src/types/`
3. Add API services in `/src/services/`
4. Create custom hooks in `/src/hooks/`
5. Update constants in `/src/constants/` 