import React from 'react'

/**
 * @param {React.SVGProps<SVGSVGElement>} props
 */
const Planet = (props) => {
    return (
        <svg viewBox="0 0 276 138" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="67.6406" width="137.655" height="137.655" rx="68.8276" fill="var(--violet-color)" />
            <rect x="79.4844" y="85.2733" width="196.989" height="8.74708" rx="4.37354" transform="rotate(-8.67248 79.4844 85.2733)" fill="var(--orange-color)" />
            <rect y="83.0978" width="196.989" height="9.01744" rx="4.50872" transform="rotate(-8.67248 0 83.0978)" fill="var(--orange-color)" />
            <rect x="211.526" y="49.4412" width="59.3341" height="8.89022" rx="4.44511" transform="rotate(-8.67248 211.526 49.4412)" fill="var(--orange-color)" />
            <rect x="3.55957" y="97.9479" width="59.3341" height="8.89022" rx="4.44511" transform="rotate(-8.67248 3.55957 97.9479)" fill="var(--orange-color)" />
            <mask id="mask0_389_219" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="67" y="0" width="139" height="138">
                <rect x="67.6406" width="137.655" height="137.655" rx="68.8276" fill="#4A216A" />
            </mask>
            <g mask="url(#mask0_389_219)">
                <rect x="131.854" y="131.945" width="71.3331" height="8.74708" rx="4.37354" transform="rotate(-8.67248 131.854 131.945)" fill="var(--dark-blue-color)" />
                <rect x="106.802" y="3.63593" width="71.3331" height="8.74708" rx="4.37354" transform="rotate(-8.67248 106.802 3.63593)" fill="var(--dark-blue-color)" />
                <rect x="151.896" y="115.184" width="71.3331" height="8.74708" rx="4.37354" transform="rotate(-8.67248 151.896 115.184)" fill="var(--dark-blue-color)" />
                <rect x="135.282" y="14.3161" width="71.3331" height="8.74708" rx="4.37354" transform="rotate(-8.67248 135.282 14.3161)" fill="var(--dark-blue-color)" />
                <rect x="175.629" y="98.6102" width="71.3331" height="8.74708" rx="4.37354" transform="rotate(-8.67248 175.629 98.6102)" fill="var(--dark-blue-color)" />
                <rect x="159.016" y="26.1829" width="71.3331" height="8.74708" rx="4.37354" transform="rotate(-8.67248 159.016 26.1829)" fill="var(--dark-blue-color)" />
                <rect x="172.069" y="39.2365" width="71.3331" height="8.74708" rx="4.37354" transform="rotate(-8.67248 172.069 39.2365)" fill="var(--dark-blue-color)" />
                <rect x="188.683" y="83.223" width="71.3331" height="8.74708" rx="4.37354" transform="rotate(-8.67248 188.683 83.223)" fill="var(--dark-blue-color)" />
            </g>
        </svg>
    )
}

export default Planet