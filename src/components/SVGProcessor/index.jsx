import Planet from "./lib/Planet"

/**
 * @param {React.HTMLAttributes<HTMLDivElement>} props
 */
const SVGProcessor = (props) => {
    const { image } = props

    switch (image) {
        case 'planet':
            return (<Planet {...props} />)
        default:
            return null
    }
}

export default SVGProcessor