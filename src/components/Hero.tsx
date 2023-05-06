import Button from "./Button";
import "./css/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted></video>
      <h1>冒險即將展開</h1>
      <p>選擇下列的旅遊服務，開始你的旅程</p>
      <div className="hero-btns">
        <Button
          //   className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          立即開始
        </Button>
      </div>
    </div>
  );
};

export default Hero;
