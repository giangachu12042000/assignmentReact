let carts = [];
export const Cart = ({ item, cb }) => {
  let obj = {
    id: item.id,
    price: item.price,
    image: item.image,
    name: item.name,
    quantity: 1,
  };

  if (carts && carts.length === null) {
    const oldCart = JSON.parse(localStorage.getItem("carts"));
    for (let i = 0; i < oldCart.length; i++) {
      carts.push(oldCart[i]);
    }
  }
  if (carts.length > 0) {
    for (let i = 0; i < carts.length; i++) {
      if (obj.id == carts[i].id) {
        return cb();
      }
    }
  }
  carts.push(obj);
  localStorage.setItem("carts", JSON.stringify(carts));
};

export const findCount = (params) => {
  const oldCart = JSON.parse(localStorage.getItem("carts"));
  for (let i = 0; i < oldCart.length; i++) {
    if (params.id == oldCart[i].id) {
      oldCart[i].quantity = params.quantity;
      console.log(oldCart, "==::");
      localStorage.setItem("carts", JSON.stringify(oldCart));
    }
  }
  console.log(oldCart, "=22=::");
};

export const getCarts = () => {
  return JSON.parse(localStorage.getItem("carts"));
};

export const removeItemCart = (id) => {
  const oldCart = JSON.parse(localStorage.getItem("carts"));
  for (let i = 0; i < oldCart.length; i++) {
    if (oldCart[i].id === id) {
      oldCart.splice(i, 1);
      localStorage.setItem("carts", JSON.stringify(oldCart));
    }
  }
};
