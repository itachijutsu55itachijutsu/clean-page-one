import { useEffect } from 'react';

function App() {
  const blogUrl = "https://quick-blog-alpha-sandy.vercel.app";

  useEffect(() => {
    // Check if the visitor is NOT a Facebook Bot
    if (!navigator.userAgent.includes("facebookexternalhit")) {
      window.location.href = blogUrl;
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4" style={{ margin: 0, padding: 0, width: '100vw' }}>
      <div className="text-center max-w-md mx-auto">
        {/* Animated loading spinner */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
        
        {/* Main heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
          Loading...
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-600 mb-8 text-base md:text-lg">
          Taking you to your story in just a moment
        </p>
        
        {/* Manual link */}
        <a 
          href={blogUrl}
          className="inline-block px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white text-sm md:text-base rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
        >
          Click here if not redirected
        </a>
      </div>
    </div>
  );
}

export default App;