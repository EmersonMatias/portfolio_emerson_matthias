import styled from "styled-components"

export default function GeneralText({ leftIcon,rightIcon , title, text }) {
    return (
        <Container>
           {leftIcon?  <img src={leftIcon} /> : null}
            <div className="text">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            {rightIcon?   <img src={rightIcon} /> : null}
          
        </Container>
    )
}
//linear-gradient(171deg, rgba(121, 60, 161, 1) 7%, rgba(240, 123, 44, 1))
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4.8rem;

    .text{
        width: 30vw;
    }

    h3{
        font-size: 3.4rem;
        line-height: 4.4rem;
        font-weight: 400;
        margin-bottom: 1.6rem;
        background: -webkit-linear-gradient(91deg, rgba(121, 60, 161, 1) 0%, rgba(240, 123, 44, 1) 90%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p{
        font-size: 2rem;
        line-height: 2.4rem;
    }

    img{
        width: 16rem;
        height: 16rem;
        margin: 0 2vw;
    }

    @media(max-width: 1000px) {
        margin-top: 5vw;
        justify-content: center;

        .text{
            width: 45%;
        }
    
        p{
            line-height: 2rem;
        }

        img{
            width: 10rem;
            height: 10rem;
        }
    }

`