let currentCommand = '';

export default function handler(req, res) {
  if (req.method === 'POST') {
    currentCommand = req.body.command;
    console.log('Perintah diterima:', currentCommand);
    res.status(200).json({ success: true, command: currentCommand });
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
