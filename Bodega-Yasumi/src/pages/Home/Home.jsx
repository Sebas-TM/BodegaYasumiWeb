import FilterBar from "../../components/bar/FilterBar"
import Footer from "../../components/generic/Footer"
import Header from "../../components/generic/Header"
import ProductContainer from "../../components/products/ProductContainer"

const Home = () => {
    return(
        <>
            <Header/>
            <FilterBar/>
            <ProductContainer/>
            <Footer/>
        </>
    )
}

export default Home