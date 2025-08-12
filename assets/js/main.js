(function () {
  const LANGUAGE_KEY = 'site_language';

  const i18n = {
    en: {
      site_title: 'Faculty of Nursing - Innovation University',
      site_title_short: 'Faculty of Nursing - Innovation University',
      site_short: 'Faculty of Nursing',
      nav_home: 'Home',
      nav_halls: 'Halls',
      nav_labs: 'Labs',
      nav_offices: 'Offices',
      nav_seminar: 'Seminar Rooms',
      nav_map: 'Academic Levels',
      nav_contact: 'Contact',
      nav_video: 'Intro Video',
      hero_title: 'Faculty of Nursing - Innovation University',
      hero_sub: 'Excellence in education, innovative research, and community service',
      intro_text: 'Welcome to the Faculty of Nursing. We provide a comprehensive learning environment to prepare highly qualified nurses.',
      quick_links: 'Quick Links',
      quick_halls: 'Halls',
      quick_labs: 'Labs',
      quick_offices: 'Offices',
      quick_seminar: 'Seminar Rooms',
      quick_map: 'Academic Levels',
      nav_lms: 'LMS',
      quick_lms: 'LMS',
      title_halls: 'Halls',
      sub_halls: 'Available lecture halls across the faculty',
      title_labs: 'Labs',
      sub_labs: 'Teaching and research laboratories',
      title_offices: 'Offices',
      sub_offices: 'Administrative and faculty offices',
      title_seminar: 'Seminar Rooms',
      sub_seminar: 'Rooms equipped for presentations and workshops',
      title_map: 'Academic Levels',
      sub_map: 'Choose your academic level to access study materials and resources',
      title_contact: 'Contact Us',
      sub_contact: 'We look forward to hearing from you',
      contact_form: 'Contact Form',
      contact_info: 'Contact Information',
      form_name: 'Name',
      form_email: 'Email',
      form_message: 'Message',
      form_submit: 'Send',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      location_text: 'Innovation University, Egypt',
      footer_copy: '© 2025 All rights reserved',
      empty_state: 'No items found.',
      // Academic Levels translations
      freshman: 'Freshman',
      freshman_ar: 'السنة الأولى',
      sophomore: 'Sophomore',
      sophomore_ar: 'السنة الثانية',
      junior: 'Junior',
      junior_ar: 'السنة الثالثة',
      senior: 'Senior',
      senior_ar: 'السنة الرابعة',
      freshman_desc: 'Study materials and resources for first-year nursing students',
      freshman_desc_ar: 'المواد الدراسية والموارد لطلاب التمريض في السنة الأولى',
      sophomore_desc: 'Study materials and resources for second-year nursing students',
      sophomore_desc_ar: 'المواد الدراسية والموارد لطلاب التمريض في السنة الثانية',
      junior_desc: 'Study materials and resources for third-year nursing students',
      junior_desc_ar: 'المواد الدراسية والموارد لطلاب التمريض في السنة الثالثة',
      senior_desc: 'Study materials and resources for fourth-year nursing students',
      senior_desc_ar: 'المواد الدراسية والموارد لطلاب التمريض في السنة الرابعة',
      access_materials: 'Access Materials',
      access_materials_ar: 'الوصول للمواد'
    },
    ar: {
      site_title: 'كلية التمريض - جامعة الابتكار',
      site_title_short: 'كلية التمريض - جامعة الابتكار',
      site_short: 'كلية التمريض',
      nav_home: 'الرئيسية',
      nav_halls: 'المدرجات',
      nav_labs: 'المعامل',
      nav_offices: 'المكاتب',
      nav_seminar: 'قاعات السمينار',
      nav_map: 'المستويات الأكاديمية',
      nav_contact: 'اتصل بنا',
      nav_video: 'فيديو تعريفي',
      hero_title: 'كلية التمريض - جامعة الابتكار',
      hero_sub: 'تعليم متميز، بحث مبتكر، وخدمة مجتمعية',
      intro_text: 'نرحب بكم في كلية التمريض. نوفر بيئة تعليمية متكاملة لإعداد ممرضين وممرضات مؤهلين بأعلى المعايير.',
      quick_links: 'روابط سريعة',
      quick_halls: 'المدرجات',
      quick_labs: 'المعامل',
      quick_offices: 'المكاتب',
      quick_seminar: 'قاعات السمينار',
      quick_map: 'المستويات الأكاديمية',
      nav_lms: 'LMS',
      quick_lms: 'LMS',
      title_halls: 'المدرجات',
      sub_halls: 'قائمة بالمدرجات المتاحة داخل الكلية',
      title_labs: 'المعامل',
      sub_labs: 'قائمة بالمعامل التعليمية والبحثية',
      title_offices: 'المكاتب',
      sub_offices: 'مكاتب الإدارات وأعضاء هيئة التدريس',
      title_seminar: 'قاعات السمينار',
      sub_seminar: 'قاعات مجهزة للعروض وورش العمل',
      title_map: 'المستويات الأكاديمية',
      sub_map: 'اختر مستواك الأكاديمي للوصول إلى المواد الدراسية والموارد',
      title_contact: 'اتصل بنا',
      sub_contact: 'نتطلع للتواصل معكم',
      contact_form: 'نموذج التواصل',
      contact_info: 'معلومات التواصل',
      form_name: 'الاسم',
      form_email: 'البريد الإلكتروني',
      form_message: 'الرسالة',
      form_submit: 'إرسال',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      location: 'الموقع',
      location_text: 'جامعة الابتكار، مصر',
      footer_copy: '© 2025 جميع الحقوق محفوظة',
      empty_state: 'لا توجد عناصر.',
      // Academic Levels translations
      freshman: 'السنة الأولى',
      freshman_ar: 'السنة الأولى',
      sophomore: 'السنة الثانية',
      sophomore_ar: 'السنة الثانية',
      junior: 'السنة الثالثة',
      junior_ar: 'السنة الثالثة',
      senior: 'السنة الرابعة',
      senior_ar: 'السنة الرابعة',
      freshman_desc: 'المواد الدراسية والموارد لطلاب التمريض في السنة الأولى',
      freshman_desc_ar: 'المواد الدراسية والموارد لطلاب التمريض في السنة الأولى',
      sophomore_desc: 'المواد الدراسية والموارد لطلاب التمريض في السنة الثانية',
      sophomore_desc_ar: 'المواد الدراسية والموارد لطلاب التمريض في السنة الثانية',
      junior_desc: 'المواد الدراسية والموارد لطلاب التمريض في السنة الثالثة',
      junior_desc_ar: 'المواد الدراسية والموارد لطلاب التمريض في السنة الثالثة',
      senior_desc: 'المواد الدراسية والموارد لطلاب التمريض في السنة الرابعة',
      senior_desc_ar: 'المواد الدراسية والموارد لطلاب التمريض في السنة الرابعة',
      access_materials: 'الوصول للمواد',
      access_materials_ar: 'الوصول للمواد'
    }
  };

  // Use only external JSON for places
  const defaultPlaces = [];

  let places = defaultPlaces;

  async function loadPlacesFromJson() {
    try {
      const res = await fetch('assets/data/places.json', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.places)) {
          places = data.places;
          renderPage();
          return;
        }
      }
      // If not OK or invalid, try script fallback
      await tryScriptFallback();
    } catch (e) {
      await tryScriptFallback();
    }
  }

  async function tryScriptFallback() {
    return new Promise(resolve => {
      const script = document.createElement('script');
      script.src = 'assets/data/places.js';
      script.async = true;
      script.onload = function () {
        if (window.PLACES_DATA && Array.isArray(window.PLACES_DATA.places)) {
          places = window.PLACES_DATA.places;
        }
        renderPage();
        resolve();
      };
      script.onerror = function () {
        console.warn('Failed to load places fallback script');
        renderPage();
        resolve();
      };
      document.head.appendChild(script);
    });
  }

  function getLanguage() {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    if (saved === 'ar' || saved === 'en') return saved;
    // Default to Arabic for Egypt
    return 'ar';
  }

  function setLanguage(lang) {
    localStorage.setItem(LANGUAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'ar');
    updateTexts();
    renderPage();
    updateLangToggleButton();
  }

  function updateTexts() {
    const lang = getLanguage();
    const dict = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
    document.title = dict.site_title || document.title;
  }

  function updateLangToggleButton() {
    const btn = document.getElementById('langToggle');
    if (!btn) return;
    const lang = getLanguage();
    btn.textContent = lang === 'ar' ? 'EN' : 'AR';
    btn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  }

  function highlightActiveNav() {
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar .nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === path) link.classList.add('active');
    });
  }

  function renderCards() {
    const container = document.getElementById('cards-container');
    if (!container) return;
    const lang = getLanguage();
    const type = container.getAttribute('data-type');
    const items = places.filter(p => p.type === type);

    if (items.length === 0) {
      const msg = document.createElement('div');
      msg.className = 'text-muted';
      msg.textContent = i18n[lang].empty_state;
      container.innerHTML = '';
      container.appendChild(msg);
      return;
    }

    const html = items.map(item => `
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="card h-100 shadow-sm">
          <img src="${item.image}" class="card-img-top" alt="${item.name[lang]}" />
          <div class="card-body">
            <h5 class="card-title">${item.name[lang]}</h5>
            <p class="card-text">${item.desc[lang]}</p>
            ${item.location ? `<div class="small text-muted">📍 ${i18n[lang].location}: ${item.location[lang] || ''}</div>` : ''}
          </div>
        </div>
      </div>
    `).join('');
    container.innerHTML = html;
  }

  function renderMap() {
    const markersContainer = document.getElementById('mapMarkers');
    if (!markersContainer) return;
    markersContainer.innerHTML = '';
    const lang = getLanguage();

    places.forEach((p, idx) => {
      const btn = document.createElement('button');
      btn.className = 'map-marker';
      btn.style.left = p.pos.x + '%';
      btn.style.top = p.pos.y + '%';
      btn.title = p.name[lang];
      btn.textContent = String(idx + 1);
      btn.addEventListener('click', () => openPlaceModal(p));
      markersContainer.appendChild(btn);
    });

    if (window.bootstrap) {
      document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));
    }
  }

  function openPlaceModal(place) {
    const lang = getLanguage();
    const modalEl = document.getElementById('placeModal');
    if (!modalEl) return;
    modalEl.querySelector('#placeModalLabel').textContent = place.name[lang];
    modalEl.querySelector('#placeModalImage').src = place.image;
    modalEl.querySelector('#placeModalDesc').textContent = place.desc[lang];
    const locEl = modalEl.querySelector('#placeModalLoc');
    if (locEl) {
      locEl.textContent = place.location ? `📍 ${i18n[lang].location}: ${place.location[lang] || ''}` : '';
      locEl.style.display = place.location ? '' : 'none';
    }
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }

  function wireContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const lang = getLanguage();
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
      alert(lang === 'ar' ? 'تم إرسال الرسالة بنجاح (نموذج تجريبي).' : 'Message sent successfully (demo form).');
      form.reset();
    });
  }

  function renderPage() {
    renderCards();
    renderMap();
  }

  document.addEventListener('DOMContentLoaded', function () {
    setLanguage(getLanguage());
    document.body.addEventListener('click', function (e) {
      const target = e.target;
      if (target && target.id === 'langToggle') {
        const current = getLanguage();
        setLanguage(current === 'ar' ? 'en' : 'ar');
        // Dispatch custom event for language change
        document.dispatchEvent(new CustomEvent('languageChanged'));
      }
    });
    highlightActiveNav();
    wireContactForm();
    // Stop iframe playback when dropdown is hidden
    document.querySelectorAll('.video-dropdown').forEach(function (menu) {
      menu.addEventListener('hide.bs.dropdown', function () {
        const iframe = menu.querySelector('iframe');
        if (iframe) {
          const src = iframe.getAttribute('src');
          iframe.setAttribute('src', src);
        }
      });
    });
    
         // Mobile navbar improvements
     const navbar = document.querySelector('.navbar');
     const navbarToggler = document.querySelector('.navbar-toggler');
     const navbarCollapse = document.querySelector('.navbar-collapse');
     
     if (navbarToggler && navbarCollapse) {
       // Store original body overflow and scroll position
       let originalBodyOverflow = '';
       let originalScrollPosition = 0;
       
       // Handle mobile menu toggle
       navbarToggler.addEventListener('click', function() {
         const isExpanded = this.getAttribute('aria-expanded') === 'true';
         
         if (isExpanded) {
           // Menu is closing - restore original overflow and scroll
           document.body.style.overflow = originalBodyOverflow;
           document.body.classList.remove('menu-open');
           // Use requestAnimationFrame to ensure smooth scroll restoration
           requestAnimationFrame(() => {
             window.scrollTo(0, originalScrollPosition);
           });
         } else {
           // Menu is opening - store current state and prevent body scroll
           originalBodyOverflow = document.body.style.overflow;
           originalScrollPosition = window.pageYOffset;
           document.body.style.overflow = 'hidden';
           document.body.classList.add('menu-open');
         }
       });
       
       // Close menu when clicking outside
       document.addEventListener('click', function(e) {
         if (!navbar.contains(e.target) && navbarCollapse.classList.contains('show')) {
           navbarToggler.click();
         }
       });
       
       // Close menu when pressing Escape key
       document.addEventListener('keydown', function(e) {
         if (e.key === 'Escape' && navbarCollapse.classList.contains('show')) {
           navbarToggler.click();
         }
       });
       
       // Ensure body scroll is restored when page is unloaded
       window.addEventListener('beforeunload', function() {
         document.body.style.overflow = originalBodyOverflow || '';
       });
       
       // Handle Bootstrap collapse events for better overflow management
       navbarCollapse.addEventListener('hidden.bs.collapse', function() {
         // Ensure scroll is restored when Bootstrap finishes hiding
         setTimeout(() => {
           document.body.style.overflow = originalBodyOverflow;
           document.body.classList.remove('menu-open');
           // Use requestAnimationFrame for smooth scroll restoration
           requestAnimationFrame(() => {
             window.scrollTo(0, originalScrollPosition);
           });
         }, 50);
       });
       
       navbarCollapse.addEventListener('show.bs.collapse', function() {
         // Ensure scroll is prevented when Bootstrap starts showing
         document.body.style.overflow = 'hidden';
         document.body.classList.add('menu-open');
       });
       
       // Fallback: ensure scroll is restored if something goes wrong
       window.addEventListener('resize', function() {
         if (!navbarCollapse.classList.contains('show')) {
           document.body.style.overflow = originalBodyOverflow;
           document.body.classList.remove('menu-open');
         }
       });
     }
    
    loadPlacesFromJson();
  });
})(); 