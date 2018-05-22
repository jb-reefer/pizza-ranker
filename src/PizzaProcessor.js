const makeKey = toppings => (
  toppings.sort().reduce((accumulator, current) => `${accumulator}, ${current}`)
);

const findFrequencies = (orders) => {
  const processedOrders = orders.map(order => makeKey(order.toppings));

  const map = new Map();
  for (const order of processedOrders) {
    const currentValue = map.get(order);

    if (currentValue === undefined) {
      map.set(order, 1);
    } else {
      map.set(order, currentValue + 1);
    }
  }

  const buffer = [];
  map.forEach((value, key) => {
    buffer.push({
      toppings: key,
      orderCount: value,
    });
  });

  // Descending sort, based on orderCount
  return (buffer).sort((a, b) => (b.orderCount - a.orderCount));
};

export { makeKey, findFrequencies };
