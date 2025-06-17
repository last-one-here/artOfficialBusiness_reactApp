import React from 'react';
import './MuralPortfolioPage.css'; // We will create this CSS file next

const PortfolioPage = () => {
  // Sample data - user will replace this with their actual portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: 'Mural Project Alpha',
      category: 'Murals',
      imageUrl: '/images/placeholder-mural-gallery1.jpg',
      description: 'A large-scale mural for a commercial client, featuring vibrant colors and a complex design. Medium: Exterior acrylics. Dimensions: 20ft x 40ft.',
    },
    {
      id: 2,
      title: 'Corporate Office Mural',
      category: 'Murals',
      imageUrl: '/images/placeholder-mural-gallery2.jpg',
      description: 'Inspiring artwork for a modern office space. Medium: Interior latex paint. Dimensions: 10ft x 15ft.',
    },
    {
      id: 3,
      title: 'Residential Garage Door Art',
      category: 'Custom Paintings',
      imageUrl: '/images/placeholder-garage-door1.jpg',
      description: 'Unique and personalized artwork transforming a standard garage door. Medium: Spray paint and Posca markers.',
    },
    {
      id: 4,
      title: 'Bella the Boxer Portrait',
      category: 'Animal Portraits',
      imageUrl: '/images/placeholder-animal-portrait1.jpg',
      description: 'Detailed and expressive portrait of a beloved pet. Medium: Acrylic on canvas. Dimensions: 16in x 20in.',
    },
    {
      id: 5,
      title: 'Event Caricatures Sample',
      category: 'Caricatures',
      imageUrl: '/images/placeholder-caricature1.jpg',
      description: 'Examples of live caricature art from various events. Medium: Markers on paper.',
    },
    {
      id: 6,
      title: 'Abstract Wall Art',
      category: 'Custom Paintings',
      imageUrl: '/images/placeholder-custom-paint2.jpg',
      description: 'Custom abstract piece for a residential living room. Medium: Mixed media on wood panel.',
    },
  ];

  // TODO: Implement filtering logic if desired (e.g., by category)

  return (
    <div className="page-content portfolio-page">
      <header className="page-header">
        <h1>My Portfolio</h1>
        <p>A collection of my diverse artistic creations. Explore murals, paintings, portraits, and more.</p>
      </header>

      {/* Optional: Add filter buttons here */}
      {/* <div className="portfolio-filters">
        <button>All</button>
        <button>Murals</button>
        <button>Animal Portraits</button>
        <button>Custom Paintings</button>
        <button>Caricatures</button>
      </div> */}

      <div className="portfolio-grid">
        {portfolioItems.map(item => (
          <div key={item.id} className="portfolio-item">
            <img src={item.imageUrl} alt={`${item.title} placeholder`} />
            <div className="portfolio-item-info">
              <h3>{item.title}</h3>
              <p className="portfolio-category"><em>Category: {item.category}</em></p>
              <p>{item.description}</p>
              {/* Optional: Link to a detailed page for each item */}
              {/* <Link to={`/portfolio/${item.id}`} className="cta-button-small">View Details</Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;

