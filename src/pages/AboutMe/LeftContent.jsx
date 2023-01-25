import styled from "styled-components"

export default function LeftContent() {
    return (
        <Container>
            <div className="image"></div>
            <h2>Emerson Matthias</h2>
            <p>Desenvolvedor Front End /
                Back End / Web Design / HTML /
                CSS / Javascript / Styled-Components / 
                NodeJS / MongoDB / Postgres
            </p>

        </Container>
    )
}

const Container = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    margin-left: 5vw;

    .image{
        width: 27vw;
        height: 27vw;
        border-radius: 100%;
        background-color: #FFFFFF;
    }

    h2{
        font-size: 8rem;
        line-height: 9.6rem;
        font-weight: 300;
        margin-bottom: 4rem;
        text-align: center;
    }

    p{
        font-size: 3rem;
        font-weight: 300;
        line-height: 3.5rem;
        text-align: center;
    }

@media(max-width: 1000px) {
    width: 100%;
    margin-left: 0;
    padding: 0 5vw;
    
    h2{
        margin-bottom: 2rem;
        line-height: 8.8rem;
    }

    .image{
        width: 40vw;
        height: 40vw;
    

    }
   
}
    
`