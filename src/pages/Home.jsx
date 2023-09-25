import logo from "../assets/images/logo/central-white-nobg.png"

export default function Home() {

    return (
        
        <section className="sec-container">
            <div className="div-logo">
                <img src={logo} alt="logo-image" title="Vision Tech Software!" />
            </div>
            <div className="container-name">
                <div className="div-home-name">
                    <h1> Vision Tech </h1>
                    <h1> Software </h1>                </div>
                <p>
                    Inovação. Solução. Paixão.
                </p>
            </div>
        </section>
        
    )
}