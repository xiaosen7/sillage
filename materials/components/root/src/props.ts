import { initialValue } from "@sillage/props";

export class Props {
  @initialValue(5000)
  height!: number;

  @initialValue(5000)
  width!: number;
}
