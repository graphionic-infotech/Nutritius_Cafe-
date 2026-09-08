/**
 * Nutritius Cafe & Restaurant — Interactive Client Application
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Sticky Glassmorphic Header on Scroll ---
  const header = document.getElementById('siteHeader');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- 2. Live Opening Status Calculation (11:30 AM to 11:00 PM) ---
  const updateLiveStatus = () => {
    const statusPill = document.getElementById('liveStatusPill');
    const statusText = document.getElementById('statusText');
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const openTimeInMinutes = 11 * 60 + 30; // 11:30 AM
    const closeTimeInMinutes = 23 * 60;      // 11:00 PM

    if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes) {
      statusPill.style.background = 'rgba(46, 125, 50, 0.2)';
      statusPill.style.borderColor = 'rgba(76, 175, 80, 0.4)';
      statusText.innerHTML = 'Open Now • Till 11 PM';
    } else {
      statusPill.style.background = 'rgba(211, 47, 47, 0.15)';
      statusPill.style.borderColor = 'rgba(211, 47, 47, 0.4)';
      statusText.innerHTML = 'Opens at 11:30 AM';
    }
  };
  updateLiveStatus();
  setInterval(updateLiveStatus, 60000);

  // --- 3. Mobile Hamburger Navigation ---
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mainNav = document.getElementById('mainNav');

  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('active');
      hamburgerBtn.classList.toggle('active', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a nav link is clicked
    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !hamburgerBtn.contains(e.target) && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- 4. Interactive Menu Filtering, Real-Time Search & Jain Switch ---
  const menuTabs = document.querySelectorAll('.tab-btn');
  const jainToggle = document.getElementById('jainFilterToggle');
  const menuCards = document.querySelectorAll('.menu-row-card');
  const searchInput = document.getElementById('menuSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const resultsCount = document.getElementById('resultsCount');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const emptyState = document.getElementById('menuEmptyState');
  const emptyResetBtn = document.getElementById('emptyResetBtn');

  let activeCategory = 'all';

  function updateCategoryCounts() {
    const isJainOnly = jainToggle ? jainToggle.checked : false;
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    const categories = ['all', 'pizzas', 'sizzlers', 'pastas', 'mexican', 'shakes'];
    const counts = { all: 0, pizzas: 0, sizzlers: 0, pastas: 0, mexican: 0, shakes: 0 };

    menuCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const isCardJain = card.getAttribute('data-jain') === 'true';
      const name = card.querySelector('.menu-row-name')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.menu-row-desc')?.textContent.toLowerCase() || '';

      const matchesJain = !isJainOnly || isCardJain;
      const matchesSearch = !query || name.includes(query) || desc.includes(query);

      if (matchesJain && matchesSearch) {
        counts.all++;
        if (counts[cardCategory] !== undefined) {
          counts[cardCategory]++;
        }
      }
    });

    categories.forEach(cat => {
      const countEl = document.getElementById(`count-${cat}`);
      if (countEl) {
        countEl.textContent = counts[cat];
      }
    });
  }

  function filterMenuItems() {
    const isJainOnly = jainToggle ? jainToggle.checked : false;
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    if (clearSearchBtn) {
      clearSearchBtn.style.display = query ? 'flex' : 'none';
    }

    let visibleCount = 0;

    menuCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const isCardJain = card.getAttribute('data-jain') === 'true';
      const name = card.querySelector('.menu-row-name')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.menu-row-desc')?.textContent.toLowerCase() || '';

      const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);
      const matchesJain = !isJainOnly || isCardJain;
      const matchesSearch = !query || name.includes(query) || desc.includes(query);

      if (matchesCategory && matchesJain && matchesSearch) {
        card.style.display = 'flex';
        card.classList.remove('card-animate-in');
        // trigger reflow for smooth re-animation
        void card.offsetWidth;
        card.classList.add('card-animate-in');
        visibleCount++;
      } else {
        card.style.display = 'none';
        card.classList.remove('card-animate-in');
      }
    });

    // Update Tab Counts
    updateCategoryCounts();

    // Update Result Feedback
    if (resultsCount) {
      if (visibleCount === menuCards.length && !isJainOnly && !query && activeCategory === 'all') {
        resultsCount.textContent = `Showing all ${visibleCount} creations`;
      } else {
        const catName = activeCategory === 'all' ? 'All' : (document.querySelector(`.tab-btn[data-category="${activeCategory}"] .tab-name`)?.textContent || activeCategory);
        let statusText = `Showing ${visibleCount} dish${visibleCount === 1 ? '' : 'es'}`;
        if (activeCategory !== 'all') statusText += ` in ${catName}`;
        if (isJainOnly) statusText += ` • 100% Jain`;
        if (query) statusText += ` for "${query}"`;
        resultsCount.textContent = statusText;
      }
    }

    // Toggle Reset Button
    const isFiltered = activeCategory !== 'all' || isJainOnly || !!query;
    if (resetFiltersBtn) {
      resetFiltersBtn.style.display = isFiltered ? 'inline-flex' : 'none';
    }

    // Toggle Empty State
    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  function resetAllFilters() {
    activeCategory = 'all';
    menuTabs.forEach(t => {
      const isAll = t.getAttribute('data-category') === 'all';
      t.classList.toggle('active', isAll);
      t.setAttribute('aria-selected', isAll ? 'true' : 'false');
    });
    if (jainToggle) jainToggle.checked = false;
    if (searchInput) searchInput.value = '';
    filterMenuItems();
  }

  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      menuTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      activeCategory = tab.getAttribute('data-category');
      filterMenuItems();
    });
  });

  if (jainToggle) {
    jainToggle.addEventListener('change', filterMenuItems);
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterMenuItems);
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchInput.focus();
      filterMenuItems();
    });
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', resetAllFilters);
  }

  if (emptyResetBtn) {
    emptyResetBtn.addEventListener('click', resetAllFilters);
  }

  // Initial count calculation on load
  updateCategoryCounts();

  // --- 5. Verified Customer Reviews Slider ---
  const reviews = [
    {
      text: `"Nutritius Cafe is by far the best pure veg hangout near Italva Lake! Their thin-crust pizza and paneer sizzlers are outstanding, and the ambiance is so peaceful."`,
      name: "Kavita Desai",
      img: "assets/avatar-kavita.jpg",
      tag: "Local Guide • Navsari Regular"
    },
    {
      text: `"Finally a restaurant in Navsari that understands authentic Jain preparation without compromising on taste. Great thick shakes, quick service, and super hygienic."`,
      name: "Rohan Shah",
      img: "assets/avatar-rohan.jpg",
      tag: "Verified Diner • Sisodra"
    },
    {
      text: `"Perfect spot for evening dates and group hangouts. Loved the background music, cozy outdoor lakeside seating, and the friendly staff. Must try their Pink Sauce Pasta!"`,
      name: "Pratik Patel",
      img: "assets/avatar-pratik.jpg",
      tag: "Food Enthusiast • Navsari"
    },
    {
      text: `"The Belgian Chocolate Freakshake and loaded nachos are out of this world. Clean kitchen, great presentation, and very reasonable pricing for the quality."`,
      name: "Neha Mehta",
      img: "assets/avatar-kavita.jpg",
      tag: "Dine-In Customer • Italva"
    }
  ];

  let currentReviewIndex = 0;
  const reviewText = document.getElementById('reviewText');
  const reviewerImg = document.getElementById('reviewerImg');
  const reviewerName = document.getElementById('reviewerName');
  const reviewerTag = document.getElementById('reviewerTag');
  const prevReviewBtn = document.getElementById('prevReviewBtn');
  const nextReviewBtn = document.getElementById('nextReviewBtn');

  function renderReview(index) {
    const r = reviews[index];
    if (!reviewText) return;
    reviewText.style.opacity = '0';
    setTimeout(() => {
      reviewText.textContent = r.text;
      if (reviewerImg) {
        reviewerImg.src = r.img;
        reviewerImg.alt = r.name;
      }
      reviewerName.textContent = r.name;
      reviewerTag.textContent = r.tag;
      reviewText.style.opacity = '1';
    }, 200);
  }

  if (reviewText) {
    reviewText.style.transition = 'opacity 0.25s ease';
  }

  if (prevReviewBtn && nextReviewBtn) {
    prevReviewBtn.addEventListener('click', () => {
      currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
      renderReview(currentReviewIndex);
    });

    nextReviewBtn.addEventListener('click', () => {
      currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
      renderReview(currentReviewIndex);
    });

    // Auto-advance reviews every 7 seconds
    setInterval(() => {
      currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
      renderReview(currentReviewIndex);
    }, 7000);
  }

  // --- 6. Native HTML5 <dialog> Reservation Modal ---
  const reservationModal = document.getElementById('reservationModal');
  const headerBookBtn = document.getElementById('headerBookBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const reservationForm = document.getElementById('reservationForm');
  const mobileBookBtn = document.getElementById('mobileBookBtn');

  const openReservationModal = () => {
    if (!reservationModal) return;
    if (mainNav) mainNav.classList.remove('active');
    if (hamburgerBtn) hamburgerBtn.classList.remove('active');
    reservationModal.showModal();
    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('resDate');
    if (dateInput && !dateInput.value) {
      dateInput.value = today;
    }
  };

  if (reservationModal) {
    if (headerBookBtn) headerBookBtn.addEventListener('click', openReservationModal);
    if (mobileBookBtn) mobileBookBtn.addEventListener('click', openReservationModal);

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        reservationModal.close();
      });
    }

    // Light-dismiss: close when clicking outside dialog (on the backdrop)
    reservationModal.addEventListener('click', (event) => {
      const rect = reservationModal.getBoundingClientRect();
      const isInDialog = (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      );
      if (!isInDialog) {
        reservationModal.close();
      }
    });

    // Handle Form Submission
    if (reservationForm) {
      reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('resName').value.trim();
        const phone = document.getElementById('resPhone').value.trim();
        const date = document.getElementById('resDate').value;
        const time = document.getElementById('resTime').value;
        const guests = document.getElementById('resGuests').value;
        const diet = document.getElementById('resDiet').value;
        const notes = document.getElementById('resOccasion').value.trim();

        // Close modal and reset form cleanly without any success popup
        reservationModal.close();
        reservationForm.reset();

        // Trigger WhatsApp confirmation link in new window
        const waMsg = encodeURIComponent(
          `Hello Nutritius Cafe! I would like to reserve a table:\n` +
          `• Name: ${name}\n` +
          `• Phone: ${phone}\n` +
          `• Date & Time: ${date} at ${time}\n` +
          `• Party Size: ${guests}\n` +
          `• Preference: ${diet}\n` +
          (notes ? `• Special Notes: ${notes}` : '')
        );
        const waUrl = `https://wa.me/919313815971?text=${waMsg}`;
        setTimeout(() => {
          window.open(waUrl, '_blank');
        }, 800);
      });
    }
  }
});
