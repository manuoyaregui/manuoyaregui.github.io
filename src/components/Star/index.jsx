import './index.scss';

/**
 * Individual star component
 * @param {Object} props - Star properties
 * @param {number} props.x - X position in percentage
 * @param {number} props.y - Y position in percentage
 * @param {number} props.size - Star size in pixels
 * @param {number} props.opacity - Star opacity (0-1)
 * @param {number} props.animationDelay - Animation delay in seconds
 * @param {number} props.animationDuration - Animation duration in seconds
 * @param {string} props.style - Additional inline styles (for transforms)
 */
/**
 * Individual star component
 * @param {Object} props - Star properties
 */
const Star = ({ x, y, size, opacity, animationDelay, animationDuration, isOrange, style }) => {
    return (
        <div
            className={`star ${isOrange ? 'star--orange' : ''}`}
            style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
                animationDelay: `${animationDelay}s`,
                animationDuration: `${animationDuration}s`,
                '--star-opacity': opacity,
                ...style
            }}
        />
    );
};

export default Star;
