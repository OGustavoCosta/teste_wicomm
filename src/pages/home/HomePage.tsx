/* Components */
import Footer from "../../components/Footer"
import Navigation from "../../components/Navigation"

/* Sections */
import HomeHero from "./HomeHero"

function HomePage(){
    return(
        <div className="w-full min-h-[100lvh] text-base sora text-light bg-background-dark flex flex-col">
            <Navigation/>
            <main className="main w-full overflow-hidden grow">
                <section className="main__background">
                    <HomeHero/>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage