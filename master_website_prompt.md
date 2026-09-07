# Master Website-Generation Prompt: Nutritius Cafe & Restaurant (Navsari)

> **Instructions for AI Coding Agents (Cursor, Lovable, Bolt, Replit, v0, Windsurf):**
> You are tasked with generating a pixel-perfect, production-grade, ultra-responsive single-page website for **Nutritius Cafe & Restaurant**, a beloved pure vegetarian cafe and bistro located near Italva Lake in Navsari, Gujarat.
> You must strictly translate the provided **Google Business Profile (GMB)** entity data and adapt the exact aesthetics, layout composition, and design motifs from the **Artisan Café & Bakery Reference Design** (Pinterest reference).
> Do NOT use generic placeholders, standard bootstrap styling, or lorem ipsum. Follow the exact design tokens, component architecture, and anti-generic rules below.

---

## 1. GMB Entity Profile & Business Information

- **Business Name**: Nutritius Cafe & Restaurant (often known locally as *Nutritius Cafe*)
- **Tagline / Brand Philosophy**: *Pure Vegetarian Comfort, Handcrafted Flavors & Cozy Conversations*
- **Primary Category**: Pure Vegetarian Café, Italian & Continental Bistro, Fast Food Restaurant
- **Physical Address**: 275–276, Sisodra Road, Near Italva Lake, Italva, Navsari, Gujarat – 396400
- **Google Maps Link**: [https://maps.app.goo.gl/q9wUpyJnRLuXy48o6](https://maps.app.goo.gl/q9wUpyJnRLuXy48o6)
- **Coordinates**: Latitude: `20.9200476`, Longitude: `72.9532243`
- **Landmarks**: Opposite Italva Lake / Sisodra Road Junction, Italva, Navsari
- **Contact Number**: +91 93138 15971
- **Operating Hours**: Monday to Sunday: 11:30 AM – 11:00 PM
- **Rating & Reputation**: 4.5 / 5.0 ⭐ (over 1,000+ verified customer reviews across Google & Justdial)
- **Culinary Highlights**:
  - Hand-stretched Thin-Crust Pizzas (Signature Nutritius Special, Margherita, Farmhouse, 100% Jain variants)
  - Gourmet Pastas (Creamy Alfredo, Spicy Arbiatta, Pesto Penne)
  - Sizzlers & Continental Platters (Paneer Shashlik Sizzler, Mexican Rice Sizzler)
  - Loaded Mexican Tacos, Cheesy Nachos & Garlic Breads
  - Chilled Thick Shakes, Cold Brews, Artisanal Mojitos & Coolers
  - North Indian Comfort & Evening Chaats
- **Special Attributes**:
  - 100% Pure Vegetarian with Dedicated Jain Preparation
  - Relaxed, Aesthetic Ambiance with Curated Acoustic Music
  - Outdoor & Indoor Cozy Seating
  - High-Speed Wi-Fi & Work-from-Cafe Friendly
  - Service Options: Dine-In, Takeaway, Online Delivery via Swiggy & Zomato, Direct WhatsApp Orders (+91 93138 15971)

---

## 2. Reference Design Adaptation Rules

From the reference design (*Artisan Café & Bakery UI Inspiration*):
1. **Hero Composition**:
   - Deep espresso / dark roasted coffee hero background with a **real human barista in an apron pouring artisanal latte art** behind the espresso bar in warm cafe lighting.
   - Elegant, high-contrast serif display typography on the dark left side.
   - Primary solid caramel button + secondary translucent ghost action linking directly to Google Maps.
   - **Hero Feature Overlap**: 3 frosted glassmorphism feature cards floating half-on-hero, half-on-light-body to create visual depth.
2. **Human Presence Across Sections**:
   - **Hero**: Focused on a human barista pouring coffee to convey artisanal craft.
   - **Story & Ambiance**: Authentic photography showing human guests and friends dining together at the cafe.
   - **Testimonials**: Real human face avatars with verified customer names and local guide credentials.
   - **Gallery**: Close-up human culinary interactions (e.g. barista hands pouring milk, picking fresh pastries).
2. **Body Aesthetics**:
   - Soft, warm cream canvas (`#FAF7F2`) for the body to prevent stark white clinical fatigue.
   - High-contrast charcoal/espresso headers and muted warm taupe body text.
   - Geometric warm bronze / caramel organic corner accents framing key sections.
3. **Specialties Grid**:
   - Clean 3-column x 2-row card grid with rounded corners (`16px`), subtle borders, and photography showing authentic dishes.
4. **Split Testimonial & Social Gallery**:
   - Left: Prominent gold stars, large quotation mark, customer pull quote, reviewer avatar, name, and local badge.
   - Right: Masonry / 3x2 Instagram-style photo grid featuring rich culinary imagery with subtle camera badges on hover.

---

## 3. Design System & Tokens

```css
:root {
  /* Brand Primary & Dark Surfaces */
  --color-primary-dark: #1C1410;       /* Deep roasted espresso */
  --color-primary: #2C1E17;            /* Warm dark roast */
  --color-primary-light: #443024;      /* Milk chocolate brown */
  
  /* Brand Warm Accents */
  --color-accent-caramel: #C59B67;     /* Warm artisan caramel gold */
  --color-accent-caramel-hover: #B48854;
  --color-accent-terracotta: #8C5329;  /* Rich roasted terracotta */
  --color-accent-warm-bronze: #A26838; /* Decorative accent */
  --color-accent-jain-green: #2E7D32;  /* Fresh pure vegetarian green */

  /* Neutral Backgrounds & Surfaces */
  --color-bg-base: #FAF7F2;            /* Warm steamed-milk cream */
  --color-bg-surface: #FFFFFF;         /* Pure card white */
  --color-bg-elevated: #F3ECE3;        /* Soft sand / beige */
  --color-bg-dark-surface: #16100D;    /* Footer and hero dark background */

  /* Typography Colors */
  --color-text-main: #1C1410;          /* Charcoal espresso */
  --color-text-muted: #66584F;         /* Warm slate brown */
  --color-text-light: #9E8E84;         /* Subdued caption */
  --color-text-inverse: #FAF7F2;       /* Cream text for dark surfaces */
  --color-border: rgba(44, 30, 23, 0.10);
  --color-border-glow: rgba(197, 155, 103, 0.30);

  /* Glassmorphism & Shadows */
  --glass-bg: rgba(255, 255, 255, 0.82);
  --glass-border: 1px solid rgba(255, 255, 255, 0.60);
  --glass-dark-bg: rgba(28, 20, 16, 0.78);
  --glass-dark-border: 1px solid rgba(197, 155, 103, 0.25);
  --shadow-sm: 0 4px 12px rgba(28, 20, 16, 0.05);
  --shadow-md: 0 12px 28px rgba(28, 20, 16, 0.08);
  --shadow-lg: 0 24px 48px rgba(28, 20, 16, 0.12);
  --shadow-caramel: 0 10px 24px rgba(197, 155, 103, 0.28);

  /* Border Radii */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  
  /* Transitions */
  --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-smooth: 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 4. Typography Hierarchy

- **Display & Headings**: `'Playfair Display'`, serif (or `'Outfit'`, sans-serif for secondary badges)
- **Body & Controls**: `'Poppins'`, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Typographic Scale**:
  - `Hero H1`: `clamp(2.75rem, 6vw + 1rem, 4.5rem)` / Weight: 700 / Line-height: 1.15 / Letter-spacing: -0.02em
  - `Section H2`: `clamp(2rem, 4vw + 0.5rem, 2.85rem)` / Weight: 700 / Line-height: 1.22 / Letter-spacing: -0.01em
  - `Card Title H3`: `1.25rem - 1.4rem` / Weight: 600 / Line-height: 1.35
  - `Overline / Tag`: `0.8rem` / Weight: 700 / Letter-spacing: 0.14em / Uppercase / Color: `--color-accent-caramel`
  - `Body Copy`: `1rem` / Weight: 400 / Line-height: 1.65 / Color: `--color-text-muted`

---

## 5. Page Architecture & Section-by-Section Layout

### 1. Glassmorphic Sticky Header & Navigation (Single-Line Layout)
- **Strict Single-Line Architecture**: The entire header is constrained to a single, elegant horizontal line without wrapping (`flex-wrap: nowrap; white-space: nowrap`).
- **Left**: Nutritius Cafe custom vector logo badge (`assets/logo.svg`).
- **Center Links**: `Specialties`, `Menu`, `Our Story`, `Reviews`, `Location` (concise single-word labels).
- **Right Action Area**:
  - Live Status Pill (`🟢 Open Now • Till 11 PM`).
  - Reserve Table Action Button.
  - Primary Action Button: `"Order Online"`.
  - Responsive Hamburger Toggle (seamlessly activates below 1060px to maintain single-line integrity on all devices).
- **Behavior**: Sticky header with `backdrop-filter: blur(16px)`, transitioning smoothly from transparent over the hero to translucent espresso (`--glass-dark-bg`) with subtle shadow upon scrolling.

### 2. Immersive Hero Section
- **Background**: Ambient, warm cafe interior with soft lighting and steaming culinary craft.
- **Badge**: `⭐ 4.5★ Google Rated • Italva Lake's Favorite Pure Veg Cafe`
- **Headline (H1)**: `"Crafted Flavors & Cozy Moments"`
- **Subheadline**: `"Artisan pizzas, sizzling continental platters, gourmet pastas, and chilled thick shakes — crafted fresh in the heart of Italva, Navsari."`
- **Action Buttons**:
  - Primary: `"Explore Specialties"` (smooth scrolls to `#specialties`).
  - Secondary: `"Find Our Location"` (smooth scrolls to `#location`).
- **3 Floating Glassmorphic Overlap Cards**:
  1. 🍕 **Artisan Pizzas & Pastas**: Hand-stretched thin crusts & rich Italian sauces.
  2. 🔥 **Sizzlers & Mexican Tacos**: Sizzling platters, loaded nachos, and zesty taco bites.
  3. 🥤 **Coolers & Thick Shakes**: Refreshing mocktails, iced cold brews, and decadent shakes.
  - *Interaction*: Subtle hover lift (`translateY(-6px)`), luminous caramel border glow, "View Options →" link.

### 3. "Our Café Specialties" (Reference 6-Card Grid)
- **Header**: Centered Display H2: `"Our Café Specialties"` with overline `"MADE FRESH EVERY DAY"`.
- **6-Item Curated Showcase**:
  1. **Handcrafted Pizza Oven**: Signature thin crust veggie pizzas with melted mozzarella & fresh basil (Available in 100% Jain).
  2. **Sizzler Showcase**: Sizzling paneer shashlik with butter-garlic tossed vegetables and herb rice.
  3. **Gourmet Pasta Bar**: Penne Alfredo with creamy white truffle cheese sauce and toasted garlic bread.
  4. **Loaded Mexican Nachos & Tacos**: Crispy corn tortillas piled high with salsa, melted cheddar, and jalapeños.
  5. **Thick Shakes & Cold Brew**: Handcrafted Belgian chocolate shakes and cold brew coffee.
  6. **Continental & Jain Bites**: Nutritious specialty appetizers prepared without onion/garlic on demand.
- **Card Anatomy**: High-resolution dish photograph, category badge, Jain indicator badge, title, sensory description, and price starting point (`From ₹180`).

### 4. Interactive Filterable Menu Explorer
- **Tabs**: `All`, `Pizzas & Garlic Breads`, `Pastas & Sizzlers`, `Mexican & Quick Bites`, `Shakes & Coolers`, `North Indian Comfort`.
- **Special Toggle**: `🟢 Jain Friendly Only` switch that filters items instantly in real time.
- **Direct Actions**: "Order on Swiggy", "Order on Zomato", or "WhatsApp Order".

### 5. The Nutritius Story & Lakeview Vibe
- Two-column editorial section:
  - **Left**: Split image collage of the outdoor lakeside seating and bustling cafe atmosphere.
  - **Right**: Narrative story of Nutritius Cafe & Restaurant. Serving the people of Navsari and Sisodra Road with pure vegetarian passion, warm hospitality, free Wi-Fi for remote workers, and late evening family dining.

### 6. Google Reviews & Instagram Live Showcase (Reference Split Section)
- **Left Column: Customer Testimonials**:
  - Google 4.5★ badge with over 1,000+ happy diners.
  - 5 Golden star icons with large quotation marks.
  - Verified Google review slider:
    - *"Nutritius Cafe is by far the best pure veg hangout near Italva Lake! Their thin-crust pizza and sizzlers are outstanding, and the ambiance is so peaceful."* — **Kavita Desai**
    - *"Finally a place in Navsari that understands authentic Jain preparation without compromising on taste. Great shakes and fast service!"* — **Rohan Shah**
    - *"Perfect spot for evening dates and group hangouts. Loved the background music, seating, and friendly staff."* — **Pratik Patel**
- **Right Column: Instagram Photo Grid (3x2)**:
  - Six curated photos of pizzas, shakes, sizzlers, and cozy corners.
  - Hover effect with Instagram icon overlay and caption.
  - Button: `"Follow @nutritiuscafe on Instagram"`.

### 7. Location, Hours & Embedded Map
- **Address**: 275–276, Sisodra Road, Near Italva Lake, Italva, Navsari, Gujarat – 396400.
- **Google Maps Link**: [https://maps.app.goo.gl/q9wUpyJnRLuXy48o6](https://maps.app.goo.gl/q9wUpyJnRLuXy48o6)
- **Coordinates**: Latitude: `20.9200476`, Longitude: `72.9532243`
- **Timings**: Monday to Sunday: 11:30 AM – 11:00 PM.
- **Quick Links**:
  - `📞 Call: +91 93138 15971`
  - `💬 WhatsApp Quick Order`
  - `🗺️ Direct Google Maps Link: https://maps.app.goo.gl/q9wUpyJnRLuXy48o6`
- **Interactive Google Maps Embed**: Pinned to coordinates `20.9200476, 72.9532243`.

### 8. Native `<dialog>` Modal: Table Reservations & Birthday Celebrations
- Accessible HTML5 `<dialog>` element.
- Form fields: Full Name, Phone Number, Date, Time, Guest Count (1-20), Dietary Preference (Pure Veg / Jain), Seating Preference (Indoor AC / Outdoor Lakeview).
- Light-dismiss (clicking outside modal closes it) and `Escape` key support.
- Immediate visual confirmation toast.

### 9. High-Converting Local SEO Footer
- Schema.org `Restaurant` / `CafeOrCoffeeShop` JSON-LD structured data.
- Quick navigation links, social handles, opening hours summary.
- Delivery partner badges (Swiggy / Zomato).
- Copyright: `© 2026 Nutritius Cafe & Restaurant. All Rights Reserved.`

---

## 6. Anti-Generic Design Rules (Crucial)

1. **NO Generic AI Blueprints**: Do NOT use default Bootstrap, blue Tailwind buttons, or sterile white corporate layouts. The palette must honor the warm espresso, caramel gold, and cream artisan aesthetic of the reference design.
2. **NO Broken Placeholders**: Every CTA, phone link (`tel:+919313815971`), WhatsApp link (`https://wa.me/919313815971`), and map embed must be completely functional.
3. **Hyper-Local Focus**: Emphasize Italva Lake, Sisodra Road, Navsari, and Pure Veg / Jain availability throughout the copy.
4. **Accessible Native Dialogs**: Use the HTML5 `<dialog>` element with `.showModal()` and `.close()` for zero runtime dependencies.
5. **No Layout Shift or Horizontal Overflow**: Ensure 100% responsiveness from 320px mobile screens up to 4K displays.

---

## 7. AI Agent Execution Directive

Generate the project with the following file structure:
- `index.html`: Semantic HTML5, Schema.org JSON-LD, accessibility tags, SVG icons.
- `styles.css`: CSS custom properties, responsive clamp scales, glassmorphic backdrop filters, hover states.
- `app.js`: Live opening calculation, menu tab filtering, Jain toggle filter, modal open/close handling, review carousel.
- `assets/`: Generated high-resolution culinary assets representing Nutritius's core dishes.
