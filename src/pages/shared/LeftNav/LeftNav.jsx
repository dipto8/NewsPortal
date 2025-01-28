import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LeftNav() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Categories</h2>
      {categories.map((category) => (
        <Link
          className="block p-2 text-xl font-semibold"
          key={category.id}
          to={`/categories/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
