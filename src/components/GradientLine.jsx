import styled from "styled-components"

export default function GradientLine({margin, margintop}){
    return(
        <Container margin={margin} margintop={margintop}>

        </Container>
    )
}

const Container = styled.div`
    width: 80%;
    height: 2px;
    margin-left: ${props => props.margin}vw;
    margin-top: ${props=> props.margintop}vw;
    background: linear-gradient(270deg, #9C2FE4 0%, #F07B2C 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));

`