import { Link } from "react-router-dom"
import logo from "../assets/images/logo/central-white-nobg.png"

export default function Header() {

    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <img src={logo} alt="Logo Vision Software" title="Ir para página inicial"/>
                </Link>
                <nav>
                    <ul className="menu">
                        <li title="Ir para página inicial">
                            <Link to="/">Página Inicial</Link>
                        </li>
                        <li title="Ir para página sobre">
                            <Link to="/about">Sobre</Link>
                        </li>
                        <li title="Ir para página de serviços">
                            <Link to="/services">Serviços</Link>
                        </li>
                        <li title="Ir para página de contato">
                            <Link to="/contact">Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}