/**
 * Generates an array of star data with random properties
 * @param {number} count - Number of stars to generate
 * @returns {Array} Array of star objects with position, size, opacity, and animation properties
 */
export const generateStars = (count = 30) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100, // % position (0-100)
        y: Math.random() * 100, // % position (0-100)
        size: Math.random() * 5 + 0.5, // 0.5-3px
        opacity: Math.random() * 0.4 + 0.6, // 0.6-1
        animationDelay: Math.random() * 4, // 0-4s delay
        animationDuration: Math.random() * 2 + 2, // 2-4s duration
        isOrange: Math.random() < 0.4, // 15% chance of being orange
    }));
};
