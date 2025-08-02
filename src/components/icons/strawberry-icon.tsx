import { SVGProps } from "react";

export function StrawberryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2C8.69 2 6 4.69 6 8c0 2.62 1.62 4.88 3.85 5.65A6.002 6.002 0 0 0 12 22a6 6 0 0 0 2.15-11.65C16.38 12.88 18 10.62 18 8c0-3.31-2.69-6-6-6z" />
      <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" fill="green" />
    </svg>
  );
}
