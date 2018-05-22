import { makeKey, findFrequencies } from '../PizzaProcessor';
import pizzaData from './pizzas.json';

const keyA = ['extra sauce', 'shrimp', 'olives'];
const keyB = ['shrimp', 'extra sauce', 'olives'];
const keyC = ['an unpopular topping'];


describe('Pizza logic tests', () => {
  it('It should create sane keys that pass for equality', () => {
    expect(makeKey(keyA) === makeKey(keyB)).toBeTruthy();
  });

  it('Should correctly report frequency for dummy data', () => {
    const orders = [{ toppings: keyA }, { toppings: keyC }, { toppings: keyB }];

    const histogram = findFrequencies(orders);

    expect(histogram[0].orderCount).toBe(2);
    expect(histogram[1].orderCount).toBe(1);

    expect(histogram[0].toppings).toBe('extra sauce, olives, shrimp');
  });

  it('Should sort real data', () => {
    const histogram = findFrequencies(pizzaData);

    expect(histogram[0].orderCount >= histogram[1].orderCount).toBeTruthy();
    expect(histogram[1].orderCount >= histogram[2].orderCount).toBeTruthy();
    expect(histogram[39].orderCount >= histogram[40].orderCount).toBeTruthy();
  });
});
