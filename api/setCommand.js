// Gunakan global object dengan key unik
global.latestCommand = global.latestCommand || '';

export default function handler(req, res) {
  if (req.method === 'POST') {
    global.latestCommand = req.body.command;
    console.log('SET: ', global.latestCommand);
    return res.status(200).json({ success: true, command: global.latestCommand });
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
