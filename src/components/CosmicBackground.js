import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const CosmicBackground = () => {
    const canvasRef = useRef(null);
    const { isDarkMode } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let blobs = [];
        let animationFrameId;

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initBlobs();
        };

        class Blob {
            constructor(colors) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 200 + 400; // Large blobs
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.colors = colors;
                // Pick a color object: { r, g, b }
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.angle = Math.random() * Math.PI * 2;
                this.angleSpeed = (Math.random() - 0.5) * 0.002;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.angle += this.angleSpeed;

                // Bounce off walls (Softly)
                if (this.x < -this.size) this.vx *= -1;
                if (this.x > width + this.size) this.vx *= -1;
                if (this.y < -this.size) this.vy *= -1;
                if (this.y > height + this.size) this.vy *= -1;

                // Organic "Roaming"
                if (Math.random() < 0.01) {
                    this.vx += (Math.random() - 0.5) * 0.5;
                    this.vy += (Math.random() - 0.5) * 0.5;
                }
            }

            draw() {
                ctx.save();
                ctx.globalCompositeOperation = isDarkMode ? 'screen' : 'multiply';
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle);

                const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
                
                // Color Construction using raw values
                // No string replacement hacks.
                const { r, g, b } = this.color;
                
                if (isDarkMode) {
                    // Dark Mode: Deep Nebula
                    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1)`);
                    gradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, 0.4)`);
                    gradient.addColorStop(1, 'rgba(0,0,0,0)');
                } else {
                    // Light Mode: Watercolor
                    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1)`);
                    gradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, 0.3)`);
                    gradient.addColorStop(1, 'rgba(255,255,255,0)');
                }

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        const initBlobs = () => {
            blobs = [];
            const blobCount = 6;
            
            // Color Palettes (Raw RGB Objects)
            const darkColors = [
                { r: 76, g: 29, b: 149 },   // Violet
                { r: 124, g: 58, b: 237 },  // Lighter Violet
                { r: 14, g: 116, b: 144 },  // Cyan
                { r: 219, g: 39, b: 119 },  // Pink/Magenta
                { r: 49, g: 46, b: 129 }    // Indigo
            ];

            const lightColors = [
                { r: 186, g: 230, b: 253 }, // Sky Blue
                { r: 221, g: 214, b: 254 }, // Pale Violet
                { r: 254, g: 202, b: 202 }, // Pale Red/Peach
                { r: 167, g: 243, b: 208 }, // Pale Green
                { r: 199, g: 210, b: 254 }  // Pale Indigo
            ];

            const colors = isDarkMode ? darkColors : lightColors;

            for (let i = 0; i < blobCount; i++) {
                blobs.push(new Blob(colors));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Light mode needs a white base before multiplying watercolors
            if (!isDarkMode) {
                ctx.fillStyle = '#f8faff';
                ctx.fillRect(0, 0, width, height);
            }

            blobs.forEach(blob => {
                blob.update();
                blob.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        
        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDarkMode]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                background: isDarkMode ? '#030014' : '#f8faff',
                transition: 'background 1s ease',
                filter: 'blur(60px)'
            }}
        />
    );
};

export default CosmicBackground;
