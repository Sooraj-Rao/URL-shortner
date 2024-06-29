import { Toaster } from "./components/ui/toaster";
import Home from "./main/Module/home";
import NotFound from "./main/components/NotFound";
import Header from "./main/components/header";
import { ThemeProvider } from "./main/components/theme.provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const SomeData = {
    contact:
      "https://contact.soorajrao.in?mode=report&app=quicklink&utm_source=quicklink_header",
    github: "https://github.com/Sooraj-Rao/URL-shortner",
    main: "https://soorajrao.in",
  };

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Toaster />
        <Header data={SomeData} />
        <Routes>
          <Route path="/" element={<Home Portfolio={SomeData.main} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
