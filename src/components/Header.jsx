import { Link } from "react-router-dom"

export default function Header() {

    return (
        <header className="header">
            <div className="container">
                <nav>
                    <ul className="menu">
                        <li title="Ir para página inicial">
                            <Link to="/">Página Inicial</Link>
                        </li>
                        <li title="Ir para página sobre">
                            <a href="#sobre">Sobre Nós</a>
                        </li>
                        <li title="Ir para página de serviços">
                            <Link to="/services">Serviços</Link>
                        </li>
                        <li title="Ir para página de contato">
                            <a href="#contato">Contato</a>
                        </li>
                    </ul>
                    <div className="line"></div>
                </nav>
            </div>
        </header>
    )
}