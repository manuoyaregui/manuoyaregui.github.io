const ParallaxScene = ({ children }) => {

    return (
        <div className="parallax-container">
            {children}
            <div className="content-scroll-area"></div>
        </div>
    );
};

export default ParallaxScene;
