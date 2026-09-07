export interface Dish {
  id: number;
  title: string;
  category: 'tandoor' | 'curries' | 'south-indian' | 'banqueting';
  badge: string;
  subtitle: string;
  image: string;
  spiceLevel: string;
  spiceCount: number;
  origin: string;
  technique: string;
  description: string;
  highlights: string[];
}

export const culinaryDishes: Dish[] = [
  {
    id: 1,
    title: "Signature Lobster in Saffron Moilee",
    category: "south-indian",
    badge: "5-Star Haute Seafood",
    subtitle: "Whole rock lobster in tempered coconut emulsion, saffron reduction & coconut foam",
    image: "/images/dishes/signature-lobster-moilee.jpg",
    spiceLevel: "Gentle & Fragrant",
    spiceCount: 2,
    origin: "Malabar Coast & Modern Gastronomy",
    technique: "Gentle Coconut Poach & Molecular Foam Emulsion",
    description: "A signature masterpiece created for luxury hotel dining in Bangkok and Dubai. Succulent whole rock lobster gently poached in first-press fresh coconut milk infused with Kashmiri saffron, fresh curry leaves, and mustard seeds, finished with delicate coconut foam and nasturtium leaf.",
    highlights: ["Prepared with live whole rock lobster", "First-press cold extracted coconut milk", "Signature showstopper dish across luxury Bangkok dining"]
  },
  {
    id: 2,
    title: "Clay-Oven Charred Tandoori Lobster Tail",
    category: "tandoor",
    badge: "Royal Tandoor",
    subtitle: "Tandoor-roasted lobster tail, charred spice glaze, pickled shallot spiral & tomato chutney",
    image: "/images/dishes/tandoori-lobster-tail.jpg",
    spiceLevel: "Medium Smoky Heat",
    spiceCount: 3,
    origin: "North-West Frontier & Coastal Fusion",
    technique: "High-Heat Clay Tandoor Char-Roast",
    description: "Marinated in yellow mustard, Kashmiri chili paste, hung yogurt, and stone-ground garam masala. Fast-roasted on high-temperature charcoal skewers to achieve a caramelized smoky glaze while keeping the lobster meat tender and juicy. Served with hand-pounded tomato relish.",
    highlights: ["High-heat clay oven charcoal searing", "Marinated with artisanal whole spices and hung curd", "Plated with pickled shallot curls and fresh citrus"]
  },
  {
    id: 10,
    title: "Live Clay-Oven Charcoal Sizzling Skewers",
    category: "tandoor",
    badge: "Charcoal Mastery",
    subtitle: "Direct charcoal-seared tender skewers, aromatic spice smoke & fire glaze",
    image: "/images/dishes/live-tandoori-skewers-fire.jpg",
    spiceLevel: "Robust Smoky Heat",
    spiceCount: 4,
    origin: "North-West Frontier & Awadh",
    technique: "480°C Direct Charcoal Smoke & Basting",
    description: "Authentic tandoor skewers seared over glowing charcoal embers at 480°C. Basted with pure desi ghee, mustard oil, and hand-pounded secret garam masala to develop an irresistible smoky char.",
    highlights: ["Live clay-oven charcoal roasting", "Infused with aromatic wood smoke & desi ghee", "Benchmark tandoori tenderness and caramelization"]
  },
  {
    id: 11,
    title: "Artisanal Herb & Spice Stuffed Tandoori Kulcha",
    category: "tandoor",
    badge: "Imperial Bread Craft",
    subtitle: "Clay-oven slapped sourdough flatbread with toasted spices, fresh coriander & butter glaze",
    image: "/images/dishes/artisanal-tandoori-kulcha.jpg",
    spiceLevel: "Mild & Herbed",
    spiceCount: 2,
    origin: "Punjab & Amritsari Heritage",
    technique: "Wall-Slapped Clay Tandoor Baking",
    description: "Naturally fermented dough rolled with crushed coriander seeds, anardana (pomegranate seeds), kasoori methi, and seasoned paneer/potato filling, slapped directly onto internal clay tandoor walls and brushed with warm white butter.",
    highlights: ["Baked on live 450°C clay tandoor walls", "Crispy flaky exterior with pillowy spiced center", "Brushed with churned country butter & fresh herbs"]
  },
  {
    id: 3,
    title: "Royal Awadhi Dum Biryani",
    category: "banqueting",
    badge: "5-Star Grand Banquet",
    subtitle: "Aged Basmati, golden caramelized onions, roasted cashews & saffron steam",
    image: "/images/dishes/royal-dum-biryani.jpg",
    spiceLevel: "Aromatic & Balanced",
    spiceCount: 3,
    origin: "Awadhi Imperial Banquet",
    technique: "Slow Purdah Dum Cooking in Clay/Stone Pot",
    description: "Chef Chandra's signature royal dum biryani. Fragrant long-grain aged Basmati rice layered with aromatic spices, saffron-infused milk reduction, ghee-roasted cashews, and crispy fried shallots, slow-steamed under dough-sealed heat.",
    highlights: ["Served across grand banquets at Lebua & Amari", "Saffron-infused slow steam purdah dum", "Garnished with ghee-roasted cashews & fried shallots"]
  },
  {
    id: 4,
    title: "Artisanal Velvet Butter Gravy",
    category: "curries",
    badge: "Signature Slow-Simmer",
    subtitle: "Silky tomato reduction, fenugreek cream & hand-churned white butter",
    image: "/images/dishes/artisanal-butter-gravy.jpg",
    spiceLevel: "Mild & Velvety",
    spiceCount: 2,
    origin: "Old Delhi Imperial Heritage",
    technique: "Triple-Strained Velvety Gravy Simmer",
    description: "An ultra-smooth, velvety curry prepared with ripe plum tomatoes, roasted cashews, clotted cream, kasoori methi (dried fenugreek leaves), and smoked butter. Silky spoon-lift texture with perfect balance of tang, aroma, and richness.",
    highlights: ["Hand-crafted natural silky emulsion", "Smoked charcoal butter infusion", "Top requested guest favorite in Bangkok & Dubai"]
  },
  {
    id: 12,
    title: "Artisanal Burrata & Heirloom Salad with Balsamic Glaze",
    category: "banqueting",
    badge: "Haute Fusion",
    subtitle: "Creamy fresh burrata, vibrant tri-color heirloom tomatoes, fresh wild arugula & aged balsamic glaze",
    image: "/images/dishes/artisanal-burrata-heirloom.jpg",
    spiceLevel: "Zesty & Refreshing",
    spiceCount: 1,
    origin: "Mediterranean & Contemporary Banquet",
    technique: "Precision Plating & Aged Balsamic Reduction",
    description: "Reflecting Chef Chandra's versatility across global hotel banquet dining. Decadent fresh burrata served over marinated heirloom cherry tomatoes, peppery wild rocket leaves, cold-pressed extra virgin olive oil, and hand-drawn balsamic reduction swirl.",
    highlights: ["Imported fresh creamy Italian burrata", "Heirloom farm-to-table organic tomatoes", "Signature plated course for luxury wedding banquets"]
  },
  {
    id: 5,
    title: "Saffron Fish Curry in Textured Stone",
    category: "curries",
    badge: "Coastal Fine Dining",
    subtitle: "Slow-poached white fish fillet, saffron coconut sauce & cold-pressed chili oil drizzle",
    image: "/images/dishes/saffron-fish-curry.jpg",
    spiceLevel: "Mild Fragrant Spice",
    spiceCount: 2,
    origin: "Coastal Bay of Bengal / Malabar",
    technique: "Low-Temperature Fish Poach in Spice Broth",
    description: "Tender fresh white fish simmered gently in a fragrant saffron and turmeric-scented coconut reduction, accented with hand-dripped cold-pressed chili oil and fresh mountain micro-herbs. Served in artisanal stone bowl.",
    highlights: ["Delicate low-temp poaching preserves fish tenderness", "Saffron and wild chili oil infusion", "Reflects Ayurvedic lightness and digestive balance"]
  },
  {
    id: 6,
    title: "Chettinad Spiced Roast in Coconut Shell",
    category: "south-indian",
    badge: "Coastal Artisan",
    subtitle: "Stone-ground black peppercorns, star anise & roasted shallot masala",
    image: "/images/dishes/coconut-shell-roast.jpg",
    spiceLevel: "Robust & Peppery",
    spiceCount: 4,
    origin: "Chettinad / Southern Coastal India",
    technique: "Dry-Roasted Stone Masala & Natural Shell Presentation",
    description: "An authentic tribute to South Indian heritage. Slow-roasted morsels cooked in freshly pounded black peppercorns, roasted coriander, fennel, and shallots, elegantly plated in a rustic charred coconut shell with microgreens.",
    highlights: ["Served in natural artisanal coconut shell", "Stone-ground whole roasted spice blend", "Reflects South Indian mastery honed across luxury resorts"]
  },
  {
    id: 7,
    title: "Stuffed Baked Crab Shells with Citrus Slaw",
    category: "south-indian",
    badge: "Seafood Specialty",
    subtitle: "Spiced blue swimmer crab meat gratin in natural shells with pomelo salad",
    image: "/images/dishes/baked-crab-delicacy.jpg",
    spiceLevel: "Zesty & Mild Spiced",
    spiceCount: 2,
    origin: "Andaman & Southern Coastal Coast",
    technique: "Crab Shell Gratin & Pomelo Citrus Pairing",
    description: "Flaked fresh blue swimmer crab cooked with mustard, ginger, coconut cream, and mild green chilies, stuffed back into natural shells and baked until golden. Paired with sweet Thai pomelo slaw and spiced chili dip.",
    highlights: ["Fresh blue swimmer crab meat", "Baked to golden cheese-herb gratin", "Fusion of Indian coastal spicing and Thai pomelo sweetness"]
  },
  {
    id: 8,
    title: "Sculpted Saffron Kulfi & Almond Sponge",
    category: "banqueting",
    badge: "ITDC Confectionery Craft",
    subtitle: "Spiral-molded cardamom kulfi, toasted almond sponge, fresh berries & rose petals",
    image: "/images/dishes/artisanal-kulfi-dessert.jpg",
    spiceLevel: "Sweet & Aromatic",
    spiceCount: 1,
    origin: "Royal Mughlai & ITDC Confectionery",
    technique: "Pastry Craft, Frozen Spheroid Spiral & Plated Art",
    description: "Highlights Chef Chandra's 2-year certification in Bakery & Confectionery from I.T.D.C. Delhi. Slow-reduced rabri kulfi flavored with green cardamom and saffron, set in a floral spiral mold over an almond sponge base, adorned with fresh strawberries, blueberries, and edible petals.",
    highlights: ["Direct reflection of ITDC Bakery & Confectionery training", "Slow-reduced rabri with organic saffron", "Modern fine-dining dessert plating"]
  },
  {
    id: 9,
    title: "Grand Fine-Dining Tasting Feast",
    category: "banqueting",
    badge: "Contemporary Banquet Plating",
    subtitle: "Multi-course royal table with contemporary Indian tapas, desserts & brass ware",
    image: "/images/dishes/banquet-tasting-spread.jpg",
    spiceLevel: "Balanced Multi-Course",
    spiceCount: 3,
    origin: "Modern Indian Gastronomy",
    technique: "Contemporary Haute Cuisine Plating",
    description: "A lavish showcase of Chef Chandra's culinary range. Features saffron-glazed delicacies, steamed buns on banana leaf, chilled molecular dessert bowls, and gold-trimmed serving vessels tailored for VIP banquets and private dining.",
    highlights: ["Engineered for high-profile hotel galas", "Fusion of traditional recipes with Michelin-style plating", "Bespoke customized courses for VIP dignitaries"]
  }
];
