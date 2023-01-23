import styled from "styled-components"
import GradientLine from "../../components/GradientLine"
import Home_HeroSection from "./Home_HeroSection"
import Home_Section2 from "./Home_Section2"
import Home_Section3 from "./Home_Section3"

export default function Home() {
    return (
        <Container>
            <Home_HeroSection />
            <GradientLine margin={-25} margintop={0} />
            <GradientLine margin={13} margintop={88} />
            <GradientLine margin={45} margintop={88} />
            <Home_Section2 />
            <GradientLine margin={9} margintop={0} />
            <Home_Section3 />
        </Container>
    )
}



const Container = styled.div`
    width: 100%;
    background-color: #111111;
    font-size: 5rem;
    overflow: hidden;

  



`