// Необходимо для решения проблемы с css-модулями
declare module '*.module.css';
declare module '*.module.scss';

// images
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
declare const __IS_DEV__: boolean;
