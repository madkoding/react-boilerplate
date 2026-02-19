# API Services

This directory contains services for external API calls, data fetching, and business logic.

## Structure

- `api.ts` - Base API configuration
- `userService.ts` - User-related API calls
- `authService.ts` - Authentication services
- `fetchers/` - Custom fetch implementations
- `interceptors/` - Request/response interceptors

## Example

```typescript
// src/services/api.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

// Add request interceptor
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```
