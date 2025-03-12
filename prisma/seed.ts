import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: 'Wireless Mouse',
      image: 'https://example.com/images/wireless-mouse.jpg',  // Substitua pelo link real da imagem(imagem no 14:28)
      description: 'A smooth and responsive wireless mouse.',
      price: 29.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos (você pode ajustar conforme necessário)
    },
    {
      name: 'Mechanical Keyboard',
      image: 'https://example.com/images/mechanical-keyboard.jpg',  // Substitua pelo link real da imagem
      description: 'A durable mechanical keyboard with RGB lighting.',
      price: 89.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
    {
      name: 'Noise Cancelling Headphones',
      image: 'https://example.com/images/noise-cancelling-headphones.jpg',  // Substitua pelo link real da imagem
      description: 'Comfortable headphones with active noise cancelling.',
      price: 199.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
    {
      name: '4K Monitor',
      image: 'https://example.com/images/4k-monitor.jpg',  // Substitua pelo link real da imagem
      description: 'A high-resolution 4K monitor for professional use.',
      price: 399.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
    {
      name: 'USB-C Hub',
      image: 'https://example.com/images/usb-c-hub.jpg',  // Substitua pelo link real da imagem
      description: 'A versatile USB-C hub with multiple ports.',
      price: 49.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
    {
      name: 'Portable SSD',
      image: 'https://example.com/images/portable-ssd.jpg',  // Substitua pelo link real da imagem
      description: 'A fast and portable SSD with 1TB capacity.',
      price: 129.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
    {
      name: 'Bluetooth Speaker',
      image: 'https://example.com/images/bluetooth-speaker.jpg',  // Substitua pelo link real da imagem
      description: 'A compact Bluetooth speaker with excellent sound quality.',
      price: 59.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
    {
      name: 'Smartwatch',
      image: 'https://example.com/images/smartwatch.jpg',  // Substitua pelo link real da imagem
      description: 'A stylish smartwatch with fitness tracking features.',
      price: 149.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
    {
      name: 'Gaming Chair',
      image: 'https://example.com/images/gaming-chair.jpg',  // Substitua pelo link real da imagem
      description: 'An ergonomic gaming chair with lumbar support.',
      price: 249.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
    {
      name: 'Webcam',
      image: 'https://example.com/images/webcam.jpg',  // Substitua pelo link real da imagem
      description: 'A high-definition webcam for video conferencing.',
      price: 79.99,
      sizes: [1, 2, 3],  // Exemplo de tamanhos
    },
  ];


  for (const product of products) {
    await prisma.product.create({
      data: product,
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
