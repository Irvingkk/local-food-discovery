import React, { useEffect, useMemo, useState } from 'react';
import {
  Apple,
  Bot,
  Camera,
  ChevronLeft,
  ChevronRight,
  Compass,
  ExternalLink,
  Heart,
  Home,
  MapPin,
  Menu,
  Search,
  SlidersHorizontal,
  Soup,
  Star,
  Utensils,
  X
} from 'lucide-react';
import { areas, foods, restaurants, tags } from './data.js';

const navItems = [
  { id: 'explore', label: 'Explore', icon: Compass },
  { id: 'restaurants', label: 'Restaurants', icon: MapPin },
  { id: 'favorites', label: 'Favorites', icon: Heart },
  { id: 'ai', label: 'AI', icon: Bot }
];

const localKey = 'xian-food-discovery-favorites';

function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem(localKey)) || { foods: [], restaurants: [] };
  } catch {
    return { foods: [], restaurants: [] };
  }
}

function App() {
  const [activePage, setActivePage] = useState('explore');
  const [selectedFoodId, setSelectedFoodId] = useState(foods[0].id);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(restaurants[0].id);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [favorites, setFavorites] = useState(loadFavorites);

  useEffect(() => {
    localStorage.setItem(localKey, JSON.stringify(favorites));
  }, [favorites]);

  const selectedFood = foods.find((food) => food.id === selectedFoodId) || foods[0];
  const selectedRestaurant = restaurants.find((restaurant) => restaurant.id === selectedRestaurantId) || restaurants[0];

  function toggleFavorite(type, id) {
    setFavorites((current) => {
      const list = current[type];
      const next = list.includes(id) ? list.filter((item) => item !== id) : [...list, id];
      return { ...current, [type]: next };
    });
  }

  function openFood(foodId) {
    setSelectedFoodId(foodId);
    setActivePage('detail');
  }

  return (
    <div className="app-shell">
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <main className="main-view">
        <TopBar activePage={activePage} selectedFood={selectedFood} setActivePage={setActivePage} />
        {activePage === 'explore' && (
          <ExplorePage favorites={favorites} onOpenFood={openFood} onToggleFavorite={toggleFavorite} />
        )}
        {activePage === 'detail' && (
          <FoodDetailPage
            food={selectedFood}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onSelectRestaurant={(id) => {
              setSelectedRestaurantId(id);
              setActivePage('restaurants');
            }}
          />
        )}
        {activePage === 'restaurants' && (
          <RestaurantsPage
            favorites={favorites}
            selectedRestaurantId={selectedRestaurant.id}
            setSelectedRestaurantId={setSelectedRestaurantId}
            onToggleFavorite={toggleFavorite}
          />
        )}
        {activePage === 'favorites' && (
          <FavoritesPage favorites={favorites} onOpenFood={openFood} onToggleFavorite={toggleFavorite} />
        )}
        {activePage === 'ai' && <AiPage />}
      </main>
      <MobileNav activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

function Sidebar({ collapsed, setCollapsed, activePage, setActivePage }) {
  return (
    <aside className={`sidebar ${collapsed ? 'is-collapsed' : ''}`}>
      <div className="brand-row">
        <div className="brand-mark">
          <Soup size={22} />
        </div>
        {!collapsed && (
          <div>
            <strong>Local Bites</strong>
            <span>Xi'an Pilot</span>
          </div>
        )}
      </div>
      <nav className="nav-stack">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-button ${activePage === item.id ? 'active' : ''}`}
              onClick={() => setActivePage(item.id)}
              title={item.label}
            >
              <Icon size={20} />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>
      <button className="city-button" title="City: Xi'an">
        <MapPin size={18} />
        {!collapsed && <span>City: Xi'an</span>}
      </button>
      <button className="collapse-button" onClick={() => setCollapsed(!collapsed)} title="Collapse sidebar">
        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>
    </aside>
  );
}

function TopBar({ activePage, selectedFood, setActivePage }) {
  const titleMap = {
    explore: 'Explore Xi’an Foods',
    detail: selectedFood.nameEn,
    restaurants: 'Restaurants & Map',
    favorites: 'Saved Places',
    ai: 'AI Calorie Check'
  };

  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">Local Food Discovery</p>
        <h1>{titleMap[activePage]}</h1>
      </div>
      <button className="ghost-button" onClick={() => setActivePage('explore')}>
        <Home size={18} />
        <span>Explore</span>
      </button>
    </header>
  );
}

function MobileNav({ activePage, setActivePage }) {
  return (
    <nav className="mobile-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            className={activePage === item.id ? 'active' : ''}
            onClick={() => setActivePage(item.id)}
          >
            <Icon size={20} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

function ExplorePage({ favorites, onOpenFood, onToggleFavorite }) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const filteredFoods = useMemo(() => {
    return foods.filter((food) => {
      const matchesQuery = `${food.nameZh} ${food.nameEn} ${food.intro}`.toLowerCase().includes(query.toLowerCase());
      const matchesTag = activeTag === 'All' || food.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  return (
    <section className="page-grid">
      <div className="content-column">
        <div className="control-band">
          <label className="search-box">
            <Search size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search foods, flavors, or Chinese names" />
          </label>
          <div className="tag-row">
            {['All', ...tags].map((tag) => (
              <button key={tag} className={activeTag === tag ? 'active' : ''} onClick={() => setActiveTag(tag)}>
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="food-grid">
          {filteredFoods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              saved={favorites.foods.includes(food.id)}
              onOpen={() => onOpenFood(food.id)}
              onSave={() => onToggleFavorite('foods', food.id)}
            />
          ))}
        </div>
      </div>
      <aside className="insight-panel">
        <p className="eyebrow">Xi'an snapshot</p>
        <h2>Start with noodles, paomo, and Muslim Quarter snacks.</h2>
        <div className="mini-stat">
          <span>10</span>
          <p>signature foods</p>
        </div>
        <div className="mini-stat">
          <span>17</span>
          <p>mock restaurant leads</p>
        </div>
        <div className="callout">
          <Apple size={18} />
          <p>AI flags allergens, halal fit, vegan options, and rough calories before you decide where to eat.</p>
        </div>
      </aside>
    </section>
  );
}

function FoodCard({ food, saved, onOpen, onSave }) {
  return (
    <article className="food-card">
      <button className="image-button" onClick={onOpen}>
        <img src={food.image} alt={food.nameEn} />
      </button>
      <div className="card-body">
        <div className="card-title-row">
          <button className="text-link" onClick={onOpen}>
            <strong>{food.nameEn}</strong>
            <span>{food.nameZh}</span>
          </button>
          <button className={`icon-button ${saved ? 'saved' : ''}`} onClick={onSave} title="Save food">
            <Heart size={18} fill={saved ? 'currentColor' : 'none'} />
          </button>
        </div>
        <p>{food.intro}</p>
        <div className="tag-row compact">
          {food.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function FoodDetailPage({ food, favorites, onToggleFavorite, onSelectRestaurant }) {
  const relatedRestaurants = restaurants.filter((restaurant) => restaurant.foodId === food.id);
  const saved = favorites.foods.includes(food.id);

  return (
    <section className="detail-layout">
      <div className="detail-main">
        <div className="detail-hero">
          <img src={food.image} alt={food.nameEn} />
          <button className={`save-float ${saved ? 'saved' : ''}`} onClick={() => onToggleFavorite('foods', food.id)}>
            <Heart size={18} fill={saved ? 'currentColor' : 'none'} />
            <span>{saved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
        <div className="detail-section title-section">
          <div>
            <p className="eyebrow">{food.areas.join(' / ')}</p>
            <h2>{food.nameZh} · {food.nameEn}</h2>
          </div>
          <div className="calorie-pill">{food.calories}</div>
        </div>
        <div className="detail-section">
          <h3>About</h3>
          <p>{food.intro}</p>
          <p>{food.culture}</p>
        </div>
        <div className="detail-section">
          <h3>Taste</h3>
          <p>{food.taste}</p>
        </div>
        <div className="recipe-grid">
          <div className="detail-section">
            <h3>Ingredients</h3>
            <ul>
              {food.ingredients.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="detail-section">
            <h3>Make It</h3>
            <ol>
              {food.steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
        </div>
      </div>
      <aside className="detail-side">
        <DietaryPanel food={food} />
        <div className="detail-section">
          <h3>Where to try this in Xi’an</h3>
          <div className="restaurant-stack">
            {relatedRestaurants.map((restaurant) => (
              <RestaurantMini
                key={restaurant.id}
                restaurant={restaurant}
                saved={favorites.restaurants.includes(restaurant.id)}
                onSave={() => onToggleFavorite('restaurants', restaurant.id)}
                onSelect={() => onSelectRestaurant(restaurant.id)}
              />
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}

function DietaryPanel({ food }) {
  return (
    <div className="diet-panel">
      <div className="panel-heading">
        <Bot size={20} />
        <h3>AI Dietary Check</h3>
      </div>
      <InfoRow label="Allergens" value={food.ai.allergens.join(', ')} />
      <InfoRow label="Gluten-free" value={formatAiValue(food.ai.glutenFree)} />
      <InfoRow label="Vegan" value={formatAiValue(food.ai.vegan)} />
      <InfoRow label="Halal" value={formatAiValue(food.ai.halal)} />
      <InfoRow label="Calories" value={food.calories} />
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="info-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function formatAiValue(value) {
  if (value === true) return 'Yes';
  if (value === false) return 'No';
  return value;
}

function RestaurantMini({ restaurant, saved, onSave, onSelect }) {
  return (
    <article className="restaurant-mini">
      <button className="text-link" onClick={onSelect}>
        <strong>{restaurant.nameEn}</strong>
        <span>{restaurant.nameZh} · {restaurant.area}</span>
      </button>
      <p>{restaurant.address} · ¥{restaurant.price}/person</p>
      <div className="action-row">
        <button className={`icon-button ${saved ? 'saved' : ''}`} onClick={onSave} title="Save restaurant">
          <Heart size={17} fill={saved ? 'currentColor' : 'none'} />
        </button>
        <a href={restaurant.amapUrl} target="_blank" rel="noreferrer">Amap <ExternalLink size={14} /></a>
        <a href={restaurant.reviewUrl} target="_blank" rel="noreferrer">Reviews <ExternalLink size={14} /></a>
      </div>
    </article>
  );
}

function RestaurantsPage({ favorites, selectedRestaurantId, setSelectedRestaurantId, onToggleFavorite }) {
  const [foodFilter, setFoodFilter] = useState('All');
  const [areaFilter, setAreaFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const [halalOnly, setHalalOnly] = useState(false);
  const [firstTimeOnly, setFirstTimeOnly] = useState(false);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const priceMatch = priceFilter === 'All' || (priceFilter === 'Under ¥30' ? restaurant.price < 30 : restaurant.price >= 30 && restaurant.price <= 50);
    return (
      (foodFilter === 'All' || restaurant.foodId === foodFilter) &&
      (areaFilter === 'All' || restaurant.area === areaFilter) &&
      priceMatch &&
      (!halalOnly || restaurant.halalFriendly) &&
      (!firstTimeOnly || restaurant.firstTime)
    );
  });

  const selected = filteredRestaurants.find((restaurant) => restaurant.id === selectedRestaurantId) || filteredRestaurants[0] || restaurants[0];

  return (
    <section className="restaurants-layout">
      <div className="restaurant-list-pane">
        <div className="filter-panel">
          <div className="filter-heading"><SlidersHorizontal size={18} /><span>Filters</span></div>
          <select value={foodFilter} onChange={(event) => setFoodFilter(event.target.value)}>
            <option value="All">All foods</option>
            {foods.map((food) => <option key={food.id} value={food.id}>{food.nameEn}</option>)}
          </select>
          <select value={areaFilter} onChange={(event) => setAreaFilter(event.target.value)}>
            <option value="All">All areas</option>
            {areas.map((area) => <option key={area} value={area}>{area}</option>)}
          </select>
          <select value={priceFilter} onChange={(event) => setPriceFilter(event.target.value)}>
            <option>All</option>
            <option>Under ¥30</option>
            <option>¥30-50</option>
          </select>
          <label className="toggle-line">
            <input type="checkbox" checked={halalOnly} onChange={(event) => setHalalOnly(event.target.checked)} />
            Halal friendly
          </label>
          <label className="toggle-line">
            <input type="checkbox" checked={firstTimeOnly} onChange={(event) => setFirstTimeOnly(event.target.checked)} />
            First-time visitors
          </label>
        </div>
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantRow
              key={restaurant.id}
              restaurant={restaurant}
              active={selected.id === restaurant.id}
              saved={favorites.restaurants.includes(restaurant.id)}
              onSelect={() => setSelectedRestaurantId(restaurant.id)}
              onSave={() => onToggleFavorite('restaurants', restaurant.id)}
            />
          ))}
        </div>
      </div>
      <div className="map-pane">
        <MockMap restaurants={filteredRestaurants} selected={selected} setSelectedRestaurantId={setSelectedRestaurantId} />
        <div className="selected-restaurant-panel">
          <p className="eyebrow">Selected restaurant</p>
          <h2>{selected.nameEn}</h2>
          <p>{selected.nameZh} · {selected.foodName} · {selected.area}</p>
          <p>{selected.address} · ¥{selected.price}/person</p>
          <div className="external-row">
            <a href={selected.amapUrl} target="_blank" rel="noreferrer">Open in Amap <ExternalLink size={15} /></a>
            <a href={selected.baiduUrl} target="_blank" rel="noreferrer">Open in Baidu Map <ExternalLink size={15} /></a>
            <a href={selected.reviewUrl} target="_blank" rel="noreferrer">Open Reviews <ExternalLink size={15} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function RestaurantRow({ restaurant, active, saved, onSelect, onSave }) {
  return (
    <article className={`restaurant-row ${active ? 'active' : ''}`}>
      <button className="restaurant-main" onClick={onSelect}>
        <strong>{restaurant.nameEn}</strong>
        <span>{restaurant.nameZh} · {restaurant.foodName}</span>
        <small>{restaurant.area} · ¥{restaurant.price}/person</small>
      </button>
      <button className={`icon-button ${saved ? 'saved' : ''}`} onClick={onSave} title="Save restaurant">
        <Heart size={18} fill={saved ? 'currentColor' : 'none'} />
      </button>
    </article>
  );
}

function MockMap({ restaurants: visibleRestaurants, selected, setSelectedRestaurantId }) {
  return (
    <div className="mock-map">
      <div className="map-grid-lines" />
      <div className="map-label north">Xi'an City Wall</div>
      <div className="map-label center">Bell Tower</div>
      <div className="map-label south">Yanta / Qujiang</div>
      {visibleRestaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          className={`map-pin ${selected.id === restaurant.id ? 'active' : ''}`}
          style={{ left: `${restaurant.pin.x}%`, top: `${restaurant.pin.y}%` }}
          onClick={() => setSelectedRestaurantId(restaurant.id)}
          title={restaurant.nameEn}
        >
          <MapPin size={selected.id === restaurant.id ? 28 : 22} fill="currentColor" />
        </button>
      ))}
    </div>
  );
}

function FavoritesPage({ favorites, onOpenFood, onToggleFavorite }) {
  const savedFoods = foods.filter((food) => favorites.foods.includes(food.id));
  const savedRestaurants = restaurants.filter((restaurant) => favorites.restaurants.includes(restaurant.id));

  return (
    <section className="favorites-layout">
      <div>
        <div className="section-title">
          <h2>Saved Foods</h2>
          <span>{savedFoods.length}</span>
        </div>
        <div className="food-grid">
          {savedFoods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              saved
              onOpen={() => onOpenFood(food.id)}
              onSave={() => onToggleFavorite('foods', food.id)}
            />
          ))}
          {!savedFoods.length && <EmptyState label="No saved foods yet." />}
        </div>
      </div>
      <div>
        <div className="section-title">
          <h2>Saved Restaurants</h2>
          <span>{savedRestaurants.length}</span>
        </div>
        <div className="restaurant-list">
          {savedRestaurants.map((restaurant) => (
            <RestaurantRow
              key={restaurant.id}
              restaurant={restaurant}
              active={false}
              saved
              onSelect={() => {}}
              onSave={() => onToggleFavorite('restaurants', restaurant.id)}
            />
          ))}
          {!savedRestaurants.length && <EmptyState label="No saved restaurants yet." />}
        </div>
      </div>
    </section>
  );
}

function EmptyState({ label }) {
  return (
    <div className="empty-state">
      <Star size={22} />
      <p>{label}</p>
    </div>
  );
}

function AiPage() {
  const [selectedFoodId, setSelectedFoodId] = useState(foods[0].id);
  const [imageUrl, setImageUrl] = useState('');
  const [estimate, setEstimate] = useState('');
  const selectedFood = foods.find((food) => food.id === selectedFoodId) || foods[0];

  function handleUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setImageUrl(URL.createObjectURL(file));
    setEstimate('');
  }

  function runEstimate() {
    const base = selectedFood.calories.match(/\d+/g)?.map(Number) || [420, 650];
    setEstimate(`${Math.max(120, base[0] - 80)}-${base[1] + 120} kcal likely range`);
  }

  return (
    <section className="ai-layout">
      <div className="detail-section">
        <div className="panel-heading">
          <Bot size={20} />
          <h2>Dietary Check</h2>
        </div>
        <select value={selectedFoodId} onChange={(event) => setSelectedFoodId(event.target.value)}>
          {foods.map((food) => <option key={food.id} value={food.id}>{food.nameEn} / {food.nameZh}</option>)}
        </select>
        <DietaryPanel food={selectedFood} />
      </div>
      <div className="detail-section upload-panel">
        <div className="panel-heading">
          <Camera size={20} />
          <h2>Calorie Photo Estimate</h2>
        </div>
        <label className="upload-box">
          {imageUrl ? <img src={imageUrl} alt="Uploaded food preview" /> : <><Camera size={30} /><span>Upload food photo</span></>}
          <input type="file" accept="image/*" onChange={handleUpload} />
        </label>
        <button className="primary-button" onClick={runEstimate} disabled={!imageUrl}>
          Estimate calories
        </button>
        {estimate && (
          <div className="estimate-result">
            <strong>{estimate}</strong>
            <p>Mock estimate based on selected Xi’an dish profile, portion size, and visible oil or toppings.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
