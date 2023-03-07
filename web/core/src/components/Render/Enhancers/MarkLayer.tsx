export function MarkLayer() {
  return (
    <div
      className="mark-layer"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    ></div>
  );
}
