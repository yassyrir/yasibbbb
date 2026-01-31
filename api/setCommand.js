// api/setCommand.js
let savedCommand = '';

export default function handler(req, res) {
  if (req.method === 'POST') {
    savedCommand = req.body.command;
    console.log('Command saved:', savedCommand);
    return res.status(200).json({ success: true, command: savedCommand });
  }
  
  // Jika method bukan POST
  return res.status(405).json({ error: 'Method not allowed' });
}
