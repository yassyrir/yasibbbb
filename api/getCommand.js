global.latestCommand = global.latestCommand || '';

export default function handler(req, res) {
  if (req.method === 'GET') {
    console.log('GET: ', global.latestCommand);
    return res.status(200).json({ command: global.latestCommand });
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
