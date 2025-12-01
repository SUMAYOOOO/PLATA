const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing dist structure for Railway...');

const distPath = path.join(__dirname, '..', 'dist');

// Si existe dist/src/main.js, mover todo a dist/
if (fs.existsSync(path.join(distPath, 'src', 'main.js'))) {
  console.log('📁 Moving files from dist/src/ to dist/');
  
  const srcPath = path.join(distPath, 'src');
  const files = fs.readdirSync(srcPath);
  
  files.forEach(file => {
    const oldPath = path.join(srcPath, file);
    const newPath = path.join(distPath, file);
    
    // Si es un directorio, mover recursivamente
    if (fs.statSync(oldPath).isDirectory()) {
      if (fs.existsSync(newPath)) {
        // Si el directorio ya existe, mover su contenido
        const subFiles = fs.readdirSync(oldPath);
        subFiles.forEach(subFile => {
          fs.renameSync(
            path.join(oldPath, subFile),
            path.join(newPath, subFile)
          );
        });
        fs.rmdirSync(oldPath);
      } else {
        fs.renameSync(oldPath, newPath);
      }
    } else {
      fs.renameSync(oldPath, newPath);
    }
  });
  
  // Eliminar directorio src vacío si existe
  if (fs.existsSync(srcPath)) {
    fs.rmdirSync(srcPath);
  }
  
  console.log('✅ Dist structure fixed for Railway');
}

// Verificar que main.js está en el lugar correcto
if (fs.existsSync(path.join(distPath, 'main.js'))) {
  console.log('✅ dist/main.js is in correct location');
} else {
  console.log('❌ dist/main.js not found after fix');
  process.exit(1);
}
