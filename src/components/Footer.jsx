import git from '../assets/svgs/icons/github.svg'
import insta from '../assets/svgs/icons/instagram.svg'

export default function Footer() {

    return (
        <footer id="contato" className="footer">
            <div className="image">
                <div className="company-name">Vision Tech Software</div>
                <div className="contact-info">Telefone: (11) 1234-5678</div>
                <div className="social-media">
                    <a href="https://www.instagram.com/vision.tech.br" target="_blank" rel="noopener noreferrer">
                        <img src={insta} />
                    </a>
                    <a href="https://github.com/visionsoftbrasil" target="_blank" rel="noopener noreferrer">
                    <img src={git} />
                    </a>
                </div>
                <div className="copyright">© 2023 Vision Tech Software. Todos os direitos reservados.</div>
            </div>
        </footer>
    )
}