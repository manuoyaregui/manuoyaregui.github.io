const Planet = (props) => {
    return (
        <svg viewBox="0 0 277 138" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect className='core' x="69.6406" width="137.655" height="137.655" rx="68.8276" fill="var(--violet-color)" />

            <mask id="mask0_3514_6" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="69" y="0" width="139" height="138">
                <rect className='core__mask' x="69.6406" width="137.655" height="137.655" rx="68.8276" fill="var(--violet-color)" />
            </mask>

            <g mask="url(#mask0_3514_6)">
                <rect className='core__shadow' x="134.106" y="126.517" width="71.3331" height="8.74708" rx="4.37354" fill="var(--dark-blue-color)" />
                <rect className='core__shadow' width="71.3331" height="8.74708" rx="4.37354" transform="matrix(1 0 0 -1 134.106 14.7471)" fill="var(--dark-blue-color)" />
                <rect className='core__shadow' x="154.147" y="109.756" width="71.3331" height="8.74708" rx="4.37354" fill="var(--dark-blue-color)" />
                <rect className='core__shadow' width="71.3331" height="8.74708" rx="4.37354" transform="matrix(1 0 0 -1 154.147 31.5076)" fill="var(--dark-blue-color)" />
                <rect className='core__shadow' x="177.881" y="93.1822" width="71.3331" height="8.74708" rx="4.37354" fill="var(--dark-blue-color)" />
                <rect className='core__shadow' width="71.3331" height="8.74708" rx="4.37354" transform="matrix(1 0 0 -1 177.881 48.0815)" fill="var(--dark-blue-color)" />
                <rect className='core__shadow' x="190.935" y="77.795" width="71.3331" height="8.74708" rx="4.37354" fill="var(--dark-blue-color)" />
                <rect className='core__shadow' width="71.3331" height="8.74708" rx="4.37354" transform="matrix(1 0 0 -1 190.935 63.4687)" fill="var(--dark-blue-color)" />
            </g>
            <rect className='ring-large__bottom' x="79.4639" y="72" width="196.989" height="8.74708" rx="4.37354" fill="var(--orange-color)" />
            <rect className='ring-large__top' y="58.1946" width="196.989" height="9.01744" rx="4.50872" fill="var(--orange-color)" />
            <rect className='ring-small__top' x="207" y="58" width="59.3341" height="8.89022" rx="4.44511" fill="var(--orange-color)" />
            <rect className='ring-small__bottom' x="4.33691" y="72" width="59.3341" height="8.89022" rx="4.44511" fill="var(--orange-color)" />
        </svg >
    )
}

export default Planet