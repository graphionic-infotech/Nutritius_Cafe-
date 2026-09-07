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
      mainNav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
      });
    });
  }

  // --- 4. Interactive Menu Category Filtering & Jain Switch ---
  const menuTabs = document.querySelectorAll('.tab-btn');
  const jainToggle = document.getElementById('jainFilterToggle');
  const menuCards = document.querySelectorAll('.menu-row-card');

  let activeCategory = 'all';

  function filterMenuItems() {
    const isJainOnly = jainToggle.checked;

    menuCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const isCardJain = card.getAttribute('data-jain') === 'true';

      const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);
      const matchesJain = !isJainOnly || isCardJain;

      if (matchesCategory && matchesJain) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      menuTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-category');
      filterMenuItems();
    });
  });

  if (jainToggle) {
    jainToggle.addEventListener('change', filterMenuItems);
  }

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
  const toastMsg = document.getElementById('toastMsg');
  const toastText = document.getElementById('toastText');

  const showToast = (message) => {
    if (!toastMsg) return;
    toastText.textContent = message;
    toastMsg.classList.add('show');
    setTimeout(() => {
      toastMsg.classList.remove('show');
    }, 4500);
  };

  if (reservationModal && headerBookBtn) {
    headerBookBtn.addEventListener('click', () => {
      reservationModal.showModal();
      // Set default date to today
      const today = new Date().toISOString().split('T')[0];
      const dateInput = document.getElementById('resDate');
      if (dateInput && !dateInput.value) {
        dateInput.value = today;
      }
    });

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

        // Close modal
        reservationModal.close();
        reservationForm.reset();

        // Show confirmation toast
        showToast(`Table booked for ${name} (${guests}) on ${date} at ${time}!`);

        // Optional: Trigger WhatsApp confirmation link in new window
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
        }, 1200);
      });
    }
  }
});
