import logo from "../assets/images/logo/central-white-nobg-minimal.png"
import { Carousel } from "react-responsive-carousel"

export default function Home() {

    return (
        <>
            <section id='pg-inicial' className="sec-container">
                <div className="div-logo">
                    <img src={logo} alt="logo-image" title="Vision Tech Software!" />
                </div>
                <div className="container-name">
                    <div className="div-home-name">
                        <span> Vision Tech </span>
                        <span> Software </span>
                    </div>
                    <p>
                        Inovação. Solução. Paixão.
                    </p>
                </div>
            </section>
            <section id="sobre" className="sec-container">
                <div className="container">
                    <div className="sobre">
                        <h1> &lt;Sobre Nós&gt;</h1>
                    </div>
                    <div className="container-2">
                        <div className="about-radius">

                        </div>
                        <div className="img-shadow">
                            <Carousel className="carousel">
                                <div className="container-carousel">
                                    <p>teste 1</p>
                                </div>
                                <div className="container-carousel">
                                    <p>teste 2</p>
                                </div>
                                <div className="container-carousel">
                                    <p>teste 3</p>
                                </div>
                                <div className="container-carousel">
                                    <p>teste 1</p>
                                </div>
                                <div className="container-carousel">
                                    <p>teste 2</p>
                                </div>
                                <div className="container-carousel">
                                    <p>teste 3</p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    )
}