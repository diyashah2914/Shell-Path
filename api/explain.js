import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const commandsPath = path.join(__dirname, '..', 'backend', 'commands.json');
const commandsData = JSON.parse(fs.readFileSync(commandsPath, 'utf8'));

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { command } = req.body || {};

  if (!command) {
    return res.status(400).json({ error: 'Missing command' });
  }

  const result = commandsData[command];

  if (result) {
    return res.status(200).json(result);
  }

  return res.status(200).json({ error: 'Command not found!' });
}
