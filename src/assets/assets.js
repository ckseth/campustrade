// ── Electronics ──
import keyboard_1 from './Keyboard_1.jpeg'
import keyboard_2 from './KeyBoard_2.jpeg'
import mouse_1 from './Mouse_1.jpeg'
import mouse_2 from './Mouse_2.jpeg'
import electric_6 from './electric_6.png'

// ── Books ──
import textbook_1 from './TextBook_1.jpeg'
import textbook_2 from './TextBook_2.jpeg'
import textbook_3 from './TextBook_3.jpeg'
import textbook_4 from './TextBook_4.jpeg'

// ── Furniture ──
import furniture_1 from './furniture_1.png'
import furniture_2 from './furniture_2.jpg'
import furniture_3 from './furniture_3.png'
import furniture_4 from './furniture_4.png'
import furniture_5 from './furniture_5.png'

// ── Vehicles ──
import vehicle_1 from './vehicle_1.png'
import vehicle_2 from './vehicle_2.png'
import vehicle_3 from './vehicle_3.png'
import vehicle_4 from './vehicle_4.png'

// ── Traditional & Ethnic Wear ──
import traditional_1 from './traditional_1.png'
import traditional_2 from './traditional_2.png'
import traditional_3 from './traditional_3.png'
import traditional_4 from './traditional_4.png'
import ethnic_2 from './ethnic_2.webp'
import ethnic_3 from './ethnic_3.jpg'
import ethnic_4 from './ethnic_4.jpg'
import ethnic_5 from './ethnic_5.jpg'
import ethnic_6 from './ethnic_6.jpg'
import ethnic_7 from './ethnic_7.webp'

// ── Miscellaneous ──
import misc_1 from './miscellinous_1.jpg'
import misc_2 from './miscellinous_2.png'
import misc_3 from './miscellinous_3.jpg'
import misc_4 from './miscellinous_4.jpg'
import misc_5 from './miscellinous_5.jpg'
import misc_6 from './miscellinous_6.jpg'
import misc_7 from './miscellinous_7.jpg'

export const product_list = [
    // ═══════════ Electronics ═══════════
    {
        _id: "1",
        name: "Mechanical Keyboard (Red Switches)",
        image: keyboard_1,
        price: 1800,
        description: "Premium mechanical keyboard with red switches, RGB backlighting. Used for 3 months, perfect condition.",
        category: "Electronics",
        availability: "Sell"
    },
    {
        _id: "2",
        name: "Gaming Keyboard (Blue Switches)",
        image: keyboard_2,
        price: 2200,
        description: "Compact 65% layout gaming keyboard with clicky blue switches. Includes original box and cable.",
        category: "Electronics",
        availability: "Sell"
    },
    {
        _id: "3",
        name: "Wireless Mouse (Ergonomic)",
        image: mouse_1,
        price: 450,
        description: "Ergonomic wireless mouse with silent clicks and adjustable DPI. 6 months old.",
        category: "Electronics",
        availability: "Sell"
    },
    {
        _id: "4",
        name: "Bluetooth Mouse (Compact)",
        image: mouse_2,
        price: 350,
        description: "Ultra-portable Bluetooth mouse, perfect for laptops. Comes with USB-C receiver.",
        category: "Electronics",
        availability: "Sell"
    },
    {
        _id: "5",
        name: "Smart Power Strip",
        image: electric_6,
        price: 80,
        description: "6-outlet smart power strip with surge protection. Great for hostel rooms. Available for daily rent.",
        category: "Electronics",
        availability: "Rent",
        rentDaily: 80
    },

    // ═══════════ Books ═══════════
    {
        _id: "6",
        name: "Data Structures & Algorithms",
        image: textbook_1,
        price: 250,
        description: "Cormen's CLRS textbook — essential for CS students. Minor highlighting on some pages.",
        category: "Books",
        availability: "Sell"
    },
    {
        _id: "7",
        name: "Engineering Mathematics",
        image: textbook_2,
        price: 180,
        description: "B.S. Grewal's Higher Engineering Mathematics. Covers all semesters. Clean condition.",
        category: "Books",
        availability: "Sell"
    },
    {
        _id: "8",
        name: "Physics for Engineers",
        image: textbook_3,
        price: 150,
        description: "University Physics by Freedman. Perfect for first-year students. No torn pages.",
        category: "Books",
        availability: "Sell"
    },
    {
        _id: "9",
        name: "Operating Systems Concepts",
        image: textbook_4,
        price: 200,
        description: "Galvin's OS Concepts textbook. Well-maintained, notes included for free.",
        category: "Books",
        availability: "Sell"
    },

    // ═══════════ Furniture ═══════════
    {
        _id: "10",
        name: "Ergonomic Study Chair",
        image: furniture_1,
        price: 3500,
        description: "Adjustable height study chair with lumbar support. Barely used, like new condition.",
        category: "Furniture",
        availability: "Sell"
    },
    {
        _id: "11",
        name: "Foldable Study Table",
        image: furniture_2,
        price: 1200,
        description: "Compact foldable table perfect for hostel rooms. Easy to carry during room changes.",
        category: "Furniture",
        availability: "Sell"
    },
    {
        _id: "12",
        name: "Bookshelf (3-Tier)",
        image: furniture_3,
        price: 800,
        description: "Wooden 3-tier bookshelf. Holds up to 40 books. Sturdy and well-finished.",
        category: "Furniture",
        availability: "Sell"
    },
    {
        _id: "13",
        name: "LED Desk Lamp",
        image: furniture_4,
        price: 60,
        description: "Rechargeable LED desk lamp with 3 brightness modes. Available for rent during exam season.",
        category: "Furniture",
        availability: "Rent",
        rentDaily: 60
    },
    {
        _id: "14",
        name: "Storage Organizer Box",
        image: furniture_5,
        price: 500,
        description: "Multi-compartment organizer for stationery, gadgets, and essentials.",
        category: "Furniture",
        availability: "Sell"
    },

    // ═══════════ Vehicles ═══════════
    {
        _id: "15",
        name: "Mountain Bicycle",
        image: vehicle_1,
        price: 5500,
        description: "21-speed gear cycle with disc brakes. Great for campus commuting. 1 year old.",
        category: "Vehicles",
        availability: "Sell"
    },
    {
        _id: "16",
        name: "Electric Scooter",
        image: vehicle_2,
        price: 8000,
        description: "Foldable electric scooter with 25km range. Perfect for getting around campus quickly.",
        category: "Vehicles",
        availability: "Sell"
    },
    {
        _id: "17",
        name: "Skateboard (Cruiser)",
        image: vehicle_3,
        price: 150,
        description: "Mini cruiser skateboard available for daily rent. Smooth rides across campus.",
        category: "Vehicles",
        availability: "Rent",
        rentDaily: 150
    },
    {
        _id: "18",
        name: "City Bicycle",
        image: vehicle_4,
        price: 3200,
        description: "Single-speed city bike with basket. Ideal for short campus trips.",
        category: "Vehicles",
        availability: "Sell"
    },

    // ═══════════ Traditional & Ethnic Wear ═══════════
    {
        _id: "19",
        name: "Silk Kurta Set",
        image: traditional_1,
        price: 1800,
        description: "Elegant silk kurta with matching pajama. Worn once for college fest. Size L.",
        category: "Traditional & Ethnic Wear",
        availability: "Sell"
    },
    {
        _id: "20",
        name: "Designer Saree",
        image: traditional_2,
        price: 2500,
        description: "Beautiful designer saree with embroidery work. Perfect for convocation or festive events.",
        category: "Traditional & Ethnic Wear",
        availability: "Sell"
    },
    {
        _id: "21",
        name: "Cotton Kurti",
        image: traditional_3,
        price: 450,
        description: "Printed cotton kurti, comfortable for daily college wear. Size M.",
        category: "Traditional & Ethnic Wear",
        availability: "Sell"
    },
    {
        _id: "22",
        name: "Ethnic Sherwani",
        image: traditional_4,
        price: 500,
        description: "Royal sherwani perfect for college functions. Available on rent per day.",
        category: "Traditional & Ethnic Wear",
        availability: "Rent",
        rentDaily: 500
    },
    {
        _id: "23",
        name: "Embroidered Dupatta",
        image: ethnic_2,
        price: 350,
        description: "Hand-embroidered dupatta with mirror work. Goes with any ethnic outfit.",
        category: "Traditional & Ethnic Wear",
        availability: "Sell"
    },
    {
        _id: "24",
        name: "Bandhani Dress Material",
        image: ethnic_3,
        price: 600,
        description: "Unstitched Bandhani dress material — vibrant colors, festive wear.",
        category: "Traditional & Ethnic Wear",
        availability: "Sell"
    },
    {
        _id: "25",
        name: "Palazzo Kurta Set",
        image: ethnic_4,
        price: 800,
        description: "Trendy palazzo and kurta combo. Size M. Worn twice.",
        category: "Traditional & Ethnic Wear",
        availability: "Sell"
    },
    {
        _id: "26",
        name: "Nehru Jacket",
        image: ethnic_5,
        price: 300,
        description: "Modi/Nehru jacket for layering over kurta. Available on daily rent.",
        category: "Traditional & Ethnic Wear",
        availability: "Rent",
        rentDaily: 300
    },
    {
        _id: "27",
        name: "Lehenga Choli Set",
        image: ethnic_6,
        price: 3500,
        description: "Stunning lehenga choli set for major college events. Dry-cleaned and ready.",
        category: "Traditional & Ethnic Wear",
        availability: "Sell"
    },
    {
        _id: "28",
        name: "Bridal Mehendi Outfit",
        image: ethnic_7,
        price: 800,
        description: "Complete mehendi ceremony outfit. Can be rented for events. Size L.",
        category: "Traditional & Ethnic Wear",
        availability: "Rent",
        rentDaily: 800
    },

    // ═══════════ Miscellaneous ═══════════
    {
        _id: "29",
        name: "Backpack (40L)",
        image: misc_1,
        price: 900,
        description: "Spacious 40L backpack with laptop compartment. Waterproof. Used for 6 months.",
        category: "Miscellaneous",
        availability: "Sell"
    },
    {
        _id: "30",
        name: "Bluetooth Speaker",
        image: misc_2,
        price: 1200,
        description: "JBL-style portable Bluetooth speaker with 12-hour battery life.",
        category: "Miscellaneous",
        availability: "Sell"
    },
    {
        _id: "31",
        name: "Dumbbell Set (5kg pair)",
        image: misc_3,
        price: 700,
        description: "Pair of 5kg PVC dumbbells. Great for hostel room workouts.",
        category: "Miscellaneous",
        availability: "Sell"
    },
    {
        _id: "32",
        name: "Yoga Mat",
        image: misc_4,
        price: 40,
        description: "Anti-slip yoga mat. Available for daily rent — perfect for morning sessions.",
        category: "Miscellaneous",
        availability: "Rent",
        rentDaily: 40
    },
    {
        _id: "33",
        name: "Camping Tent (2-person)",
        image: misc_5,
        price: 200,
        description: "Compact camping tent for college trips. Easy to set up. Rent per day.",
        category: "Miscellaneous",
        availability: "Rent",
        rentDaily: 200
    },
    {
        _id: "34",
        name: "Guitar (Acoustic)",
        image: misc_6,
        price: 2800,
        description: "Yamaha acoustic guitar with soft case. Well-maintained, sounds great.",
        category: "Miscellaneous",
        availability: "Sell"
    },
    {
        _id: "35",
        name: "Badminton Racket Set",
        image: misc_7,
        price: 50,
        description: "Pair of rackets with shuttlecocks. Available for daily rent.",
        category: "Miscellaneous",
        availability: "Rent",
        rentDaily: 50
    }
]
