import { useState, useEffect } from 'react'
import './App.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required Swiper modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function App() {
  const [count, setCount] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has a preference stored in localStorage
    const savedMode = localStorage.getItem('darkMode')
    return savedMode === 'true' || false
  })

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Toggle body scroll lock when menu is opened/closed
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
  
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg font-sans dark:text-dark-text transition-colors duration-300">
      <header className={`py-6 relative z-50 bg-white dark:bg-dark-bg sticky top-0 transition-all duration-300 ${scrolled ? 'shadow-md dark:shadow-gray-900 py-4' : 'py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="LaslesVPN Logo" className="h-8 w-auto" />
            <h1 className="ml-2 text-xl font-bold text-gray-800 dark:text-dark-text font-heading">LaslesVPN</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-gray-500 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors">About</a>
            <a href="#" className="text-gray-500 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors">Features</a>
            <a href="#" className="text-gray-500 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors">Pricing</a>
            <a href="#" className="text-gray-500 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors">Testimonials</a>
            <a href="#" className="text-gray-500 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors">Help</a>
          </nav>
          
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>
            <button className="text-gray-800 dark:text-dark-text font-medium">Sign In</button>
            <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-2 rounded-full font-medium transition-colors duration-300">Sign Up</button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" 
              onClick={toggleMobileMenu}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 text-gray-800 dark:text-dark-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Backdrop */}
        <div 
          className={`md:hidden fixed inset-0 bg-black dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-70 backdrop-blur-sm z-40 transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={toggleMobileMenu}
        ></div>
        
        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white dark:bg-dark-card shadow-2xl dark:shadow-gray-900 transition-all duration-500 ease-in-out overflow-y-auto z-50 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="px-6 py-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <img src="/images/logo.png" alt="LaslesVPN Logo" className="h-8 w-auto" />
                <h1 className="ml-2 text-xl font-bold text-gray-800 dark:text-dark-text font-heading">LaslesVPN</h1>
              </div>
              <div className="flex items-center space-x-2">
                {/* Dark Mode Toggle - Mobile */}
                <button 
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                  )}
                </button>
                {/* Close Button */}
                <button 
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" 
                  onClick={toggleMobileMenu}
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6 text-gray-800 dark:text-dark-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
            <nav className="flex flex-col space-y-5 mt-4 flex-grow">
              <a href="#" className="text-gray-800 dark:text-dark-text hover:text-red-500 dark:hover:text-red-400 font-medium py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center text-base group">
                <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center mr-3 group-hover:bg-red-100 dark:group-hover:bg-red-900/50 transition-colors">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                About
              </a>
              <a href="#" className="text-gray-800 dark:text-dark-text hover:text-red-500 dark:hover:text-red-400 font-medium py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center text-base group">
                <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center mr-3 group-hover:bg-red-100 dark:group-hover:bg-red-900/50 transition-colors">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                Features
              </a>
              <a href="#" className="text-gray-800 dark:text-dark-text hover:text-red-500 dark:hover:text-red-400 font-medium py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center text-base group">
                <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center mr-3 group-hover:bg-red-100 dark:group-hover:bg-red-900/50 transition-colors">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                Pricing
              </a>
              <a href="#" className="text-gray-800 dark:text-dark-text hover:text-red-500 dark:hover:text-red-400 font-medium py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center text-base group">
                <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center mr-3 group-hover:bg-red-100 dark:group-hover:bg-red-900/50 transition-colors">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                </div>
                Testimonials
              </a>
              <a href="#" className="text-gray-800 dark:text-dark-text hover:text-red-500 dark:hover:text-red-400 font-medium py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center text-base group">
                <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center mr-3 group-hover:bg-red-100 dark:group-hover:bg-red-900/50 transition-colors">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                Help
              </a>
            </nav>
            
            {/* Mobile Menu Footer */}
            <div className="mt-auto pt-6 border-t border-gray-100">
              <p className="text-gray-500 text-sm mb-4">Connect with us</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center hover:bg-red-100 transition-colors">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center hover:bg-red-100 transition-colors">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center hover:bg-red-100 transition-colors">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right" data-aos-delay="100">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight font-heading">
                Want anything to be easy with <span className="font-bold">LaslesVPN</span>.
              </h1>
              <p className="mt-5 text-gray-600 dark:text-gray-300 text-lg">
                Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
              </p>
              <button className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-12 rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </button>
            </div>
            <div className="md:w-1/2" data-aos="fade-left" data-aos-delay="200">
              <img src="/images/banner.png" alt="VPN Illustration" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white dark:bg-dark-card rounded-lg shadow-lg dark:shadow-xl dark:shadow-black/20 p-8" data-aos="fade-up">
            <div className="flex flex-col md:flex-row justify-around items-center divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-dark-border">
              
              <div className="flex items-center py-4 md:py-0 px-6 w-full md:w-1/3 justify-center" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full mr-4">
                  <img src="/images/user.png" alt="Users" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">90+</h3>
                  <p className="text-gray-500 dark:text-gray-300">Users</p>
                </div>
              </div>
              
              <div className="flex items-center py-4 md:py-0 px-6 w-full md:w-1/3 justify-center" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full mr-4">
                  <img src="/images/location.png" alt="Locations" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">30+</h3>
                  <p className="text-gray-500 dark:text-gray-300">Locations</p>
                </div>
              </div>
              
              <div className="flex items-center py-4 md:py-0 px-6 w-full md:w-1/3 justify-center" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full mr-4">
                  <img src="/images/storage.png" alt="Servers" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">50+</h3>
                  <p className="text-gray-500 dark:text-gray-300">Servers</p>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
              <img src="/images/features.png" alt="VPN Features" className="w-full h-auto" />
            </div>
            
            <div className="md:w-1/2 md:pl-16" data-aos="fade-left">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-5 font-heading">We Provide Many Features You Can Use</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                You can explore the features that we provide with fun and have their own functions each feature.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start" data-aos="fade-up" data-aos-delay="100">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">Powerful online protection.</span>
                </li>
                
                <li className="flex items-start" data-aos="fade-up" data-aos-delay="200">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">Internet without borders.</span>
                </li>
                
                <li className="flex items-start" data-aos="fade-up" data-aos-delay="300">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">Supercharged VPN.</span>
                </li>
                
                <li className="flex items-start" data-aos="fade-up" data-aos-delay="400">
                  <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">No specific time limits.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-20 bg-gray-50 dark:bg-dark-bg dark:bg-opacity-60">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 font-heading">Choose Your Plan</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Let's choose the package that is best for you and explore it happily and cheerfully.
            </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              {/* Free Plan */}
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg p-8 flex flex-col items-center hover:border-red-500 transition-all duration-300 flex-1 max-w-sm shadow-lg dark:shadow-xl dark:shadow-black/20" data-aos="fade-up" data-aos-delay="100">
                <img src="/images/box.png" alt="Free Plan" className="w-24 h-24 mb-8" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-5 font-heading">Free Plan</h3>
                
                <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Unlimited Bandwidth</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Encrypted Connection</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">No Traffic Logs</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Works on All Devices</span>
                </li>
              </ul>
              
              <div className="mt-auto text-center w-full">
                <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-5">Free</h4>
                <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-12 py-2 rounded-full font-medium transition-colors duration-300">
                  Select
                </button>
              </div>
            </div>
            
            {/* Standard Plan */}
            <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-8 flex flex-col items-center hover:border-red-500 transition-all duration-300 flex-1 max-w-sm shadow-lg dark:shadow-xl dark:shadow-black/20" data-aos="fade-up" data-aos-delay="200">
              <img src="/images/box.png" alt="Standard Plan" className="w-24 h-24 mb-8" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-5 font-heading">Standard Plan</h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Unlimited Bandwidth</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Encrypted Connection</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">No Traffic Logs</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Works on All Devices</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Connect Anywhere</span>
                </li>
              </ul>
              
              <div className="mt-auto text-center w-full">
                <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-5">$9 <span className="text-gray-500 dark:text-gray-300 text-base font-normal">/ mo</span></h4>
                <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-12 py-2 rounded-full font-medium transition-colors duration-300">
                  Select
                </button>
              </div>
            </div>
            
            {/* Premium Plan */}
            <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg p-8 flex flex-col items-center hover:border-red-500 transition-all duration-300 flex-1 max-w-sm shadow-lg dark:shadow-xl dark:shadow-black/20" data-aos="fade-up" data-aos-delay="300">
              <img src="/images/box.png" alt="Premium Plan" className="w-24 h-24 mb-8" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-5 font-heading">Premium Plan</h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Unlimited Bandwidth</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Encrypted Connection</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">No Traffic Logs</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Works on All Devices</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Connect Anywhere</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Get New Features</span>
                </li>
              </ul>
              
              <div className="mt-auto text-center w-full">
                <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-5">$12 <span className="text-gray-500 dark:text-gray-300 text-base font-normal">/ mo</span></h4>
                <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-12 py-2 rounded-full font-medium transition-colors duration-300">
                  Select
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Global Network Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 font-heading">Huge Global Network of Fast VPN</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See LaslesVPN everywhere to make it easier for you when you move locations.
            </p>
          </div>
          
          <div className="mb-16" data-aos="zoom-in" data-aos-duration="1000">
            <img src="/images/map.png" alt="Global Network Map" className="w-full h-auto dark:opacity-90 dark:filter dark:brightness-90" />
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-16" data-aos="fade-up" data-aos-delay="200">
            <div className="h-8 opacity-70 hover:opacity-100 transition-opacity">
              <img src="/images/netflix.png" alt="Netflix" className="h-8 dark:hidden" />
              <img src="/images/netflix.png" alt="Netflix" className="h-8 hidden dark:block invert" />
            </div>
            <img src="/images/reddit.png" alt="Reddit" className="h-8 opacity-70 hover:opacity-100 transition-opacity dark:invert" />
            <div className="h-8 opacity-70 hover:opacity-100 transition-opacity">
              <img src="/images/amazon.png" alt="Amazon" className="h-8 dark:hidden" />
              <img src="/images/amazon.png" alt="Amazon" className="h-8 hidden dark:block invert" />
            </div>
            <img src="/images/discord.png" alt="Discord" className="h-8 opacity-70 hover:opacity-100 transition-opacity dark:invert" />
            <img src="/images/spotify.png" alt="Spotify" className="h-8 opacity-70 hover:opacity-100 transition-opacity dark:invert" />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 font-heading">Trusted by Thousands of Happy Customer</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
            </p>
          </div>
          
          <div className="pb-16" data-aos="fade-up">
            <div className="relative">
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  el: '.testimonial-pagination',
                  type: 'bullets',
                }}
                navigation={{
                  nextEl: '.testimonial-next',
                  prevEl: '.testimonial-prev',
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="mySwiper testimonial-swiper"
              >
              {/* Testimonial 1 */}
              <SwiperSlide>
                <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg p-8 flex flex-col transition-all duration-300 h-full testimonial-card">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center">
                      <img src="/images/user1.png" alt="User" className="w-12 h-12 rounded-full mr-4" />
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white font-heading">Viezh Robert</h4>
                        <p className="text-gray-500 dark:text-gray-300 text-sm">Warsaw, Poland</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-800 dark:text-white font-bold mr-2">4.5</span>
                      <img src="/images/star.png" alt="Rating" className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow">"Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best".</p>
                </div>
              </SwiperSlide>
              
              {/* Testimonial 2 */}
              <SwiperSlide>
                <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg p-8 flex flex-col transition-all duration-300 h-full testimonial-card">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center">
                      <img src="/images/user2.png" alt="User" className="w-12 h-12 rounded-full mr-4" />
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white font-heading">Yessica Christy</h4>
                        <p className="text-gray-500 dark:text-gray-300 text-sm">Shanxi, China</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-800 dark:text-white font-bold mr-2">4.5</span>
                      <img src="/images/star.png" alt="Rating" className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow">"I like it because I like to travel far and still can connect with high speed."</p>
                </div>
              </SwiperSlide>
              
              {/* Testimonial 3 */}
              <SwiperSlide>
                <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg p-8 flex flex-col transition-all duration-300 h-full testimonial-card">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center">
                      <img src="/images/user3.png" alt="User" className="w-12 h-12 rounded-full mr-4" />
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white font-heading">Kim Young Jou</h4>
                        <p className="text-gray-500 dark:text-gray-300 text-sm">Seoul, South Korea</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-800 dark:text-white font-bold mr-2">4.5</span>
                      <img src="/images/star.png" alt="Rating" className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow">"This is very unusual for my business that currently requires a virtual private network that has high security."</p>
                </div>
              </SwiperSlide>
              
              {/* Testimonial 4 - Additional testimonial */}
              <SwiperSlide>
                <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg p-8 flex flex-col transition-all duration-300 h-full testimonial-card">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center">
                      <img src="/images/user1.png" alt="User" className="w-12 h-12 rounded-full mr-4" />
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white font-heading">Alex Johnson</h4>
                        <p className="text-gray-500 dark:text-gray-300 text-sm">New York, USA</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-800 dark:text-white font-bold mr-2">5.0</span>
                      <img src="/images/star.png" alt="Rating" className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow">"The connection speed is incredible. I can stream HD content without any buffering while using LaslesVPN. Definitely worth every penny!"</p>
                </div>
              </SwiperSlide>
              </Swiper>
              
              {/* Custom navigation and pagination */}
              <div className="flex justify-end items-center mt-8 gap-4">
                <div className="testimonial-pagination"></div>
                <div className="flex gap-2">
                  <button className="testimonial-prev w-10 h-10 rounded-full bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:border-red-500 focus:outline-none">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 15L7.5 10L12.5 5" stroke="#F53838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="testimonial-next w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white focus:outline-none">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 5L12.5 10L7.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white dark:bg-dark-card rounded-lg shadow-xl dark:shadow-2xl dark:shadow-black/30 p-12" data-aos="fade-up">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0 md:max-w-xl">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 font-heading">Subscribe Now for Get Special Features!</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Let's subscribe with us and find the fun.
                </p>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-12 rounded-md shadow-lg hover:shadow-xl transition-all duration-300" data-aos="zoom-in" data-aos-delay="300">
                Subscribe Now
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-dark-bg dark:bg-opacity-60 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-10 md:mb-0 md:w-1/3" data-aos="fade-right" data-aos-delay="100">
              <div className="flex items-center mb-6">
                <img src="/images/logo.png" alt="LaslesVPN Logo" className="h-8 w-auto" />
                <h1 className="ml-2 text-xl font-bold text-gray-800 dark:text-dark-text">LaslesVPN</h1>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xs">
                LaslesVPN is a private virtual network that has unique features and has high security.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white dark:bg-dark-card rounded-full p-3 shadow-md dark:shadow-black/30 hover:shadow-lg transition-shadow flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9 21.59 18.03 20.39 19.6 18.57C21.16 16.76 22.04 14.42 22.04 12.06C22.04 6.53 17.54 2.04 12 2.04Z" />
                  </svg>
                </a>
                <a href="#" className="bg-white dark:bg-dark-card rounded-full p-3 shadow-md dark:shadow-black/30 hover:shadow-lg transition-shadow flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.16 15.13 4.69 15.83 5.4 16.33C6.1 16.83 6.95 17.09 7.82 17.07C6.07 18.45 3.85 19.13 1.58 19.13C1.23 19.13 0.88 19.11 0.54 19.07C2.85 20.51 5.56 21.25 8.35 21.25C16 21.25 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" />
                  </svg>
                </a>
                <a href="#" className="bg-white dark:bg-dark-card rounded-full p-3 shadow-md dark:shadow-black/30 hover:shadow-lg transition-shadow flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" />
                  </svg>
                </a>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-6">©2023 LaslesVPN</p>
            </div>
            
            <div className="mb-8 md:mb-0" data-aos="fade-up" data-aos-delay="200">
              <h4 className="font-bold text-gray-800 dark:text-dark-text mb-6">Product</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">Download</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">Locations</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">Server</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">Countries</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div className="mb-8 md:mb-0" data-aos="fade-up" data-aos-delay="300">
              <h4 className="font-bold text-gray-800 dark:text-dark-text mb-6">Engage</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">LaslesVPN ?</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="400">
              <h4 className="font-bold text-gray-800 dark:text-white mb-6">Earn Money</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">Affiliate</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">Become Partner</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
