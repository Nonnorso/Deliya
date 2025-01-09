import Cupcakelogo from '../assets/Cupcake.png'
import Cakelogo from '/cake.png'
import '../styles/HomePage.css'

function App() {
  
  return (
    <>
      <div className="HomepageContainer">
        <div className="HomePageContent">

          <h1>Déli&#39;ya Pâtisserie !</h1>

          <section className="HomeImg">
            <a href="https://vite.dev" target="_blank">
              <img src={Cakelogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={Cupcakelogo} className="logo react" alt="React logo" />
            </a>
            </section>

            <section className="WhoAmI">
              <h2>Qui suis-je ?</h2>
            </section>

            <section className="LastCreations">
              <h2>Dernières créations </h2>
            </section>

            
          </div>
        
      </div>
      
    </>
  )
}

export default App
