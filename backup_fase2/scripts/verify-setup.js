const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando configuración del proyecto...');

const checks = [
  { file: 'package.json', exists: true },
  { file: 'tsconfig.json', exists: true },
  { file: '.env.example', exists: true },
  { file: 'src/main.ts', exists: true },
  { file: 'prisma/schema.prisma', exists: true },
];

let allPassed = true;

checks.forEach(check => {
  const exists = fs.existsSync(path.join(__dirname, '..', check.file));
  const status = exists === check.exists ? '✅' : '❌';
  console.log(`${status} ${check.file}`);
  
  if (exists !== check.exists) {
    allPassed = false;
  }
});

if (allPassed) {
  console.log('\n🎉 ¡Configuración verificada correctamente!');
  console.log('Puedes continuar con: npm run build');
} else {
  console.log('\n⚠️  Hay problemas en la configuración. Revisa los archivos.');
  process.exit(1);
}
