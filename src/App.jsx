import './assets/style/App.css'
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import img from "./assets/images/maskGroup.png";
import Logement from './pages/Logement';
import NotFound from './pages/NotFound';

function App() {
  const cards = [
    { id: 1, title: "Titre de location",  image: "https://via.placeholder.com/150" },
    { id: 2, title: "Titre de location", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Titre de location", image: "https://via.placeholder.com/150" },
    { id: 4, title: "Titre de location", image: "https://via.placeholder.com/150" },
    { id: 5, title: "Titre de location", image: "https://via.placeholder.com/150" },
    { id: 6, title: "Titre de location", image: "https://via.placeholder.com/150" },

  ];

  return (
    <div className="app">
      <Navbar />

      <div className="navbar__caroussel">
        <img src={img} alt="img d'accueil" className="img_caroussel" />
        <div className="carousel__text">Chez vous, partout et ailleurs</div>
      </div>

      <div className='big-card'>
        <div className="card-container">
          {cards.map((card) => (
            <Cards key={card.id} title={card.title} image={card.image} />
          ))}
        </div>
      </div>
      <Logement />
      <NotFound />
      <Footer />
    </div>
  );
}

export default App;
