import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Menu from "../components/Menu"
import BrandInfo from "../components/BrandInfo"
import BottomComp from "../components/BottomComp"
import Footer from "../components/Footer"
const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Hero ></Hero>
            {/* <Menu></Menu> */}
            <BrandInfo></BrandInfo>
            <BottomComp></BottomComp>
            <Footer></Footer>
        </>
    )
}

export default Home