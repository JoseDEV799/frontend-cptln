import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css'

// CLIENT
import ClientLayout from "./views/client/ClientLayout";
import HomeClient from "./views/client/HomeClient"

// ADMIN 
import AdminLayout from "./views/admin/AdminLayout";
import EventosAdmin from "./views/admin/EventosAdmin";
import NoticiasAdmin from "./views/admin/NoticiasAdmin";
import ProgramasAdmin from "./views/admin/ProgramasAdmin";
import CategoriasAdmin from "./views/admin/CategoriasAdmin";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* ===== CLIENTE ===== */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<HomeClient />} />
        </Route>

        {/* ===== ADMIN ===== */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="eventos" replace />} />
          <Route path="eventos" element={<EventosAdmin />} />
          <Route path="categorias" element={<CategoriasAdmin />} />
          <Route path="noticias" element={<NoticiasAdmin />} />
          <Route path="programas" element={<ProgramasAdmin />} />
        </Route>

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
