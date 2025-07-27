// Application constants and configuration

export const APP_CONFIG = {
  name: 'Pingaksh Innovations',
  description: 'Your app description here',
  version: '1.0.0',
  apiBaseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
} as const

export const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact',
  // Add more routes as needed
} as const

export const API_ENDPOINTS = {
  users: '/users',
  posts: '/posts',
  // Add more API endpoints as needed
} as const

export const PAGINATION = {
  defaultPage: 1,
  defaultLimit: 10,
  maxLimit: 100,
} as const

// Add more constants as needed 