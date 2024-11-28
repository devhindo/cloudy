import { useState } from 'react';
import { Terminal, Copy, Check, Cloud, Zap, Shield, Github } from 'lucide-react';

function App() {
  const [copied, setCopied] = useState(false);
  const installCommand = 'curl -sSL https://zior.vercel.app/install.sh | bash';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navbar */}
      <div className="mx-auto">
        <nav className="container mx-auto px-4 flex justify-between items-center py-6">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-blue-500" />
            <span className="font-bold text-xl">Zior</span>
          </div>
          <a 
            href="https://github.com/devhindo/zior" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative flex items-center gap-2">
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">GitHub</span>
            </div>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Self-Hosted Deployment Pipeline
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Deploy your applications to any cloud VPS with our automated pipeline. Simple, secure, and lightning-fast.
          </p>

          {/* Install Box */}
          <div className="relative group max-w-2xl mx-auto mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative bg-gray-900 rounded-lg p-4 sm:p-8 ring-1 ring-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-blue-500" />
                <h2 className="text-lg font-semibold">Quick Install</h2>
              </div>
              <div className="bg-gray-950 p-4 rounded-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <code className="text-sm text-gray-300 font-mono break-all">{installCommand}</code>
                <button
                  onClick={handleCopy}
                  className="p-2 hover:bg-gray-800 rounded-md transition-colors ml-auto"
                  title="Copy to clipboard"
                >
                  {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-gray-400" />}
                </button>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-100">Built with Modern Technologies</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex flex-col items-center">
                <img 
                  src="https://go.dev/images/go-logo-white.svg" 
                  alt="Go Logo" 
                  className="h-16 w-auto mb-2"
                />
                <p className="text-gray-400 text-sm">Backend</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                  alt="React Logo" 
                  className="h-16 w-auto mb-2"
                />
                <p className="text-gray-400 text-sm">Frontend</p>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-6">
              Cloud-native architecture with Go's powerful backend and React's dynamic frontend
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <Cloud className="w-6 h-6 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Agnostic</h3>
              <p className="text-gray-400">Deploy to any cloud provider or VPS of your choice.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <Zap className="w-6 h-6 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Automated deployments in seconds, not minutes.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg sm:col-span-2 lg:col-span-1">
              <Shield className="w-6 h-6 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure by Default</h3>
              <p className="text-gray-400">Enterprise-grade security with zero configuration.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto py-6 px-4 text-center text-gray-500">
        © {new Date().getFullYear()} Zior. Made by <a href="https://github.com/devhindo" className="text-blue-500 hover:underline">devhindo</a>
      </footer>
    </div>
  );
}

export default App;