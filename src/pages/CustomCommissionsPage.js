import React from 'react';
import './CustomCommissionsPage.css'; // We will create this CSS file next

const CustomCommissionsPage = () => {
  // Sample data - user will replace this with their actual portfolio items
  const commissionItems = [
    {
      id: 1,
      title: 'Large Abstract Canvas Series',
      category: 'Custom Paintings',
      imageUrl: '/images/placeholder-custom-commission1.jpg',
      description: 'A series of three large-scale abstract canvases commissioned for a corporate lobby. Medium: Acrylic and mixed media on canvas. Dimensions: Each 6ft x 4ft.',
    },
    {
      id: 2,
      title: 'Artistic Garage Door Transformation',
      category: 'Custom Paintings',
      imageUrl: '/images/placeholder-custom-commission2.jpg',
      description: 'A unique, weather-resistant artwork transforming a standard residential garage door into a neighborhood statement piece. Medium: Specialized exterior paints.',
    },
    {
      id: 3,
      title: 'Bespoke Restaurant Feature Wall',
      category: 'Custom Paintings',
      imageUrl: '/images/placeholder-custom-commission3.jpg',
      description: 'A hand-painted feature wall creating a unique ambiance for a high-end restaurant. Not a full mural, but a significant artistic installation. Medium: Various paints and finishes.',
    },
    // Add more items as needed
  ];

  return (
    <div className="page-content custom-commissions-page">
      <header className="page-header">
        <h1>Custom Commissions Portfolio</h1>
        <p>Explore unique, high-end custom painting projects and artistic installations beyond traditional murals.</p>
      </header>

      <div className="portfolio-grid">
        {commissionItems.map(item => (
          <div key={item.id} className="portfolio-item">
            <img src={item.imageUrl} alt={`${item.title} placeholder`} />
            <div className="portfolio-item-info">
              <h3>{item.title}</h3>
              <p className="portfolio-category"><em>Category: {item.category}</em></p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCommissionsPage;

