import { toast } from "react-toastify";
const getStoredCartList = () => {
  const storedListStr = localStorage.getItem('read-list');
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredCartList = (id) => {
  const storedList = getStoredCartList();
  if (storedList.includes(id)) {
    toast.error('Product already exist in cart !', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr);
    toast.success('Successfully added !', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
};

const getStoredWishList = () => {
  const wishListStr = localStorage.getItem('wish-list');
  if (wishListStr) {
    const wishList = JSON.parse(wishListStr);
    return wishList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const wishList = getStoredWishList();
  if (wishList.includes(id)) {
    toast.error('Product already exist in wish-list !', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  } else {
    wishList.push(id);
    const storedListStr = JSON.stringify(wishList);
    localStorage.setItem('wish-list', storedListStr);
    toast.success('Successfully added !', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
};

export {
  addToStoredCartList,
  addToStoredWishList,
  getStoredCartList,
  getStoredWishList,
};
