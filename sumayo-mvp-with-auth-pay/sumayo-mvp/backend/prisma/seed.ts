import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: 'Admin User', email: 'admin@sumayo.test', role: 'admin', emailVerified: true },
      { name: 'Student One', email: 'student1@sumayo.test', role: 'student', emailVerified: true }
    ]
  });

  const course = await prisma.course.create({
    data: {
      title: 'Introducción a SUMAYÕ',
      description: 'Curso inicial de ejemplo',
      slug: 'introduccion-sumayo',
      orderIndex: 1,
      topics: {
        create: [
          {
            title: 'Tema 1 - Fundamentos',
            description: 'Primer tema',
            orderIndex: 1,
            price: 0,
            isFree: true,
            resources: {
              create: [
                { type: 'video', url: 'https://example.com/video1.mp4' }
              ]
            }
          },
          {
            title: 'Tema 2 - Pago opcional',
            description: 'Tema premium',
            orderIndex: 2,
            price: 9.99,
            isFree: false
          }
        ]
      }
    },
    include: { topics: true }
  });

  console.log('Seed finished:', course.title);
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
