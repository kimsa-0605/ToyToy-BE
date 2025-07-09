// 1. Import Product entity and bcrypt for password hashing
import { Category } from '../../core/entities/product/category.enum';
import { Product } from '../../core/entities/product/product.entity';

// 2. Define sample products for seeding the database
export const productSeedData: Partial<Product>[] = [
  {
    id: 1,
    product_name: "Teddy Bear",
    price: 91,
    image_link: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png",
    category: Category.STUFFED_ANIMALS,
    description: "This soft and cuddly Teddy Bear is perfect for snuggling. With its smooth fur and friendly face, it makes a wonderful bedtime companion or thoughtful gift for loved ones.",
    quantity: 12
  },
  {
    id: 2,
    product_name: "Mega Plush Toy",
    price: 50,
    image_link: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png",
    category: Category.STUFFED_ANIMALS,
    description: "The Mega Plush Toy is a large, huggable plush animal with a charming smile and extra soft filling. Perfect for playtime, bedtime, or room decor.",
    quantity: 18
  },
  {
    id: 3,
    product_name: "Cute Dog",
    price: 33,
    image_link: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png",
    category: Category.STUFFED_ANIMALS,
    description: "This Cute Dog plush comes with a hoodie and a happy expression, making it the perfect companion for kids who love animals and soft toys.",
    quantity: 15
  },
  {
    id: 4,
    product_name: "Little Friend",
    price: 98,
    image_link: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png",
    category: Category.STUFFED_ANIMALS,
    description: "Little Friend is a colorful and charming plush toy that brings joy and comfort. With bright colors and a cheerful look, it’s a lovable gift for kids.",
    quantity: 9
  },
  {
    id: 5,
    product_name: "Christmas Deer",
    price: 55,
    image_link: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0ede56ac5481f54e12e9_33610-4-plush-toy-hd-min-p-500.png",
    category: Category.STUFFED_ANIMALS,
    description: "Celebrate the holidays with this adorable Christmas Deer plush. Its festive design and soft body make it an ideal holiday decoration or cuddly toy.",
    quantity: 11
  },
  {
    id: 6,
    product_name: "Pluto Yellow Dog",
    price: 6,
    image_link: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0e6335e113da999a7976_33568-4-toy-image-min-p-500.png",
    category: Category.STUFFED_ANIMALS,
    description: "Pluto Yellow Dog is a lively and bright plush toy that resembles the famous cartoon character. A fun addition to any child’s plush collection.",
    quantity: 14
  },
  {
    id: 7,
    product_name: "Grey Elephant",
    price: 52,
    image_link: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0db61f2da2a4ef173617_cute-plush-toy-stuffed-animal-47335-min-p-500.png",
    category: Category.STUFFED_ANIMALS,
    description: "This Grey Elephant plush has big floppy ears and a soft trunk, making it both adorable and comforting. Ideal for animal lovers of all ages.",
    quantity: 19
  },
  {
    id: 8,
    product_name: "Funny Clown",
    price: 78,
    image_link: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0d07939555eac3b8a91c_33910-6-toy-clipart-min.png",
    category: Category.STUFFED_ANIMALS,
    description: "The Funny Clown plush is full of personality, with bright colors and a big smile that brings laughter and joy. Great for playrooms or circus-themed parties.",
    quantity: 7
  },
  {
    id: 9,
    product_name: "Happy Flower",
    price: 8,
    image_link: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png",
    category: Category.WOODEN_TOYS,
    description: "Happy Flower is a vibrant wooden toy shaped like a flower, designed to bring color and cheerfulness to playtime or decoration spaces.",
    quantity: 13
  },
  {
    id: 10,
    product_name: "Lift Machine",
    price: 65,
    image_link: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png",
    category: Category.WOODEN_TOYS,
    description: "This Lift Machine wooden toy is designed to mimic construction vehicles, helping kids develop imagination and motor skills during creative play.",
    quantity: 17
  },
  {
    id: 11,
    product_name: "Wooden Camera",
    price: 98,
    image_link: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png",
    category: Category.WOODEN_TOYS,
    description: "The Wooden Camera toy inspires imaginative photography play. Crafted from smooth, child-safe wood, it's a perfect gift for young creatives.",
    quantity: 6
  },
  {
    id: 12,
    product_name: "Little Rabbit",
    price: 34,
    image_link: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png",
    category: Category.WOODEN_TOYS,
    description: "Little Rabbit is a beautifully carved wooden toy that captures the innocence and charm of a bunny. Great for storytelling and natural play.",
    quantity: 10
  },
  {
    id: 13,
    product_name: "Rainbow Truck",
    price: 50,
    image_link: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf51b7c8d851a73cc4544c_33649-6-toy-transparent-image-min-p-500.png",
    category: Category.WOODEN_TOYS,
    description: "This Rainbow Truck is a multicolored wooden vehicle designed for endless adventures. Kids will love loading and moving it around during playtime.",
    quantity: 16
  },
  {
    id: 14,
    product_name: "Happy Dog",
    price: 48,
    image_link: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf5171ace69cb064b33d42_33388-1-wooden-toy-photos-min-p-500.png",
    category: Category.WOODEN_TOYS,
    description: "The Happy Dog wooden toy is crafted with a smiling face and wagging tail. It's fun, safe, and helps develop fine motor skills in toddlers.",
    quantity: 8
  },
  {
    id: 15,
    product_name: "Caterpillar",
    price: 96,
    image_link: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf50843a685ea7dfd6e4fd_33371-3-wooden-toy-min-p-500.png",
    category: Category.WOODEN_TOYS,
    description: "Caterpillar is a colorful, segmented wooden toy that encourages children to explore colors, movement, and coordination during fun activities.",
    quantity: 20
  },
  {
    id: 16,
    product_name: "Wooden Tractor",
    price: 94,
    image_link: "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf5100ace69c1b26b33d2d_33476-9-wood",
    category: Category.WOODEN_TOYS,
    description: "This Wooden Tractor is a sturdy and functional toy designed for young farmers. It’s perfect for pretend play in barns, gardens, or on the floor.",
    quantity: 11
  }
];