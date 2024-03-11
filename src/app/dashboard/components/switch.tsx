import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function ToggleSwitch({
  ...props
}: {
  onChange: (data: boolean) => void;
}) {
  const { onChange } = props;
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="py-1">
      <Switch
        checked={enabled}
        onChange={(data: boolean) => {
          setEnabled(data);
          onChange(data);
        }}
        className={`${enabled ? "bg-white border-blue" : "bg-blue"}
          relative inline-flex h-[19px] w-[36px] shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[15px] w-[15px] transform rounded-full ${
              enabled ? `bg-blue` : `bg-white`
            } border border-blue shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
