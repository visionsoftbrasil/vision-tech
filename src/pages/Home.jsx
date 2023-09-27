import logo from "../assets/images/logo/central-white-nobg-minimal.png"

export default function Home() {

    return (
        
        <section className="sec-container">
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
        
    )
}