import git from '../assets/svgs/icons/github.svg'
import insta from '../assets/svgs/icons/instagram.svg'


export default function Home() {

    return (
        
        <section className="coming-soon">
            <h1 className="coming">
                Em breve...
            </h1>
            <h2>
                Verifique nossas redes sociais!
            </h2>
            <div className="menu">
                <a href='https://github.com/visionsoftbrasil' target='_blank'>
                    <div className="opt">
                        <img src={git} alt="" />
                    </div>
                </a>
                <a href="https://www.instagram.com/vision.tech.br/" target='_blank'>
                    <div className="opt">
                        <img src={insta} alt="" />
                    </div>
                </a>
            </div>
        </section>
        
    )
}