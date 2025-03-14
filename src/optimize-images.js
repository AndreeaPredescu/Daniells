const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const sourceDir = 'assets/images/torturi-nunta';
const outputDir = 'assets/images/torturi-nunta-optimized';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(sourceDir, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    const filePath = path.join(sourceDir, file).replace(/\\/g, '/');
    const ext = path.extname(file).toLowerCase();

    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      exec(
        `imagemin "${filePath}" --plugin=webp --out-dir=${outputDir}`,
        (error, stdout, stderr) => {
          if (error) {
            console.error(`Eroare la optimizarea fișierului ${file}:`, error);
            return;
          }
          console.log(`Fișierul ${file} a fost optimizat cu succes.`);
        }
      );
    } else {
      console.log(
        `Fișierul ${file} nu este un fișier PNG sau JPEG și a fost ignorat.`
      );
    }
  });
});
