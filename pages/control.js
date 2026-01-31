import { useState } from 'react';

export default function Control() {
  const [status, setStatus] = useState('');

  const sendCommand = async (cmd) => {
    const res = await fetch('/api/setCommand', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ command: cmd })
    });
    const data = await res.json();
    setStatus(`Perintah "${cmd}" terkirim.`);
  };

  return (
    <div>
      <h1>Kontrol Flash Korban</h1>
      <button onClick={() => sendCommand('FLASH_ON')}>NYALAKAN Flash</button>
      <button onClick={() => sendCommand('FLASH_OFF')}>MATIKAN Flash</button>
      <p>{status}</p>
    </div>
  );
}
