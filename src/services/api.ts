import { ApiResponse, User } from '@/types'

// Base API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

// Default headers
const defaultHeaders = {
  'Content-Type': 'application/json',
}

// Generic API client
class ApiClient {
  private baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`
    const config: RequestInit = {
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'API request failed')
      }

      return data
    } catch (error) {
      console.error('API Error:', error)
      throw error
    }
  }

  // GET request
  async get<T>(endpoint: string, params?: Record<string, string | number | boolean>): Promise<ApiResponse<T>> {
    const queryString = params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : ''
    return this.request<T>(`${endpoint}${queryString}`)
  }

  // POST request
  async post<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  // PUT request
  async put<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  // DELETE request
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
    })
  }
}

// Create and export API client instance
export const apiClient = new ApiClient(API_BASE_URL)

// Specific API services
export const userService = {
  getUsers: () => apiClient.get<User[]>('/users'),
  getUser: (id: string) => apiClient.get<User>(`/users/${id}`),
  createUser: (data: Omit<User, 'id'>) => apiClient.post<User>('/users', data),
  updateUser: (id: string, data: Partial<User>) => apiClient.put<User>(`/users/${id}`, data),
  deleteUser: (id: string) => apiClient.delete<void>(`/users/${id}`),
}

// Add more services as needed 