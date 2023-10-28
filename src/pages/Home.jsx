import logo from "../assets/images/logo/central-white-nobg-minimal.png"
import { Carousel } from "react-responsive-carousel"
import { imageDesc } from "../util/utils"
import Cardrousel from "../components/Cardrousel"

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
                        <Carousel showThumbs={false} className="carousel">
                            {imageDesc?.map((card, index) => (
                                <Cardrousel key={index} card={imageDesc.indexOf(card)} />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
        
    )
}