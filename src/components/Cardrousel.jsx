import { imageDesc } from "../util/utils"
import { Carousel } from "react-responsive-carousel"

export default function Cardrousel({card}){

    function renderHtml(string){
        return {__html: string}
    }

    return (
        <>
            <div className="card-carousel">
                <div className="about-radius">
                    <div className="desc-cardrousel">
                        {/* <p dangerouslySetInnerHTML={renderHtml()} /> */}
                        {
                            imageDesc[card].desc.map((desc, index) => (
                                <p key={index} dangerouslySetInnerHTML={renderHtml(desc)} />
                            ))
                        }
                    </div>
                </div>
                <div className="img-shadow">
                    {
                        card < imageDesc.length && <img src={imageDesc[card].img} alt="Imagem" />
                    }
                    {
                        
                    }
                    
                </div>
            </div>
        </>
    )

}