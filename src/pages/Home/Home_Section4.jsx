import styled from "styled-components"
import htmlIcon from "../../img/htmlIcon.svg"
import cssIcon from "../../img/cssIcon.svg"
import jsIcon from "../../img/jsIcon.svg"
import reactIcon from "../../img/reactIcon.svg"
import nodeIcon from "../../img/nodeIcon.svg"
import mongoIcon from "../../img/mongoIcon.svg"

export default function Home_Section4() {
    return (
        <Container>
            <h2>Técnologias Trabalhadas</h2>
            <div className="tecnologiesList">
                <img src={htmlIcon}/>
                <img src={cssIcon}/>
                <img src={jsIcon}/>
                <img src={reactIcon}/>
                <img src={nodeIcon}/>
                <img src={mongoIcon} className="mongo"/>

            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        margin-top: 5vw;
        text-align: center;
        font-weight: 600;
        background: -webkit-linear-gradient(0,rgba(240, 123, 44, 1) 0, rgba(156, 47, 228, 1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: normal;
    }

    .tecnologiesList{
        margin-top: 5vw;
        img{
            margin-left: 2vw;
            height: 4rem;
            width: 4rem,;
        }

        .mongo{
          
            width: 9rem;
        }
    }

 
`