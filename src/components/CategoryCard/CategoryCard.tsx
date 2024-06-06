import React from "react";
import "./CategoryCard.css";

interface CategoryCardProps {
  category: {
    name: string;
    image: string;
  };
  selectedCategory: string
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ selectedCategory, category, onClick }) => {

  return (
    <div className={`category-card ${ selectedCategory === category.name ? 'selected' : ''}`} onClick={onClick}>
      <div className="category-image">
        <img src={`data:image/jpeg;base64,${category.image}`}></img>
      </div>
      <div className="category-name">
        <h3>{category.name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
