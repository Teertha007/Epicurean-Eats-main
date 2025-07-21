import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import UserProvider from './Providers/UserProvider.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className='bg-slate-50'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </UserProvider>

  </React.StrictMode>,
)
