import styled from "styled-components"
import Header from "../../components/Header"
import Contatos from "./Contatos"
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

export default function AboutMe() {
    const page = "Sobre mim";
    
    return (
        <Container>
            <Header page={page}/>
            <div className="mainContent">
                <LeftContent />
                <RightContent />
            </div>
            <Contatos />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #000000;
    color: #FFFFFF;
    font-family: 'Lato', sans-serif;

    .mainContent{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 15rem;
    }

@media(max-width: 1000px) {
    

    .mainContent{
        flex-direction: column;
    }
}
`