import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: 'Wireless Mouse',
      image: '/home/airJordan1.png',
      description: 'A smooth and responsive wireless mouse.',
      price: 29.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos (você pode ajustar conforme necessário)
    },
    {
      name: 'Mechanical Keyboard',
      image: '/home/airJordan1.png',
      description: 'A durable mechanical keyboard with RGB lighting.',
      price: 89.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
    {
      name: 'Noise Cancelling Headphones',
      image: '/home/airJordan1.png',  // Substitua pelo link real da imagem
      description: 'Comfortable headphones with active noise cancelling.',
      price: 199.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
    {
      name: '4K Monitor',
      image: '/home/airJordan1.png',
      description: 'A high-resolution 4K monitor for professional use.',
      price: 399.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
    {
      name: 'USB-C Hub',
      image: '/home/airJordan1.png',
      description: 'A versatile USB-C hub with multiple ports.',
      price: 49.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
    {
      name: 'Portable SSD',
      image: '/home/airJordan1.png', 
      description: 'A fast and portable SSD with 1TB capacity.',
      price: 129.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
    {
      name: 'Bluetooth Speaker',
      image: '/home/airJordan1.png',
      description: 'A compact Bluetooth speaker with excellent sound quality.',
      price: 59.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
    {
      name: 'Smartwatch',
      image: '/home/airJordan1.png',
      description: 'A stylish smartwatch with fitness tracking features.',
      price: 149.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
    {
      name: 'Gaming Chair',
      image: '/home/airJordan1.png', 
      description: 'An ergonomic gaming chair with lumbar support.',
      price: 249.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
    {
      name: 'Webcam',
      image: '/home/airJordan1.png',
      description: 'A high-definition webcam for video conferencing.',
      price: 79.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
  ];


  for (const product of products) {
    await prisma.product.update({
      where: {name: product.name},
      data: {image: product.image}
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
