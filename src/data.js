export const foods = [
  {
    id: 'roujiamo',
    nameZh: '肉夹馍',
    nameEn: 'Roujiamo',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e2d1fd5e?auto=format&fit=crop&w=1200&q=80',
    tags: ['Street Food', 'Savory', 'First-Time Pick'],
    areas: ['Bell Tower', 'Muslim Quarter'],
    intro: 'A crisp baked bun split open and packed with slow-braised, chopped meat. It is often called the Chinese hamburger, but the texture and spiced gravy feel distinctly Xi’an.',
    culture: 'Roujiamo has roots in Shaanxi street markets, where portable breads and braised meats made a fast, filling meal for travelers and workers.',
    taste: 'Crisp outside, juicy inside, with cumin, star anise, chili, and a rich meat aroma.',
    calories: '430-620 kcal per serving',
    ai: {
      allergens: ['Wheat gluten', 'Soy sauce possible'],
      glutenFree: false,
      vegan: false,
      halal: 'Sometimes. Choose beef or lamb shops that explicitly state halal.'
    },
    ingredients: ['Baiji bun', 'Braised pork or beef', 'Cumin', 'Star anise', 'Ginger', 'Green pepper'],
    steps: ['Braise meat with spices until tender.', 'Toast the bun until crisp.', 'Chop meat with a little gravy.', 'Fill the bun and serve hot.']
  },
  {
    id: 'yangrou-paomo',
    nameZh: '羊肉泡馍',
    nameEn: 'Yangrou Paomo',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80',
    tags: ['Soup', 'Halal Friendly', 'Comfort Food'],
    areas: ['Muslim Quarter', 'Lianhu'],
    intro: 'A hearty lamb broth served with hand-torn flatbread pieces, vermicelli, and tender lamb slices.',
    culture: 'The ritual of tearing bread into tiny pieces is part of the experience. In Xi’an, locals judge the bowl by broth clarity, lamb aroma, and bread texture.',
    taste: 'Deep lamb broth, mellow spice, chewy bread, and a warming finish.',
    calories: '650-900 kcal per bowl',
    ai: {
      allergens: ['Wheat gluten'],
      glutenFree: false,
      vegan: false,
      halal: 'Usually halal in Muslim Quarter restaurants.'
    },
    ingredients: ['Lamb bones', 'Lamb slices', 'Flatbread', 'Vermicelli', 'Garlic greens', 'Pickled garlic'],
    steps: ['Simmer lamb bones for a clear broth.', 'Tear bread into small pieces.', 'Cook bread and vermicelli in broth.', 'Top with lamb and herbs.']
  },
  {
    id: 'liangpi',
    nameZh: '凉皮',
    nameEn: 'Liangpi',
    image: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?auto=format&fit=crop&w=1200&q=80',
    tags: ['Cold Dish', 'Spicy', 'Vegetarian Possible'],
    areas: ['Xiaozhai', 'Bell Tower'],
    intro: 'Cold wheat or rice noodles tossed with chili oil, vinegar, cucumber, bean sprouts, and spongy gluten cubes.',
    culture: 'Liangpi is a Shaanxi classic for hot days, loved for its sour, spicy, slippery texture and quick street-side service.',
    taste: 'Tangy vinegar, roasted chili oil, garlic, sesame, and refreshing crunch.',
    calories: '380-560 kcal per bowl',
    ai: {
      allergens: ['Wheat gluten', 'Sesame', 'Peanut possible'],
      glutenFree: 'Usually no, unless made from rice starch without gluten cubes.',
      vegan: 'Often vegan if no egg or meat toppings are added.',
      halal: 'Usually neutral, but check chili oil and toppings.'
    },
    ingredients: ['Liangpi noodles', 'Cucumber', 'Bean sprouts', 'Chili oil', 'Vinegar', 'Sesame paste'],
    steps: ['Steam starch batter into sheets.', 'Slice into ribbons.', 'Mix sauce with chili oil and vinegar.', 'Toss with vegetables and gluten cubes.']
  },
  {
    id: 'biangbiang-noodles',
    nameZh: 'Biangbiang 面',
    nameEn: 'Biangbiang Noodles',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=1200&q=80',
    tags: ['Noodles', 'Spicy', 'Iconic'],
    areas: ['Yanta', 'Bell Tower'],
    intro: 'Wide hand-pulled belt noodles topped with chili, garlic, vegetables, and often tomato-egg or minced meat.',
    culture: 'Named after the sound of noodles slapped on the counter, this dish is a theatrical staple of Shaanxi noodle culture.',
    taste: 'Chewy, garlicky, oily, spicy, and satisfyingly rustic.',
    calories: '620-880 kcal per bowl',
    ai: {
      allergens: ['Wheat gluten', 'Egg possible'],
      glutenFree: false,
      vegan: 'Possible with vegetable toppings and no egg.',
      halal: 'Possible at halal noodle shops.'
    },
    ingredients: ['High-gluten flour', 'Chili flakes', 'Garlic', 'Bok choy', 'Vinegar', 'Soy sauce'],
    steps: ['Rest and pull dough into wide noodles.', 'Boil until chewy.', 'Top with chili, garlic, and vegetables.', 'Pour hot oil over aromatics.']
  },
  {
    id: 'youpo-noodles',
    nameZh: '油泼面',
    nameEn: 'Youpo Noodles',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
    tags: ['Noodles', 'Hot Oil', 'Vegetarian Possible'],
    areas: ['Yanta', 'Qujiang'],
    intro: 'Hand-pulled noodles topped with chili flakes and scallions, then finished with sizzling hot oil.',
    culture: 'The hot oil pour is the defining moment, releasing the aroma of chili and garlic right at the table.',
    taste: 'Fragrant chili oil, springy noodles, vinegar brightness, and a smoky finish.',
    calories: '560-800 kcal per bowl',
    ai: {
      allergens: ['Wheat gluten', 'Soy sauce possible'],
      glutenFree: false,
      vegan: 'Often vegan if ordered without meat or egg.',
      halal: 'Usually ingredient-dependent.'
    },
    ingredients: ['Hand-pulled noodles', 'Chili flakes', 'Scallions', 'Garlic', 'Vinegar', 'Hot oil'],
    steps: ['Cook noodles and greens.', 'Add chili, garlic, and scallions.', 'Pour smoking hot oil over the aromatics.', 'Toss with vinegar and soy.']
  },
  {
    id: 'zenggao',
    nameZh: '甑糕',
    nameEn: 'Zenggao',
    image: 'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?auto=format&fit=crop&w=1200&q=80',
    tags: ['Sweet', 'Breakfast', 'Vegetarian'],
    areas: ['Muslim Quarter', 'Lianhu'],
    intro: 'A sticky steamed dessert made with glutinous rice, red dates, and beans, served warm from large wooden steamers.',
    culture: 'Zenggao is a morning market favorite, especially around old Xi’an neighborhoods and snack streets.',
    taste: 'Soft, sticky, gently sweet, with caramel-like red date aroma.',
    calories: '320-480 kcal per portion',
    ai: {
      allergens: ['None common', 'Cross-contact possible'],
      glutenFree: 'Usually yes, made with glutinous rice which does not contain gluten.',
      vegan: true,
      halal: 'Usually friendly, but verify preparation.'
    },
    ingredients: ['Glutinous rice', 'Red dates', 'Kidney beans', 'Brown sugar'],
    steps: ['Soak rice and beans.', 'Layer with dates.', 'Steam slowly until sticky.', 'Serve warm in scoops.']
  },
  {
    id: 'hulutou-paomo',
    nameZh: '葫芦头泡馍',
    nameEn: 'Hulutou Paomo',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Soup', 'Adventurous', 'Local Classic'],
    areas: ['Beilin', 'Lianhu'],
    intro: 'A rich pork intestine broth with torn bread, herbs, garlic, and warming spices.',
    culture: 'This is an old-school Xi’an specialty. It rewards curious eaters who enjoy strong broths and offal textures.',
    taste: 'Savory, fatty, peppery, herbal, and deeply local.',
    calories: '700-980 kcal per bowl',
    ai: {
      allergens: ['Wheat gluten'],
      glutenFree: false,
      vegan: false,
      halal: false
    },
    ingredients: ['Pork intestine', 'Flatbread', 'Pepper', 'Garlic', 'Cilantro', 'Broth'],
    steps: ['Clean and simmer intestine.', 'Prepare seasoned broth.', 'Tear bread into pieces.', 'Cook bread in broth and top with herbs.']
  },
  {
    id: 'suantang-dumplings',
    nameZh: '酸汤水饺',
    nameEn: 'Suantang Dumplings',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
    tags: ['Dumplings', 'Sour-Spicy', 'First-Time Pick'],
    areas: ['Bell Tower', 'Yanta'],
    intro: 'Boiled dumplings served in a sour and spicy broth with vinegar, chili oil, dried shrimp, and cilantro.',
    culture: 'Shaanxi vinegar gives this dish its signature lift, making it a favorite late-night or rainy-day bowl.',
    taste: 'Bright vinegar, chili warmth, juicy filling, and fragrant herbs.',
    calories: '520-760 kcal per bowl',
    ai: {
      allergens: ['Wheat gluten', 'Shellfish possible', 'Egg possible'],
      glutenFree: false,
      vegan: 'Possible only with vegetable dumplings and vegan broth.',
      halal: 'Possible at halal dumpling shops with lamb or beef fillings.'
    },
    ingredients: ['Dumpling wrappers', 'Pork, lamb, or vegetable filling', 'Vinegar', 'Chili oil', 'Cilantro', 'Seaweed'],
    steps: ['Wrap dumplings.', 'Boil until floating.', 'Mix sour-spicy broth.', 'Serve dumplings in hot broth.']
  },
  {
    id: 'jinggao',
    nameZh: '镜糕',
    nameEn: 'Jinggao',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
    tags: ['Sweet', 'Street Food', 'Vegetarian'],
    areas: ['Muslim Quarter', 'Bell Tower'],
    intro: 'Small steamed rice cakes shaped like mirrors, brushed with syrup and topped with sesame, nuts, or fruit jam.',
    culture: 'Jinggao is a nostalgic snack found around busy tourist streets, easy to eat while walking.',
    taste: 'Soft rice cake, sweet syrup, nutty toppings, and light floral notes.',
    calories: '180-320 kcal per piece',
    ai: {
      allergens: ['Sesame', 'Peanut or tree nuts possible'],
      glutenFree: 'Usually yes, but verify toppings.',
      vegan: 'Usually vegan if honey is not used.',
      halal: 'Usually friendly.'
    },
    ingredients: ['Rice flour', 'Syrup', 'Sesame', 'Crushed nuts', 'Jam'],
    steps: ['Steam rice batter in small molds.', 'Unmold while hot.', 'Brush with syrup.', 'Add toppings.']
  },
  {
    id: 'fentang-yangxue',
    nameZh: '粉汤羊血',
    nameEn: 'Fentang Yangxue',
    image: 'https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?auto=format&fit=crop&w=1200&q=80',
    tags: ['Soup', 'Halal Friendly', 'Adventurous'],
    areas: ['Muslim Quarter', 'Lianhu'],
    intro: 'A peppery soup with lamb blood tofu, vermicelli, tofu skin, and warming spices.',
    culture: 'Popular in Hui Muslim neighborhoods, this bowl reflects Xi’an’s Silk Road food heritage.',
    taste: 'Peppery, savory, mineral-rich, and warming.',
    calories: '420-650 kcal per bowl',
    ai: {
      allergens: ['Soy', 'Wheat possible in add-ons'],
      glutenFree: 'Often yes if no wheat add-ons are included.',
      vegan: false,
      halal: 'Usually halal in Hui Muslim restaurants.'
    },
    ingredients: ['Lamb blood tofu', 'Vermicelli', 'Tofu skin', 'Pepper', 'Cumin', 'Cilantro'],
    steps: ['Prepare seasoned lamb broth.', 'Simmer blood tofu and vermicelli.', 'Add tofu skin.', 'Finish with pepper and cilantro.']
  }
];

const foodById = Object.fromEntries(foods.map((food) => [food.id, food]));

export const restaurants = [
  ['r1', 'roujiamo', 'Qinyu Roujiamo', '秦豫肉夹馍', 'Bell Tower', 'No. 19 Dongmutoushi', 28, true, false],
  ['r2', 'roujiamo', 'Fanji Lazhi Roujiamo', '樊记腊汁肉夹馍', 'Bell Tower', 'Zhubashi Food Street', 32, true, false],
  ['r3', 'roujiamo', 'Ma Hong Beef Roujiamo', '马洪牛肉夹馍', 'Muslim Quarter', 'Dapiyuan', 30, true, true],
  ['r4', 'yangrou-paomo', 'Lao Mi Jia Paomo', '老米家泡馍', 'Muslim Quarter', 'Xiyangshi Street', 55, true, true],
  ['r5', 'yangrou-paomo', 'Tongshengxiang', '同盛祥', 'Bell Tower', 'West Street', 68, true, true],
  ['r6', 'liangpi', 'Wei Jia Liangpi', '魏家凉皮', 'Xiaozhai', 'Saige Mall B2', 24, true, false],
  ['r7', 'liangpi', 'Shengzhiwang Majiang Liangpi', '盛志望麻酱酿皮', 'Muslim Quarter', 'Dapiyuan', 22, true, true],
  ['r8', 'biangbiang-noodles', 'Biangbiang Noodle House', '天下第一面', 'Yanta', 'Cuihua Road', 42, true, false],
  ['r9', 'biangbiang-noodles', 'Lao Wan Noodles', '老碗', 'Bell Tower', 'Luomashi', 45, true, false],
  ['r10', 'youpo-noodles', 'Shaanxi Noodle Lab', '陕面坊', 'Qujiang', 'Furong West Road', 38, true, false],
  ['r11', 'youpo-noodles', 'Yongming Qishan Noodles', '永明岐山面', 'Yanta', 'Xiaozhai East Road', 35, true, false],
  ['r12', 'zenggao', 'Dongnanya Zenggao Stall', '东南亚甑糕', 'Muslim Quarter', 'Beiguangji Street', 18, true, true],
  ['r13', 'hulutou-paomo', 'Chunfa Sheng Hulutou', '春发生葫芦头', 'Beilin', 'Nanyuanmen', 62, true, false],
  ['r14', 'suantang-dumplings', 'Majia Suantang Shuijiao', '马家酸汤水饺', 'Muslim Quarter', 'Dapiyuan', 34, true, true],
  ['r15', 'jinggao', 'Muslim Quarter Jinggao Cart', '回民街镜糕车', 'Muslim Quarter', 'Beiyuanmen', 12, true, true],
  ['r16', 'fentang-yangxue', 'Laobai Fentang Yangxue', '老白粉汤羊血', 'Muslim Quarter', 'Sajin Bridge', 26, true, true],
  ['r17', 'fentang-yangxue', 'Liuji Yangxue Soup', '刘记羊血粉汤', 'Lianhu', 'Miaohou Street', 28, false, true]
].map(([id, foodId, nameEn, nameZh, area, address, price, firstTime, halalFriendly], index) => ({
  id,
  foodId,
  foodName: foodById[foodId].nameEn,
  nameEn,
  nameZh,
  area,
  address,
  price,
  firstTime,
  halalFriendly,
  pin: {
    x: 16 + ((index * 23) % 68),
    y: 18 + ((index * 31) % 62)
  },
  amapUrl: `https://uri.amap.com/search?keyword=${encodeURIComponent(`${nameZh} 西安`)}`,
  baiduUrl: `https://map.baidu.com/search/${encodeURIComponent(`${nameZh} 西安`)}`,
  reviewUrl: `https://www.tripadvisor.com/Search?q=${encodeURIComponent(`${nameEn} Xi'an`)}`
}));

export const tags = Array.from(new Set(foods.flatMap((food) => food.tags)));
export const areas = Array.from(new Set(restaurants.map((restaurant) => restaurant.area)));
