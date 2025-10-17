import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import App from './App.tsx'
import Quest from './quest/Quest.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/quest" element={<Quest />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
