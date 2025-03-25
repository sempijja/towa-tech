
import { useLocation, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, Search, RefreshCw, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NotFound = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    // Check if we're on GitHub Pages and the URL might need preprocessing
    const isGitHubPages = window.location.hostname.includes('github.io');
    const path = window.location.pathname;
    
    // For GitHub Pages, we need to handle 404s differently
    // Sometimes GitHub Pages sends to 404.html without processing the route
    if (isGitHubPages && path.endsWith('/404.html')) {
      // Extract the actual intended path from the URL if possible
      const intendedPath = new URLSearchParams(window.location.search).get('path');
      if (intendedPath) {
        setShouldRedirect(true);
      }
    }

    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Check if user is online
    const handleOnlineStatus = () => {
      setIsOffline(!navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, [location.pathname]);

  // If we should redirect to the proper SPA route
  if (shouldRedirect) {
    return <Navigate to="/" replace />;
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // This would ideally connect to a search functionality
    // For now, we'll redirect to home page
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4">
        <div className="text-center">
          {isOffline ? (
            <div className="bg-amber-100 text-amber-700 p-4 rounded-lg mb-6 flex items-center justify-center gap-2">
              <AlertTriangle size={20} />
              <span>You appear to be offline. Please check your internet connection.</span>
            </div>
          ) : null}

          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl font-bold text-red-500">404</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Page Not Found</h1>
          
          <p className="text-gray-600 mb-8">
            Oops! We couldn't find the page you're looking for. It might have been moved, 
            deleted, or perhaps never existed at all.
          </p>

          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Try searching for something..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-full"
              />
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                <Search size={18} />
              </Button>
            </div>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/">
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <Home size={18} />
                Back to Home
              </Button>
            </Link>
            <Link to="/green-bank">
              <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2">
                <RefreshCw size={18} />
                Green Bank
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
