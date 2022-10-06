export const getShuffledArr = (arr) => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};

export const assignPricesToTickets = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const price = {
      value: arr[i],
      assignedPrice: RAND_PRICES[i],
    };
    newArr.push(price);
  }

  return newArr;
};

export const PRICES = [
  1, 5, 10, 25, 50, 100, 150, 200, 300, 500, 800, 1000, 2500, 4000, 5000, 6500,
  8000, 10000, 15000, 25000, 50000, 100000, 500000, 1000000,
];

export const RAND_PRICES = getShuffledArr(PRICES);

export const half = Math.ceil(PRICES.length / 2);
export const firstHalf = PRICES.slice(0, half);
export const secondHalf = PRICES.slice(half);

export const TICKETS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

export const ASSIGNED_TICKETS = assignPricesToTickets(TICKETS);
