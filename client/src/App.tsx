import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Line from "./pages/Line";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";


function Router() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ScrollToTop />
      <Header />
      {/* ヘッダーの高さ分（約80px）の余白を確保 */}
      <main className="flex-grow pt-[80px]">
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/residential"} component={Residential} />
          <Route path={"/commercial"} component={Commercial} />
          <Route path={"/about"} component={About} />
          <Route path={"/booking"} component={Booking} />
          <Route path={"/line"} component={Line} />
          <Route path={"/testimonials"} component={Testimonials} />
          <Route path={"/faq"} component={FAQ} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/blog"} component={Blog} />
          <Route path={"/blog/:id"} component={BlogDetail} />

          <Route path={"/404"} component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
