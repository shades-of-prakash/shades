import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { ThemeProvider } from "./hooks/UseTheme.jsx";
createRoot(document.getElementById("root")).render(
	<ThemeProvider>
		<App />
	</ThemeProvider>
);
