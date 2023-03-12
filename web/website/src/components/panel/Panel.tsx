import { UIModel, useUIContext } from "@sillage/editor-core";
import { type ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import styles from "./Panel.module.scss";
import { PanelBody } from "./PanelBody";

export function Panel({ children }: { children: ReactNode }) {
  const ui = useUIContext();
  const panelScrollEl = useRef<HTMLElement>(null);

  const panelBodyWidth = 3000;
  const panelBodyHeight = 3000;

  useLayoutEffect(() => {
    if (panelScrollEl.current) {
      const viewHeight = panelScrollEl.current.clientHeight;
      const viewWidth = panelScrollEl.current.clientWidth;
      panelScrollEl.current.scrollTop = (panelBodyHeight - viewHeight) / 2;
      panelScrollEl.current.scrollLeft = (panelBodyWidth - viewWidth) / 2;
    }
  }, []);

  useEffect(() => {
    const subscription = ui
      .on(UIModel.Topic.UpdatePanelScroll)
      .subscribe(([offsetX, offsetY]: any) => {
        if (panelScrollEl.current) {
          panelScrollEl.current.scrollTop += offsetY as number;
          panelScrollEl.current.scrollLeft += offsetX as number;
        }
      });

    return () => {
      subscription.unsubscribe();
    };
  }, [ui]);

  return (
    <section ref={panelScrollEl} className={styles["panel-scroll"]}>
      <PanelBody width={panelBodyWidth} height={panelBodyHeight}>
        {children}
      </PanelBody>
    </section>
  );
}
