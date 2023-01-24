import styled from "styled-components"
import Footer from "../../components/Footer"
import GradientLine from "../../components/GradientLine"
import Home_HeroSection from "./Home_HeroSection"
import Home_Section2 from "./Home_Section2"
import Home_Section3 from "./Home_Section3"
import Home_Section4 from "./Home_Section4"

export default function Home() {
    return (
        <Container>
            <Home_HeroSection />
            <GradientLine margin={-25} margintop={5} />
            <GradientLine margin={13} margintop={8} />
            <GradientLine margin={45} margintop={8} />
            <Home_Section2 />
            <GradientLine margin={9} margintop={0} />
            <h2 className="title3">Principais Projetos</h2>
            <Home_Section3 />
            <GradientLine margin={-25} margintop={0} />
            <GradientLine margin={13} margintop={8} />
            <GradientLine margin={45} margintop={8} />
            <Home_Section4 />

            <Footer />
        </Container>
    )
}



const Container = styled.div`
    width: 100%;
    background-color: #111111;
    font-size: 4rem;
    overflow: hidden;
    color: #FFFFFF;

  
    .title3{
        margin-top: 5vw;
        text-align: center;
        font-weight: 600;
        background: -webkit-linear-gradient(0,rgba(240, 123, 44, 1) 0, rgba(156, 47, 228, 1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: normal;
    }


`