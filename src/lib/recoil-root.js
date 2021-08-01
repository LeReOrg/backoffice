import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const cartState = atom({
  key: "cartState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
export const tokenOTPState = atom({
  key: "tokenOTPState",
  default: "",
});

// errorCode : 1 reset email fail vì xài email đã đăng nhập bằng firebase

export const errorCodeState = atom({
  key: "errorCodeState",
  default: {
    status: "",
    message: "",
    code: "",
  },
});
export const listAddressState = atom({
  key: "listAddressState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const changeAddressState = atom({
  key: "changeAddressState",
  default: false,
});
export const cartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cart = get(cartState);

    return cart.reduce((total, item) => {
      return (
        total + item.quantity * item.item.price * parseInt(item.item.totalDays)
      );
    }, 0);
  },
});
export const cartTotalItem = selector({
  key: "cartTotalItem",
  get: ({ get }) => {
    const cart = get(cartState);
    let totalElement = 0;
    cart.map((item, index) => {
      totalElement += item.quantity;
    });
    return totalElement;
  },
});
export const addCart = (cart, item) => {
  const newCart = [...cart];
  const foundIndex = cart.findIndex((x) => x.id === item.id);

  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].item.quantity + item.quantity,
    };
    return newCart;
  }
  newCart.push({
    item,
    id: item.id,
    quantity: item.quantity,
  });
  return newCart;
};
export const userState = atom({
  key: "userState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const productAddDetailState = atom({
  key: "productAddDetailState",
  default: "",
});
export const overPlayState = atom({
  key: "overPlayState",
  default: false,
});
export const filterState = atom({
  key: "filterState",
  default: {
    populate: "address,category,user",
    sort: "price:desc",
    limit: 12,
    isTopProduct: false,
  },
});
