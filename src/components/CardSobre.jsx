import { imageDesc } from "../util/utils"

export default function CardSobre({card}){

    function renderHtml(string){
        return {__html: string}
    }

    return (
        <>
            <div className="card-sobre">
                <div className="about-radius">
                    <div className="desc-sobre">
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
                </div>
            </div>
        </>
    )

}