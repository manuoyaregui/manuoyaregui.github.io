import { useState, useEffect } from 'react';

/**
 * Custom hook for parallax scroll effects
 * @returns {Object} Object containing scrollY value and getTransform function
 */
const useParallax = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /**
     * Generates transform string for parallax effect
     * @param {number} speed - Parallax speed multiplier
     * @param {string} additionalTransforms - Additional CSS transforms to apply
     * @returns {string} Complete transform CSS string
     */
    const getTransform = (speed, additionalTransforms = '') => {
        const parallaxTransform = `translateY(${-1 * scrollY * speed}px)`;
        return additionalTransforms ? `${parallaxTransform} ${additionalTransforms}` : parallaxTransform;
    };

    return { scrollY, getTransform };
};

export default useParallax;
