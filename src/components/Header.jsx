
export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav>
                    <ul className="menu">
                        <li title="Ir para página inicial">
                            <a href="#pg-inicial">Página Inicial</a>
                        </li>
                        <li title="Ir para página sobre">
                            <a href="#sobre">Sobre Nós</a>
                        </li>
                        <li title="Ir para página de serviços">
                            <a href="#services">Serviços</a>
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