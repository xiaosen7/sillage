// @ts-expect-error it's ok
import autoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Slider from "react-awesome-slider";
import { type Props } from "./Props";

const AutoPlay = autoplay(Slider);

export default function Carousel(props: Props) {
  return (
    <AutoPlay {...props}>
      {props.images.map((src) => {
        return <div key={src} data-src={src} />;
      })}
    </AutoPlay>
  );
}
