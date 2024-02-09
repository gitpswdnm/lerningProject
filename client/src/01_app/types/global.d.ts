
declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames
  export = classNames;
}


// declare module '*.png';
// declare module '*.jpg';
// declare module '*.jpeg';
declare module '*.svg' {
  import type { FC, SVGProps } from 'react'
  const SVG: FC<SVGProps<SVGSVGElement>>
  export default SVG
}


type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

