import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "../components/Header";


function Home() {


    
    return(
        <>
            <div className="d-flex flex-column min-vh-100">
            <Header />
            
            <main className="flex-grow-1">
                <Main />
            </main>
            
            </div>
        </>


    )


}

export default Home