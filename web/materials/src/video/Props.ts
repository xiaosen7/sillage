import { Boolean, Url } from "@sillage/editors";
import { editor } from "@sillage/props";
import { type CSSProperties } from "react";
import { type ReactPlayerProps } from "react-player";

export class Props implements ReactPlayerProps {
  style: CSSProperties = {
    width: "50px",
    height: "50px",
    background: "black",
  };

  @editor(Url, { accept: "video/*" })
  url = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";

  @editor(Boolean)
  controls = false;
}
