export interface SubCategoryItem {
  name: string;
  badge?: string;
  isHot?: boolean;
}

export interface MegaMenuItem {
  title: string;
  items: SubCategoryItem[];
}

export interface MegaCategoryData {
  id: string;
  label: string;
  tagline: string;
  columns: MegaMenuItem[];
  featuredStore: {
    name: string;
    locality: string;
    deliveryTime: string;
    rating: string;
    offer: string;
    image: string;
  };
  highlightProduct: {
    name: string;
    price: number;
    originalPrice: number;
    tag: string;
    image: string;
  };
}

export const MEGA_MENU_DATA: Record<string, MegaCategoryData> = {
  women: {
    id: "women",
    label: "Women's Fashion",
    tagline: "Handcrafted city sarees, designer kurtis & festive wear delivered in 30 mins",
    columns: [
      {
        title: "Ethnic Wear",
        items: [
          { name: "Anarkali Kurtis & Sets", badge: "Trending", isHot: true },
          { name: "Straight Cotton Kurtis" },
          { name: "Banarasi & Chiffon Dupattas" },
          { name: "Party Wear Sarees", badge: "Hot" },
          { name: "Palazzos & Leggings" },
          { name: "Bridal Silk Sarees" },
        ],
      },
      {
        title: "Western & Casuals",
        items: [
          { name: "Oversized Linen Shirts", isHot: true },
          { name: "Crop Tops & Tees" },
          { name: "Denim & High-Waist Jeans" },
          { name: "Summer Maxi Dresses" },
          { name: "Co-ord Sets", badge: "New" },
          { name: "Formal Blazers & Trousers" },
        ],
      },
      {
        title: "Occasion & Festive",
        items: [
          { name: "Wedding Lehengas", badge: "Popular" },
          { name: "Mirror-Work Cholis" },
          { name: "Embroidered Silk Stoles" },
          { name: "Designer Gowns" },
          { name: "Festive Kaftans" },
        ],
      },
    ],
    featuredStore: {
      name: "Vogue City Boutique",
      locality: "M.G. Road Market",
      deliveryTime: "25-35 mins",
      rating: "4.9 ★",
      offer: "Flat ₹150 OFF on ₹999",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=80",
    },
    highlightProduct: {
      name: "Handcrafted Zari Silk Saree",
      price: 2499,
      originalPrice: 4999,
      tag: "Boutique Exclusive",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80",
    },
  },

  men: {
    id: "men",
    label: "Men's Fashion",
    tagline: "Tailored shirts, pure cotton kurtas & streetwear from city merchants in 30 mins",
    columns: [
      {
        title: "Top Wear",
        items: [
          { name: "Pure Cotton Mandarin Kurtas", isHot: true },
          { name: "Heavyweight 240 GSM Tees", badge: "Trending" },
          { name: "Tailored Oxford Formal Shirts" },
          { name: "Casual Striped Resort Shirts" },
          { name: "Polo Knit Pullovers" },
        ],
      },
      {
        title: "Bottom Wear",
        items: [
          { name: "Stretch Comfort Chinos", isHot: true },
          { name: "Tapered Multi-Pocket Cargoes" },
          { name: "Raw Selvedge Denim" },
          { name: "Pleated Linen Trousers" },
        ],
      },
      {
        title: "Festive & Ethnic",
        items: [
          { name: "Embroidered Nehru Jackets", badge: "Hot" },
          { name: "Raw Silk Kurta Pajama Sets" },
          { name: "Traditional Bandhgalas" },
        ],
      },
    ],
    featuredStore: {
      name: "The Royal Gent Co.",
      locality: "Commercial Street Central",
      deliveryTime: "20-30 mins",
      rating: "4.9 ★",
      offer: "Flat 20% OFF on Festive Bundles",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop&q=80",
    },
    highlightProduct: {
      name: "Pure Linen Mandarin Shirt",
      price: 1199,
      originalPrice: 2299,
      tag: "Top Seller",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80",
    },
  },

  footwear: {
    id: "footwear",
    label: "Footwear & Shoes",
    tagline: "Sneakers, leather formals & handcrafted mojaris right from city shoemakers",
    columns: [
      {
        title: "Sneakers & Casuals",
        items: [
          { name: "Chunky Retro Street Sneakers", badge: "Hot", isHot: true },
          { name: "Minimalist Italian White Kicks" },
          { name: "Breathable Knit Slip-ons" },
          { name: "Canvas High-Top Skaters" },
        ],
      },
      {
        title: "Ethnic & Festive",
        items: [
          { name: "Handcrafted Amritsari Juttis", isHot: true },
          { name: "Pure Leather Kolhapuris" },
          { name: "Zardozi Embroidered Mojaris", badge: "Festive" },
        ],
      },
      {
        title: "Formal & Luxury",
        items: [
          { name: "Hand-Burnished Oxford Brogues" },
          { name: "Genuine Suede Penny Loafers" },
          { name: "Single Monkstrap Formals" },
        ],
      },
    ],
    featuredStore: {
      name: "Linking Road Bootmakers",
      locality: "Linking Road Corner",
      deliveryTime: "25-35 mins",
      rating: "4.8 ★",
      offer: "Free Leather Care Kit",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80",
    },
    highlightProduct: {
      name: "Vintage White Street Sneakers",
      price: 1499,
      originalPrice: 2999,
      tag: "30-Min Drop",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
    },
  },

  jewellery: {
    id: "jewellery",
    label: "Artificial Jewellery",
    tagline: "Bridal Kundan, temple jewellery & 18K gold-plated daily wear delivered in 30 mins",
    columns: [
      {
        title: "Traditional & Bridal",
        items: [
          { name: "Kundan Choker Sets", badge: "Trending", isHot: true },
          { name: "Temple Jewellery Necklaces" },
          { name: "Antique Matte Bangles & Kadas" },
          { name: "Meenakari Chandbalis", badge: "Hot" },
        ],
      },
      {
        title: "Daily & Minimalist",
        items: [
          { name: "18K Gold Plated Chunky Hoops", isHot: true },
          { name: "Anti-Tarnish Chain Necklaces" },
          { name: "Cubic Zirconia Solitaire Rings" },
          { name: "Delicate Evil Eye Bracelets" },
        ],
      },
      {
        title: "Occasion Sets",
        items: [
          { name: "Royal Polki Bridal Chokers" },
          { name: "Pearl Haar Layered Sets" },
          { name: "Statement Cocktail Rings" },
        ],
      },
    ],
    featuredStore: {
      name: "Sarafa Bazaar Jewellers",
      locality: "Heritage Sarafa Bazaar",
      deliveryTime: "20-30 mins",
      rating: "4.9 ★",
      offer: "Complimentary Velvet Gift Box",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80",
    },
    highlightProduct: {
      name: "Handmade Meenakari Kundan Jhumkas",
      price: 899,
      originalPrice: 1999,
      tag: "Best Loved",
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&auto=format&fit=crop&q=80",
    },
  },

  stationery: {
    id: "stationery",
    label: "Books & Stationery",
    tagline: "Hardbound journals, premium calligraphy fountain pens & art supplies in 30 mins",
    columns: [
      {
        title: "Notebooks & Journals",
        items: [
          { name: "120 GSM Hardbound Dotted Planners", badge: "Hot", isHot: true },
          { name: "Vegan Leather Executive Diaries" },
          { name: "Cold-Pressed Watercolour Pads" },
          { name: "Pocket Grid Sketchbooks" },
        ],
      },
      {
        title: "Pens & Writing",
        items: [
          { name: "Piston-Fill Brass Fountain Pens", isHot: true },
          { name: "Pastel Fineliner Bullet Sets" },
          { name: "Calligraphy Chisel Nib Pens" },
          { name: "Archival Waterproof Ink Gel Pens" },
        ],
      },
      {
        title: "Office & Desk Luxury",
        items: [
          { name: "Natural Walnut Wood Desk Organizer" },
          { name: "Matte Brass Paperweights" },
          { name: "Wax Seal Stamp Gift Kit", badge: "Trending" },
        ],
      },
    ],
    featuredStore: {
      name: "The Paper & Quill Co.",
      locality: "University Boulevard Lane",
      deliveryTime: "15-25 mins",
      rating: "4.9 ★",
      offer: "Free Calligraphy Ink Cartridge",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
    },
    highlightProduct: {
      name: "Brass Fountain Pen & Leather Journal Set",
      price: 999,
      originalPrice: 1799,
      tag: "Collector's Choice",
      image: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=600&auto=format&fit=crop&q=80",
    },
  },

  kitchen: {
    id: "kitchen",
    label: "Kitchen & Utensils",
    tagline: "Hand-hammered pure copper, seasoned cast iron & artisanal ceramics in 30 mins",
    columns: [
      {
        title: "Cookware Essentials",
        items: [
          { name: "Pre-Seasoned Cast Iron Skillets", badge: "Hot", isHot: true },
          { name: "Triply Stainless Steel Kadhais" },
          { name: "Pure Brass Handi with Tin Lining" },
          { name: "Heavy Bottom Tadka Pans" },
        ],
      },
      {
        title: "Artisanal Tableware",
        items: [
          { name: "Hand-Hammered Pure Copper Jugs", isHot: true },
          { name: "Studio Pottery Dinner Plates" },
          { name: "Matte Gold Cutlery 24pc Set", badge: "Luxury" },
          { name: "Ribbed Borosilicate Glassware" },
        ],
      },
      {
        title: "Kitchen & Bar Storage",
        items: [
          { name: "Airtight Glass Spice Jar Sets" },
          { name: "Acacia Wood Cutting Boards" },
          { name: "Ceramic Pickle & Oil Barnis" },
        ],
      },
    ],
    featuredStore: {
      name: "Main Chowk Bartan Bhandar",
      locality: "Old City Chowk Bazaar",
      deliveryTime: "25-35 mins",
      rating: "4.9 ★",
      offer: "Free Brass Cleaning Polish",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80",
    },
    highlightProduct: {
      name: "Hand-Hammered Pure Copper Water Vessel",
      price: 1399,
      originalPrice: 2499,
      tag: "Health & Tradition",
      image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    },
  },
};

