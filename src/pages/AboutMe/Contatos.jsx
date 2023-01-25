import styled from "styled-components"
import Footer from "../../components/Footer"

export default function Contatos() {
    return (
        <Container>

            <h2>CONTATOS</h2>
            <div className="contacts">
                asa
            </div>

            <Footer />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8rem;

    h2{
        font-size: 6.8rem;
        font-weight: 300;
        margin-bottom: 4rem;
        background: -webkit-linear-gradient(45deg, rgba(121, 60, 161, 1) 0%, rgba(240, 123, 44, 1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .contacts{
        display: flex;
    }
`