import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './index'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Provider/AuthProvider.jsx';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      
    </AuthProvider>
  </React.StrictMode>,
</QueryClientProvider>
 
)