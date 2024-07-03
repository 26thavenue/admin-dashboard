import { useEffect } from "react";

interface CustomBeforeUnloadEvent extends BeforeUnloadEvent {
  returnValue: string;
}

function useBlockReload() {
  useEffect(() => {
    const handleBeforeUnload = (event: CustomBeforeUnloadEvent) => {
      event.preventDefault();
      window.alert(
        "Are you sure you want to leave? Any unsaved changes will be lost."
      );
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return;
}

export default useBlockReload;
