import { useState, useEffect } from 'react';
import Planet from '../SVGs/lib/Planet';
import Giraffe from '../SVGs/lib/Giraffe';

const ParallaxScene = () => {
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

    const getTransform = (speed, additionalTransforms = '') => {
        const parallaxTransform = `translateY(${-1 * scrollY * speed}px)`;
        return additionalTransforms ? `${parallaxTransform} ${additionalTransforms}` : parallaxTransform;
    };

    return (
        <div className="parallax-container">
            <div
                className="parallax-layer layer-sky"
            >
                <div className="heading-group" style={{ transform: getTransform(0.7, 'translate(-50%, -50%)') }}>
                    <h1 className="heading__main">Manuel Oyaregui</h1>
                    <h3 className="heading__secondary">my portfolio</h3>
                </div>
                <Planet className="planet" style={{ transform: getTransform(0.4) }} />
                <div className="stars__group">
                    <div className="stars stars__01" style={{ transform: getTransform(0.3) }} />
                    <div className="stars stars__02" style={{ transform: getTransform(-0.3) }} />
                </div>
                <div className="clouds">
                    <div className="clouds-back" style={{ transform: getTransform(.6) }} />
                    <div className="clouds-front" style={{ transform: getTransform(.8) }} />
                </div>
                <Giraffe className="giraffe" style={{ transform: getTransform(.7) }} />
            </div>

            <div
                className="parallax-layer layer-mountains"
                style={{ transform: getTransform(0.5) }}
            >
            </div>

            <div className="content-scroll-area"></div>
        </div>
    );
};

export default ParallaxScene;
