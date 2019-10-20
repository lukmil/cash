import fs from 'fs';

export default function read(filePath) {
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
}

module.exports = { read };
