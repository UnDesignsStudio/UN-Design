// Enhanced animations and interactions
document.addEventListener('DOMContentLoaded', function() {
  // Language toggle functionality
  let currentLang = 'en';
  const langToggle = document.getElementById('langToggle');
  const langText = langToggle.querySelector('.lang-text');
  const langFlag = langToggle.querySelector('.lang-flag');

  function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-sr]');
    elements.forEach(element => {
      if (currentLang === 'en') {
        element.textContent = element.getAttribute('data-en');
      } else {
        element.textContent = element.getAttribute('data-sr');
      }
    });

    // Update button text and flag
    if (currentLang === 'en') {
      langText.textContent = 'EN';
      langFlag.textContent = '🇺🇸';
    } else {
      langText.textContent = 'SR';
      langFlag.textContent = '🇷🇸';
    }

    // Store language preference
    localStorage.setItem('preferredLanguage', currentLang);
  }

  // Load saved language preference
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang) {
    currentLang = savedLang;
    updateLanguage();
  }

  // Language toggle event listener
  langToggle.addEventListener('click', function() {
    currentLang = currentLang === 'en' ? 'sr' : 'en';
    updateLanguage();
    
    // Add animation effect
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 150);
  });

  // Smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Enhanced navbar background on scroll
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
      navbar.style.background = 'rgba(10, 10, 10, 0.98)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.1)';
      navbar.style.backdropFilter = 'blur(20px)';
    } else {
      navbar.style.background = 'rgba(10, 10, 10, 0.95)';
      navbar.style.boxShadow = 'none';
      navbar.style.backdropFilter = 'blur(20px)';
    }
  });

  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    if (hero) {
      hero.style.transform = `translateY(${rate}px)`;
    }
  });

  // Typing animation for hero title
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    // Start typing animation after a delay
    setTimeout(typeWriter, 500);
  }

  // Enhanced Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        
        // Add staggered animation for grid items
        const gridItems = entry.target.querySelectorAll('.portfolio-item, .service-card, .feature-card, .testimonial-card, .faq-item');
        gridItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  // Observe all sections for animation
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
    
    // Initialize grid items
    const gridItems = section.querySelectorAll('.portfolio-item, .service-card, .feature-card, .testimonial-card, .faq-item');
    gridItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
  });

  // Enhanced hover effects with glow
  const addGlowEffect = (elements) => {
    elements.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.3)';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
      });
    });
  };

  // Apply glow effects to different elements
  addGlowEffect(document.querySelectorAll('.portfolio-item'));
  addGlowEffect(document.querySelectorAll('.service-card'));
  addGlowEffect(document.querySelectorAll('.feature-card'));
  addGlowEffect(document.querySelectorAll('.testimonial-card'));
  addGlowEffect(document.querySelectorAll('.faq-item'));

  // Process step animations
  const processSteps = document.querySelectorAll('.process-step');
  processSteps.forEach((step, index) => {
    step.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.05)';
      this.style.boxShadow = '0 15px 35px rgba(0, 212, 255, 0.3)';
      
      // Animate step number
      const stepNumber = this.querySelector('.step-number');
      if (stepNumber) {
        stepNumber.style.transform = 'rotate(360deg) scale(1.1)';
        stepNumber.style.transition = 'transform 0.6s ease';
      }
    });
    
    step.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
      
      // Reset step number
      const stepNumber = this.querySelector('.step-number');
      if (stepNumber) {
        stepNumber.style.transform = 'rotate(0deg) scale(1)';
      }
    });
  });

  // Button hover animations
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Load more button functionality with animation
  const loadMoreBtn = document.querySelector('.load-more button');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      this.textContent = currentLang === 'en' ? 'Loading...' : 'Učitavanje...';
      this.style.transform = 'scale(0.95)';
      
      setTimeout(() => {
        this.textContent = currentLang === 'en' ? 'All Projects Loaded' : 'Svi projekti učitani';
        this.disabled = true;
        this.style.transform = 'scale(1)';
        this.style.background = 'linear-gradient(135deg, #00d4ff, #00d4ff)';
      }, 1000);
    });
  }

  // Mobile menu toggle (if needed)
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');
  
  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  }

  // Particle effect for hero section
  createParticles();
});

// Create floating particles effect
function createParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const particleContainer = document.createElement('div');
  particleContainer.className = 'particles';
  particleContainer.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  `;

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: linear-gradient(135deg, #00d4ff, #ff6b6b);
      border-radius: 50%;
      animation: float-particle ${3 + Math.random() * 4}s ease-in-out infinite;
      animation-delay: ${Math.random() * 2}s;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      opacity: ${0.3 + Math.random() * 0.7};
    `;
    particleContainer.appendChild(particle);
  }

  hero.appendChild(particleContainer);
}

// Add enhanced CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes float-particle {
    0%, 100% { 
      transform: translateY(0px) translateX(0px);
      opacity: 0.3;
    }
    25% { 
      transform: translateY(-20px) translateX(10px);
      opacity: 0.7;
    }
    50% { 
      transform: translateY(-40px) translateX(-10px);
      opacity: 1;
    }
    75% { 
      transform: translateY(-20px) translateX(10px);
      opacity: 0.7;
    }
  }

  @keyframes glow {
    0%, 100% { 
      box-shadow: 0 0 5px rgba(0, 212, 255, 0.5);
    }
    50% { 
      box-shadow: 0 0 20px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.6);
    }
  }

  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .fade-in-up {
    animation: fadeInUp 0.8s ease forwards;
  }

  .fade-in {
    animation: fadeIn 0.6s ease forwards;
  }

  .slide-in-left {
    animation: slideInFromLeft 0.8s ease forwards;
  }

  .slide-in-right {
    animation: slideInFromRight 0.8s ease forwards;
  }

  .glow {
    animation: glow 2s ease-in-out infinite;
  }

  /* Enhanced hover effects */
  .portfolio-item:hover,
  .service-card:hover,
  .feature-card:hover,
  .testimonial-card:hover,
  .faq-item:hover {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  /* Smooth transitions for all interactive elements */
  * {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #0a0a0a;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #00d4ff, #ff6b6b);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #00b8e6, #ff5252);
  }
`;
document.head.appendChild(style);
