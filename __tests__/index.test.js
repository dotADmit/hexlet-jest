import reverse from '../src/index.js';
import prob from '../chall/probabilities.js'
import Circle from '../chall/Circle.js'

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

const arr1 = [1, 3, 1, 5, 1];
const res1 = {
  1: { 3: 0.5, 5: 0.5 },
  3: { 1: 1 },
  5: { 1: 1 },
};


const arr2 = [1, 3, 1, 5, 1, 2, 1, 4, 6];
const res2 = {
  1: {
      2: 0.25,
      3: 0.25,
      4: 0.25,
      5: 0.25,
    },
  2: { 1: 1 },
  3: { 1: 1 },
  4: { 6: 1 },
  5: { 1: 1 },
  6: {},
};


test('prob1', () => {
  expect(prob(arr1)).toEqual(res1);
});

test('prob2', () => {
  expect(prob(arr2)).toEqual(res2);
});

const circle = new Circle(3);

test('getArea', () => {
  expect(circle.getArea()).toEqual(28.274);
});

test('getCircumference', () => {
  expect(circle.getCircumference()).toEqual(18.84955592153876);
});