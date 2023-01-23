import styled from "styled-components"

export default function Header(){
    return(
        <Container>
            <h2>
                Emerson Matthias
            </h2>
            <div>
                <p>Inicio</p>
                <p>Projetos</p>
                <p>Sobre mim</p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 40px;
    font-size: 1.4rem;
    font-weight: 700;
    padding: 0 80px;
    margin-top: 8px;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: space-between;
    color: rgb(266,266,266,1);
    z-index: 2000;
    
    div{
        display: flex;

        p{
            margin-left: 24px;
        }
    }


@media(max-width: 770px) {
    padding: 0 40px;

}
`