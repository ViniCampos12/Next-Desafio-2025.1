// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   const products = [
//     {
//       name: 'Wireless Mouse',
//       image: '/home/airJordan1.png',
//       description: 'A smooth and responsive wireless mouse.',
//       price: 29.99,
//       sizes: [1, 2, 3],  // Exemplo de tamanhos (você pode ajustar conforme necessário)
//     },
//     {
//       name: 'Mechanical Keyboard',
//       image: '/home/airJordan1.png',
//       description: 'A durable mechanical keyboard with RGB lighting.',
//       price: 89.99,
//       sizes: [1, 2, 3],  // Exemplo de tamanhos
//     },
//     {
//       name: 'Noise Cancelling Headphones',
//       image: '/home/airJordan1.png',  // Substitua pelo link real da imagem
//       description: 'Comfortable headphones with active noise cancelling.',
//       price: 199.99,
//       sizes: [1, 2, 3],  // Exemplo de tamanhos
//     },
//     {
//       name: '4K Monitor',
//       image: '/home/airJordan1.png',
//       description: 'A high-resolution 4K monitor for professional use.',
//       price: 399.99,
//       sizes: [1, 2, 3],  // Exemplo de tamanhos
//     },
//     {
//       name: 'USB-C Hub',
//       image: '/home/airJordan1.png',
//       description: 'A versatile USB-C hub with multiple ports.',
//       price: 49.99,
//       sizes: [1, 2, 3],  // Exemplo de tamanhos
//     },
//     {
//       name: 'Portable SSD',
//       image: '/home/airJordan1.png', 
//       description: 'A fast and portable SSD with 1TB capacity.',
//       price: 129.99,
//       sizes: [1, 2, 3],  // Exemplo de tamanhos
//     },
//     {
//       name: 'Bluetooth Speaker',
//       image: '/home/airJordan1.png',
//       description: 'A compact Bluetooth speaker with excellent sound quality.',
//       price: 59.99,
//       sizes: [1, 2, 3],  // Exemplo de tamanhos
//     },
//     {
//       name: 'Smartwatch',
//       image: '/home/airJordan1.png',
//       description: 'A stylish smartwatch with fitness tracking features.',
//       price: 149.99,
//       sizes: [1, 2, 3],  // Exemplo de tamanhos
//     },
//     {
//       name: 'Gaming Chair',
//       image: '/home/airJordan1.png', 
//       description: 'An ergonomic gaming chair with lumbar support.',
//       price: 249.99,
//       sizes: [1, 2, 3],  // Exemplo de tamanhos
//     },
//     {
//       name: 'Webcam',
//       image: '/home/airJordan1.png',
//       description: 'A high-definition webcam for video conferencing.',
//       price: 79.99,
//       sizes: [1, 2, 3],  // Exemplo de tamanhos
//     },
//   ];


//   for (const product of products) {
//     await prisma.product.update({
//       where: {name: product.name},
//       data: {image: product.image}
//     });
//   }
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: 'Air Jordan 1 High OG',
      image: '/home/airJordan1.png',
      description: 'Tênis Masculino Casual. Inspirando-se em uma combinação de cores icônica, o renomado AJ1 High retorna em uma paleta Midnight Navy. Couro durável, amortecimento leve e uma gola acolchoada de corte alto adicionam conforto à sua jornada. Amarre os cadarços e carregue o legado de MJ para a frente.',
      price: 1299.90,
      sizes: [32,33, 34, 35, 36, 38, 39, 40, 42],  // Exemplo de tamanhos (você pode ajustar conforme necessário)
    },
    {
      name: 'Tênis Supernova Rise 2 Running',
      image: '/home/adidasShoes2.avif',
      description: 'Você começou a correr e agora tem uma corrida no seu calendário. Continue evoluindo com este tênis de corrida adidas para corridas diárias. Ele tem como base uma entressola Dreamstrike+, nossa superespuma leve ajustada para conforto. As hastes de suporte ajudam a guiar você do calcanhar à ponta do pé',
      price: 809.99,
      sizes: [34, 35, 36, 38, 40, 41, 42],  // Exemplo de tamanhos
    },
    {
      name: 'Tênis Nike Invincible Run 3 Masculino Blueprint',
      image: '/home/nikeShoes1_1.png',  // Substitua pelo link real da imagem
      description: 'Com amortecimento máximo para suporte a cada km, o Invincible 3 fornece o maior nível de conforto abaixo do pé para ajudar você a ficar em pé hoje, amanhã e além. Projetada de acordo com as especificações exatas de atletas de campeonato, a espuma ZoomX ultrarresponsiva e ajuda você a continuar correndo. Ela pode ajudá-lo a seguir seu caminho preferido e voltar para a próxima corrida se sentindo pronto e revigorado.',
      price: 1099.99,
      sizes: [31, 32, 33, 34, 35, 38, 39, 40, 41, 42],  // Exemplo de tamanhos
    },
    {
      name: 'Tênis Nike Air Max 97 Futura Feminino',
      image: '/home/nikeShoes3_1.png',
      description: 'Vimos o seu futuro e ele parece... aconchegante. Esta versão do AM97 mistura camadas de couro, tecido e camurça felpuda, dando um toque artesanal ao design clássico inspirado na água. Fluindo com uma unidade Nike Air Max, você precisa sentir esse tipo de conforto para acreditar. Nossa previsão? Você nunca pareceu melhor (ou mais confortável).',
      price: 799.99,
      sizes: [31, 32, 33, 34, 35, 36, 40],  // Exemplo de tamanhos
    },
    {
      name: 'Tênis Knu Skool Vlt Imram Potato Navy',
      image: '/home/vansShoes.webp',
      description: ' Estes são os seus Vans. Das montanhas ao mar, o ar livre sempre foi a inspiração de tela para a equipe da Vans. O Tênis Old Skool Vlt Imram Potato Navy foi feito para mantê-lo ao ar livre e explorando, não importa o tempo. O modelo tem base nos lendários tênis com sidestripe, com arquitetura Mte-1 para te manter protegido de qualquer clima, com o estilo clássico da Vans. ',
      price: 499.99,
      sizes: [31, 32, 33, 34, 35, 38, 40, 41, 42],  // Exemplo de tamanhos
    },
    {
      name: 'Tênis Nike SB Force 58 Premium Unissex',
      image: '/home/nikeShoes2_1.png', 
      description: 'A melhor e mais recente novidade a aparecer nas ruas, o Force 58 garante a durabilidade da forma da sola com a flexibilidade de um tênis vulcanizado. Detalhes ocultos (como o guia na palmilha) acrescentam um toque divertido inspirado no ar livre. Para completar, materiais de tecido e marca retrô lembram suas mochilas favoritas dos anos 90.',
      price: 429.99,
      sizes: [31, 32, 33, 35, 38, 39],  // Exemplo de tamanhos
    },
    {
      name: 'Tênis Gazelle Indoor x Liberty London',
      image: '/home/airJordan1.png',
      description: 'Entre na vibe descontraída do verão a qualquer mês do ano. Esta versão do Gazelle Indoor é feita em colaboração com a Liberty London. O cabedal em nobuck destaca-se com detalhes coloridos e as amadas flores do verão. Combine este tênis de cano baixo com jeans ou vestidos casuais para um look estiloso inspirado nos arquivos.',
      price: 499.99,
      sizes: [31, 32, 33, 37, 38, 41, 42],  // Exemplo de tamanhos
    },
    {
      name: 'Tênis Japan',
      image: '/home/adidasShoes1.avif',
      description: 'É como ter um pedaço da história nos pés. Este adidas Japan é uma reedição de um tênis de 1964 que apareceu em um catálogo para o evento esportivo global realizado no Japão naquele ano. Embora esteja o mais perto possível do design original de perfil baixo, ele possui detalhes de design que o diferencia, como a biqueira em T costurada dupla.',
      price: 649.99,
      sizes: [31, 32, 33, 34, 35, 36, 38, 39, 40 ,41, 42],  // Exemplo de tamanhos
    },
    {
      name: 'Tênis RS-X Alternate Route',
      image: '/home/filaShoes].png', 
      description: 'O RS-X segue em sua quarta temporada com um pack que traz cabedal em lycra e mesh com sobreposições em camurça e material sintético. Este pacote apresenta uma parte superior em malha e lycra com sobreposições de camurça e couro sintético.',
      price: 399.99,
      sizes: [31, 32, 33, 34, 35 ,37, 38, 40, 43],  // Exemplo de tamanhos
    },
    {
      name: 'Tênis de Treino PWR XX NITRO Feminino',
      image: '/home/FilaShoes.png',
      description: 'Sua modelagem, seus treinos, seu estilo. O tênis PWR XX NITRO, confeccionado especificamente para o pé feminino, dá um apoio estiloso para esculpir, transpirar e arrasar no treino. A entressola com espuma NITRO proporciona amortecimento e responsividade superiores enquanto sua modelagem específica para o pé feminino foi construída para você se sentir segura nos exercícios de chão e correr na esteira.',
      price: 379.90,
      sizes: [31, 32, 33, 37, 38, 40, 42],  // Exemplo de tamanhos
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { name: product.name },  // Procurar o produto pelo nome
      update: {
        image: product.image,
        description: product.description,
        price: product.price,
        sizes: { set: product.sizes },  // Atualizar os tamanhos (se estiver usando um relacionamento ou campo do tipo array)
      },
      create: {
        name: product.name,
        image: product.image,
        description: product.description,
        price: product.price,
        sizes: { set: product.sizes },  // Criar os tamanhos (se necessário)
      },
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
