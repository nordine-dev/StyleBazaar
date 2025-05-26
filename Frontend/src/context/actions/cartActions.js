
export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const removeFromCart = (itemId)=>{
    return {
        type: "REMOVE_FROM_CART",
        payload: itemId,
    }
}

export const upadedCartItems  = (itemId, quantity) =>{
    return {
        type: "UPADED_CART_ITEM",
        payload: {itemId, quantity},
    }
}
