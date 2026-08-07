const CATEGORIES = [
  { name: 'Women Ethnic', icon: '👗', subcategories: ['Kurtas', 'Sarees', 'Dress Materials'] },
  { name: 'Women Western', icon: '👚', subcategories: ['Tops', 'Jeans', 'Dresses'] },
  { name: 'Men', icon: '👔', subcategories: ['T-Shirts', 'Shirts', 'Jeans'] },
  { name: 'Kids', icon: '🧒', subcategories: ['Boys', 'Girls', 'Infant'] },
  { name: 'Footwear', icon: '👟', subcategories: ['Men Shoes', 'Women Shoes', 'Sports'] },
  { name: 'Electronics', icon: '📱', subcategories: ['Earbuds', 'Watches', 'Accessories'] },
  { name: 'Beauty', icon: '💄', subcategories: ['Skincare', 'Makeup', 'Haircare'] },
  { name: 'Home & Kitchen', icon: '🏠', subcategories: ['Decor', 'Kitchen', 'Bedding'] },
  { name: 'Bags', icon: '🎒', subcategories: ['Backpacks', 'Handbags', 'Wallets'] },
  { name: 'Jewelry', icon: '💍', subcategories: ['Necklaces', 'Earrings', 'Bangles'] },
  { name: 'Sports', icon: '⚽', subcategories: ['Equipment', 'Clothing', 'Shoes'] },
  { name: 'Toys', icon: '🧸', subcategories: ['Educational', 'Action Figures', 'Board Games'] }
];




const DEFAULT_PRODUCTS = [
  // Women Ethnic (5)
  { id:1, title:'Libas Floral Printed Anarkali Kurta', brand:'Libas', category:'Women Ethnic', price:599, mrp:1499, discount:60, rating:4.3, reviews:2340, image:'./images/kurti_product.jpg', images:['./images/kurti_product.jpg','./images/kurti_product.jpg','./images/kurti_product.jpg'], sizes:['S','M','L','XL','XXL'], description:'Embrace elegance with this beautifully crafted Anarkali kurta featuring intricate floral prints. Made from breathable cotton blend fabric, perfect for festive occasions and daily wear.', specs:{'Fabric':'Cotton Blend','Pattern':'Floral Print','Occasion':'Festive, Casual','Wash Care':'Machine Wash','Sleeve':'3/4 Sleeve'}, freeDelivery:true, trending:true, flashDeal:true, inStock:true },
  { id:2, title:'Biba Embroidered Straight Kurta Set', brand:'Biba', category:'Women Ethnic', price:899, mrp:1999, discount:55, rating:4.5, reviews:1856, image:'./images/kurti_product.jpg', images:['./images/kurti_product.jpg','./images/kurti_product.jpg','./images/kurti_product.jpg'], sizes:['S','M','L','XL'], description:'Elevate your ethnic wardrobe with this stunning embroidered straight kurta set from Biba. Complete set includes kurta and palazzo.', specs:{'Fabric':'Rayon','Pattern':'Embroidered','Set':'Kurta + Palazzo','Wash Care':'Hand Wash','Neck':'Round Neck'}, freeDelivery:true, trending:true, flashDeal:false, inStock:true },
  { id:3, title:'Saree Mall Banarasi Silk Saree with Blouse', brand:'Saree Mall', category:'Women Ethnic', price:1299, mrp:3999, discount:68, rating:4.6, reviews:3200, image:'./images/saree_product.jpg', images:['./images/saree_product.jpg','./images/saree_product.jpg','./images/saree_product.jpg'], sizes:null, description:'Drape yourself in luxury with this gorgeous Banarasi silk saree. Rich zari work and traditional motifs make this perfect for weddings and special occasions.', specs:{'Fabric':'Banarasi Silk','Length':'5.5 meters','Blouse':'Included','Work':'Zari Weaving','Occasion':'Wedding, Festive'}, freeDelivery:true, trending:true, flashDeal:true, inStock:true },
  { id:4, title:'W for Woman Printed A-Line Kurta', brand:'W for Woman', category:'Women Ethnic', price:749, mrp:1599, discount:53, rating:4.2, reviews:980, image:'./images/kurti_product.jpg', images:['./images/kurti_product.jpg','./images/kurti_product.jpg','./images/kurti_product.jpg'], sizes:['S','M','L','XL'], description:'Contemporary ethnic style with this A-line kurta featuring modern prints on premium viscose fabric. Perfect blend of comfort and style.', specs:{'Fabric':'Viscose','Pattern':'Printed','Fit':'A-Line','Wash Care':'Machine Wash','Sleeve':'Short Sleeve'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },
  { id:5, title:'Aurelia Cotton Palazzo Kurta Set', brand:'Aurelia', category:'Women Ethnic', price:1099, mrp:2499, discount:56, rating:4.4, reviews:1560, image:'./images/kurti_product.jpg', images:['./images/kurti_product.jpg','./images/kurti_product.jpg','./images/kurti_product.jpg'], sizes:['S','M','L','XL','XXL'], description:'Step out in style with this comfortable cotton palazzo kurta set. Lightweight and breezy, ideal for summer and festive gatherings.', specs:{'Fabric':'Pure Cotton','Set':'Kurta + Palazzo + Dupatta','Fit':'Relaxed','Wash Care':'Machine Wash','Origin':'India'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },

  // Women Western (5)
  { id:6, title:'H&M Ribbed Crop Top', brand:'H&M', category:'Women Western', price:399, mrp:999, discount:60, rating:4.1, reviews:780, image:'./images/tshirt_product.jpg', images:['./images/tshirt_product.jpg','./images/tshirt_product.jpg','./images/tshirt_product.jpg'], sizes:['XS','S','M','L'], description:'Trendy ribbed crop top in soft stretchy fabric. A versatile piece that pairs perfectly with high-waisted jeans or skirts.', specs:{'Fabric':'Cotton Rib','Fit':'Slim','Length':'Cropped','Wash Care':'Machine Wash','Neckline':'Round Neck'}, freeDelivery:false, trending:true, flashDeal:false, inStock:true },
  { id:7, title:'Zara High-Rise Skinny Jeans', brand:'Zara', category:'Women Western', price:1299, mrp:2999, discount:57, rating:4.4, reviews:2100, image:'./images/jeans_product.jpg', images:['./images/jeans_product.jpg','./images/jeans_product.jpg','./images/jeans_product.jpg'], sizes:['26','28','30','32','34'], description:'Classic high-rise skinny jeans in premium stretch denim. Flattering fit with ankle-length design and five-pocket styling.', specs:{'Fabric':'Stretch Denim','Fit':'Skinny','Rise':'High','Closure':'Button + Zip','Wash':'Dark'}, freeDelivery:true, trending:true, flashDeal:true, inStock:true },
  { id:8, title:'ONLY Floral Wrap Dress', brand:'ONLY', category:'Women Western', price:899, mrp:1999, discount:55, rating:4.3, reviews:650, image:'./images/tshirt_product.jpg', images:['./images/tshirt_product.jpg','./images/tshirt_product.jpg','./images/tshirt_product.jpg'], sizes:['S','M','L','XL'], description:'Effortlessly chic floral wrap dress perfect for brunches, dates, and casual outings. Flattering wrap silhouette in breathable fabric.', specs:{'Fabric':'Polyester','Style':'Wrap','Length':'Knee Length','Pattern':'Floral','Occasion':'Casual, Party'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },
  { id:9, title:'Levi\'s Classic Straight Fit Jeans', brand:'Levi\'s', category:'Women Western', price:1599, mrp:3499, discount:54, rating:4.6, reviews:3400, image:'./images/jeans_product.jpg', images:['./images/jeans_product.jpg','./images/jeans_product.jpg','./images/jeans_product.jpg'], sizes:['26','28','30','32'], description:'Timeless Levi\'s straight fit jeans crafted from premium selvedge denim. A wardrobe essential that never goes out of style.', specs:{'Fabric':'100% Cotton Denim','Fit':'Straight','Rise':'Mid','Closure':'Button Fly','Weight':'12 oz'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },
  { id:10, title:'Vero Moda Striped Oversized Tee', brand:'Vero Moda', category:'Women Western', price:499, mrp:1299, discount:62, rating:4.0, reviews:420, image:'./images/tshirt_product.jpg', images:['./images/tshirt_product.jpg','./images/tshirt_product.jpg','./images/tshirt_product.jpg'], sizes:['S','M','L','XL'], description:'Relaxed oversized tee with classic stripe pattern. Super soft cotton feel makes it perfect for lounging or casual outings.', specs:{'Fabric':'Cotton Jersey','Fit':'Oversized','Pattern':'Striped','Sleeve':'Half Sleeve','Wash Care':'Machine Wash'}, freeDelivery:false, trending:false, flashDeal:false, inStock:true },

  // Men (5)
  { id:11, title:'Roadster Solid Polo T-Shirt', brand:'Roadster', category:'Men', price:449, mrp:1199, discount:63, rating:4.2, reviews:4500, image:'./images/tshirt_product.jpg', images:['./images/tshirt_product.jpg','./images/tshirt_product.jpg','./images/tshirt_product.jpg'], sizes:['S','M','L','XL','XXL'], description:'Classic polo t-shirt in premium pique cotton. Features ribbed collar and cuffs with a comfortable regular fit. Perfect for casual and semi-formal occasions.', specs:{'Fabric':'Pique Cotton','Fit':'Regular','Collar':'Polo','Sleeve':'Half Sleeve','Wash Care':'Machine Wash'}, freeDelivery:true, trending:true, flashDeal:false, inStock:true },
  { id:12, title:'Peter England Slim Fit Formal Shirt', brand:'Peter England', category:'Men', price:799, mrp:1799, discount:56, rating:4.5, reviews:2800, image:'./images/tshirt_product.jpg', images:['./images/tshirt_product.jpg','./images/tshirt_product.jpg','./images/tshirt_product.jpg'], sizes:['38','40','42','44'], description:'Upgrade your formal wardrobe with this slim-fit shirt in premium cotton fabric. Wrinkle-resistant finish keeps you looking sharp all day.', specs:{'Fabric':'Cotton Blend','Fit':'Slim','Collar':'Spread','Cuff':'Button','Pattern':'Solid'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },
  { id:13, title:'Wrangler Rugged Denim Jeans', brand:'Wrangler', category:'Men', price:1199, mrp:2799, discount:57, rating:4.4, reviews:3100, image:'./images/jeans_product.jpg', images:['./images/jeans_product.jpg','./images/jeans_product.jpg','./images/jeans_product.jpg'], sizes:['30','32','34','36','38'], description:'Built tough with rugged denim construction. These Wrangler jeans feature a classic five-pocket design with reinforced stitching for long-lasting wear.', specs:{'Fabric':'100% Cotton Denim','Fit':'Regular','Rise':'Mid','Closure':'Zip Fly','Weight':'14 oz'}, freeDelivery:true, trending:true, flashDeal:true, inStock:true },
  { id:14, title:'U.S. Polo Assn. Graphic Print T-Shirt', brand:'U.S. Polo', category:'Men', price:549, mrp:1399, discount:61, rating:4.1, reviews:1900, image:'./images/tshirt_product.jpg', images:['./images/tshirt_product.jpg','./images/tshirt_product.jpg','./images/tshirt_product.jpg'], sizes:['S','M','L','XL','XXL'], description:'Express your style with this eye-catching graphic print t-shirt. Made from 100% cotton for ultimate comfort in every season.', specs:{'Fabric':'100% Cotton','Fit':'Regular','Neck':'Round','Pattern':'Graphic Print','Wash Care':'Machine Wash'}, freeDelivery:false, trending:false, flashDeal:false, inStock:true },
  { id:15, title:'Allen Solly Chino Trousers', brand:'Allen Solly', category:'Men', price:899, mrp:1999, discount:55, rating:4.3, reviews:1250, image:'./images/jeans_product.jpg', images:['./images/jeans_product.jpg','./images/jeans_product.jpg','./images/jeans_product.jpg'], sizes:['30','32','34','36'], description:'Versatile chino trousers that transition seamlessly from office to weekend. Comfortable cotton twill with a modern slim fit.', specs:{'Fabric':'Cotton Twill','Fit':'Slim','Closure':'Button + Zip','Pattern':'Solid','Pockets':'4'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },

  // Kids (4)
  { id:16, title:'Max Kids Cartoon Print T-Shirt', brand:'Max', category:'Kids', price:299, mrp:699, discount:57, rating:4.3, reviews:890, image:'./images/tshirt_product.jpg', images:['./images/tshirt_product.jpg','./images/tshirt_product.jpg','./images/tshirt_product.jpg'], sizes:['2-3Y','4-5Y','6-7Y','8-9Y'], description:'Fun and colorful cartoon print t-shirt that kids will love. Soft cotton fabric is gentle on sensitive skin and easy to wash.', specs:{'Fabric':'100% Cotton','Fit':'Regular','Pattern':'Cartoon Print','Age Group':'2-9 Years','Wash Care':'Machine Wash'}, freeDelivery:false, trending:false, flashDeal:false, inStock:true },
  { id:17, title:'H&M Kids Denim Shorts', brand:'H&M', category:'Kids', price:399, mrp:899, discount:56, rating:4.1, reviews:560, image:'./images/jeans_product.jpg', images:['./images/jeans_product.jpg','./images/jeans_product.jpg','./images/jeans_product.jpg'], sizes:['3-4Y','5-6Y','7-8Y','9-10Y'], description:'Comfortable denim shorts with elastic waistband for active kids. Durable construction withstands playground adventures.', specs:{'Fabric':'Denim','Fit':'Regular','Closure':'Elastic Waist','Pattern':'Solid','Season':'Summer'}, freeDelivery:false, trending:false, flashDeal:false, inStock:true },
  { id:18, title:'Mothercare Girls Party Dress', brand:'Mothercare', category:'Kids', price:799, mrp:1699, discount:53, rating:4.5, reviews:340, image:'./images/kurti_product.jpg', images:['./images/kurti_product.jpg','./images/kurti_product.jpg','./images/kurti_product.jpg'], sizes:['2-3Y','4-5Y','6-7Y','8-9Y'], description:'Adorable party dress with tulle overlay and sparkle details. Perfect for birthday parties and festive celebrations.', specs:{'Fabric':'Polyester + Tulle','Fit':'Flared','Pattern':'Embellished','Occasion':'Party','Lining':'Yes'}, freeDelivery:true, trending:true, flashDeal:false, inStock:true },
  { id:19, title:'FirstCry Boys Jogger Set', brand:'FirstCry', category:'Kids', price:599, mrp:1299, discount:54, rating:4.2, reviews:720, image:'./images/tshirt_product.jpg', images:['./images/tshirt_product.jpg','./images/tshirt_product.jpg','./images/tshirt_product.jpg'], sizes:['3-4Y','5-6Y','7-8Y','9-10Y'], description:'Comfortable jogger set with matching t-shirt and track pants. Made from soft fleece-lined fabric perfect for playtime and school.', specs:{'Fabric':'Cotton Fleece','Set':'T-Shirt + Joggers','Fit':'Regular','Pattern':'Color Block','Wash Care':'Machine Wash'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },

  // Footwear (5)
  { id:20, title:'Nike Air Max Running Shoes', brand:'Nike', category:'Footwear', price:3499, mrp:6999, discount:50, rating:4.7, reviews:5200, image:'./images/sneakers_product.jpg', images:['./images/sneakers_product.jpg','./images/sneakers_product.jpg','./images/sneakers_product.jpg'], sizes:['UK6','UK7','UK8','UK9','UK10'], description:'Experience cloud-like comfort with Nike Air Max technology. Lightweight mesh upper with visible Air cushioning delivers impact protection and a plush ride.', specs:{'Upper':'Mesh + Synthetic','Sole':'Rubber','Technology':'Air Max','Weight':'300g','Closure':'Lace-up'}, freeDelivery:true, trending:true, flashDeal:true, inStock:true },
  { id:21, title:'Puma RS-X Street Sneakers', brand:'Puma', category:'Footwear', price:2799, mrp:5999, discount:53, rating:4.5, reviews:1800, image:'./images/sneakers_product.jpg', images:['./images/sneakers_product.jpg','./images/sneakers_product.jpg','./images/sneakers_product.jpg'], sizes:['UK7','UK8','UK9','UK10'], description:'Bold and chunky RS-X sneakers with retro-inspired design. Features Running System technology for exceptional cushioning.', specs:{'Upper':'Leather + Mesh','Sole':'EVA + Rubber','Technology':'RS','Weight':'350g','Style':'Chunky'}, freeDelivery:true, trending:true, flashDeal:false, inStock:true },
  { id:22, title:'Adidas Ultraboost Light', brand:'Adidas', category:'Footwear', price:4999, mrp:9999, discount:50, rating:4.8, reviews:4300, image:'./images/sneakers_product.jpg', images:['./images/sneakers_product.jpg','./images/sneakers_product.jpg','./images/sneakers_product.jpg'], sizes:['UK6','UK7','UK8','UK9','UK10','UK11'], description:'The lightest Ultraboost ever with BOOST midsole technology. Primeknit upper adapts to your foot for a sock-like fit.', specs:{'Upper':'Primeknit','Sole':'Continental Rubber','Technology':'BOOST','Weight':'280g','Arch':'Neutral'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },
  { id:23, title:'Sparx Men Casual Flip Flops', brand:'Sparx', category:'Footwear', price:299, mrp:599, discount:50, rating:3.9, reviews:6800, image:'./images/sneakers_product.jpg', images:['./images/sneakers_product.jpg','./images/sneakers_product.jpg','./images/sneakers_product.jpg'], sizes:['UK6','UK7','UK8','UK9','UK10'], description:'Lightweight and durable flip flops for everyday casual wear. Soft EVA footbed provides all-day comfort.', specs:{'Upper':'Synthetic','Sole':'EVA','Type':'Flip Flop','Weight':'150g','Season':'All Season'}, freeDelivery:false, trending:false, flashDeal:false, inStock:true },
  { id:24, title:'Reebok Classic Leather Sneakers', brand:'Reebok', category:'Footwear', price:2499, mrp:4999, discount:50, rating:4.4, reviews:2400, image:'./images/sneakers_product.jpg', images:['./images/sneakers_product.jpg','./images/sneakers_product.jpg','./images/sneakers_product.jpg'], sizes:['UK7','UK8','UK9','UK10'], description:'Iconic Reebok Classic with genuine leather upper. Timeless design that has been a street-style staple for decades.', specs:{'Upper':'Genuine Leather','Sole':'Rubber','Style':'Classic','Weight':'320g','Closure':'Lace-up'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },

  // Electronics (5)
  { id:25, title:'boAt Airdopes 141 TWS Earbuds', brand:'boAt', category:'Electronics', price:999, mrp:2990, discount:67, rating:4.1, reviews:52000, image:'./images/earbuds_product.jpg', images:['./images/earbuds_product.jpg','./images/earbuds_product.jpg','./images/earbuds_product.jpg'], sizes:null, description:'Immerse yourself in boAt signature sound with 8mm drivers. 42 hours total playtime, ENx noise cancellation for calls, and IPX4 water resistance.', specs:{'Driver':'8mm','Battery':'42 hrs total','Bluetooth':'5.1','Water Resistance':'IPX4','Charging':'USB-C'}, freeDelivery:true, trending:true, flashDeal:true, inStock:true },
  { id:26, title:'Noise ColorFit Pro 4 Smartwatch', brand:'Noise', category:'Electronics', price:2499, mrp:5999, discount:58, rating:4.3, reviews:18000, image:'./images/watch_product.jpg', images:['./images/watch_product.jpg','./images/watch_product.jpg','./images/watch_product.jpg'], sizes:null, description:'Feature-packed smartwatch with 1.72" AMOLED display, Bluetooth calling, SpO2, heart rate monitoring, and 100+ sports modes. 7 days battery life.', specs:{'Display':'1.72" AMOLED','Battery':'7 days','Sensors':'SpO2, HR, Accelerometer','Water Resistance':'IP68','Connectivity':'Bluetooth 5.3'}, freeDelivery:true, trending:true, flashDeal:false, inStock:true },
  { id:27, title:'Samsung Galaxy Buds FE', brand:'Samsung', category:'Electronics', price:3999, mrp:6999, discount:43, rating:4.5, reviews:8900, image:'./images/earbuds_product.jpg', images:['./images/earbuds_product.jpg','./images/earbuds_product.jpg','./images/earbuds_product.jpg'], sizes:null, description:'Premium ANC earbuds with Samsung signature AKG sound. Active noise cancellation, 30 hours battery, and seamless Galaxy ecosystem integration.', specs:{'Driver':'Custom AKG','Battery':'30 hrs total','ANC':'Yes','Bluetooth':'5.2','Charging':'USB-C + Wireless'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },
  { id:28, title:'Fastrack Reflex Play+ Smartwatch', brand:'Fastrack', category:'Electronics', price:1799, mrp:3995, discount:55, rating:4.0, reviews:5600, image:'./images/watch_product.jpg', images:['./images/watch_product.jpg','./images/watch_product.jpg','./images/watch_product.jpg'], sizes:null, description:'Stylish smartwatch with BT calling, 1.3" AMOLED display, and AI voice assistant. Track 110+ sports modes with up to 5 days battery.', specs:{'Display':'1.3" AMOLED','Battery':'5 days','Calling':'Bluetooth','Water Resistance':'IP68','Sports Modes':'110+'}, freeDelivery:true, trending:false, flashDeal:true, inStock:true },
  { id:29, title:'Titan Edge Analog Watch', brand:'Titan', category:'Electronics', price:4499, mrp:7995, discount:44, rating:4.7, reviews:3200, image:'./images/watch_product.jpg', images:['./images/watch_product.jpg','./images/watch_product.jpg','./images/watch_product.jpg'], sizes:null, description:'Ultra-slim analog watch that embodies minimalist luxury. Sapphire crystal glass, genuine leather strap, and Japanese quartz movement.', specs:{'Movement':'Japanese Quartz','Glass':'Sapphire Crystal','Strap':'Genuine Leather','Water Resistance':'30m','Thickness':'6mm'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },

  // Beauty (5)
  { id:30, title:'Mamaearth Vitamin C Face Wash', brand:'Mamaearth', category:'Beauty', price:349, mrp:599, discount:42, rating:4.2, reviews:15600, image:'./images/skincare_product.jpg', images:['./images/skincare_product.jpg','./images/skincare_product.jpg','./images/skincare_product.jpg'], sizes:null, description:'Gentle foaming face wash enriched with Vitamin C and turmeric for a natural glow. Removes dirt and impurities without drying your skin.', specs:{'Volume':'100ml','Key Ingredient':'Vitamin C + Turmeric','Skin Type':'All Skin Types','Paraben Free':'Yes','Sulphate Free':'Yes'}, freeDelivery:false, trending:true, flashDeal:false, inStock:true },
  { id:31, title:'Plum Green Tea Pore Cleansing Face Wash', brand:'Plum', category:'Beauty', price:399, mrp:650, discount:39, rating:4.4, reviews:9800, image:'./images/skincare_product.jpg', images:['./images/skincare_product.jpg','./images/skincare_product.jpg','./images/skincare_product.jpg'], sizes:null, description:'Oil-free face wash with green tea extracts that gently cleans pores without stripping natural oils. Perfect for oily and acne-prone skin.', specs:{'Volume':'120ml','Key Ingredient':'Green Tea Extract','Skin Type':'Oily, Combination','Vegan':'Yes','Cruelty Free':'Yes'}, freeDelivery:false, trending:false, flashDeal:false, inStock:true },
  { id:32, title:'Lakme 9to5 CC Cream', brand:'Lakme', category:'Beauty', price:299, mrp:450, discount:34, rating:4.0, reviews:22000, image:'./images/skincare_product.jpg', images:['./images/skincare_product.jpg','./images/skincare_product.jpg','./images/skincare_product.jpg'], sizes:null, description:'Lightweight CC cream with color-correction and SPF 30. Provides natural coverage, evens skin tone, and protects from UV rays all day long.', specs:{'Volume':'30g','SPF':'30','Coverage':'Light to Medium','Skin Type':'All','Finish':'Natural'}, freeDelivery:false, trending:false, flashDeal:false, inStock:true },
  { id:33, title:'Nivea Soft Moisturizing Cream', brand:'Nivea', category:'Beauty', price:199, mrp:350, discount:43, rating:4.5, reviews:35000, image:'./images/skincare_product.jpg', images:['./images/skincare_product.jpg','./images/skincare_product.jpg','./images/skincare_product.jpg'], sizes:null, description:'Refreshingly soft moisturizing cream with Vitamin E and Jojoba Oil. Provides instant 48-hour moisture for face, body, and hands.', specs:{'Volume':'200ml','Key Ingredient':'Vitamin E + Jojoba','Application':'Face & Body','Absorption':'Fast','Skin Type':'All'}, freeDelivery:false, trending:false, flashDeal:true, inStock:true },
  { id:34, title:'Maybelline Lash Sensational Mascara', brand:'Maybelline', category:'Beauty', price:449, mrp:750, discount:40, rating:4.3, reviews:8700, image:'./images/skincare_product.jpg', images:['./images/skincare_product.jpg','./images/skincare_product.jpg','./images/skincare_product.jpg'], sizes:null, description:'Fan-out lash effect with the exclusive fanning brush that captures and defines even the smallest lashes. Buildable formula for dramatic volume.', specs:{'Volume':'9.5ml','Effect':'Volume + Length','Waterproof':'No','Brush':'Fanning Brush','Removal':'Regular Cleanser'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },

  // Home & Kitchen (5)
  { id:35, title:'AAYU Velvet Cushion Covers Set of 5', brand:'AAYU', category:'Home & Kitchen', price:499, mrp:1299, discount:62, rating:4.3, reviews:4200, image:'./images/homedecor_product.jpg', images:['./images/homedecor_product.jpg','./images/homedecor_product.jpg','./images/homedecor_product.jpg'], sizes:null, description:'Transform your living space with these luxurious velvet cushion covers. Set of 5 in coordinated colors with invisible zip closure.', specs:{'Material':'Velvet','Size':'16x16 inches','Quantity':'5 pcs','Closure':'Zip','Wash Care':'Machine Wash'}, freeDelivery:true, trending:true, flashDeal:false, inStock:true },
  { id:36, title:'Pigeon Favourite 3-Piece Cookware Set', brand:'Pigeon', category:'Home & Kitchen', price:899, mrp:2199, discount:59, rating:4.1, reviews:11000, image:'./images/kitchen_product.jpg', images:['./images/kitchen_product.jpg','./images/kitchen_product.jpg','./images/kitchen_product.jpg'], sizes:null, description:'Essential non-stick cookware set including kadai, fry pan, and dosa tawa. Durable non-stick coating for healthy oil-free cooking.', specs:{'Material':'Aluminium','Coating':'Non-stick','Set':'Kadai + Frypan + Tawa','Induction':'Yes','Warranty':'1 Year'}, freeDelivery:true, trending:false, flashDeal:true, inStock:true },
  { id:37, title:'Prestige Iris 750W Mixer Grinder', brand:'Prestige', category:'Home & Kitchen', price:1999, mrp:3999, discount:50, rating:4.4, reviews:7800, image:'./images/kitchen_product.jpg', images:['./images/kitchen_product.jpg','./images/kitchen_product.jpg','./images/kitchen_product.jpg'], sizes:null, description:'Powerful 750W motor with 3 stainless steel jars for all your grinding needs. From smoothies to masalas, handle it all effortlessly.', specs:{'Power':'750W','Jars':'3 SS Jars','Speed':'3 Speed + Pulse','Motor':'Copper','Warranty':'2 Years'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },
  { id:38, title:'Solimo LED String Fairy Lights', brand:'Solimo', category:'Home & Kitchen', price:199, mrp:499, discount:60, rating:4.0, reviews:6500, image:'./images/homedecor_product.jpg', images:['./images/homedecor_product.jpg','./images/homedecor_product.jpg','./images/homedecor_product.jpg'], sizes:null, description:'Create magical ambiance with 10-meter warm white LED string lights. Perfect for bedroom decoration, parties, and festive celebrations.', specs:{'Length':'10 meters','LEDs':'100','Color':'Warm White','Power':'USB + Battery','Modes':'8 Lighting Modes'}, freeDelivery:false, trending:false, flashDeal:false, inStock:true },
  { id:39, title:'Milton Thermosteel Hot & Cold Flask', brand:'Milton', category:'Home & Kitchen', price:649, mrp:1299, discount:50, rating:4.5, reviews:9200, image:'./images/kitchen_product.jpg', images:['./images/kitchen_product.jpg','./images/kitchen_product.jpg','./images/kitchen_product.jpg'], sizes:null, description:'Double-wall vacuum insulated flask that keeps beverages hot for 24 hours and cold for 24 hours. Leak-proof design with premium finish.', specs:{'Capacity':'1 Liter','Material':'Stainless Steel','Insulation':'Vacuum','Hot Retention':'24 hrs','Cold Retention':'24 hrs'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },

  // Bags (4)
  { id:40, title:'Skybags Brat Daypack 22L', brand:'Skybags', category:'Bags', price:799, mrp:1990, discount:60, rating:4.2, reviews:8900, image:'./images/backpack_product.jpg', images:['./images/backpack_product.jpg','./images/backpack_product.jpg','./images/backpack_product.jpg'], sizes:null, description:'Versatile 22-liter daypack perfect for college, office, and travel. Multiple compartments with padded laptop sleeve for up to 15.6" laptops.', specs:{'Capacity':'22 Liters','Material':'Polyester','Laptop Fit':'15.6 inch','Pockets':'3 Compartments','Water Resistant':'Yes'}, freeDelivery:true, trending:true, flashDeal:false, inStock:true },
  { id:41, title:'American Tourister Urban Backpack', brand:'American Tourister', category:'Bags', price:1299, mrp:2800, discount:54, rating:4.5, reviews:5600, image:'./images/backpack_product.jpg', images:['./images/backpack_product.jpg','./images/backpack_product.jpg','./images/backpack_product.jpg'], sizes:null, description:'Premium urban backpack with ergonomic design and breathable back panel. Spacious main compartment with organizer pockets for everyday essentials.', specs:{'Capacity':'28 Liters','Material':'Premium Polyester','Laptop Fit':'16 inch','Warranty':'3 Years','Back Panel':'Ergonomic'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },
  { id:42, title:'Lavie Women\'s Tote Handbag', brand:'Lavie', category:'Bags', price:999, mrp:2499, discount:60, rating:4.3, reviews:3200, image:'./images/backpack_product.jpg', images:['./images/backpack_product.jpg','./images/backpack_product.jpg','./images/backpack_product.jpg'], sizes:null, description:'Chic and spacious tote handbag in premium faux leather. Elegant design with multiple inner pockets for organized storage.', specs:{'Material':'Faux Leather','Type':'Tote','Closure':'Magnetic Snap','Pockets':'Interior + Exterior','Strap':'Dual Handle'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },
  { id:43, title:'Wildcraft Supernova Laptop Backpack', brand:'Wildcraft', category:'Bags', price:1599, mrp:3499, discount:54, rating:4.4, reviews:4100, image:'./images/backpack_product.jpg', images:['./images/backpack_product.jpg','./images/backpack_product.jpg','./images/backpack_product.jpg'], sizes:null, description:'Rugged laptop backpack built for professionals. Rain cover included, padded laptop compartment, and chest strap for comfortable carrying during commutes.', specs:{'Capacity':'35 Liters','Material':'Nylon','Laptop Fit':'17 inch','Rain Cover':'Included','Warranty':'5 Years'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },

  // Jewelry (5)
  { id:44, title:'Giva Sterling Silver Pendant Necklace', brand:'Giva', category:'Jewelry', price:999, mrp:2499, discount:60, rating:4.6, reviews:3800, image:'./images/jewelry_product.jpg', images:['./images/jewelry_product.jpg','./images/jewelry_product.jpg','./images/jewelry_product.jpg'], sizes:null, description:'Elegant 925 sterling silver pendant necklace with cubic zirconia stones. Hypoallergenic, tarnish-resistant, and comes in a premium gift box.', specs:{'Material':'925 Sterling Silver','Stone':'Cubic Zirconia','Chain Length':'18 inches','Clasp':'Lobster Claw','Gift Box':'Included'}, freeDelivery:true, trending:true, flashDeal:true, inStock:true },
  { id:45, title:'Peora Gold-Plated Kundan Earrings', brand:'Peora', category:'Jewelry', price:599, mrp:1499, discount:60, rating:4.3, reviews:2100, image:'./images/jewelry_product.jpg', images:['./images/jewelry_product.jpg','./images/jewelry_product.jpg','./images/jewelry_product.jpg'], sizes:null, description:'Traditional kundan earrings with intricate gold plating. Lightweight design perfect for weddings, festivals, and ethnic occasions.', specs:{'Material':'Alloy','Plating':'Gold','Style':'Kundan','Closure':'Push Back','Occasion':'Wedding, Festive'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },
  { id:46, title:'Zaveri Pearls Layered Necklace Set', brand:'Zaveri Pearls', category:'Jewelry', price:449, mrp:999, discount:55, rating:4.2, reviews:1500, image:'./images/jewelry_product.jpg', images:['./images/jewelry_product.jpg','./images/jewelry_product.jpg','./images/jewelry_product.jpg'], sizes:null, description:'Trendy multi-layered pearl necklace set that adds instant glamour to any outfit. Adjustable chain length to suit different necklines.', specs:{'Material':'Alloy + Pearl','Layers':'3','Length':'Adjustable','Clasp':'Lobster','Set':'Necklace + Earrings'}, freeDelivery:false, trending:false, flashDeal:false, inStock:true },
  { id:47, title:'Sukkhi Traditional Bangle Set', brand:'Sukkhi', category:'Jewelry', price:699, mrp:1799, discount:61, rating:4.1, reviews:980, image:'./images/jewelry_product.jpg', images:['./images/jewelry_product.jpg','./images/jewelry_product.jpg','./images/jewelry_product.jpg'], sizes:null, description:'Beautiful set of 4 traditional bangles with meenakari work. Rich colors and detailed craftsmanship make them perfect for festive dressing.', specs:{'Material':'Alloy','Plating':'Gold','Quantity':'4 Bangles','Style':'Meenakari','Size':'2.6 inch'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },
  { id:48, title:'Yellow Chimes Rose Gold Ring', brand:'Yellow Chimes', category:'Jewelry', price:349, mrp:899, discount:61, rating:4.0, reviews:2300, image:'./images/jewelry_product.jpg', images:['./images/jewelry_product.jpg','./images/jewelry_product.jpg','./images/jewelry_product.jpg'], sizes:null, description:'Minimalist rose gold plated adjustable ring with Austrian crystal accent. Hypoallergenic and perfect for daily wear.', specs:{'Material':'Alloy','Plating':'Rose Gold','Stone':'Austrian Crystal','Size':'Adjustable','Style':'Minimalist'}, freeDelivery:false, trending:false, flashDeal:false, inStock:true },

  // Sports (4)
  { id:49, title:'Nivia Storm Football Size 5', brand:'Nivia', category:'Sports', price:499, mrp:999, discount:50, rating:4.3, reviews:4500, image:'./images/sneakers_product.jpg', images:['./images/sneakers_product.jpg','./images/sneakers_product.jpg','./images/sneakers_product.jpg'], sizes:null, description:'Tournament-grade football with machine-stitched panels for consistent performance. Durable rubber bladder for excellent air retention.', specs:{'Size':'5 (Adult)','Material':'PVC','Stitching':'Machine','Bladder':'Rubber','Use':'Training + Match'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },
  { id:50, title:'Boldfit Resistance Band Set', brand:'Boldfit', category:'Sports', price:399, mrp:999, discount:60, rating:4.4, reviews:7800, image:'./images/tshirt_product.jpg', images:['./images/tshirt_product.jpg','./images/tshirt_product.jpg','./images/tshirt_product.jpg'], sizes:null, description:'Complete set of 5 resistance bands with different tension levels. Perfect for home workouts, physiotherapy, and strength training.', specs:{'Quantity':'5 Bands','Resistance':'Light to Extra Heavy','Material':'Natural Latex','Bag':'Carrying Pouch','Guide':'Exercise Guide Included'}, freeDelivery:false, trending:false, flashDeal:false, inStock:true },
  { id:51, title:'HRX Active Running T-Shirt', brand:'HRX', category:'Sports', price:449, mrp:1099, discount:59, rating:4.2, reviews:3400, image:'./images/tshirt_product.jpg', images:['./images/tshirt_product.jpg','./images/tshirt_product.jpg','./images/tshirt_product.jpg'], sizes:['S','M','L','XL','XXL'], description:'Lightweight performance t-shirt with moisture-wicking technology. Quick-dry fabric keeps you cool and comfortable during intense workouts.', specs:{'Fabric':'Polyester DryFit','Fit':'Regular','Technology':'Moisture Wicking','Sleeve':'Short','Wash Care':'Machine Wash'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },
  { id:52, title:'Vector X Yoga Mat 6mm', brand:'Vector X', category:'Sports', price:599, mrp:1299, discount:54, rating:4.1, reviews:5100, image:'./images/backpack_product.jpg', images:['./images/backpack_product.jpg','./images/backpack_product.jpg','./images/backpack_product.jpg'], sizes:null, description:'Premium anti-slip yoga mat with optimal 6mm thickness. Provides excellent cushioning for joints while maintaining stability for balance poses.', specs:{'Thickness':'6mm','Material':'NBR Foam','Size':'183 x 61 cm','Weight':'800g','Strap':'Included'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },

  // Toys (4)
  { id:53, title:'Funskool Memory Game', brand:'Funskool', category:'Toys', price:299, mrp:599, discount:50, rating:4.5, reviews:2800, image:'./images/watch_product.jpg', images:['./images/watch_product.jpg','./images/watch_product.jpg','./images/watch_product.jpg'], sizes:null, description:'Classic memory matching game that enhances concentration and cognitive skills. 48 colorful tiles with fun illustrations for ages 3+.', specs:{'Age':'3+ Years','Players':'1-4','Pieces':'48 Tiles','Skill':'Memory + Concentration','Material':'Cardboard'}, freeDelivery:false, trending:false, flashDeal:false, inStock:true },
  { id:54, title:'Lego City Fire Station', brand:'Lego', category:'Toys', price:2999, mrp:4999, discount:40, rating:4.8, reviews:1200, image:'./images/backpack_product.jpg', images:['./images/backpack_product.jpg','./images/backpack_product.jpg','./images/backpack_product.jpg'], sizes:null, description:'Build an epic fire station with helicopter pad, fire truck, and 3 minifigures. 509 pieces for hours of creative building fun.', specs:{'Age':'6+ Years','Pieces':'509','Figures':'3 Minifigures','Theme':'City','Material':'ABS Plastic'}, freeDelivery:true, trending:true, flashDeal:false, inStock:true },
  { id:55, title:'Hot Wheels 10-Car Pack', brand:'Hot Wheels', category:'Toys', price:799, mrp:1499, discount:47, rating:4.4, reviews:5600, image:'./images/watch_product.jpg', images:['./images/watch_product.jpg','./images/watch_product.jpg','./images/watch_product.jpg'], sizes:null, description:'Collection of 10 die-cast Hot Wheels cars in a variety of styles. Perfect starter set for young car enthusiasts and collectors.', specs:{'Age':'3+ Years','Quantity':'10 Cars','Scale':'1:64','Material':'Die-Cast Metal','Theme':'Assorted'}, freeDelivery:true, trending:false, flashDeal:false, inStock:true },
  { id:56, title:'Toyzone Superman Action Figure', brand:'Toyzone', category:'Toys', price:499, mrp:999, discount:50, rating:4.1, reviews:1800, image:'./images/backpack_product.jpg', images:['./images/backpack_product.jpg','./images/backpack_product.jpg','./images/backpack_product.jpg'], sizes:null, description:'Detailed 12-inch Superman action figure with multiple articulation points. Comes with cape and display stand for epic poses.', specs:{'Age':'4+ Years','Height':'12 inches','Articulation':'14 Points','Material':'PVC','Accessories':'Cape + Stand'}, freeDelivery:false, trending:false, flashDeal:false, inStock:true }
];

// Initialize Products from LocalStorage
let PRODUCTS = JSON.parse(localStorage.getItem('mishoProducts')) || DEFAULT_PRODUCTS;

function saveProducts() {
  localStorage.setItem('mishoProducts', JSON.stringify(PRODUCTS));
}

const generateReviews = () => {
  const reviews = [];
  const authors = ['Aarav', 'Vihaan', 'Vivaan', 'Ananya', 'Diya', 'Advik', 'Kabir', 'Anika', 'Navya', 'Kiara', 'Rohan', 'Sneha', 'Priya', 'Amit', 'Neha'];
  const comments = [
    "Absolutely love this product! Highly recommended.",
    "Good quality for the price.",
    "Not exactly what I expected, but it works.",
    "Very satisfied with this purchase.",
    "Delivery was super fast and the product is great.",
    "Looks beautiful, fitting is perfect.",
    "Could be better, the material feels a bit cheap.",
    "Excellent value for money.",
    "My family loves it!",
    "Exactly as shown in the picture.",
    "Nice product, will buy again.",
    "Okay product, decent for everyday use.",
    "Top notch quality from this brand.",
    "A must-buy if you are looking for something in this category.",
    "I am very happy with this order."
  ];

  for (let i = 1; i <= 25; i++) {
    reviews.push({
      id: i,
      productId: Math.floor(Math.random() * PRODUCTS.length) + 1,
      author: authors[Math.floor(Math.random() * authors.length)],
      rating: Math.floor(Math.random() * 2) + 4, // 4 or 5
      date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleDateString('en-IN'),
      comment: comments[Math.floor(Math.random() * comments.length)],
      helpful: Math.floor(Math.random() * 50)
    });
  }
  return reviews;
};

const REVIEWS = generateReviews();

// --- CART STATE ---
let cart = JSON.parse(localStorage.getItem('mishoCart')) || [];
let appliedCoupon = null;

function saveCart() {
  localStorage.setItem('mishoCart', JSON.stringify(cart));
}

function addToCart(productId, size = null, qty = 1) {
  productId = parseInt(productId);
  const existingItem = cart.find(item => item.productId === productId && item.size === size);
  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.push({ productId, quantity: qty, size });
  }
  saveCart();
  updateCartBadge();
  showToast('Item added to cart! 🛒', 'success');
}

function removeFromCart(productId, size = null) {
  cart = cart.filter(item => !(item.productId === productId && item.size === size));
  saveCart();
  updateCartBadge();
  if (window.location.hash === '#/cart') {
    renderCartPage();
  }
}

function updateCartQty(productId, size, delta) {
  const item = cart.find(item => item.productId === productId && item.size === size);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId, size);
    } else {
      saveCart();
      updateCartBadge();
      if (window.location.hash === '#/cart') {
        renderCartPage();
      }
    }
  }
}

function getCartTotal() {
  let subtotal = 0;
  let totalDiscountAmount = 0;
  
  cart.forEach(item => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (product) {
      subtotal += product.mrp * item.quantity;
      totalDiscountAmount += (product.mrp - product.price) * item.quantity;
    }
  });

  let delivery = subtotal - totalDiscountAmount > 499 ? 0 : 49;
  if (subtotal === 0) delivery = 0;

  let couponDiscount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === 'percent') {
      couponDiscount = Math.floor((subtotal - totalDiscountAmount) * (appliedCoupon.value / 100));
    } else {
      couponDiscount = appliedCoupon.value;
    }
  }

  const total = subtotal - totalDiscountAmount + delivery - couponDiscount;

  return { subtotal, discount: totalDiscountAmount, delivery, couponDiscount, total };
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// --- ROUTING ---
function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute(); 
}

function handleRoute() {
  const hash = window.location.hash || '#/';
  const mainContent = document.getElementById('main-content');
  
  const parts = hash.slice(2).split('/');
  const path = parts[0] || '';
  const param = parts.slice(1).join('/');
  
  mainContent.className = 'page fade-in';
  
  switch(path) {
    case '': renderHomePage(); break;
    case 'products': renderProductsPage(param); break;
    case 'product': renderProductDetailPage(param); break;
    case 'cart': renderCartPage(); break;
    case 'categories': renderCategoriesPage(); break;
    case 'search': renderSearchPage(decodeURIComponent(param)); break;
    case 'login': renderLoginPage(); break;
    case 'admin': renderAdminPage(param); break;
    default: renderHomePage();
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateCartBadge();
  initScrollAnimations();
}

// --- PAGE RENDER FUNCTIONS ---
function renderHomePage() {
  const mainContent = document.getElementById('main-content');
  
  const flashDeals = PRODUCTS.filter(p => p.flashDeal).slice(0, 10);
  const trending = PRODUCTS.filter(p => p.trending).slice(0, 8);
  const topPicks = [...PRODUCTS].sort(() => 0.5 - Math.random()).slice(0, 8);

  const productCardHtml = (product) => `
    <div class="product-card scroll-animate" onclick="if(!event.target.closest('.add-to-cart-btn')) window.location.hash='#/product/${product.id}'">
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.title}" onerror="this.style.display='none'">
        ${product.flashDeal ? '<span class="badge flash-badge">⚡ Deal</span>' : ''}
        <button class="wishlist-btn" onclick="event.stopPropagation(); showToast('Added to Wishlist! ❤️')">♡</button>
      </div>
      <div class="product-info">
        <p class="brand">${product.brand}</p>
        <h3 class="title">${product.title}</h3>
        <div class="price-row">
          <span class="price">${formatPrice(product.price)}</span>
          <span class="mrp">${formatPrice(product.mrp)}</span>
          <span class="discount">${product.discount}% off</span>
        </div>
        <div class="rating-row">
          <span class="stars">${getStarRating(product.rating)}</span>
          <span class="reviews">(${product.reviews})</span>
        </div>
        ${product.freeDelivery ? '<p class="free-delivery">🚚 Free Delivery</p>' : ''}
        <button class="add-to-cart-btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    </div>
  `;

  mainContent.innerHTML = `
    <!-- Hero Carousel -->
    <div class="hero-carousel">
      <div class="carousel-inner">
        <div class="carousel-slide" style="background: linear-gradient(135deg, #f43397, #ff6b6b);">
          <div class="carousel-content">
            <h1>Mega Fashion Sale</h1>
            <p>Up to 80% off on top brands</p>
            <a href="#/products/category=Women%20Ethnic" class="btn btn-light" style="background: white; color: #f43397;">Shop Now</a>
          </div>
        </div>
        <div class="carousel-slide" style="background: linear-gradient(135deg, #667eea, #764ba2);">
          <div class="carousel-content">
            <h1>Electronics Bonanza</h1>
            <p>Latest gadgets at unbelievable prices</p>
            <a href="#/products/category=Electronics" class="btn btn-light" style="background: white; color: #667eea;">Explore Deals</a>
          </div>
        </div>
        <div class="carousel-slide" style="background: linear-gradient(135deg, #11998e, #38ef7d);">
          <div class="carousel-content">
            <h1>Home Makeover</h1>
            <p>Transform your space with amazing decor</p>
            <a href="#/products/category=Home%20%26%20Kitchen" class="btn btn-light" style="background: white; color: #11998e;">Shop Decor</a>
          </div>
        </div>
        <div class="carousel-slide" style="background: linear-gradient(135deg, #ee9ca7, #ffdde1); color: #333;">
          <div class="carousel-content">
            <h1 style="color: #333; text-shadow: none;">Beauty Essentials</h1>
            <p style="color: #444; text-shadow: none;">Skincare deals you can't miss</p>
            <a href="#/products/category=Beauty" class="btn btn-primary">Shop Beauty</a>
          </div>
        </div>
      </div>
      <button class="carousel-prev">❮</button>
      <button class="carousel-next">❯</button>
      <div class="carousel-dots">
        <span class="dot active" data-slide="0"></span>
        <span class="dot" data-slide="1"></span>
        <span class="dot" data-slide="2"></span>
        <span class="dot" data-slide="3"></span>
      </div>
    </div>

    <!-- Categories Circular -->
    <div class="container section">
      <h2 class="section-title">Shop by Category</h2>
      <div class="category-circles-grid">
        ${CATEGORIES.map(c => `
          <a href="#/products/category=${encodeURIComponent(c.name)}" class="category-circle-item">
            <div class="category-circle">${c.icon}</div>
            <span>${c.name}</span>
          </a>
        `).join('')}
      </div>
    </div>

    <!-- Flash Deals -->
    <div class="container section">
      <div class="section-header">
        <h2 class="section-title">⚡ Flash Deals</h2>
        <div class="countdown-timer">
          Ends in: 
          <span class="timer-box timer-hours">06</span> :
          <span class="timer-box timer-minutes">45</span> :
          <span class="timer-box timer-seconds">30</span>
        </div>
      </div>
      <div class="horizontal-scroll-container">
        ${flashDeals.map(productCardHtml).join('')}
      </div>
    </div>

    <!-- Trending -->
    <div class="container section">
      <h2 class="section-title">🔥 Trending Products</h2>
      <div class="products-grid">
        ${trending.map(productCardHtml).join('')}
      </div>
    </div>

    <!-- Top Picks -->
    <div class="container section">
      <h2 class="section-title">⭐ Top Picks For You</h2>
      <div class="products-grid">
        ${topPicks.map(productCardHtml).join('')}
      </div>
    </div>

    <!-- App Download CTA -->
    <div class="container section">
      <div class="app-download-banner" style="background: linear-gradient(135deg, #fce4ec, #f8bbd0); border-radius: 16px; padding: 50px 40px; text-align: center; box-shadow: var(--shadow-md);">
        <h2 style="font-size: 2rem; color: #d1207a; margin-bottom: 10px;">Download the Misho App</h2>
        <p style="font-size: 1.1rem; color: #555; margin-bottom: 25px;">Get Extra 20% Off on your first order. Use code: <strong>APP20</strong></p>
        <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
          <button class="btn btn-primary btn-lg" style="box-shadow: 0 4px 15px rgba(244, 51, 151, 0.4);">📱 Download for Android</button>
          <button class="btn btn-secondary btn-lg" style="background: white; border: 2px solid white; color: #f43397; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">🍏 Download for iOS</button>
        </div>
      </div>
    </div>
  `;
  
  initCarousel();
  startCountdown(new Date().getTime() + 6 * 60 * 60 * 1000 + 45 * 60 * 1000);
}

function renderProductsPage(queryString) {
  const mainContent = document.getElementById('main-content');
  let categoryFilter = '';
  
  if (queryString.startsWith('category=')) {
    categoryFilter = decodeURIComponent(queryString.split('=')[1]);
  } else if (queryString.startsWith('deals=')) {
    // Special handling if needed
  } else if (queryString.startsWith('trending=')) {
    // Special handling if needed
  }

  window.currentProductsPageFilter = {
    category: categoryFilter ? [categoryFilter] : [],
    priceMax: 5000,
    ratingMin: 0,
    discountMin: 0,
    sort: 'popular'
  };

  mainContent.innerHTML = `
    <div class="container products-page-layout section">
      <aside class="filters-sidebar">
        <div class="filter-header">
          <h3>Filters</h3>
          <button class="btn-text" onclick="resetFilters()">Clear All</button>
        </div>
        
        <div class="filter-group">
          <h4>Category</h4>
          <div class="filter-options">
            ${CATEGORIES.map(c => `
              <label class="checkbox-label">
                <input type="checkbox" value="${c.name}" class="cat-filter" ${categoryFilter === c.name ? 'checked' : ''} onchange="applyFilters()">
                ${c.name}
              </label>
            `).join('')}
          </div>
        </div>

        <div class="filter-group">
          <h4>Max Price: <span id="price-val">₹${window.currentProductsPageFilter.priceMax}</span></h4>
          <input type="range" id="price-filter" min="0" max="5000" step="100" value="5000" oninput="document.getElementById('price-val').innerText = '₹' + this.value" onchange="applyFilters()">
        </div>

        <div class="filter-group">
          <h4>Rating</h4>
          <div class="filter-options">
            <label class="radio-label"><input type="radio" name="rating" value="4" onchange="applyFilters()"> 4★ & above</label>
            <label class="radio-label"><input type="radio" name="rating" value="3" onchange="applyFilters()"> 3★ & above</label>
            <label class="radio-label"><input type="radio" name="rating" value="0" checked onchange="applyFilters()"> All Ratings</label>
          </div>
        </div>

        <div class="filter-group">
          <h4>Discount</h4>
          <div class="filter-options">
            <label class="radio-label"><input type="radio" name="discount" value="50" onchange="applyFilters()"> 50% or more</label>
            <label class="radio-label"><input type="radio" name="discount" value="30" onchange="applyFilters()"> 30% or more</label>
            <label class="radio-label"><input type="radio" name="discount" value="10" onchange="applyFilters()"> 10% or more</label>
            <label class="radio-label"><input type="radio" name="discount" value="0" checked onchange="applyFilters()"> All Discounts</label>
          </div>
        </div>
      </aside>

      <div class="products-main">
        <div class="products-header">
          <h2 id="products-count-title">Loading...</h2>
          <div class="sort-box">
            <label>Sort by:</label>
            <select id="sort-filter" onchange="applyFilters()">
              <option value="popular">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
        
        <button class="mobile-filter-btn" onclick="document.querySelector('.filters-sidebar').classList.toggle('active')">
          ⚙️ Filters
        </button>

        <div id="filtered-products-grid" class="products-grid">
          <!-- Products injected here -->
        </div>
        
        <div class="pagination">
          <button class="btn-outline">Previous</button>
          <button class="btn-primary">1</button>
          <button class="btn-outline">2</button>
          <button class="btn-outline">3</button>
          <button class="btn-outline">Next</button>
        </div>
      </div>
    </div>
  `;

  // Define global for this view
  window.applyFilters = () => {
    const checkedCats = Array.from(document.querySelectorAll('.cat-filter:checked')).map(cb => cb.value);
    const maxPrice = parseInt(document.getElementById('price-filter').value);
    const minRating = parseInt(document.querySelector('input[name="rating"]:checked').value);
    const minDiscount = parseInt(document.querySelector('input[name="discount"]:checked').value);
    const sort = document.getElementById('sort-filter').value;

    let filtered = PRODUCTS.filter(p => {
      if (checkedCats.length > 0 && !checkedCats.includes(p.category)) return false;
      if (p.price > maxPrice) return false;
      if (parseFloat(p.rating) < minRating) return false;
      if (p.discount < minDiscount) return false;
      return true;
    });

    if (sort === 'price-low') filtered.sort((a,b) => a.price - b.price);
    else if (sort === 'price-high') filtered.sort((a,b) => b.price - a.price);
    else if (sort === 'rating') filtered.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating));
    else filtered.sort((a,b) => b.reviews - a.reviews); // popular

    document.getElementById('products-count-title').innerText = `${filtered.length} Products Found`;
    
    const grid = document.getElementById('filtered-products-grid');
    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 50px;">
        <h3 style="font-size: 24px; margin-bottom: 10px;">No Products Found 😔</h3>
        <p>Try adjusting your filters to find what you're looking for.</p>
      </div>`;
    } else {
      grid.innerHTML = filtered.map(p => `
        <div class="product-card scroll-animate" onclick="if(!event.target.closest('.add-to-cart-btn')) window.location.hash='#/product/${p.id}'">
          <div class="product-image-container">
            <img src="${p.image}" alt="${p.title}" onerror="this.style.display='none'">
            ${p.flashDeal ? '<span class="badge flash-badge">⚡ Deal</span>' : ''}
            <button class="wishlist-btn" onclick="event.stopPropagation(); showToast('Added to Wishlist! ❤️')">♡</button>
          </div>
          <div class="product-info">
            <p class="brand">${p.brand}</p>
            <h3 class="title">${p.title}</h3>
            <div class="price-row">
              <span class="price">${formatPrice(p.price)}</span>
              <span class="mrp">${formatPrice(p.mrp)}</span>
              <span class="discount">${p.discount}% off</span>
            </div>
            <div class="rating-row">
              <span class="stars">${getStarRating(p.rating)}</span>
              <span class="reviews">(${p.reviews})</span>
            </div>
            ${p.freeDelivery ? '<p class="free-delivery">🚚 Free Delivery</p>' : ''}
            <button class="add-to-cart-btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
          </div>
        </div>
      `).join('');
    }
  };

  window.resetFilters = () => {
    document.querySelectorAll('.cat-filter').forEach(cb => cb.checked = false);
    document.getElementById('price-filter').value = 5000;
    document.getElementById('price-val').innerText = '₹5000';
    document.querySelector('input[name="rating"][value="0"]').checked = true;
    document.querySelector('input[name="discount"][value="0"]').checked = true;
    document.getElementById('sort-filter').value = 'popular';
    window.applyFilters();
  };

  // Initial render
  setTimeout(window.applyFilters, 0);
}

function renderProductDetailPage(productId) {
  const mainContent = document.getElementById('main-content');
  const product = PRODUCTS.find(p => p.id === parseInt(productId));
  
  if (!product) {
    mainContent.innerHTML = `<div class="container section empty-state">
      <h1>Product Not Found 🔍</h1>
      <p>The product you are looking for does not exist or has been removed.</p>
      <a href="#/" class="btn-primary" style="display:inline-block; margin-top:20px;">Go Home</a>
    </div>`;
    return;
  }

  const productReviews = REVIEWS.filter(r => r.productId === product.id);
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 6);

  window.currentSelectedSize = product.sizes ? product.sizes[0] : null;
  window.currentQuantity = 1;

  mainContent.innerHTML = `
    <div class="container section">
      <div class="breadcrumb">
        <a href="#/">Home</a> > <a href="#/products/category=${encodeURIComponent(product.category)}">${product.category}</a> > <span>${product.title}</span>
      </div>
      
      <div class="product-detail-layout">
        <!-- Left: Images -->
        <div class="product-gallery">
          <div class="main-image-box">
            <img id="main-product-image" src="${product.image}" alt="${product.title}" onerror="this.style.display='none'">
          </div>
          <div class="thumbnail-row">
            ${product.images.map(img => `
              <img src="${img}" class="thumbnail-img" onclick="document.getElementById('main-product-image').src = this.src" onerror="this.style.display='none'">
            `).join('')}
          </div>
        </div>

        <!-- Right: Info -->
        <div class="product-details">
          <h2 class="brand">${product.brand}</h2>
          <h1 class="title">${product.title}</h1>
          <div class="rating-badge-row">
            <span class="rating-badge">${product.rating} ★</span>
            <a href="#reviews-tab" class="reviews-link">${product.reviews} Ratings & Reviews</a>
          </div>

          <div class="price-container">
            <span class="current-price">${formatPrice(product.price)}</span>
            <span class="original-price">${formatPrice(product.mrp)}</span>
            <span class="discount-pill">${product.discount}% OFF</span>
            ${product.freeDelivery ? '<div class="free-delivery-tag">🚚 Free Delivery</div>' : ''}
          </div>

          ${product.sizes ? `
            <div class="size-selector">
              <h3>Select Size</h3>
              <div class="size-options">
                ${product.sizes.map((s, idx) => `
                  <button class="size-btn ${idx === 0 ? 'active' : ''}" onclick="document.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active')); this.classList.add('active'); window.currentSelectedSize = '${s}';">${s}</button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <div class="quantity-selector">
            <h3>Quantity</h3>
            <div class="qty-controls">
              <button onclick="if(window.currentQuantity > 1) { window.currentQuantity--; document.getElementById('qty-display').innerText = window.currentQuantity; }">-</button>
              <span id="qty-display">1</span>
              <button onclick="if(window.currentQuantity < 10) { window.currentQuantity++; document.getElementById('qty-display').innerText = window.currentQuantity; }">+</button>
            </div>
          </div>

          <div class="action-buttons">
            <button class="btn-primary btn-lg" onclick="addToCart(${product.id}, window.currentSelectedSize, window.currentQuantity)">🛒 Add to Cart</button>
            <button class="btn-accent btn-lg" onclick="addToCart(${product.id}, window.currentSelectedSize, window.currentQuantity); window.location.hash='#/cart';">⚡ Buy Now</button>
          </div>
          
          <div class="product-description-short" style="margin-top: 30px; line-height: 1.6; color: #555;">
            <h3>Product Details</h3>
            <p>${product.description}</p>
          </div>
        </div>
      </div>

      <!-- Tabs Section -->
      <div class="product-tabs-section" style="margin-top: 50px;">
        <div class="tabs-header">
          <button class="tab-btn active" onclick="switchTab('description')">Description</button>
          <button class="tab-btn" onclick="switchTab('specifications')">Specifications</button>
          <button class="tab-btn" id="reviews-tab-btn" onclick="switchTab('reviews')">Reviews (${productReviews.length})</button>
        </div>
        <div class="tabs-content">
          <div id="tab-description" class="tab-pane active">
            <p style="font-size: 16px; line-height: 1.8;">${product.description}</p>
          </div>
          <div id="tab-specifications" class="tab-pane">
            <table class="specs-table">
              ${Object.entries(product.specs).map(([key, val]) => `
                <tr>
                  <th>${key}</th>
                  <td>${val}</td>
                </tr>
              `).join('')}
            </table>
          </div>
          <div id="tab-reviews" class="tab-pane">
            ${productReviews.length ? productReviews.map(r => `
              <div class="review-card">
                <div class="review-header">
                  <span class="rating-badge">${r.rating} ★</span>
                  <span class="author">${r.author}</span>
                  <span class="date">${r.date}</span>
                </div>
                <p class="comment">${r.comment}</p>
                <button class="btn-text" style="font-size:12px;" onclick="showToast('Thank you for your feedback!')">👍 Helpful (${r.helpful})</button>
              </div>
            `).join('') : '<p>No reviews yet. Be the first to review this product!</p>'}
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div class="related-products section">
        <h2 class="section-title">Similar Products</h2>
        <div class="horizontal-scroll-container">
          ${relatedProducts.map(p => `
            <div class="product-card" onclick="if(!event.target.closest('.add-to-cart-btn')) window.location.hash='#/product/${p.id}'">
              <div class="product-image-container">
                <img src="${p.image}" alt="${p.title}" onerror="this.style.display='none'">
              </div>
              <div class="product-info">
                <p class="brand">${p.brand}</p>
                <h3 class="title">${p.title}</h3>
                <div class="price-row">
                  <span class="price">${formatPrice(p.price)}</span>
                  <span class="mrp">${formatPrice(p.mrp)}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  window.switchTab = (tabId) => {
    document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(`tab-${tabId}`).classList.add('active');
    event.target.classList.add('active');
  };
}

function renderCartPage() {
  const mainContent = document.getElementById('main-content');
  
  if (cart.length === 0) {
    mainContent.innerHTML = `
      <div class="container section empty-state" style="padding: 100px 20px; text-align: center;">
        <div style="font-size: 80px; margin-bottom: 20px;">🛒</div>
        <h1 style="margin-bottom: 10px;">Your cart is empty</h1>
        <p style="color: #666; margin-bottom: 30px;">Looks like you haven't added anything yet.</p>
        <a href="#/" class="btn-primary btn-lg" style="display:inline-block;">Continue Shopping</a>
      </div>
    `;
    return;
  }

  const totals = getCartTotal();

  mainContent.innerHTML = `
    <div class="container section cart-page-layout">
      <div class="cart-items-list">
        <h2>My Cart (${getCartCount()} Items)</h2>
        ${cart.map(item => {
          const p = PRODUCTS.find(x => x.id === item.productId);
          if(!p) return '';
          return `
            <div class="cart-item">
              <img src="${p.image}" alt="${p.title}" class="cart-item-image" onerror="this.style.display='none'">
              <div class="cart-item-details">
                <h3 class="title">${p.title}</h3>
                <p class="brand">By ${p.brand}</p>
                ${item.size ? `<p class="size">Size: ${item.size}</p>` : ''}
                <div class="price-row" style="margin-top: 10px;">
                  <span class="price" style="font-size: 18px; font-weight: bold;">${formatPrice(p.price)}</span>
                  <span class="mrp" style="text-decoration: line-through; color: #888; font-size: 14px; margin-left: 8px;">${formatPrice(p.mrp)}</span>
                  <span class="discount" style="color: #038d63; font-weight: bold; margin-left: 8px;">${p.discount}% Off</span>
                </div>
                
                <div class="cart-item-actions" style="margin-top: 15px; display: flex; align-items: center; justify-content: space-between;">
                  <div class="qty-controls" style="display: flex; align-items: center; border: 1px solid #ddd; border-radius: 4px;">
                    <button style="padding: 5px 12px; border: none; background: #f9f9f9; cursor:pointer;" onclick="updateCartQty(${p.id}, '${item.size}', -1)">-</button>
                    <span style="padding: 5px 12px; border-left: 1px solid #ddd; border-right: 1px solid #ddd;">${item.quantity}</span>
                    <button style="padding: 5px 12px; border: none; background: #f9f9f9; cursor:pointer;" onclick="updateCartQty(${p.id}, '${item.size}', 1)">+</button>
                  </div>
                  <button class="btn-text" style="color: #ff3b3b;" onclick="removeFromCart(${p.id}, '${item.size}')">🗑️ Remove</button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="cart-price-details">
        <div class="price-details-card" style="border: 1px solid #eaeaec; border-radius: 8px; padding: 20px; position: sticky; top: 100px;">
          <h3 style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Price Details</h3>
          
          <div class="price-row-detail" style="display:flex; justify-content:space-between; margin-bottom: 15px;">
            <span>Price (${getCartCount()} items)</span>
            <span>${formatPrice(totals.subtotal)}</span>
          </div>
          <div class="price-row-detail" style="display:flex; justify-content:space-between; margin-bottom: 15px; color: #038d63;">
            <span>Discount</span>
            <span>- ${formatPrice(totals.discount)}</span>
          </div>
          <div class="price-row-detail" style="display:flex; justify-content:space-between; margin-bottom: 15px;">
            <span>Delivery Charges</span>
            <span style="color: ${totals.delivery === 0 ? '#038d63' : '#333'}">${totals.delivery === 0 ? 'FREE' : formatPrice(totals.delivery)}</span>
          </div>
          
          ${totals.couponDiscount > 0 ? `
            <div class="price-row-detail" style="display:flex; justify-content:space-between; margin-bottom: 15px; color: #038d63;">
              <span>Coupon Applied (${appliedCoupon.code})</span>
              <span>- ${formatPrice(totals.couponDiscount)}</span>
            </div>
          ` : ''}
          
          <div class="total-row" style="display:flex; justify-content:space-between; margin-top: 20px; border-top: 1px dashed #ccc; padding-top: 15px; font-weight: bold; font-size: 18px;">
            <span>Total Amount</span>
            <span>${formatPrice(totals.total)}</span>
          </div>
          
          <p style="color: #038d63; font-weight: 500; text-align: center; margin-top: 15px; background: #e6f6f1; padding: 10px; border-radius: 4px;">
            You will save ${formatPrice(totals.discount + totals.couponDiscount)} on this order
          </p>

          <div class="coupon-section" style="margin-top: 25px;">
            ${appliedCoupon ? `
              <div style="background:#f4f4f5; padding:10px; border-radius:4px; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:bold;">✅ ${appliedCoupon.code} applied</span>
                <button class="btn-text" style="color:red; font-size:12px;" onclick="window.removeCoupon()">Remove</button>
              </div>
            ` : `
              <div style="display:flex; gap:10px;">
                <input type="text" id="coupon-input" placeholder="Enter Coupon Code" style="flex:1; padding:10px; border:1px solid #ccc; border-radius:4px;">
                <button class="btn-secondary" onclick="window.applyCoupon()">Apply</button>
              </div>
              <p style="font-size:11px; color:#777; margin-top:5px;">Try: MEESHO10, SAVE100</p>
            `}
          </div>

          <button class="btn-primary btn-block btn-lg" style="margin-top: 25px; width: 100%;" onclick="window.placeOrder()">Place Order</button>
        </div>
      </div>
    </div>
  `;

  window.applyCoupon = () => {
    const code = document.getElementById('coupon-input').value.toUpperCase().trim();
    if (code === 'MEESHO10') {
      appliedCoupon = { code: 'MEESHO10', type: 'percent', value: 10 };
      showToast('Coupon applied successfully!', 'success');
      renderCartPage();
    } else if (code === 'SAVE100') {
      appliedCoupon = { code: 'SAVE100', type: 'flat', value: 100 };
      showToast('Coupon applied successfully!', 'success');
      renderCartPage();
    } else {
      showToast('Invalid coupon code.', 'error');
    }
  };

  window.removeCoupon = () => {
    appliedCoupon = null;
    showToast('Coupon removed.', 'info');
    renderCartPage();
  };

  window.placeOrder = () => {
    // Show modal or toast
    showToast('Order placed successfully! 🎉', 'success');
    cart = [];
    appliedCoupon = null;
    saveCart();
    updateCartBadge();
    setTimeout(() => {
      window.location.hash = '#/';
    }, 2000);
  };
}

function renderCategoriesPage() {
  const mainContent = document.getElementById('main-content');
  
  mainContent.innerHTML = `
    <div class="container section">
      <h1 class="section-title" style="text-align: center; margin-bottom: 40px; font-size: 32px;">All Categories</h1>
      <div class="categories-page-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 30px;">
        ${CATEGORIES.map(c => `
          <div class="category-card" style="background: white; padding: 30px 20px; border-radius: 12px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer;" 
               onclick="window.location.hash='#/products/category=${encodeURIComponent(c.name)}'"
               onmouseenter="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 25px rgba(0,0,0,0.1)'"
               onmouseleave="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)'">
            <div class="cat-emoji" style="font-size: 60px; margin-bottom: 20px;">${c.icon}</div>
            <h3 style="margin-bottom: 10px; color: #333;">${c.name}</h3>
            <p style="color: #666; font-size: 14px;">${c.subcategories.join(', ')}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSearchPage(query) {
  const mainContent = document.getElementById('main-content');
  const q = query.toLowerCase();
  
  const results = PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(q) || 
    p.brand.toLowerCase().includes(q) || 
    p.category.toLowerCase().includes(q)
  );

  if (results.length === 0) {
    mainContent.innerHTML = `
      <div class="container section empty-state" style="text-align: center; padding: 80px 20px;">
        <div style="font-size: 60px; margin-bottom: 20px;">🔍</div>
        <h2>No results found for "${query}"</h2>
        <p style="margin: 15px 0 30px; color: #666;">Try searching for something else or check out our popular categories.</p>
        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
          ${CATEGORIES.slice(0, 5).map(c => `<a href="#/products/category=${encodeURIComponent(c.name)}" class="suggestion-tag" style="padding: 8px 16px; background: #f0f0f0; border-radius: 20px; text-decoration: none; color: #333;">${c.name}</a>`).join('')}
        </div>
      </div>
    `;
    return;
  }

  mainContent.innerHTML = `
    <div class="container section">
      <h2 class="section-title">Search results for "${query}" <span style="font-size: 16px; color: #666; font-weight: normal;">(${results.length} items)</span></h2>
      <div class="products-grid">
        ${results.map(p => `
          <div class="product-card scroll-animate" onclick="if(!event.target.closest('.add-to-cart-btn')) window.location.hash='#/product/${p.id}'">
            <div class="product-image-container">
              <img src="${p.image}" alt="${p.title}" onerror="this.style.display='none'">
              ${p.flashDeal ? '<span class="badge flash-badge">⚡ Deal</span>' : ''}
              <button class="wishlist-btn" onclick="event.stopPropagation(); showToast('Added to Wishlist! ❤️')">♡</button>
            </div>
            <div class="product-info">
              <p class="brand">${p.brand}</p>
              <h3 class="title">${p.title}</h3>
              <div class="price-row">
                <span class="price">${formatPrice(p.price)}</span>
                <span class="mrp">${formatPrice(p.mrp)}</span>
                <span class="discount">${p.discount}% off</span>
              </div>
              <div class="rating-row">
                <span class="stars">${getStarRating(p.rating)}</span>
                <span class="reviews">(${p.reviews})</span>
              </div>
              ${p.freeDelivery ? '<p class="free-delivery">🚚 Free Delivery</p>' : ''}
              <button class="add-to-cart-btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderLoginPage() {
  const mainContent = document.getElementById('main-content');
  
  mainContent.innerHTML = `
    <div class="auth-page" style="min-height: 80vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #fce4ec, #e8eaf6); padding: 40px 20px;">
      <div class="auth-card" style="background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px); padding: 40px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); width: 100%; max-width: 450px;">
        
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="font-size: 28px; color: #f43397; margin-bottom: 10px;">🛍️ Misho</h1>
          <p style="color: #666;">Sign in to unlock best prices</p>
        </div>

        <div class="auth-tabs" style="display: flex; margin-bottom: 25px; border-bottom: 2px solid #eee;">
          <button class="auth-tab-btn active" style="flex: 1; padding: 10px; background: none; border: none; font-size: 16px; font-weight: bold; color: #f43397; border-bottom: 2px solid #f43397; margin-bottom: -2px; cursor: pointer;" onclick="window.switchAuthTab('login', this)">Login</button>
          <button class="auth-tab-btn" style="flex: 1; padding: 10px; background: none; border: none; font-size: 16px; font-weight: bold; color: #888; cursor: pointer;" onclick="window.switchAuthTab('signup', this)">Sign Up</button>
        </div>

        <div id="auth-login-form">
          <form onsubmit="window.handleAuthSubmit(event)">
            <div style="margin-bottom: 20px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 500;">Phone Number</label>
              <div style="display: flex; gap: 10px;">
                <input type="tel" placeholder="Enter your phone number" required style="flex: 1; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 16px;">
                <button type="button" class="btn-secondary" onclick="showToast('OTP sent successfully!'); document.getElementById('otp-input').disabled = false;">Send OTP</button>
              </div>
            </div>
            
            <div style="margin-bottom: 25px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 500;">OTP</label>
              <input type="text" id="otp-input" placeholder="Enter OTP" disabled required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 16px; box-sizing: border-box;">
            </div>

            <button type="submit" class="auth-btn btn-primary btn-block" style="width: 100%; padding: 14px; font-size: 16px; border-radius: 8px;">Login</button>
          </form>
        </div>

        <div id="auth-signup-form" style="display: none;">
          <form onsubmit="window.handleAuthSubmit(event)">
            <div style="margin-bottom: 20px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 500;">Full Name</label>
              <input type="text" placeholder="Enter your full name" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 16px; box-sizing: border-box;">
            </div>
            <div style="margin-bottom: 20px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 500;">Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 16px; box-sizing: border-box;">
            </div>
            <div style="margin-bottom: 25px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 500;">Email (Optional)</label>
              <input type="email" placeholder="Enter your email" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 16px; box-sizing: border-box;">
            </div>

            <button type="submit" class="auth-btn btn-primary btn-block" style="width: 100%; padding: 14px; font-size: 16px; border-radius: 8px;">Create Account</button>
          </form>
        </div>

        <div class="social-login" style="margin-top: 30px; text-align: center;">
          <div style="display: flex; align-items: center; margin-bottom: 20px;">
            <hr style="flex: 1; border: none; border-top: 1px solid #ddd;">
            <span style="padding: 0 15px; color: #888; font-size: 14px;">OR</span>
            <hr style="flex: 1; border: none; border-top: 1px solid #ddd;">
          </div>
          <div style="display: flex; gap: 15px;">
            <button style="flex: 1; padding: 12px; background: white; border: 1px solid #ddd; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; font-weight: 500;">
              🔴 Google
            </button>
            <button style="flex: 1; padding: 12px; background: white; border: 1px solid #ddd; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; font-weight: 500;">
              🔵 Facebook
            </button>
          </div>
        </div>

      </div>
    </div>
  `;

  window.switchAuthTab = (tab, btn) => {
    document.querySelectorAll('.auth-tab-btn').forEach(b => {
      b.style.color = '#888';
      b.style.borderBottom = 'none';
      b.classList.remove('active');
    });
    btn.style.color = '#f43397';
    btn.style.borderBottom = '2px solid #f43397';
    btn.classList.add('active');

    if (tab === 'login') {
      document.getElementById('auth-login-form').style.display = 'block';
      document.getElementById('auth-signup-form').style.display = 'none';
    } else {
      document.getElementById('auth-login-form').style.display = 'none';
      document.getElementById('auth-signup-form').style.display = 'block';
    }
  };

  window.handleAuthSubmit = (e) => {
    e.preventDefault();
    showToast('Success! Redirecting...', 'success');
    setTimeout(() => {
      window.location.hash = '#/';
    }, 1500);
  };
}

// --- HEADER AND FOOTER RENDERING ---
function renderHeader() {
  const header = document.getElementById('header');
  if(!header) return;
  header.innerHTML = `
    <div class="header-top" style="background: #f43397; color: white; text-align: center; padding: 8px; font-size: 14px; font-weight: 500;">
      <span class="offer-text">🎉 Download App & Get Extra 10% Off | Free Delivery on First Order | New Users: Use Code WELCOME</span>
    </div>
    
    <div class="header-main" style="border-bottom: 1px solid #eee; padding: 15px 0; position: sticky; top: 0; background: white; z-index: 1000; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
      <div class="container" style="display: flex; align-items: center; justify-content: space-between; gap: 20px;">
        
        <div style="display: flex; align-items: center; gap: 15px;">
          <button class="mobile-menu-btn" style="background: none; border: none; font-size: 24px; cursor: pointer; display: none;" onclick="document.querySelector('.nav-menu').classList.toggle('active')">☰</button>
          <a href="#/" class="logo" style="font-size: 24px; font-weight: 800; color: #f43397; text-decoration: none;">🛍️ Misho</a>
        </div>
        
        <form class="search-bar" style="flex: 1; max-width: 600px; display: flex;" onsubmit="event.preventDefault(); const val = this.querySelector('input').value; if(val) window.location.hash='#/search/'+encodeURIComponent(val);">
          <input type="text" placeholder="Search for products, brands and more..." style="flex: 1; padding: 12px 20px; border: 1px solid #ccc; border-radius: 24px 0 0 24px; font-size: 15px; outline: none;">
          <button type="submit" style="padding: 12px 25px; background: #f8f8f9; border: 1px solid #ccc; border-left: none; border-radius: 0 24px 24px 0; cursor: pointer; color: #666;">🔍</button>
        </form>
        
        <div class="header-actions" style="display: flex; gap: 25px;">
          <a href="#/login" class="action-btn" style="text-decoration: none; color: #333; display: flex; flex-direction: column; align-items: center; font-size: 14px;">
            <span style="font-size: 20px; margin-bottom: 3px;">👤</span>
            <span>Login</span>
          </a>
          <a href="#/cart" class="action-btn" style="text-decoration: none; color: #333; display: flex; flex-direction: column; align-items: center; font-size: 14px; position: relative;">
            <span style="font-size: 20px; margin-bottom: 3px;">🛒</span>
            <span class="cart-badge" style="position: absolute; top: -5px; right: 0; background: #f43397; color: white; font-size: 11px; padding: 2px 6px; border-radius: 10px; font-weight: bold; display: none;">0</span>
            <span>Cart</span>
          </a>
        </div>
        
      </div>
    </div>

    <nav class="nav-menu" style="background: white; border-bottom: 1px solid #eee;">
      <div class="container" style="display: flex; gap: 30px; padding: 12px 0;">
        <a href="#/" style="text-decoration: none; color: #333; font-weight: 500;" onclick="document.querySelector('.nav-menu').classList.remove('active')">Home</a>
        <a href="#/categories" style="text-decoration: none; color: #333; font-weight: 500;" onclick="document.querySelector('.nav-menu').classList.remove('active')">Categories</a>
        <a href="#/products/trending=true" style="text-decoration: none; color: #333; font-weight: 500;" onclick="document.querySelector('.nav-menu').classList.remove('active')">Trending</a>
        <a href="#/products/deals=true" style="text-decoration: none; color: #333; font-weight: 500;" onclick="document.querySelector('.nav-menu').classList.remove('active')">Deals</a>
      </div>
    </nav>
  `;
}

function renderFooter() {
  const footer = document.getElementById('footer');
  if(!footer) return;
  footer.innerHTML = `
    <div style="background: #f8f8f9; padding: 60px 0 20px; margin-top: 60px; color: #333;">
      <div class="container">
        <div class="footer-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; margin-bottom: 40px;">
          
          <div class="footer-col">
            <h4 style="font-size: 16px; margin-bottom: 20px; color: #f43397;">Shop</h4>
            <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">
              <li><a href="#/products/category=Women Ethnic" style="color: #666; text-decoration: none;">Women Ethnic</a></li>
              <li><a href="#/products/category=Men" style="color: #666; text-decoration: none;">Men</a></li>
              <li><a href="#/products/category=Electronics" style="color: #666; text-decoration: none;">Electronics</a></li>
              <li><a href="#/products/category=Beauty" style="color: #666; text-decoration: none;">Beauty</a></li>
              <li><a href="#/products/category=Home & Kitchen" style="color: #666; text-decoration: none;">Home</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h4 style="font-size: 16px; margin-bottom: 20px; color: #f43397;">Customer Service</h4>
            <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">
              <li><a href="#" style="color: #666; text-decoration: none;">Help Center</a></li>
              <li><a href="#" style="color: #666; text-decoration: none;">Returns</a></li>
              <li><a href="#" style="color: #666; text-decoration: none;">Shipping</a></li>
              <li><a href="#" style="color: #666; text-decoration: none;">FAQ</a></li>
              <li><a href="#" style="color: #666; text-decoration: none;">Track Order</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h4 style="font-size: 16px; margin-bottom: 20px; color: #f43397;">About Us</h4>
            <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">
              <li><a href="#" style="color: #666; text-decoration: none;">Our Story</a></li>
              <li><a href="#" style="color: #666; text-decoration: none;">Careers</a></li>
              <li><a href="#" style="color: #666; text-decoration: none;">Press</a></li>
              <li><a href="#/admin" style="color: #f43397; font-weight: bold; text-decoration: none;">Seller/Admin Panel</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h4 style="font-size: 16px; margin-bottom: 20px; color: #f43397;">Contact</h4>
            <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">
              <li style="color: #666;">📧 support@misho.com</li>
              <li style="color: #666;">📞 +91 98765 43210</li>
              <li style="color: #666;">📍 123 Tech Park, Bangalore</li>
              <li style="color: #666;">⏰ Mon - Fri, 9am - 6pm</li>
            </ul>
            <div class="footer-social" style="margin-top: 20px; font-size: 24px; display: flex; gap: 15px;">
              <a href="#" style="text-decoration: none;">📘</a>
              <a href="#" style="text-decoration: none;">📸</a>
              <a href="#" style="text-decoration: none;">🐦</a>
              <a href="#" style="text-decoration: none;">📺</a>
            </div>
          </div>
          
        </div>
        
        <div class="footer-bottom" style="border-top: 1px solid #ddd; padding-top: 20px; text-align: center; color: #888; font-size: 14px;">
          © 2024 Misho. All rights reserved. | Made with ❤️ in India
        </div>
      </div>
    </div>
  `;
}

// --- UTILITY FUNCTIONS ---

function showToast(message, type = 'success') {
  const container = document.querySelector('.toast-container');
  if(!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  if (type === 'error') icon = '❌';
  
  toast.innerHTML = `<span style="margin-right:8px;">${icon}</span> ${message}`;
  
  // Basic inline styles for toast since we didn't inject CSS file yet
  toast.style.cssText = `
    background: white; 
    padding: 12px 20px; 
    border-radius: 8px; 
    box-shadow: 0 4px 12px rgba(0,0,0,0.15); 
    margin-top: 10px;
    display: flex;
    align-items: center;
    border-left: 4px solid ${type === 'success' ? '#038d63' : type === 'error' ? '#ff3b3b' : '#3498db'};
    animation: slideInRight 0.3s forwards;
    transform: translateX(100%);
  `;
  
  container.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `;
  
  // Inject keyframes if not exists
  if(!document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.innerHTML = `
      @keyframes slideInRight { to { transform: translateX(0); } }
      @keyframes fadeOutRight { to { transform: translateX(100%); opacity: 0; } }
    `;
    document.head.appendChild(style);
  }

  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'fadeOutRight 0.3s forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function getStarRating(rating) {
  const num = parseFloat(rating);
  const fullStars = Math.floor(num);
  const halfStar = num - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  
  let html = '';
  for(let i=0; i<fullStars; i++) html += '<span style="color:#f39c12;">★</span>';
  if(halfStar) html += '<span style="color:#f39c12;">★</span>'; // simplification for half star
  for(let i=0; i<emptyStars; i++) html += '<span style="color:#ccc;">☆</span>';
  return html;
}

function formatPrice(price) {
  return '₹' + parseInt(price).toLocaleString('en-IN');
}

function initCarousel() {
  const carousel = document.querySelector('.hero-carousel');
  if(!carousel) return;

  const inner = carousel.querySelector('.carousel-inner');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const dots = carousel.querySelectorAll('.dot');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  let interval;

  const goToSlide = (index) => {
    currentIndex = (index + totalSlides) % totalSlides;
    inner.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  const startAutoSlide = () => {
    clearInterval(interval);
    interval = setInterval(nextSlide, 4000);
  };
  const stopAutoSlide = () => clearInterval(interval);

  nextBtn.onclick = () => { nextSlide(); startAutoSlide(); };
  prevBtn.onclick = () => { prevSlide(); startAutoSlide(); };
  
  dots.forEach((dot, idx) => {
    dot.onclick = () => { goToSlide(idx); startAutoSlide(); };
  });

  carousel.onmouseenter = stopAutoSlide;
  carousel.onmouseleave = startAutoSlide;

  startAutoSlide();
}

function startCountdown(targetTime) {
  const hoursEl = document.querySelector('.timer-hours');
  const minutesEl = document.querySelector('.timer-minutes');
  const secondsEl = document.querySelector('.timer-seconds');
  if(!hoursEl) return;

  const updateTimer = () => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance < 0) {
      clearInterval(interval);
      hoursEl.innerText = "00";
      minutesEl.innerText = "00";
      secondsEl.innerText = "00";
      return;
    }

    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    hoursEl.innerText = h < 10 ? '0' + h : h;
    minutesEl.innerText = m < 10 ? '0' + m : m;
    secondsEl.innerText = s < 10 ? '0' + s : s;
  };

  const interval = setInterval(updateTimer, 1000);
  updateTimer();
}

function initScrollAnimations() {
  const elements = document.querySelectorAll('.scroll-animate');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

function initDarkMode() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'theme-toggle';
  toggleBtn.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
  
  // Basic inline style for the toggle button
  toggleBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #333;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
  `;
  
  toggleBtn.onmouseenter = () => toggleBtn.style.transform = 'scale(1.1)';
  toggleBtn.onmouseleave = () => toggleBtn.style.transform = 'scale(1)';
  
  toggleBtn.onclick = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggleBtn.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
  };
  
  document.body.appendChild(toggleBtn);
  
  // Basic dark mode CSS injection if not exists
  if(!document.getElementById('dark-mode-styles')) {
    const style = document.createElement('style');
    style.id = 'dark-mode-styles';
    style.innerHTML = `
      [data-theme="dark"] body { background-color: #121212; color: #e0e0e0; }
      [data-theme="dark"] .header-main, [data-theme="dark"] .nav-menu { background-color: #1e1e1e; border-color: #333; }
      [data-theme="dark"] .header-main a, [data-theme="dark"] .nav-menu a { color: #e0e0e0 !important; }
      [data-theme="dark"] .product-card { background-color: #1e1e1e; border-color: #333; color: #e0e0e0; }
      [data-theme="dark"] .product-card .title { color: #fff; }
      [data-theme="dark"] .footer { background-color: #1a1a1a; }
      [data-theme="dark"] input, [data-theme="dark"] select { background-color: #333; color: white; border-color: #555; }
      [data-theme="dark"] .filters-sidebar { background-color: #1e1e1e; }
      [data-theme="dark"] .category-card, [data-theme="dark"] .auth-card { background-color: #1e1e1e !important; box-shadow: 0 4px 15px rgba(0,0,0,0.5) !important; }
      [data-theme="dark"] .category-card h3 { color: #fff !important; }
    `;
    document.head.appendChild(style);
  }
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if(!badge) return;
  const count = getCartCount();
  if (count > 0) {
    badge.innerText = count;
    badge.style.display = 'block';
  } else {
    badge.style.display = 'none';
  }
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  // Create toast container div
  if(!document.querySelector('.toast-container')){
    const toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }
  
  renderHeader();
  renderFooter();
  initRouter();
  initDarkMode();
// --- USER DATA ---
const DEFAULT_USERS = [
  { id: 1, name: 'Aarav Sharma', email: 'aarav@example.com', phone: '9876543210', role: 'Admin' },
  { id: 2, name: 'Priya Patel', email: 'priya@example.com', phone: '9876543211', role: 'User' },
  { id: 3, name: 'Rohan Gupta', email: 'rohan@example.com', phone: '9876543212', role: 'User' }
];
let USERS = JSON.parse(localStorage.getItem('mishoUsers')) || DEFAULT_USERS;

function saveUsers() {
  localStorage.setItem('mishoUsers', JSON.stringify(USERS));
}

// --- ADMIN PANEL LOGIC ---
function renderAdminPage(subroute = 'dashboard') {
  const mainContent = document.getElementById('main-content');
  
  mainContent.innerHTML = `
    <div class="admin-container">
      <aside class="admin-sidebar">
        <h2>🛍️ Misho Admin</h2>
        <nav>
          <a href="#/admin/dashboard" class="${subroute === 'dashboard' || !subroute ? 'active' : ''}">📊 Dashboard</a>
          <a href="#/admin/products" class="${subroute === 'products' ? 'active' : ''}">🛍️ Products</a>
          <a href="#/admin/users" class="${subroute === 'users' ? 'active' : ''}">👥 Users</a>
          <a href="#/admin/orders" class="${subroute === 'orders' ? 'active' : ''}">📦 Orders</a>
        </nav>
      </aside>
      <main class="admin-content" id="admin-content-area">
      </main>
    </div>
  `;

  if (subroute === 'products') renderAdminProducts();
  else if (subroute === 'users') renderAdminUsers();
  else if (subroute === 'orders') renderAdminOrders();
  else renderAdminDashboard();
}

function renderAdminDashboard() {
  const adminContent = document.getElementById('admin-content-area');
  const totalSales = PRODUCTS.reduce((acc, p) => acc + (p.price * Math.floor(Math.random() * 50)), 0);
  
  adminContent.innerHTML = `
    <div class="admin-header">
      <h1>Dashboard</h1>
    </div>
    <div class="admin-stats">
      <div class="admin-stat-card">
        <h3>Total Revenue</h3>
        <p>₹${totalSales.toLocaleString('en-IN')}</p>
      </div>
      <div class="admin-stat-card">
        <h3>Total Products</h3>
        <p>${PRODUCTS.length}</p>
      </div>
      <div class="admin-stat-card">
        <h3>Total Orders</h3>
        <p>1,248</p>
      </div>
      <div class="admin-stat-card">
        <h3>Active Users</h3>
        <p>342</p>
      </div>
    </div>
    <div class="admin-section">
      <h2>Recent Orders</h2>
      <div style="overflow-x:auto;">
        <table class="admin-table">
          <thead>
            <tr><th>Order ID</th><th>Customer</th><th>Amount</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>#ORD-9021</td><td>Aarav Sharma</td><td>₹1,299</td><td><span class="status delivered">Delivered</span></td></tr>
            <tr><td>#ORD-9022</td><td>Priya Patel</td><td>₹3,450</td><td><span class="status processing">Processing</span></td></tr>
            <tr><td>#ORD-9023</td><td>Rohan Gupta</td><td>₹899</td><td><span class="status shipped">Shipped</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAdminProducts() {
  const adminContent = document.getElementById('admin-content-area');
  
  adminContent.innerHTML = `
    <div class="admin-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <h1>Manage Products</h1>
      <button class="btn btn-primary" onclick="openAdminProductModal()">+ Add New Product</button>
    </div>
    <div class="admin-table-container">
      <table class="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${PRODUCTS.map(p => `
            <tr>
              <td>${p.id}</td>
              <td><img src="${p.image}" alt="${p.title}" width="40" height="40" style="border-radius:4px; object-fit:cover;"></td>
              <td>${p.title}</td>
              <td>${p.category}</td>
              <td>₹${p.price}</td>
              <td>
                <button class="btn-sm btn-secondary" onclick="openAdminProductModal(${p.id})">Edit</button>
                <button class="btn-sm" style="background:#ff4d4f; color:white; border:none;" onclick="deleteAdminProduct(${p.id})">Delete</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    
    <!-- Product Modal -->
    <div id="admin-product-modal" class="modal-overlay" style="display:none; z-index:2000;">
      <div class="modal-content admin-modal" style="max-width:500px;">
        <span class="close-modal" onclick="closeAdminProductModal()">&times;</span>
        <h2 id="modal-product-title" style="margin-bottom:20px;">Add Product</h2>
        <form id="admin-product-form" onsubmit="saveAdminProduct(event)">
          <input type="hidden" id="admin-p-id">
          
          <div class="form-group">
            <label style="display:block; margin-bottom:5px;">Title</label>
            <input type="text" id="admin-p-title" required style="width:100%; padding:10px; border:1px solid #ccc; border-radius:4px; margin-bottom:15px;">
          </div>
          
          <div class="form-row" style="display:flex; gap:15px; margin-bottom:15px;">
            <div class="form-group" style="flex:1;">
              <label style="display:block; margin-bottom:5px;">Price (₹)</label>
              <input type="number" id="admin-p-price" required style="width:100%; padding:10px; border:1px solid #ccc; border-radius:4px;">
            </div>
            <div class="form-group" style="flex:1;">
              <label style="display:block; margin-bottom:5px;">MRP (₹)</label>
              <input type="number" id="admin-p-mrp" required style="width:100%; padding:10px; border:1px solid #ccc; border-radius:4px;">
            </div>
          </div>
          
          <div class="form-group" style="margin-bottom:15px;">
            <label style="display:block; margin-bottom:5px;">Category</label>
            <select id="admin-p-category" required style="width:100%; padding:10px; border:1px solid #ccc; border-radius:4px;">
              ${CATEGORIES.map(c => `<option value="${c.name}">${c.name}</option>`).join('')}
            </select>
          </div>
          
          <div class="form-group" style="margin-bottom:20px;">
            <label style="display:block; margin-bottom:5px;">Image URL</label>
            <input type="text" id="admin-p-image" required style="width:100%; padding:10px; border:1px solid #ccc; border-radius:4px;" placeholder="./images/tshirt_product.jpg">
          </div>
          
          <button type="submit" class="btn btn-primary" style="width:100%;">Save Product</button>
        </form>
      </div>
    </div>
  `;
}

function renderAdminOrders() {
  const adminContent = document.getElementById('admin-content-area');
  adminContent.innerHTML = `
    <div class="admin-header">
      <h1>Orders</h1>
    </div>
    <p>Detailed order management interface goes here...</p>
  `;
}

window.openAdminProductModal = function(id = null) {
  const modal = document.getElementById('admin-product-modal');
  const form = document.getElementById('admin-product-form');
  
  if (id) {
    const product = PRODUCTS.find(p => p.id === id);
    document.getElementById('modal-product-title').innerText = 'Edit Product';
    document.getElementById('admin-p-id').value = product.id;
    document.getElementById('admin-p-title').value = product.title;
    document.getElementById('admin-p-price').value = product.price;
    document.getElementById('admin-p-mrp').value = product.mrp;
    document.getElementById('admin-p-category').value = product.category;
    document.getElementById('admin-p-image').value = product.image;
  } else {
    document.getElementById('modal-product-title').innerText = 'Add New Product';
    form.reset();
    document.getElementById('admin-p-id').value = '';
  }
  
  modal.style.display = 'flex';
}

window.closeAdminProductModal = function() {
  document.getElementById('admin-product-modal').style.display = 'none';
}

window.saveAdminProduct = function(e) {
  e.preventDefault();
  
  const idStr = document.getElementById('admin-p-id').value;
  const title = document.getElementById('admin-p-title').value;
  const price = parseInt(document.getElementById('admin-p-price').value);
  const mrp = parseInt(document.getElementById('admin-p-mrp').value);
  const category = document.getElementById('admin-p-category').value;
  const image = document.getElementById('admin-p-image').value;
  
  if (idStr) {
    const id = parseInt(idStr);
    const idx = PRODUCTS.findIndex(p => p.id === id);
    if (idx !== -1) {
      PRODUCTS[idx] = { ...PRODUCTS[idx], title, price, mrp, category, image };
      PRODUCTS[idx].discount = Math.round(((mrp - price) / mrp) * 100);
    }
  } else {
    const newId = PRODUCTS.length > 0 ? Math.max(...PRODUCTS.map(p => p.id)) + 1 : 1;
    PRODUCTS.unshift({
      id: newId,
      title, brand: 'Misho', category, price, mrp, 
      discount: Math.round(((mrp - price) / mrp) * 100),
      rating: 4.5, reviews: 0, image, images: [image],
      description: 'New product added by admin.',
      freeDelivery: true, trending: false, flashDeal: false, inStock: true
    });
  }
  
  saveProducts();
  closeAdminProductModal();
  renderAdminProducts();
  showToast('Product saved successfully!');
}

window.deleteAdminProduct = function(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    PRODUCTS = PRODUCTS.filter(p => p.id !== id);
    saveProducts();
    renderAdminProducts();
    showToast('Product deleted!');
  }
}

function renderAdminUsers() {
  const adminContent = document.getElementById('admin-content-area');
  
  adminContent.innerHTML = `
    <div class="admin-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <h1>Manage Users</h1>
      <button class="btn btn-primary" onclick="openAdminUserModal()">+ Add New User</button>
    </div>
    <div class="admin-table-container">
      <table class="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${USERS.map(u => `
            <tr>
              <td>${u.id}</td>
              <td>${u.name}</td>
              <td>${u.email}</td>
              <td>${u.phone}</td>
              <td><span class="status ${u.role.toLowerCase()}">${u.role}</span></td>
              <td>
                <button class="btn-sm btn-secondary" onclick="openAdminUserModal(${u.id})">Edit</button>
                <button class="btn-sm" style="background:#ff4d4f; color:white; border:none;" onclick="deleteAdminUser(${u.id})">Delete</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    
    <!-- User Modal -->
    <div id="admin-user-modal" class="modal-overlay" style="display:none; z-index:2000;">
      <div class="modal-content admin-modal" style="max-width:500px;">
        <span class="close-modal" onclick="closeAdminUserModal()">&times;</span>
        <h2 id="modal-user-title" style="margin-bottom:20px;">Add User</h2>
        <form id="admin-user-form" onsubmit="saveAdminUser(event)">
          <input type="hidden" id="admin-u-id">
          
          <div class="form-group">
            <label style="display:block; margin-bottom:5px;">Full Name</label>
            <input type="text" id="admin-u-name" required style="width:100%; padding:10px; border:1px solid #ccc; border-radius:4px; margin-bottom:15px;">
          </div>
          
          <div class="form-group">
            <label style="display:block; margin-bottom:5px;">Email</label>
            <input type="email" id="admin-u-email" required style="width:100%; padding:10px; border:1px solid #ccc; border-radius:4px; margin-bottom:15px;">
          </div>
          
          <div class="form-group">
            <label style="display:block; margin-bottom:5px;">Phone</label>
            <input type="tel" id="admin-u-phone" required style="width:100%; padding:10px; border:1px solid #ccc; border-radius:4px; margin-bottom:15px;">
          </div>
          
          <div class="form-group" style="margin-bottom:20px;">
            <label style="display:block; margin-bottom:5px;">Role</label>
            <select id="admin-u-role" required style="width:100%; padding:10px; border:1px solid #ccc; border-radius:4px;">
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          
          <button type="submit" class="btn btn-primary" style="width:100%;">Save User</button>
        </form>
      </div>
    </div>
  `;
}

window.openAdminUserModal = function(id = null) {
  const modal = document.getElementById('admin-user-modal');
  const form = document.getElementById('admin-user-form');
  
  if (id) {
    const user = USERS.find(u => u.id === id);
    document.getElementById('modal-user-title').innerText = 'Edit User';
    document.getElementById('admin-u-id').value = user.id;
    document.getElementById('admin-u-name').value = user.name;
    document.getElementById('admin-u-email').value = user.email;
    document.getElementById('admin-u-phone').value = user.phone;
    document.getElementById('admin-u-role').value = user.role;
  } else {
    document.getElementById('modal-user-title').innerText = 'Add New User';
    form.reset();
    document.getElementById('admin-u-id').value = '';
  }
  
  modal.style.display = 'flex';
}

window.closeAdminUserModal = function() {
  document.getElementById('admin-user-modal').style.display = 'none';
}

window.saveAdminUser = function(e) {
  e.preventDefault();
  
  const idStr = document.getElementById('admin-u-id').value;
  const name = document.getElementById('admin-u-name').value;
  const email = document.getElementById('admin-u-email').value;
  const phone = document.getElementById('admin-u-phone').value;
  const role = document.getElementById('admin-u-role').value;
  
  if (idStr) {
    const id = parseInt(idStr);
    const idx = USERS.findIndex(u => u.id === id);
    if (idx !== -1) {
      USERS[idx] = { ...USERS[idx], name, email, phone, role };
    }
  } else {
    const newId = USERS.length > 0 ? Math.max(...USERS.map(u => u.id)) + 1 : 1;
    USERS.unshift({
      id: newId,
      name, email, phone, role
    });
  }
  
  saveUsers();
  closeAdminUserModal();
  renderAdminUsers();
  showToast('User saved successfully!');
}

window.deleteAdminUser = function(id) {
  if (confirm('Are you sure you want to delete this user?')) {
    USERS = USERS.filter(u => u.id !== id);
    saveUsers();
    renderAdminUsers();
    showToast('User deleted!');
  }
}

});
