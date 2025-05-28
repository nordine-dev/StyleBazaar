
const initialState = {
  cartItem: [],
  totalPrice: 0,
  totalItems: 0,
  shippingPrice: 0,
  taxPrice: 0,
  discountPrice: 0,
  paymentMethod: "",
  shippingAddress: {
    address: "",
    city: "",
    postalCode: "",
    country: "",
  },
};
// totaol price function
const totalPrice = (cartItem)=>{
  return cartItem.reduce((acc, item)=>{
    const price = item.salePrice ? item.salePrice : item.price;
    return acc + price * item.quantity;
  }, 0);
}

const cartReducer = (state = initialState, action) => {
  let cartItem = state.cartItem;
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = cartItem.find((item) => {
        return item.id === action.payload.id;
      });
      if (existingItem) {
        cartItem = cartItem.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item;
        });
      } else {
        cartItem = [...cartItem, action.payload];
      }

      return {
        ...state,
        cartItem: cartItem,
        totalPrice: totalPrice(cartItem),
        totalItems: cartItem.length,
      };
    }
    case "REMOVE_FROM_CART": {
      const updateCartItems = cartItem.filter((item) => {
        return item.id !== action.payload;
      });

      return {
        ...state,
        cartItem: updateCartItems,
        totalPrice : totalPrice(updateCartItems),
        totalItems: updateCartItems.length,
      };
    }
    case "UPADED_CART_ITEM":{

        const {itemId, quantity} = action.payload;

        const updateCartItemss = cartItem.map((item)=>{
            return item.id === itemId ? {...item, quantity: quantity}: item;

        })

        return {
            ...state,
            cartItem: updateCartItemss,
            totalPrice: totalPrice(updateCartItemss)
        }
    }

    default:
      return state;
  }
};

export default cartReducer;
