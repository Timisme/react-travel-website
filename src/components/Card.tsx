import "./css/Card.css";
import CardItem from "./CardItem";

function Card() {
  return (
    <div className="cards">
      <h1>開始你的旅程</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="在亞馬遜森林探索神秘瀑布"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="搭乘私人遊艇探索峇里島"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="於大西洋自由航行"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="在西瑪拉雅山上享受足球的樂趣"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="在沙哈拉沙漠騎乘駱駝"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
