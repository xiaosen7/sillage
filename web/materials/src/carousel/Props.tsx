import { editor } from "@sillage/props";
import { type CSSProperties } from "react";
import { type AwesomeSliderProps } from "react-awesome-slider";
import { Boolean, List, Url } from "@sillage/editors";

export class Props implements AwesomeSliderProps {
  style: CSSProperties = {
    width: "50px",
    height: "50px",
  };

  @editor(Boolean)
  bullets = false;

  @editor(Boolean)
  organicArrows = true;

  interval = 6000;

  @editor(Boolean)
  play = true;

  @editor(List, {
    ItemEditor: (props) => <Url accept="image/*" {...props} />,
  })
  images: string[] = [
    "https://caferati.me/images/series/bojack-0.png",
    "https://caferati.me/images/series/bojack-1.png",
    "https://caferati.me/images/series/bojack-2.png",
  ];
}
