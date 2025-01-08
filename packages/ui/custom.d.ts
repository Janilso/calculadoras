declare module '*.svg?react' {
  import * as React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>> & {
    title?: string;
  };
  const src: string;
  export default src;
  const content: string;
  export default content;
}
