import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // ← Tailwind trebuie importat aici
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);