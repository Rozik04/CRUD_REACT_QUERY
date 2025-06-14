import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from "@tanstack/react-query";
import './index.css'
import App from './App.tsx'
import { client } from './config/query-client.ts';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <App/>
    </QueryClientProvider>
  </BrowserRouter>
)
