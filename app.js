// Data Management System
const RCPI_DATA = {
  services: [
    {
      id: 1,
      icon: '🌿',
      name: 'Professional Landscaping',
      description: 'Complete landscape design and execution for all property types',
      features: ['Design & Planning', 'Hardscape Installation', 'Softscape Design', 'Water Features', 'Lighting Design'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      category: 'landscaping'
    },
    {
      id: 2,
      icon: '🌱',
      name: 'Horticulture & Plantation',
      description: 'Expert horticultural solutions for lush green spaces',
      features: ['Tree Plantation', 'Garden Development', 'Organic Farming', 'Nursery Management', 'Plant Care'],
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=300&fit=crop',
      category: 'horticulture'
    },
    {
      id: 3,
      icon: '⛳',
      name: 'Golf Course & Turf',
      description: 'World-class golf course construction and maintenance',
      features: ['Course Design', 'Putting Greens', 'Turf Installation', 'Drainage Systems', 'Maintenance'],
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=300&fit=crop',
      category: 'golf'
    },
    {
      id: 4,
      icon: '🏗️',
      name: 'Civil Construction',
      description: 'Comprehensive infrastructure development solutions',
      features: ['Infrastructure Dev', 'Riverfront Projects', 'Slope Protection', 'Road Construction', 'Water Systems'],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop',
      category: 'civil'
    },
    {
      id: 5,
      icon: '💧',
      name: 'Riverfront Development',
      description: 'Eco-friendly riverfront beautification projects',
      features: ['Riverbank Stabilization', 'Waterfront Landscaping', 'Erosion Control', 'Environmental Restoration', 'Wetland Mgmt'],
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=300&fit=crop',
      category: 'landscape'
    },
    {
      id: 6,
      icon: '🛠️',
      name: 'Maintenance & Management',
      description: 'Comprehensive ongoing maintenance services',
      features: ['Regular Maintenance', 'Seasonal Care', 'Pest Management', 'Lawn Treatment', '24/7 Support'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      category: 'maintenance'
    }
  ],

  portfolio: [
    {
      id: 1,
      title: 'Luxury Residential Complex',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop',
      category: 'landscaping',
      description: 'Complete landscape design and installation',
      location: 'Vadodara, Gujarat',
      year: 2023
    },
    {
      id: 2,
      title: 'Corporate Office Garden',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      category: 'commercial',
      description: 'Modern landscaping with green spaces',
      location: 'Ahmedabad, Gujarat',
      year: 2023
    },
    {
      id: 3,
      title: 'Championship Golf Course',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop',
      category: 'golf',
      description: '18-hole championship golf course',
      location: 'Pune, Maharashtra',
      year: 2022
    },
    {
      id: 4,
      title: 'Riverfront Park',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
      category: 'landscaping',
      description: 'Eco-friendly recreational area',
      location: 'Indore, Madhya Pradesh',
      year: 2022
    },
    {
      id: 5,
      title: 'Botanical Garden',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop',
      category: 'horticulture',
      description: 'Large-scale tree plantation project',
      location: 'Surat, Gujarat',
      year: 2023
    },
    {
      id: 6,
      title: 'Civil Infrastructure',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
      category: 'commercial',
      description: 'Complete infrastructure project',
      location: 'Delhi, India',
      year: 2021
    }
  ],

  testimonials: [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'Corporate Director',
      company: 'Fortune 500 Company',
      text: 'RCPI transformed our office grounds beautifully. Professional team and excellent execution!',
      rating: 5,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Golf Club President',
      company: 'Premier Golf Club',
      text: 'The golf course construction exceeded international standards. Outstanding quality!',
      rating: 5,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 3,
      name: 'Arjun Patel',
      position: 'Residential Manager',
      company: 'Luxury Housing Complex',
      text: 'Maintenance services are excellent. Our landscape looks pristine throughout the year.',
      rating: 5,
      image: 'https://via.placeholder.com/100'
    }
  ],

  blog: [
    {
      id: 1,
      title: 'Top 10 Landscape Design Trends 2024',
      excerpt: 'Discover the latest trends in landscape design that can transform your outdoor space.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
      category: 'Design',
      date: '2024-07-20',
      author: 'RCPI Team'
    },
    {
      id: 2,
      title: 'Sustainable Landscaping Practices',
      excerpt: 'Learn how to create environmentally friendly landscapes that save water and energy.',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=250&fit=crop',
      category: 'Sustainability',
      date: '2024-07-15',
      author: 'RCPI Team'
    },
    {
      id: 3,
      title: 'Maintenance Tips for Healthy Gardens',
      excerpt: 'Expert tips for maintaining your landscape throughout the seasons.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop',
      category: 'Maintenance',
      date: '2024-07-10',
      author: 'RCPI Team'
    }
  ]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  loadServices();
  loadPortfolio();
  loadTestimonials();
  loadBlog();
  setupHeroSlider();
  setupEventListeners();
  animateCounters();
});

// Load Services Dynamically
function loadServices() {
  const servicesGrid = document.getElementById('servicesGrid');
  servicesGrid.innerHTML = RCPI_DATA.services.map(service => `
    <div class="service-card" data-category="${service.category}">
      <div class="service-icon">${service.icon}</div>
      <h3>${service.name}</h3>
      <p class="service-summary">${service.description}</p>
      <ul class="service-features">
        ${service.features.map(f => `<li>✓ ${f}</li>`).join('')}
      </ul>
      <a href="#contact" class="service-btn">Inquire Now</a>
    </div>
  `).join('');
}

// Load Portfolio Dynamically
function loadPortfolio() {
  const portfolioGrid = document.getElementById('portfolioGrid');
  renderPortfolioItems('all', portfolioGrid);

  // Portfolio Filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.dataset.filter;
      renderPortfolioItems(filter, portfolioGrid);
    });
  });
}

function renderPortfolioItems(filter, container) {
  const items = filter === 'all' 
    ? RCPI_DATA.portfolio 
    : RCPI_DATA.portfolio.filter(item => item.category === filter);
  
  container.innerHTML = items.map(item => `
    <div class="portfolio-item" data-category="${item.category}">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="portfolio-overlay">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <span class="project-info">${item.location} • ${item.year}</span>
      </div>
    </div>
  `).join('');

  // Add animation
  container.style.animation = 'fadeIn 0.5s ease';
}

// Load Testimonials Dynamically
function loadTestimonials() {
  const carousel = document.getElementById('testimonialsCarousel');
  carousel.innerHTML = RCPI_DATA.testimonials.map((testimonial, index) => `
    <div class="testimonial-card ${index === 0 ? 'active' : ''}">
      <div class="stars">${'⭐'.repeat(testimonial.rating)}</div>
      <p class="testimonial-text">"${testimonial.text}"</p>
      <div class="testimonial-author">
        <div class="author-info">
          <strong>${testimonial.name}</strong>
          <p>${testimonial.position}</p>
          <p class="company">${testimonial.company}</p>
        </div>
      </div>
    </div>
  `).join('');

  setupTestimonialCarousel();
}

// Load Blog Posts Dynamically
function loadBlog() {
  const blogGrid = document.getElementById('blogGrid');
  blogGrid.innerHTML = RCPI_DATA.blog.map(post => `
    <article class="blog-card">
      <img src="${post.image}" alt="${post.title}" loading="lazy">
      <div class="blog-content">
        <span class="blog-category">${post.category}</span>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <div class="blog-meta">
          <span class="blog-date">${formatDate(post.date)}</span>
          <span class="blog-author">${post.author}</span>
        </div>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </article>
  `).join('');
}

// Hero Slider
function setupHeroSlider() {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  const indicators = document.getElementById('slideIndicators');
  let currentSlide = 0;

  // Create indicators
  slides.forEach((_, index) => {
    const indicator = document.createElement('button');
    indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
    indicator.onclick = () => goToSlide(index);
    indicators.appendChild(indicator);
  });

  function goToSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    document.querySelectorAll('.indicator').forEach(ind => ind.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    document.querySelectorAll('.indicator')[currentSlide].classList.add('active');
  }

  prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

  // Auto-slide every 5 seconds
  setInterval(() => goToSlide(currentSlide + 1), 5000);
}

// Testimonial Carousel
function setupTestimonialCarousel() {
  const cards = document.querySelectorAll('.testimonial-card');
  let current = 0;

  function showSlide(n) {
    cards.forEach(card => card.classList.remove('active'));
    current = (n + cards.length) % cards.length;
    cards[current].classList.add('active');
  }

  setInterval(() => showSlide(current + 1), 5000);
}

// Event Listeners
function setupEventListeners() {
  // Mobile Menu
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const nav = document.querySelector('nav');
  
  mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        nav.classList.remove('active');
      }
    });
  });

  // Quote Form
  document.getElementById('quoteForm').addEventListener('submit', handleQuoteSubmit);

  // Contact Form
  document.getElementById('contactForm').addEventListener('submit', handleContactSubmit);
}

// Quote Generator
function handleQuoteSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const area = parseInt(formData.get('area') || 0);
  const service = formData.get('service');
  const timeline = formData.get('timeline');

  // Simple quote calculation
  const rates = {
    landscaping: 500,
    horticulture: 300,
    golf: 1000,
    civil: 800,
    maintenance: 200
  };

  const baseRate = rates[service] || 500;
  const estimatedCost = (area * baseRate) / 1000;

  // Display result
  document.getElementById('quoteName').textContent = formData.get('projectName');
  document.getElementById('quoteService').textContent = service;
  document.getElementById('quoteCost').textContent = `₹${estimatedCost.toFixed(0)}`;
  document.getElementById('quoteTimeline').textContent = timeline;

  document.getElementById('quoteResult').style.display = 'block';
  
  showNotification('Quote generated successfully!');
}

// Contact Form Submission
function handleContactSubmit(e) {
  e.preventDefault();

  showLoader(true);

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // Simulate API call
  setTimeout(() => {
    showLoader(false);
    showNotification('Message sent successfully! We will contact you soon.');
    e.target.reset();
  }, 1500);
}

// Animate Counters
function animateCounters() {
  const counters = document.querySelectorAll('[data-target]');
  
  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 30;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 50);
}

// Utility Functions
function showLoader(show) {
  document.getElementById('loader').classList.toggle('active', show);
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}
