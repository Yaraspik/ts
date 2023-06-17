import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';
import SmartPhones from '../domain/Smartphones';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add countable product to Cart', () => {
  const cart = new Cart();
  cart.add(new SmartPhones(2,"Iphone", 15000));
  cart.add(new SmartPhones(2,"Iphone", 15000));
  cart.add(new SmartPhones(2,"Iphone", 15000));
  cart.add(new SmartPhones(3,"Google", 15000));
  expect(cart.items).toEqual([
    {"count": 3, "item": {"id": 2, "name": "Iphone", "price": 15000, "countable": true}},
    {"count": 1, "item": {"id": 3, "name": "Google", "price": 15000, "countable": true}}
  ]);
});

test('add Movie to Cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1,"Avengers", 2012, 500, "USA,", "Avengers Assemble",  "Fantasy, Adventure",  137));
  expect(cart.items).toEqual([{"count": 1, "item": {"country": "USA,", "genre": "Fantasy, Adventure", "id": 1, "name": "Avengers", "price": 500, "slogan": "Avengers Assemble", "time": 137, "year": 2012, "countable": false}},
  ]);
});

test('get total cost', () => {
  const cart = new Cart();
  cart.add(new Movie(1,"Avengers", 2012, 500, "USA,", "Avengers Assemble",  "Fantasy, Adventure",  137));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  expect(cart.totalCost()).toBe(1400);
});

test('get total cost with discount', () => {
  const cart = new Cart();
  cart.add(new Movie(1,"Avengers", 2012, 500, "USA,", "Avengers Assemble",  "Fantasy, Adventure",  137));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  expect(cart.totalDiscountCost(10)).toBe(1260);
});

test('remove item from cart by id', () => {
  const cart = new Cart();
  cart.add(new Movie(1,"Avengers", 2012, 500, "USA,", "Avengers Assemble",  "Fantasy, Adventure",  137));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.removeItem(1008);
  expect(cart.items).toEqual([{"count": 1, "item": {"country": "USA,", "genre": "Fantasy, Adventure", "id": 1, "name": "Avengers", "price": 500, "slogan": "Avengers Assemble", "time": 137, "year": 2012, "countable": false}},
]);
});
