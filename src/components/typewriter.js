
import { useTypewriter } from 'react-simple-typewriter'

const Typewriter = () => {
    const [text] = useTypewriter({
        words: ['Lovely','Cute','Adorable'],
        loop: 0,
        typeSpeed: 100,
        deleteSpeed:300,
        delaySpeed: 500,
    })

    return (
            <span>{text}</span>
    )
}

export default Typewriter