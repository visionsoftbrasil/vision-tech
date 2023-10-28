import { useState } from "react"

export default function Header() {
    const [active, setActive] = useState(false)

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
            <div className="sand" >
                <nav className="sand-nav">
                    <ul className={active ? "menu height" : "menu"}>
                        <div>
                            <li title="Ir para página inicial">
                                <a onClick={() => setActive(!active)} href="#pg-inicial">Página Inicial</a>
                            </li>
                            <li title="Ir para página sobre">
                                <a onClick={() => setActive(!active)} href="#sobre">Sobre Nós</a>
                            </li>
                            <li title="Ir para página de serviços">
                                <a onClick={() => setActive(!active)} href="#services">Serviços</a>
                            </li>
                            <li title="Ir para página de contato">
                                <a onClick={() => setActive(!active)} href="#contato">Contato</a>
                            </li>
                        </div>
                    </ul>
                </nav>
                <div onClick={() => setActive(!active)} className={active ? "icon-sand menu btn1 open" : "icon-sand menu btn1"} data-menu="1">
                    <div className="icon-left"></div>
                    <div className="icon-right"></div>
                </div>
            </div>
        </header>
    )
}