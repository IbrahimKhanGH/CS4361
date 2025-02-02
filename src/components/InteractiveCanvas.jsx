import React, { useRef, useEffect } from 'react';

const InteractiveCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    // Example: Simple animation
    let angle = 0;

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.save();
      context.translate(canvas.width / 2, canvas.height / 2);
      context.rotate(angle);
      context.fillStyle = '#61dafb';
      context.fillRect(-50, -50, 100, 100);
      context.restore();
      angle += 0.01;
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={400}
      className="border rounded shadow-md"
    ></canvas>
  );
};

export default InteractiveCanvas;
