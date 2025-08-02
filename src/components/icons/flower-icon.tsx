import { SVGProps } from "react";

export function FlowerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 15.5A3.5 3.5 0 0 0 8.5 12" />
      <path d="M12 15.5A3.5 3.5 0 0 1 15.5 12" />
      <path d="M12 8.5A3.5 3.5 0 0 1 15.5 12" />
      <path d="M12 8.5A3.5 3.5 0 0 0 8.5 12" />
      <path d="M15.5 12A3.5 3.5 0 0 0 12 8.5" />
      <path d="M8.5 12A3.5 3.5 0 0 0 12 8.5" />
      <path d="M15.5 12A3.5 3.5 0 0 1 12 15.5" />
      <path d="M8.5 12A3.5 3.5 0 0 1 12 15.5" />
    </svg>
  );
}
