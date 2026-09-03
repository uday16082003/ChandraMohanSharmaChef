// ==========================================================================
// CHEF CHANDRA MOHAN SHARMA - CORE APPLICATION LOGIC
// ==========================================================================

// Culinary Showcase Data
const culinaryDishes = [
  {
    id: 1,
    title: "Dum Awadhi Galouti Kebab",
    category: "tandoor",
    badge: "Royal Tandoor",
    subtitle: "Melt-in-mouth smoked lamb patties with 32 rare spices",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    spiceLevel: "Medium Aromatic (3/5)",
    origin: "Awadh / Lucknow Royal Court",
    technique: "Clay-pot Dum Smoking & Griddle Sear",
    description: "An aristocratic recipe passed through generations of royal Nawabi kitchens. Silken minced meat infused with rose water, mace, saffron, and smoked over charcoal embers with clove oil. Served with paper-thin Mughlai parotta and mint-anardana relish.",
    highlights: ["Infused with 32 hand-ground spices", "Smoked with Himalayan clove essence", "Signature recipe perfected at Lebua & Hyatt"]
  },
  {
    id: 2,
    title: "Smoked Zafrani Malai Murgh Tikka",
    category: "tandoor",
    badge: "Clay-Oven Signature",
    subtitle: "Kashmiri saffron and aged cheddar marinated tender chicken",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    spiceLevel: "Mild & Velvety (1/5)",
    origin: "North Indian Tandoor Tradition",
    technique: "High-Heat Tandoor Char-Roasting",
    description: "Tender boneless chicken morsels steeped in hung curd, clotted cream, green cardamom, roasted cumin, and royal Kashmiri saffron. Charred to smoky perfection in traditional clay tandoor and brushed with truffle ghee.",
    highlights: ["Sourced Kashmiri Mongra saffron", "Marinated for 18 hours in artisanal spices", "Finished with smoked spiced butter"]
  },
  {
    id: 3,
    title: "Slow-Cooked Dum Nalli Nihari",
    category: "curries",
    badge: "Slow-Simmer Royale",
    subtitle: "14-hour slow-braised shank in velvety bone-marrow gravy",
    image: "assets/images/dishes/dish-curry-bg.png",
    spiceLevel: "Rich & Robust (4/5)",
    origin: "Old Delhi Imperial Cuisine",
    technique: "Sealed Handi Overnight Dum Cooking",
    description: "The crown jewel of Indian slow-cooking. Lamb shanks simmered overnight in a copper cauldron with marrow stock, potli masala, roasted gram flour, and vetiver water. Garnished with ginger matchsticks, fresh coriander, and lime.",
    highlights: ["14 hours slow-braised in copper cauldrons", "Silky natural bone-marrow reduction", "Signature guest favorite in Bangkok & Dubai"]
  },
  {
    id: 4,
    title: "Grand Dal Bukhara 24-Hour Simmer",
    category: "curries",
    badge: "Heritage Classic",
    subtitle: "Charcoal-simmered black lentils with cream & smoked tomatoes",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    spiceLevel: "Gentle Warmth (2/5)",
    origin: "North-West Frontier",
    technique: "24-Hour Gentle Charcoal Smoldering",
    description: "Whole black urad lentils slow-simmered continuously for over 24 hours on glowing charcoal embers with vine-ripened plum tomatoes, white butter, and fenugreek leaves. Unmatched creamy texture without artificial thickeners.",
    highlights: ["Continuous 24-hour slow coal heat", "Finished with artisanal churned butter", "Zero artificial cream or additives"]
  },
  {
    id: 5,
    title: "Kerala River Prawn Moilee",
    category: "south-indian",
    badge: "Coastal Heritage",
    subtitle: "Jumbo tiger prawns in tempered coconut milk & raw mango curry",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
    spiceLevel: "Fragrant & Tangy (2/5)",
    origin: "Malabar Coast, Kerala",
    technique: "Gentle Coconut Milk Poach & Curry Leaf Tempering",
    description: "Succulent giant tiger prawns poached delicately in first-press fresh coconut milk, tempered with mustard seeds, fresh curry leaves, green chilies, and slices of ginger with raw sour mango.",
    highlights: ["Freshly squeezed first-press coconut milk", "Crisp tempered curry leaves & fresh mustard", "Adapted for Bangkok's high-end seafood dining"]
  },
  {
    id: 6,
    title: "Chettinad Spiced Lamb Chops",
    category: "south-indian",
    badge: "Spiced Mastery",
    subtitle: "Fresh stone-ground black pepper, star anise & stone flower roast",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    spiceLevel: "Fiery & Peppery (4.5/5)",
    origin: "Chettinad Region, Tamil Nadu",
    technique: "Dry Roasted Spices & Cast Iron Searing",
    description: "Tender lamb chops coated with freshly roasted Kalpasi (black stone flower), Tellicherry black peppercorns, fennel seeds, and shallots. Pan-seared to a caramelized crisp exterior with tender succulent center.",
    highlights: ["Stone-ground whole roasted spice blend", "Rare wild black stone flower aroma", "Authentic South Indian culinary precision"]
  },
  {
    id: 7,
    title: "Deconstructed Samosa & Truffle Chaat",
    category: "banqueting",
    badge: "Contemporary Plating",
    subtitle: "Spiced potato tartlet, yogurt spherification & mint caviar",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    spiceLevel: "Sweet, Tangy & Zesty (2/5)",
    origin: "Modern Indian Gastronomy",
    technique: "Pastry Craft & Modern Plating",
    description: "A playful fine-dining interpretation of Indian street food. Crisp handmade butter tart filled with cumin spiced pea purée, tamarind glaze drops, molecular yogurt pearls, Sev crunch, and edible gold leaf.",
    highlights: ["Luxury banquet showstopper", "Molecular yogurt spherification", "Blends ITDC bakery pastry skill with Indian spices"]
  },
  {
    id: 8,
    title: "Royal Awadhi Dum Biryani Banquet",
    category: "banqueting",
    badge: "5-Star Grand Feast",
    subtitle: "Aged long-grain basmati, saffron broth & sealed pastry crust",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    spiceLevel: "Aromatic & Balanced (3/5)",
    origin: "Imperial Mughlai Banquet",
    technique: "Purdah Dum Cooking with Atta Dough Seal",
    description: "2-year aged Basmati rice layered with spiced tender meat, saffron-milk reduction, caramelized shallots, mint, and kewra water. Sealed with whole-wheat dough and baked in high-temperature ovens for sealed steam perfection.",
    highlights: ["Cooked for 500+ guest luxury banquets", "Individual Purdah pastry tableside carving", "Served across Amari & Lebua state banquets"]
  }
];

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  renderDishGallery('all');
  initDishFilters();
  initModals();
  initContactForm();
  initAmbientAudio();
  initScrollAnimations();
});

// Render Dishes
function renderDishGallery(category = 'all') {
  const container = document.getElementById('dish-gallery-grid');
  if (!container) return;

  const filtered = category === 'all' 
    ? culinaryDishes 
    : culinaryDishes.filter(d => d.category === category);

  container.innerHTML = filtered.map(dish => `
    <div class="dish-card group" onclick="openDishModal(${dish.id})">
      <div class="dish-img-wrapper">
        <img src="${dish.image}" alt="${dish.title}" class="dish-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80'">
        <span class="dish-badge">${dish.badge}</span>
      </div>
      <div class="p-6">
        <div class="flex items-center justify-between text-xs text-gold-light/70 mb-2">
          <span><i class="fa-solid fa-pepper-hot text-amber-500 mr-1"></i> ${dish.spiceLevel.split('(')[0]}</span>
          <span><i class="fa-solid fa-location-dot text-amber-500 mr-1"></i> ${dish.origin.split('/')[0]}</span>
        </div>
        <h3 class="font-serif text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
          ${dish.title}
        </h3>
        <p class="text-stone-400 text-sm mt-2 line-clamp-2 leading-relaxed">
          ${dish.subtitle}
        </p>
        <div class="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-amber-400">
          <span>DISCOVER DISH STORY</span>
          <i class="fa-solid fa-arrow-right-long transform group-hover:translate-x-1 transition-transform"></i>
        </div>
      </div>
    </div>
  `).join('');
}

// Filter Buttons
function initDishFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderDishGallery(category);
    });
  });
}

// Dish Modal
window.openDishModal = function(id) {
  const dish = culinaryDishes.find(d => d.id === id);
  if (!dish) return;

  const modal = document.getElementById('dish-modal');
  const modalBody = document.getElementById('dish-modal-body');

  modalBody.innerHTML = `
    <div class="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-2xl">
      <img src="${dish.image}" alt="${dish.title}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-[#14141a] via-transparent to-black/40"></div>
      <button onclick="closeModal('dish-modal')" class="absolute top-4 right-4 bg-black/60 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 transition-all">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="absolute bottom-4 left-6 right-6">
        <span class="inline-block bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold mb-2">${dish.badge}</span>
        <h2 class="font-serif text-2xl sm:text-3xl font-bold text-white">${dish.title}</h2>
      </div>
    </div>

    <div class="p-6 sm:p-8 space-y-6">
      <p class="text-stone-300 leading-relaxed text-base">${dish.description}</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 p-4 rounded-xl border border-white/10 text-sm">
        <div>
          <span class="text-stone-400 block text-xs uppercase tracking-wider">Heritage & Origin</span>
          <span class="text-white font-medium">${dish.origin}</span>
        </div>
        <div>
          <span class="text-stone-400 block text-xs uppercase tracking-wider">Culinary Technique</span>
          <span class="text-white font-medium">${dish.technique}</span>
        </div>
        <div>
          <span class="text-stone-400 block text-xs uppercase tracking-wider">Spice Profile</span>
          <span class="text-amber-400 font-medium">${dish.spiceLevel}</span>
        </div>
        <div>
          <span class="text-stone-400 block text-xs uppercase tracking-wider">Chef's Signature</span>
          <span class="text-amber-300 font-medium">Executive Specialty</span>
        </div>
      </div>

      <div>
        <h4 class="font-serif text-lg font-bold text-amber-400 mb-3">Culinary Highlights</h4>
        <ul class="space-y-2">
          ${dish.highlights.map(h => `
            <li class="flex items-start text-sm text-stone-300">
              <i class="fa-solid fa-circle-check text-amber-500 mt-1 mr-2 text-xs"></i>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
        <a href="https://wa.me/66617376179?text=Hello%20Chef%20Chandra,%20I%20am%20interested%20in%20tasting/consulting%20for%20the%20dish:%20${encodeURIComponent(dish.title)}" target="_blank" class="gold-foil px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2">
          <i class="fa-brands fa-whatsapp text-lg"></i>
          <span>Inquire with Chef Chandra</span>
        </a>
        <button onclick="closeModal('dish-modal')" class="px-6 py-3 rounded-full text-sm font-semibold text-stone-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors">
          Close Details
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Modal Utility Functions
window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.openResumeModal = function() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.openBookingModal = function(type = 'Private Dining') {
  const modal = document.getElementById('booking-modal');
  const typeSelect = document.getElementById('booking-event-type');
  if (typeSelect) {
    typeSelect.value = type;
  }
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

function initModals() {
  document.querySelectorAll('.custom-modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
}

// Contact Form Handler
function initContactForm() {
  const contactForm = document.getElementById('chef-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const service = document.getElementById('contact-service').value;
      const message = document.getElementById('contact-message').value;

      const whatsappText = `*New Inquiry for Chef Chandra Mohan Sharma*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Service:* ${encodeURIComponent(service)}%0A*Message:* ${encodeURIComponent(message)}`;
      
      // Open WhatsApp direct
      window.open(`https://wa.me/66617376179?text=${whatsappText}`, '_blank');

      alert("Thank you! Opening WhatsApp to connect directly with Chef Chandra Mohan Sharma.");
      contactForm.reset();
    });
  }

  const bookingForm = document.getElementById('quick-booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('booking-name').value;
      const date = document.getElementById('booking-date').value;
      const guests = document.getElementById('booking-guests').value;
      const eventType = document.getElementById('booking-event-type').value;
      const notes = document.getElementById('booking-notes').value;

      const whatsappText = `*Culinary Booking Inquiry - Chef Chandra Mohan Sharma*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Event Type:* ${encodeURIComponent(eventType)}%0A*Estimated Date:* ${encodeURIComponent(date)}%0A*Guests:* ${encodeURIComponent(guests)}%0A*Special Notes:* ${encodeURIComponent(notes)}`;

      window.open(`https://wa.me/66617376179?text=${whatsappText}`, '_blank');
      closeModal('booking-modal');
      bookingForm.reset();
    });
  }
}

// Ambient Lounge Audio Engine (Web Audio Synth)
let audioCtx = null;
let isAudioPlaying = false;
let ambientInterval = null;

function initAmbientAudio() {
  const audioBtn = document.getElementById('ambient-audio-toggle');
  if (!audioBtn) return;

  audioBtn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isAudioPlaying = !isAudioPlaying;

    if (isAudioPlaying) {
      audioBtn.classList.remove('audio-muted');
      document.getElementById('audio-status-text').textContent = 'Lounge Audio: On';
      startAmbientHarmony();
    } else {
      audioBtn.classList.add('audio-muted');
      document.getElementById('audio-status-text').textContent = 'Lounge Audio: Off';
      stopAmbientHarmony();
    }
  });
}

const luxuryChords = [
  [196.00, 246.94, 293.66, 369.99], // Gmaj7
  [164.81, 220.00, 261.63, 329.63], // E min7
  [174.61, 220.00, 261.63, 349.23], // F maj7
  [220.00, 261.63, 329.63, 392.00]  // A min7
];

function playAmbientPad(frequencies) {
  if (!audioCtx || !isAudioPlaying) return;
  const now = audioCtx.currentTime;

  frequencies.forEach(freq => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.02, now + 1.5);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + 4.8);
  });
}

function startAmbientHarmony() {
  let chordIndex = 0;
  playAmbientPad(luxuryChords[chordIndex]);
  ambientInterval = setInterval(() => {
    chordIndex = (chordIndex + 1) % luxuryChords.length;
    playAmbientPad(luxuryChords[chordIndex]);
  }, 4500);
}

function stopAmbientHarmony() {
  if (ambientInterval) {
    clearInterval(ambientInterval);
    ambientInterval = null;
  }
}

// Scroll Animations & Active Nav Highlight
function initScrollAnimations() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('text-amber-400');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-amber-400');
          }
        });
      }
    });
  });
}
