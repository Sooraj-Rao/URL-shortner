import { Toaster } from "./components/ui/toaster";
import Home from "./main/Module/home";
import NotFound from "./main/components/NotFound";
import Header from "./main/components/header";
import { ThemeProvider } from "./main/components/theme.provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const GithubAcc = "https://github.com/Sooraj-Rao/url-shortner";
  const Portfolio = "https://soorajrao.xyz";
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Toaster />
        <Header GithubAcc={GithubAcc} Portfolio={Portfolio} />
        <Routes>
          <Route path="/" element={<Home Portfolio={Portfolio} />} />
          <Route path="/e" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
