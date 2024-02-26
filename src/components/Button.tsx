import { useState } from "react";

interface Props {
  isClicked: boolean;
  children: string;
  unClickedColor?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  clickedColor: string;
  onClicked: (isClicked: boolean) => void;
}

function Button({
  isClicked,
  children,
  unClickedColor = "primary",
  clickedColor,
  onClicked,
}: Props) {
  //const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      type="button"
      className={
        isClicked ? "btn btn-" + clickedColor : "btn btn-" + unClickedColor
      }
      onClick={() => {
        //setIsClicked(!isClicked);
        onClicked(!isClicked);
      }}
    >
      {children}
    </button>
  );
}

export default Button;
