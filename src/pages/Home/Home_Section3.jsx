import styled from "styled-components"
import test from "../../img/test.jpg"
import test2 from "../../img/HeroSection.png"

export default function Home_Section3() {
    return (
        <Container>
            <div className="Box">
                <div className="span span1" >
                    <p>MyMovie</p>
                    <img src={test} />
                </div>
                <div className="span span2">
                    <img src={test} />
                </div>
                <div  className="span span3">
                    <img src={test} />
                </div>
                <div  className="span span4">
                    <img src={test} />
                </div>
                <div  className="span span5">
                    <img src={test} />
                </div>
                <div  className="span span6">
                    <img src={test} />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100% ;
    margin-top: 18vw;
    margin-bottom: 35vw;
    display: flex;
    align-items:center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 2rem;

    
    .Box{
        width: 25vw;
        height: 20vw;
        position: relative;
        transform-style: preserve-3d;
        animation: animate 30s linear infinite;
        background: #e61495;
    }

    @keyframes animate{
        0%{
            transform: perspective(50vw) rotateY(0deg);
        }
        100%{
            transform: perspective(50vw) rotateY(360deg);
        }
    }

    p{
        z-index: 5;
        margin-top: -2rem;
    }

    .span{
        height: 100%;
        width: 100%;
        transform-origin: center;
        transform-style: preserve-3d;
        position: absolute;
        display: flex;
        top: 0;
        left: 0;
        -webkit-box-reflect: below 0px linear-gradient(transparent, transparent, #0004);
   
        img{
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            transform-origin: center;
            transform-style: preserve-3d;
            object-fit: cover;
        }
    }

    .span1{  //POSIÇÃO DA IMAGEM NO CIRCULO ---- DISTÂNCIA DA IMAGEM DO CENTRO
        transform: rotateY(0) translateZ(25vw);
    }

    .span2{
        transform: rotateY(60deg) translateZ(25vw);
    }

    .span3{
        transform: rotateY(120deg) translateZ(25vw);
    }

    .span4{
        transform: rotateY(180deg) translateZ(25vw);
    }

    .span5{
        transform: rotateY(240deg) translateZ(25vw);
    }

    .span6{
        transform: rotateY(300deg) translateZ(25vw);
    }


  
`