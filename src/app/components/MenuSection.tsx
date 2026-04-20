import { MenuCard } from './MenuCard';

const vegItems = [
  {
    name: "Special Veg Thali",
    description: "Complete meal with rice, 2 dal varieties, sabzi, chapati, papad, pickle & sweet",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1742281257687-092746ad6021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB2ZWdldGFyaWFufGVufDF8fHx8MTc3NjY1NjU1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Veg"
  },
  {
    name: "Paneer Butter Masala",
    description: "Rich creamy paneer cubes in smooth tomato-butter gravy with aromatic spices",
    price: "₹220",
    image: "https://images.unsplash.com/photo-1764314108477-f026172e32a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB2ZWdldGFyaWFufGVufDF8fHx8MTc3NjY1NjU1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Veg"
  },
  {
    name: "Dal Makhani",
    description: "Black lentils & kidney beans slow-cooked overnight with butter and fresh cream",
    price: "₹160",
    image: "https://images.unsplash.com/photo-1742281258189-3b933879867a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB2ZWdldGFyaWFufGVufDF8fHx8MTc3NjY1NjU1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Veg"
  },
  {
    name: "Malai Kofta",
    description: "Soft paneer & potato dumplings in rich cashew-cream gravy",
    price: "₹210",
    image: "https://images.unsplash.com/photo-1742281257707-0c7f7e5ca9c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB2ZWdldGFyaWFufGVufDF8fHx8MTc3NjY1NjU1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Veg"
  },
  {
    name: "Veg Dum Biryani",
    description: "Fragrant basmati rice layered with mixed vegetables & aromatic spices",
    price: "₹190",
    image: "https://images.unsplash.com/photo-1762143586483-247dce873238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB2ZWdldGFyaWFufGVufDF8fHx8MTc3NjY1NjU1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Veg"
  },
  {
    name: "Palak Paneer",
    description: "Fresh spinach curry with soft paneer cubes, cream & Indian spices",
    price: "₹200",
    image: "https://images.unsplash.com/photo-1742281258189-3b933879867a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB2ZWdldGFyaWFufGVufDF8fHx8MTc3NjY1NjU1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Veg"
  }
];

const nonVegItems = [
  {
    name: "Hyderabadi Chicken Biryani",
    description: "Aromatic basmati rice layered with tender marinated chicken, saffron & dum-cooked",
    price: "₹280",
    image: "https://images.unsplash.com/photo-1681546898018-961e2a05c6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwbm9uJTIwdmVnZXRhcmlhbnxlbnwxfHx8fDE3NzY2NTY1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Non-Veg"
  },
  {
    name: "Special Mutton Biryani",
    description: "Premium mutton pieces marinated in yogurt & spices, slow-cooked with basmati rice",
    price: "₹350",
    image: "https://images.unsplash.com/photo-1676436293945-a613dde9c3b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBiaXJ5YW5pJTIwbm9uJTIwdmVnZXRhcmlhbnxlbnwxfHx8fDE3NzY2NTY1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Non-Veg"
  },
  {
    name: "Butter Chicken Boneless",
    description: "Tandoori chicken cubes in creamy tomato-butter gravy with cashew paste",
    price: "₹270",
    image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBiaXJ5YW5pJTIwbm9uJTIwdmVnZXRhcmlhbnxlbnwxfHx8fDE3NzY2NTY1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Non-Veg"
  },
  {
    name: "Chicken Tikka Masala",
    description: "Grilled chicken tikka in spicy onion-tomato gravy with bell peppers",
    price: "₹260",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBiaXJ5YW5pJTIwbm9uJTIwdmVnZXRhcmlhbnxlbnwxfHx8fDE3NzY2NTY1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Non-Veg"
  },
  {
    name: "Mutton Rogan Josh",
    description: "Kashmiri style mutton curry with yogurt, aromatic spices & saffron",
    price: "₹330",
    image: "https://images.unsplash.com/photo-1584010063908-c90644cae72a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxpbmRpYW4lMjBiaXJ5YW5pJTIwbm9uJTIwdmVnZXRhcmlhbnxlbnwxfHx8fDE3NzY2NTY1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Non-Veg"
  },
  {
    name: "Fish Fry (Pomfret)",
    description: "Marinated pomfret fish deep-fried with South Indian spices & curry leaves",
    price: "₹290",
    image: "https://images.unsplash.com/photo-1676436293945-a613dde9c3b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBiaXJ5YW5pJTIwbm9uJTIwdmVnZXRhcmlhbnxlbnwxfHx8fDE3NzY2NTY1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Non-Veg"
  }
];

const tiffinItems = [
  {
    name: "Masala Dosa",
    description: "Crispy rice crepe stuffed with potato masala, served with sambar & coconut chutney",
    price: "₹80",
    image: "https://images.unsplash.com/photo-1743615467363-250466982515?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxpbmRpYW4lMjBicmVha2Zhc3QlMjBkb3NhJTIwaWRsaXxlbnwxfHx8fDE3NzY2NTY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tiffin"
  },
  {
    name: "Idli Sambar (4 pcs)",
    description: "Soft steamed rice cakes served with hot sambar, coconut & peanut chutney",
    price: "₹60",
    image: "https://images.unsplash.com/photo-1736239093652-301080f3e2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBicmVha2Zhc3QlMjBkb3NhJTIwaWRsaXxlbnwxfHx8fDE3NzY2NTY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tiffin"
  },
  {
    name: "Onion Uttapam",
    description: "Thick rice pancake topped with onions, tomatoes, green chillies & coriander",
    price: "₹75",
    image: "https://images.unsplash.com/photo-1756821753016-c2fa118465a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBicmVha2Zhc3QlMjBkb3NhJTIwaWRsaXxlbnwxfHx8fDE3NzY2NTY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tiffin"
  },
  {
    name: "Medu Vada (3 pcs)",
    description: "Crispy lentil donuts served with sambar & fresh coconut chutney",
    price: "₹65",
    image: "https://images.unsplash.com/photo-1736239093652-301080f3e2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBicmVha2Zhc3QlMjBkb3NhJTIwaWRsaXxlbnwxfHx8fDE3NzY2NTY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tiffin"
  },
  {
    name: "Puri Bhaji",
    description: "Fluffy deep-fried bread served with spiced potato curry",
    price: "₹70",
    image: "https://images.unsplash.com/photo-1756821753016-c2fa118465a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBicmVha2Zhc3QlMjBkb3NhJTIwaWRsaXxlbnwxfHx8fDE3NzY2NTY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tiffin"
  },
  {
    name: "Rava Dosa",
    description: "Crispy semolina crepe with onions & green chillies, served with chutneys",
    price: "₹85",
    image: "https://images.unsplash.com/photo-1743615467363-250466982515?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxpbmRpYW4lMjBicmVha2Zhc3QlMjBkb3NhJTIwaWRsaXxlbnwxfHx8fDE3NzY2NTY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tiffin"
  }
];

const juiceItems = [
  {
    name: "Fresh Orange Juice",
    description: "Freshly squeezed sweet oranges - no added sugar, 100% natural",
    price: "₹60",
    image: "https://images.unsplash.com/photo-1705322149807-f5ef99a313f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmcmVzaCUyMGp1aWNlJTIwaGVhbHRoeSUyMGRyaW5rc3xlbnwxfHx8fDE3NzY2NTY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Juice"
  },
  {
    name: "Tropical Mixed Fruit",
    description: "Exotic blend of mango, pineapple, orange & pomegranate",
    price: "₹90",
    image: "https://images.unsplash.com/photo-1754836717974-d43bd9c798ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGp1aWNlJTIwaGVhbHRoeSUyMGRyaW5rc3xlbnwxfHx8fDE3NzY2NTY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Juice"
  },
  {
    name: "Watermelon Cooler",
    description: "Refreshing watermelon juice with fresh mint & a hint of lemon",
    price: "₹55",
    image: "https://images.unsplash.com/photo-1766996207466-4cc784cf4fa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxmcmVzaCUyMGp1aWNlJTIwaGVhbHRoeSUyMGRyaW5rc3xlbnwxfHx8fDE3NzY2NTY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Juice"
  },
  {
    name: "Mango Lassi",
    description: "Traditional yogurt drink blended with fresh mango pulp & cardamom",
    price: "₹70",
    image: "https://images.unsplash.com/photo-1705322149807-f5ef99a313f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmcmVzaCUyMGp1aWNlJTIwaGVhbHRoeSUyMGRyaW5rc3xlbnwxfHx8fDE3NzY2NTY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Juice"
  },
  {
    name: "Sugarcane Juice",
    description: "Fresh sugarcane juice with ginger & lemon - naturally sweet & energizing",
    price: "₹45",
    image: "https://images.unsplash.com/photo-1759478642913-b6acdba16a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmcmVzaCUyMGp1aWNlJTIwaGVhbHRoeSUyMGRyaW5rc3xlbnwxfHx8fDE3NzY2NTY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Juice"
  },
  {
    name: "ABC Juice (Detox)",
    description: "Apple, beetroot & carrot blend - healthy & nutritious",
    price: "₹85",
    image: "https://images.unsplash.com/photo-1754836717974-d43bd9c798ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGp1aWNlJTIwaGVhbHRoeSUyMGRyaW5rc3xlbnwxfHx8fDE3NzY2NTY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Juice"
  }
];

const chatItems = [
  {
    name: "Pani Puri (8 pcs)",
    description: "Crispy puris filled with spicy mint water, tamarind chutney, potatoes & chickpeas",
    price: "₹50",
    image: "https://images.unsplash.com/photo-1762143586483-247dce873238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB2ZWdldGFyaWFufGVufDF8fHx8MTc3NjY1NjU1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Chat"
  },
  {
    name: "Mumbai Bhel Puri",
    description: "Puffed rice, sev, onions, tomatoes mixed with sweet & tangy chutneys",
    price: "₹55",
    image: "https://images.unsplash.com/photo-1742281257707-0c7f7e5ca9c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB2ZWdldGFyaWFufGVufDF8fHx8MTc3NjY1NjU1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Chat"
  },
  {
    name: "Samosa Chaat",
    description: "Crushed samosas topped with chickpeas, yogurt, chutneys, onions & sev",
    price: "₹60",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBiaXJ5YW5pJTIwbm9uJTIwdmVnZXRhcmlhbnxlbnwxfHx8fDE3NzY2NTY1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Chat"
  },
  {
    name: "Dahi Puri",
    description: "Crispy puris filled with potatoes, yogurt, sev & sweet chutney",
    price: "₹55",
    image: "https://images.unsplash.com/photo-1762143586483-247dce873238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB2ZWdldGFyaWFufGVufDF8fHx8MTc3NjY1NjU1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Chat"
  },
  {
    name: "Papdi Chaat",
    description: "Crispy crackers with boiled potatoes, chickpeas, yogurt & tamarind chutney",
    price: "₹60",
    image: "https://images.unsplash.com/photo-1742281257707-0c7f7e5ca9c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBmb29kJTIwY3VycnklMjB2ZWdldGFyaWFufGVufDF8fHx8MTc3NjY1NjU1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Chat"
  },
  {
    name: "Aloo Tikki Chaat",
    description: "Crispy potato patties topped with chickpeas, yogurt, chutneys & spices",
    price: "₹65",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBiaXJ5YW5pJTIwbm9uJTIwdmVnZXRhcmlhbnxlbnwxfHx8fDE3NzY2NTY1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Chat"
  }
];

const iceCreamItems = [
  {
    name: "Classic Vanilla Scoop",
    description: "Premium vanilla ice cream made with real vanilla beans",
    price: "₹60",
    image: "https://images.unsplash.com/photo-1770162939711-1df39eb7f4ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpY2UlMjBjcmVhbSUyMGRlc3NlcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzY2NTcwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Ice Cream"
  },
  {
    name: "Chocolate Fudge",
    description: "Rich chocolate ice cream with chocolate fudge chunks",
    price: "₹70",
    image: "https://images.unsplash.com/photo-1752962640042-e489e7d7a757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpY2UlMjBjcmVhbSUyMGRlc3NlcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzY2NTcwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Ice Cream"
  },
  {
    name: "Mango Delight",
    description: "Fresh mango ice cream made with Alphonso mangoes",
    price: "₹80",
    image: "https://images.unsplash.com/photo-1752962639070-54f854d78aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxpY2UlMjBjcmVhbSUyMGRlc3NlcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzY2NTcwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Ice Cream"
  },
  {
    name: "Strawberry Sundae",
    description: "Strawberry ice cream with fresh fruit, chocolate sauce & whipped cream",
    price: "₹120",
    image: "https://images.unsplash.com/photo-1578687595177-401624c6af6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbSUyMGRlc3NlcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzY2NTcwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Ice Cream"
  },
  {
    name: "Butterscotch Crunch",
    description: "Butterscotch ice cream loaded with caramelized nuts",
    price: "₹75",
    image: "https://images.unsplash.com/photo-1752962640187-cfd373f4f553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpY2UlMjBjcmVhbSUyMGRlc3NlcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzY2NTcwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Ice Cream"
  },
  {
    name: "Pista Kulfi",
    description: "Traditional Indian ice cream with pistachios, cardamom & saffron",
    price: "₹90",
    image: "https://images.unsplash.com/photo-1752962640042-e489e7d7a757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpY2UlMjBjcmVhbSUyMGRlc3NlcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzY2NTcwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Ice Cream"
  }
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#FFA500] text-white px-6 py-2 rounded-full text-sm mb-4" style={{ fontWeight: 600 }}>
            ⭐ MENU HIGHLIGHTS
          </span>
          <h2 className="mb-4 text-gray-800" style={{ fontSize: '3rem', fontWeight: 700 }}>Discover Our Delicious Menu</h2>
          <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontSize: '1.1rem' }}>
            Each dish is crafted with love using authentic recipes, premium ingredients, and traditional cooking methods
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#4CAF50] rounded"></div>
            <h3 className="text-[#4CAF50] text-center" style={{ fontSize: '2rem', fontWeight: 700 }}>🌿 Vegetarian Delights</h3>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-[#4CAF50] rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vegItems.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#FF6B35] rounded"></div>
            <h3 className="text-[#FF6B35] text-center" style={{ fontSize: '2rem', fontWeight: 700 }}>🍗 Non-Vegetarian Specialties</h3>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-[#FF6B35] rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonVegItems.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#FFB84D] rounded"></div>
            <h3 className="text-[#FFB84D] text-center" style={{ fontSize: '2rem', fontWeight: 700 }}>🥞 Breakfast Tiffins</h3>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-[#FFB84D] rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiffinItems.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#00BCD4] rounded"></div>
            <h3 className="text-[#00BCD4] text-center" style={{ fontSize: '2rem', fontWeight: 700 }}>🍹 Fresh Juices & Drinks</h3>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-[#00BCD4] rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {juiceItems.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#E91E63] rounded"></div>
            <h3 className="text-[#E91E63] text-center" style={{ fontSize: '2rem', fontWeight: 700 }}>🌶️ Street Chats</h3>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-[#E91E63] rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chatItems.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#9C27B0] rounded"></div>
            <h3 className="text-[#9C27B0] text-center" style={{ fontSize: '2rem', fontWeight: 700 }}>🍦 Ice Creams & Desserts</h3>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-[#9C27B0] rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iceCreamItems.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
