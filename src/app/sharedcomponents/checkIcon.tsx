import { useState } from "react";

export function CheckIcon(props: {
  className: string;
  checked: boolean;
  activeColor?: string;
  inActiveColor?: string;
}) {
  const { checked, activeColor = "#1c68f5", inActiveColor = "#000" } = props;
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 2.5C6.477 2.5 2 6.977 2 12.5C2 18.023 6.477 22.5 12 22.5C17.523 22.5 22 18.023 22 12.5C22 6.977 17.523 2.5 12 2.5ZM12 8.5C10.9391 8.5 9.92172 8.92143 9.17157 9.67157C8.42143 10.4217 8 11.4391 8 12.5C8 13.5609 8.42143 14.5783 9.17157 15.3284C9.92172 16.0786 10.9391 16.5 12 16.5C13.0609 16.5 14.0783 16.0786 14.8284 15.3284C15.5786 14.5783 16 13.5609 16 12.5C16 11.4391 15.5786 10.4217 14.8284 9.67157C14.0783 8.92143 13.0609 8.5 12 8.5Z"
        fill={checked ? activeColor : inActiveColor}
      />
    </svg>
  );
}

export function CheckBoxMark(props: {
  onChange: (data: boolean) => void;
  title?: string;
  className?: string;
  checked?: boolean;
  activeColor?: string;
  inActiveColor?: string;
}) {
  const { title, onChange, activeColor = "#ff3793" } = props;
  const [checked, setChecked] = useState(false);
  return (
    <div
      className="flex gap-2 mt-3"
      onClick={() => {
        setChecked(!checked);
        onChange(!checked);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke={activeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        {checked && <path d="M7 12l3 3 7-7"></path>}
      </svg>
      <p>{title}</p>
    </div>
  );
}
