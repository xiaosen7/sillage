import Player from "react-player";
import { type Props } from "./Props";

export default function Video(props: Props) {
  return (
    <Player width={props.style.width} height={props.style.height} {...props} />
  );
}
