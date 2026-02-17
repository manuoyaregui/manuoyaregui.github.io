import { useMemo } from 'react';
import Star from '../Star';
import { generateStars } from '../../utils/starGenerator';
import './index.scss';

/**
 * StarField component that renders multiple stars
 * @param {Object} props
 * @param {number} props.count - Number of stars to render
 * @param {Function} props.getTransform - Transform function from parallax hook
 * @param {Function} props.getMouseOffset - Mouse offset function from mouse parallax hook
 * @param {number} props.mouseIntensity - Intensity of mouse movement effect
 * @param {number} props.scrollSpeed - Speed of scroll parallax effect
 */
const StarField = ({
    count = 30,
    getTransform,
    getMouseOffset,
    mouseIntensity = 5,
    scrollSpeed = 0.3
}) => {
    // Generate stars once and memoize
    const stars = useMemo(() => generateStars(count), [count]);

    return (
        <div
            className="star-field"
            style={{
                transform: `${getTransform(scrollSpeed)} ${getMouseOffset(mouseIntensity)}`
            }}
        >
            {stars.map((star) => (
                <Star
                    key={star.id}
                    x={star.x}
                    y={star.y}
                    size={star.size}
                    opacity={star.opacity}
                    animationDelay={star.animationDelay}
                    animationDuration={star.animationDuration}
                    isOrange={star.isOrange}
                />
            ))}
        </div>
    );
};

export default StarField;
