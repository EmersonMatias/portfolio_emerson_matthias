import styled from "styled-components"
import background from "../../img/homeBackground2.png"

export default function Home_HeroSection() {
    return (
        <Container>
            <img src={background} />

            <div className="text">
                <h1>
                    Liberte{<br></br>} sua{<br></br>} imaginação
                    <p>Full Stack Developer</p>
                </h1>
            </div>
            <div className="centerButton">
                <button>Começar</button>
            </div>


        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
  
    .text{
        z-index: 2;
        display: flex;
        padding-left: 7rem;


                h1{
                    font-size: 14rem;
                    font-weight: 700;
                    line-height: normal;
                    background: -webkit-linear-gradient(0,rgba(240, 123, 44, 1) 0, rgba(156, 47, 228, 1) 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                p{
                    font-size: 4rem;
                    font-weight: 300;
                }
    }

    .centerButton{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 40;
        margin-top: 5rem;
        margin-bottom: -5rem;
   
        button{
            background: linear-gradient(109.16deg, rgba(239, 239, 239, 0.4) 0.9%, rgba(239, 239, 239, 0.1) 100%),
            linear-gradient(108.55deg, rgba(255, 255, 255, 0.4) 2.18%, rgba(255, 255, 255, 0.1) 98.5%);
            border: 2px solid;
            border-image-source: linear-gradient(108.55deg, rgba(255, 255, 255, 0.4) 2.18%, rgba(255, 255, 255, 0.1) 98.5%);
            backdrop-filter: blur(3px);
            border-radius: 1.6rem;
            padding: 2.4rem 4.8rem;
            font-size: 3rem;
            color: #FFFFFF;
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        }      
    }

  
 
   img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top ;
        position: absolute;
        top: 0;
        right: 0;
   }

@media(max-width: 1000px) {
    img{
        object-position: 75%;
    }
}

@media(max-width: 670px) {
  .text{
        padding-left: 0;
        text-align: center;
        justify-content: center;
  }
}

`



