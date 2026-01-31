import { useState } from 'react';

export default function Home() {
  const [flashOn, setFlashOn] = useState(false);
  const [stream, setStream] = useState(null);

  const toggleFlash = async () => {
    if (!flashOn) {
      try {
        // Akses kamera belakang dengan torch
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment', torch: true }
        });
        const track = mediaStream.getVideoTracks()[0];
        await track.applyConstraints({ advanced: [{ torch: true }] });
        setStream(mediaStream);
        setFlashOn(true);
      } catch (err) {
        alert('Gagal mengakses flash: ' + err.message);
      }
    } else {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        setStream(null);
        setFlashOn(false);
      }
    }
  };

  return (
    <div>
      <h1>Flash Control Test</h1>
      <button onClick={toggleFlash}>
        {flashOn ? 'Matikan Flash' : 'Hidupkan Flash'}
      </button>
      <p>Status: {flashOn ? 'HIDUP' : 'MATI'}</p>
      <p><small>Pastikan izin kamera diberikan. Mungkin tidak work di semua HP.</small></p>
    </div>
  );
}
