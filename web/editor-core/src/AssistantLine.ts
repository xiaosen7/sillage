import { type Node } from "@sillage/core";
import { type Distance, type Rect } from "@sillage/utils";

export class AssistantLine {
  private readonly references: Rect[];
  constructor(
    private readonly nodes: Node[],
    private readonly threshold: number
  ) {
    this.references = nodes.map((node) => node.getMountedAbsRect()!);
  }

  requestLinesFromRect(rect: Rect) {
    const lines = new Map<string, AssistantLineValue>();

    for (const reference of this.references) {
      let distance = rect.getEdgeDistanceTo(reference);
      addLineToMapFromDistance(distance, lines, this.threshold);
      // compare center
      distance = rect.getCenterDistanceTo(reference);
      addLineToMapFromDistance(distance, lines, this.threshold);
    }

    return [...lines.values()];
  }
}

export class AssistantLineValue {
  constructor(
    public readonly precision: number,
    public readonly value: number,
    public readonly type: "x" | "y"
  ) {}

  toKey() {
    return `${this.type}-${this.value}`;
  }

  static getXTypeFromDistance(distance: Distance, threshold: number) {
    return new AssistantLineValue(
      1 - distance.dx / threshold,
      distance.targetX,
      "x"
    );
  }

  static getYTypeFromDistance(distance: Distance, threshold: number) {
    return new AssistantLineValue(
      1 - distance.dy / threshold,
      distance.targetY,
      "y"
    );
  }
}

function addLine(
  line: AssistantLineValue,
  lines: Map<string, AssistantLineValue>
) {
  const key = line.toKey();
  if (!lines.has(line.toKey())) {
    lines.set(key, line);
  }
}

function addLineToMapFromDistance(
  distance: Distance,
  lines: Map<string, AssistantLineValue>,
  threshold: number
) {
  if (distance.dx < threshold) {
    addLine(
      AssistantLineValue.getXTypeFromDistance(distance, threshold),
      lines
    );
  }

  if (distance.dy < threshold) {
    addLine(
      AssistantLineValue.getYTypeFromDistance(distance, threshold),
      lines
    );
  }
}
