interface Properties {
    width?: number;
    height?: number;
    [key: string]: any;
}

export default function Logo({ width = 780, height = 619, ...rest }: Properties) {
    return (
        <svg width={width} height={height} viewBox="0 0 780 619" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path d="M13.5589 247.697C-4.51963 229.619 -4.51962 200.308 13.5589 182.229L177.229 18.5589C195.307 0.480444 224.618 0.480446 242.697 18.5589L586.404 362.266C604.483 380.345 604.483 409.656 586.404 427.734L422.734 591.404C404.656 609.483 375.344 609.483 357.266 591.404L13.5589 247.697Z" fill="url(#paint0_linear_200_2)"/>
            <path d="M193.596 427.734C175.517 409.656 175.517 380.345 193.596 362.266L537.303 18.5589C555.382 0.48037 584.693 0.480379 602.771 18.5589L766.441 182.229C784.52 200.307 784.52 229.618 766.441 247.697L422.734 591.404C404.656 609.483 375.344 609.483 357.266 591.404L193.596 427.734Z" fill="url(#paint1_linear_200_2)"/>
            <defs>
                <linearGradient id="paint0_linear_200_2" x1="390" y1="0" x2="390" y2="619" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF2056"/>
                    <stop offset="1" stopColor="#F6339A"/>
                </linearGradient>
                <linearGradient id="paint1_linear_200_2" x1="390" y1="0" x2="390" y2="619" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF2056"/>
                    <stop offset="1" stopColor="#F6339A"/>
                </linearGradient>
            </defs>
        </svg>
    );
}   