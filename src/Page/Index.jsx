import ParallaxScene from "../components/ParallaxScene"
import useParallax from "../hooks/useParallax";
import useMouseParallax from "../hooks/useMouseParallax";
import Planet from '../components/SVGs/lib/Planet';
import Giraffe from '../components/SVGs/lib/Giraffe';
import StarField from '../components/StarField';

const MainPage = () => {
  const { getTransform } = useParallax();
  const { getMouseOffset } = useMouseParallax();

  return (
    <div>
      <ParallaxScene>
        <div
          className="parallax-layer layer-sky"
        >
          <div className="heading-group" style={{ transform: getTransform(0.7, 'translate(-50%, -50%)') }}>
            <h1 className="heading__main">Manuel Oyaregui</h1>
            <h3 className="heading__secondary">my portfolio</h3>
          </div>
          <Planet className="planet" style={{ transform: `${getTransform(0.4)} ${getMouseOffset(8)}` }} />
          <StarField
            count={70}
            getTransform={getTransform}
            getMouseOffset={getMouseOffset}
            mouseIntensity={5}
            scrollSpeed={0.3}
          />
          <div className="clouds">
            <div className="clouds-back" style={{ transform: `${getTransform(.6)} ${getMouseOffset(12)}` }} />
            <div className="clouds-front" style={{ transform: `${getTransform(.8)} ${getMouseOffset(18)}` }} />
          </div>
          <Giraffe className="giraffe" style={{ transform: getTransform(.7) }} />
        </div>

        <div
          className="parallax-layer layer-mountains"
          style={{ transform: getTransform(0.5) }}
        >
        </div>
      </ParallaxScene>
      <section className="introduction">
        <div className="introduction__wrapper">
          <div className="introduction__top-row">
            <div className="introduction__top-row__left">
              <div className="profile-image-container" />
            </div>
            <div className="introduction__top-row__right">
              <h2>Who am I?</h2>
              <h3>I'm a <span className="profession-text">WEB DEVELOPER</span>  and <span className="profession-text">ARTIST</span> </h3>
            </div>
          </div>
          <div className="introduction__bottom-row">
            <div className="introduction__bottom-row__left">
              <div className="group group__social-media">
                <h4>Social</h4>
                <div className="group__social-media__icons">
                  iconos
                </div>
              </div>
              <div className="group group__tech-stack">
                <h4>Tech Stack</h4>
                <div className="group__tech-stack__icons">
                  iconos
                </div>
              </div>
            </div>
            <div className="introduction__bottom-row__right">
              <div className="group group__experiences">
                <h4>Experiences</h4>
                <div className="group__experiences__timeline">
                  timeline
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainPage
