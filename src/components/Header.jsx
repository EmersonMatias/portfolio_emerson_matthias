import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Header(){
    const navigate = useNavigate()

    return(
        <Container>
            <h2>
                Emerson Matthias
            </h2>
            <div>
                <p onClick={() => navigate("/")}>Inicio</p>
                <p>Projetos</p>
                <p onClick={() => navigate("/sobremim")}>Sobre mim</p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 40px;
    font-size: 2rem;
    font-weight: 700;
    padding: 0 8rem;
    margin-top: 0.8rem;
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
            cursor: pointer;
        }
    }


@media(max-width: 770px) {
    padding: 0 4rem;

}
`