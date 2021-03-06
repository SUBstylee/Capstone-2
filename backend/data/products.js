const products = [
  {
    name: 'Blue Beanie',
    image: '/assets/images/shop-img/hats/blue-beanie.png',
    description:
      'Blue beanie ski cap.  Acrylic knitted.  Keeps your head warm.  What more do you need?',
    brand: 'Totally Awesome Apparel',
    category: '__hats__',
    price: 15.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Blue Snapback',
    image: '/assets/images/shop-img/hats/blue-snapback.png',
    description:
      'You will reach for this fashionable and comfortable snapback each time you go out. There is no logo this baby blue cap. There are snap adjustments so you will get a perfect fit. You will love the all day comfort of this great cap.',
    brand: 'Totally Awesome Apparel',
    category: '__hats__',
    price: 29.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Brown Brim',
    image: '/assets/images/shop-img/hats/brown-brim.png',
    description:
      'Unique brown felt brim hat.  Cotton and polyester lining ensures a comfortable fit.',
    brand: 'Totally Awesome Apparel',
    category: '__hats__',
    price: 35.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Brown Cowboy',
    image: '/assets/images/shop-img/hats/brown-cowboy.png',
    description:
      'This brown felt cowboy hat will not make you better rider.  It will however keep the sun out of your eyes.',
    brand: 'Totally Awesome Apparel',
    category: '__hats__',
    price: 79.99,
    countInStock: 11,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Green Beanie',
    image: '/assets/images/shop-img/hats/green-beanie.png',
    description:
      'Green beanie ski cap.  Acrylic knitted.  Keeps your head warm.  What more do you need?',
    brand: 'Totally Awesome Apparel',
    category: '__hats__',
    price: 15.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Grey Brim',
    image: '/assets/images/shop-img/hats/grey-brim.png',
    description:
      'Unique grey felt brim hat.  Cotton and polyester lining ensures a comfortable fit.',
    brand: 'Totally Awesome Apparel',
    category: '__hats__',
    price: 49.99,
    countInStock: 0,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Palm Tree Cap',
    image: '/assets/images/shop-img/hats/palm-tree-cap.png',
    description:
      'Adjustable cap with a palm tree embroidered on it. There are snap adjustments so you will get a perfect fit. You will love the all day comfort of this great cap.',
    brand: 'Totally Awesome Apparel',
    category: '__hats__',
    price: 18.99,
    countInStock: 20,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Red Beanie',
    image: '/assets/images/shop-img/hats/red-beanie.png',
    description:
      'Red beanie ski cap.  Acrylic knitted.  Keeps your head warm.  What more do you need?',
    brand: 'Totally Awesome Apparel',
    category: '__hats__',
    price: 15.99,
    countInStock: 12,
    rating: 4,
    numReviews: 10,
  },
  {
    name: 'Wolf Cap',
    image: '/assets/images/shop-img/hats/wolf-cap.png',
    description:
      'Fitted cap with the word WOLF embroidered on it. We will send you whatever size we have and no returns, so you will likely never get a perfect fit.',
    brand: 'Totally Awesome Apparel',
    category: '__hats__',
    price: 29.99,
    countInStock: 3,
    rating: 2,
    numReviews: 1,
  },
  {
    name: 'Black Shearling',
    image: '/assets/images/shop-img/jackets/black-shearling.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__jackets__',
    price: 99.99,
    countInStock: 4,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Blue Jean Jacket',
    image: '/assets/images/shop-img/jackets/blue-jean-jacket.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__jackets__',
    price: 49.99,
    countInStock: 8,
    rating: 2,
    numReviews: 1,
  },
  {
    name: 'Brown Shearling',
    image: '/assets/images/shop-img/jackets/brown-shearling.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__jackets__',
    price: 99.99,
    countInStock: 15,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Brown Trench',
    image: '/assets/images/shop-img/jackets/brown-trench.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__jackets__',
    price: 129.99,
    countInStock: 8,
    rating: 5,
    numReviews: 1,
  },
  {
    name: 'Gray Jean Jacket',
    image: '/assets/images/shop-img/jackets/grey-jean-jacket.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__jackets__',
    price: 72.99,
    countInStock: 6,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Camo Vest',
    image: '/assets/images/shop-img/mens/camo-vest.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__men__',
    price: 62.99,
    countInStock: 6,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Floral Shirt',
    image: '/assets/images/shop-img/mens/floral-shirt.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__men__',
    price: 41.99,
    countInStock: 6,
    rating: 3,
    numReviews: 1,
  },
  {
    name: 'Long Sleeve Tee',
    image: '/assets/images/shop-img/mens/long-sleeve.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__men__',
    price: 28.99,
    countInStock: 6,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Pink Shirt',
    image: '/assets/images/shop-img/mens/pink-shirt.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__men__',
    price: 51.99,
    countInStock: 6,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Polka Dot Shirt',
    image: '/assets/images/shop-img/mens/polka-dot-shirt.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__men__',
    price: 38.99,
    countInStock: 6,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Rolled Up Jean Shirt',
    image: '/assets/images/shop-img/mens/roll-up-jean-shirt.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__men__',
    price: 69.99,
    countInStock: 6,
    rating: 5,
    numReviews: 1,
  },
  {
    name: 'Adidas NMD',
    image: '/assets/images/shop-img/sneakers/adidas-nmd.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__shoes__',
    price: 72.99,
    countInStock: 6,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Black Converse',
    image: '/assets/images/shop-img/sneakers/black-converse.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__shoes__',
    price: 49.99,
    countInStock: 6,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Nike Brown',
    image: '/assets/images/shop-img/sneakers/nike-brown.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__shoes__',
    price: 58.99,
    countInStock: 6,
    rating: 2.5,
    numReviews: 1,
  },
  {
    name: 'Nike Funky',
    image: '/assets/images/shop-img/sneakers/nike-funky.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__shoes__',
    price: 72.99,
    countInStock: 6,
    rating: 3.5,
    numReviews: 1,
  },
  {
    name: 'Timberlands',
    image: '/assets/images/shop-img/sneakers/timberlands.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__shoes__',
    price: 120.99,
    countInStock: 6,
    rating: 5,
    numReviews: 1,
  },
  {
    name: 'Nike White High-Tops',
    image: '/assets/images/shop-img/sneakers/white-nike-high-tops.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__shoes__',
    price: 99.99,
    countInStock: 6,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Nike Red',
    image: '/assets/images/shop-img/sneakers/nikes-red.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__shoes__',
    price: 84.99,
    countInStock: 6,
    rating: 3,
    numReviews: 1,
  },
  {
    name: 'Yeezy',
    image: '/assets/images/shop-img/sneakers/yeezy.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__shoes__',
    price: 499.99,
    countInStock: 6,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Blue Tank Top',
    image: '/assets/images/shop-img/womens/blue-tank.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__women__',
    price: 45.99,
    countInStock: 6,
    rating: 3,
    numReviews: 1,
  },
  {
    name: 'Floral Blouse',
    image: '/assets/images/shop-img/womens/floral-blouse.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__women__',
    price: 49.99,
    countInStock: 6,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Floral Skirt',
    image: '/assets/images/shop-img/womens/floral-skirt.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__women__',
    price: 69.99,
    countInStock: 6,
    rating: 4.5,
    numReviews: 1,
  },
  {
    name: 'Red Polka Dot Dress',
    image: '/assets/images/shop-img/womens/red-polka-dot-dress.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__women__',
    price: 101.99,
    countInStock: 6,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Striped Sweater',
    image: '/assets/images/shop-img/womens/striped-sweater.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__women__',
    price: 68.99,
    countInStock: 6,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'White Vest',
    image: '/assets/images/shop-img/womens/white-vest.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__women__',
    price: 49.99,
    countInStock: 6,
    rating: 5,
    numReviews: 1,
  },
  {
    name: 'Yellow Track Suit',
    image: '/assets/images/shop-img/womens/yellow-track-suit.png',
    description:
      'This is a description for this product.  It is not a real product, so you cannot buy it.  One size fits none.',
    brand: 'Totally Awesome Apparel',
    category: '__women__',
    price: 99.99,
    countInStock: 6,
    rating: 4,
    numReviews: 1,
  },
];

export default products;
