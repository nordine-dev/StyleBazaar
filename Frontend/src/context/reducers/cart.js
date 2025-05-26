
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
      const totalItemsCalulated = cartItem.reduce((acc, item) => {
        const price = item.salePrice ? item.salePrice : item.price;

        return acc + price * item.quantity;
      }, 0);
      return {
        ...state,
        cartItem: cartItem,
        totalPrice: totalItemsCalulated,
        totalItems: cartItem.length,
      };
    }
    case "REMOVE_FROM_CART": {
      const updateCartItems = cartItem.filter((item) => {
        return item.id !== action.payload;
      });
      const totalItemsCalulated = updateCartItems.reduce((acc, item)=> {
        const price = item.salePrice ? item.salePrice : item.price;
        return acc + price * item.quantity;
      },0);

      return {
        ...state,
        cartItem: updateCartItems,
        totalPrice : totalItemsCalulated,
        totalItems: updateCartItems.length,
      };
    }
    case "UPADED_CART_ITEM":{
        const {itemId, quantity} = action.payload;
        const updateCartItemss = cartItem.map((item)=>{
            return item.id === itemId ? {...item, quantity: quantity}: item;

        })
        const totalItemsCalulated = updateCartItemss.reduce((acc, item)=>{
            const price = item.salePrice ? item.salePrice : item.price;
            return acc + price * item.quantity;
        },0);

        return {
            ...state,
            cartItem: updateCartItemss,
            totalPrice: totalItemsCalulated
        }
    }

    default:
      return state;
  }
};

export default cartReducer;
