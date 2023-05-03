import Button from "./Button";
import "./css/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted></video>
      <h1>冒險即將展開</h1>
      <p>你還在等待嗎?</p>
      <div className="hero-btns">
        <Button
          //   className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          立即開始
        </Button>
        <Button
          //   className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          //   onClick={}
        >
          WATCH TRAILER
        </Button>
      </div>
    </div>
  );
};

export default Hero;
