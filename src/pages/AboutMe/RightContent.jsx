import styled from "styled-components"
import GeneralText from "../../components/GeneralText"
import personIcon from "../../img/personIcon.svg"
import toolsIcon from "../../img/toolsIcon.svg"
import pathIcon from "../../img/pathIcon.svg"
import workIcon from "../../img/worksIcon.svg"
import { textContent } from "./text.js"

export default function RightContent() {
    return (
        <Container>
            <GeneralText rightIcon={personIcon} title={"Sobre Mim"} text={textContent.SobreMim}/>
            <GeneralText leftIcon={pathIcon} title={"Minha Trajetória"} text={textContent.SobreMim}/>
            <GeneralText rightIcon={toolsIcon} title={"Técnologias Trabalhadas"} text={textContent.SobreMim}/>
            <GeneralText leftIcon={workIcon} title={"Principais Áreas"} text={textContent.SobreMim}/>
        </Container>
    )
}

const Container = styled.div`
    width: 50%;
    background-color: black;
    margin-right: 5vw;

@media(max-width: 1000px) {
    width: 100%;
 

}
    
`