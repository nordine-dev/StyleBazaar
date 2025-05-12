const initialState = {
  products: [
    {
      id: 101,
      name: "Floral Summer Dress",
      categoryId: 1,
      categoryName: "Dresses",
      description: "Lightweight floral print dress, perfect for summer.",
      price: 49.99,
      salePrice: 39.99,
      rating: 4.5,
      image: "../../public/img/floral.jpg",
    },
    {
      id: 102,
      name: "Cotton Blouse",
      categoryId: 2,
      categoryName: "Tops & Blouses",
      description: "Soft cotton blouse with button-down design.",
      price: 29.99,
      salePrice: null,
      rating: 4.2,
      image: "../../public/img/floral.jpg",
    },
    {
      id: 103,
      name: "High Waist Jeans",
      categoryId: 3,
      categoryName: "Jeans & Pants",
      description: "Stretch denim jeans with a high waist fit.",
      price: 59.99,
      salePrice: 49.99,
      rating: 4.7,
      image: "../../public/img/floral.jpg",
    },
    {
      id: 104,
      name: "Pleated Skirt",
      categoryId: 4,
      categoryName: "Skirts",
      description: "Elegant pleated skirt for casual or formal wear.",
      price: 39.99,
      salePrice: null,
      rating: 4.0,
      image: "../../public/img/floral.jpg",
    },
    {
      id: 105,
      name: "Leather Jacket",
      categoryId: 5,
      categoryName: "Outerwear",
      description: "Classic black faux-leather jacket with zip details.",
      price: 89.99,
      salePrice: 69.99,
      rating: 4.8,
      image: "../../public/img/floral.jpg",
    },
    {
      id: 106,
      name: "Yoga Set",
      categoryId: 6,
      categoryName: "Activewear",
      description: "Matching top and leggings set for active comfort.",
      price: 34.99,
      salePrice: 29.99,
      rating: 4.6,
      image: "../../public/img/floral.jpg",
    },
  ],
  categories: [
    {
      id: 1,
      name: "Dresses",
      image: "../../public/img/dresses.jpg",
    },
    {
      id: 2,
      name: "Tops & Blouses",
      image: "../../public/img/tops.jpg",
    },
    {
      id: 3,
      name: "Jeans & Pants",
      image: "../../public/img/jeans.webp",
    },
    {
      id: 4,
      name: "Skirts",
      image: "../../public/img/skirts.jpg",
    },
    {
      id: 5,
      name: "Outerwear",
      image: "../../public/img/outerwear.webp",
    },
    {
      id: 6,
      name: "Activewear",
      image: "../../public/img/activewear.jpg",
    },
  ],
  isLoading: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {};
    case "GET_CATEGORIES":
      return {};
    default:
      return state;
  }
};

export default dataReducer;
