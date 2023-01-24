import styled from "styled-components"

export default function Footer() {
    return (
        <Container>
           Copiright 2022 Emerson Matthias. Todos os direitos reservados.
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(67, 67, 67, 0.2);
    font-size: 1rem;
    font-weight: bold;
    margin-top: 8rem;
`