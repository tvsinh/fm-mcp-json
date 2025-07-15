import { fileURLToPath } from 'url';
import path from 'path';
import open from 'open';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'index.html');
open(filePath);
