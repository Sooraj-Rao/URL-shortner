import { Toaster } from "./components/ui/toaster";
import Home from "./main/Module/home";
import Header from "./main/components/header";
import { ThemeProvider } from "./main/components/theme.provider";

const App = () => {
  const GithubAcc = "https://github.com/Sooraj-Rao/url-shortner";
  const Portfolio = "https://soorajrao.xyz";
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Toaster />
      <Header GithubAcc={GithubAcc} Portfolio={Portfolio} />
      <Home Portfolio={Portfolio} />
    </ThemeProvider>
  );
};

export default App;
