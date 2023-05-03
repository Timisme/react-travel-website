import { MouseEventHandler } from "react";
import "./css/Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

interface ButtonInput {
  children?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler;
  buttonStyle?: string;
  buttonSize?: string;
}

const Button = ({
  children,
  type,
  onClick,
  buttonStyle = "btn--primary",
  buttonSize = "btn--medium"
}: ButtonInput) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
