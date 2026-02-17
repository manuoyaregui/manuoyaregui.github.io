import { useState, useEffect } from 'react';

/**
 * Custom hook for mouse-based parallax effects
 * @returns {Object} Object containing mousePosition and getMouseOffset function
 */
const useMouseParallax = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Normalize mouse position to -1 to 1 range
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    /**
     * Generates translate transform for mouse movement
     * @param {number} intensity - Movement intensity in pixels
     * @returns {string} Translate transform string
     */
    const getMouseOffset = (intensity = 20) => {
        return `translate(${mousePosition.x * intensity}px, ${mousePosition.y * intensity}px)`;
    };

    return { mousePosition, getMouseOffset };
};

export default useMouseParallax;
