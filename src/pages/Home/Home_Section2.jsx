import styled from "styled-components"

export default function Home_Section2() {
    return (
        <Container>
            <div className="message">
                Quer um site moderno? Ou quem sabe clássico e elegante? Até mesmo descolado e estiloso como você? Então, está  no lugar certo.
                Criação de sites personalizados que representam a essência de sua loja, produto ou pessoa. Vamos tornar sua ideia realidade?
            </div>
            <div className="buttons">
                <button>Mande me uma mensagem</button>
                <button>Veja meu trabalho</button>
            </div>
        </Container>
    )

}

const Container = styled.div`
    width: 100%;
    margin-top: 15rem;
    margin-bottom: 15rem;

        .message{
            font-size: 4rem;
            line-height: 4.5rem;
            text-align: center;
            padding: 0 10vw;
            color: #FFFFFF;
            margin-bottom: 8.8rem;
        }

        .buttons{
            width: 100%;
            display: flex;
            justify-content: center;
        }

        button{
            max-width: 40rem;
            width: 35vw;
            height: 6.4rem;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
            linear-gradient(270deg, rgba(156, 47, 228, 0.1) 0%, rgba(240, 123, 44, 0.4) 100%);
            border: none;
            border-radius: 8px;
            color: #FFFFFF;
            font-weight: 600;
            font-size: 2.4rem;
            margin-left: 4rem;
            box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        }

        button:hover{
            background: linear-gradient(270deg, rgba(156, 47, 228, 0.3) 0%, rgba(240, 123, 44, 0.6) 100%),
                    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                    linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
        }
`