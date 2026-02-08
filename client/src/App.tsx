import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
import DashboardLayout from "./components/DashboardLayout";
import AdminTestimonials from "./pages/AdminTestimonials";
import AdminBlog from "./pages/AdminBlog";

function Router() {
  return (
    <Switch>
      {/* Admin Routes (No Header/Footer) */}
      <Route path="/admin">
        {() => (
          <DashboardLayout>
            <div className="flex flex-col items-center justify-center h-[60vh] text-center">
              <h1 className="text-3xl font-black mb-4">管理者ダッシュボード</h1>
              <p className="text-muted-foreground">左のメニューから管理項目を選択してください。</p>
            </div>
          </DashboardLayout>
        )}
      </Route>
      <Route path="/admin/testimonials">
        {() => (
          <DashboardLayout>
            <AdminTestimonials />
          </DashboardLayout>
        )}
      </Route>
      <Route path="/admin/blog">
        {() => (
          <DashboardLayout>
            <AdminBlog />
          </DashboardLayout>
        )}
      </Route>

      {/* Public Routes (With Header/Footer) */}
      <Route>
        {() => (
          <>
            <Header />
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
            <Footer />
          </>
        )}
      </Route>
    </Switch>
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
