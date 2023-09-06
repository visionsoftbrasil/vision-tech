import { Link } from "react-router-dom"

export default function Header() {

    return (
        <header className="header">
            <div className="container">
                <Link to="/home" className="logo">
                    Seu Logo
                </Link>
                <nav>
                    <ul className="menu">
                        <li>
                            <Link to="/">Página Inicial</Link>
                        </li>
                        <li>
                            <Link to="/about">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/services">Serviços</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contato</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}