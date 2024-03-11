import React, { useEffect, useRef, ReactNode } from "react";

type TClickAway = {
  className?: string;
  onClickAway?: () => void;
  children?: ReactNode;
};

export default function ClickAwayListener({
  className,
  onClickAway,
  children,
}: TClickAway): JSX.Element {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(
    document.getElementById("sidebar") as HTMLDivElement
  );

  useOutsideAlerter(wrapperRef, sidebarRef);

  function useOutsideAlerter(
    ref: React.RefObject<HTMLDivElement>,
    sidebarRef: React.RefObject<HTMLDivElement | null>
  ): void {
    function handleClickOutside(event: MouseEvent): void {
      console.log({ event, ref });
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        sidebarRef.current &&
        sidebarRef.current.contains(event.target as Node)
      ) {
        onClickAway && onClickAway();
      }
    }
    useEffect(() => {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, sidebarRef, onClickAway]);
  }

  return (
    <div className={className} ref={wrapperRef}>
      {children}
    </div>
  );
}
