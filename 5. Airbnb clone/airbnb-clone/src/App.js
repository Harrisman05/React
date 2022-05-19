import './App.css';
import Navbar from './components/Navbar/navbar.js'
import Hero from './components/Hero/hero.js'
import Card from './components/Card/card.js'
import Zenny from './assets/card-image.png'
import Messi from './assets/Lionel_Messi.jpg'
import Tony from './assets/Tony_Hawk.jpg'
import Michael from './assets/Michael_Scott.png'
import data from './data.js';
console.log(data);

function App() {
   const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

   const pokemonMapped = pokemon.map((element) => {
      return <h1>{element}</h1>
   })

   const cardMapped = data.map((element) => {
      return (
         <Card
            img = {element.image}
            status = {element.status}
            rating = {element.rating}
            name = {element.name}
            price = {element.price}
         />
      ) 
   });

  return (

  <div>  
   <Navbar/>
   <Hero/>
   <div className = "card-list">
   <Card
      image = {Zenny}
      status = "SOLD OUT"
      rating = "5"
      name = "Zenny Zafiris"
      price = "$136"
   />
   <Card
      image = {Messi}
      status = "AVAILABLE"
      rating = "4.5"
      name = "Lionel Messi"
      price = "$1000"
    />
   <Card
      image = {Tony}
      status = "AVAILABLE"
      rating = "2"
      name = "Tony Hawk"
      price = "$15000"
   />
   <Card
      image = {Michael}
      status = "SOLD OUT"
      rating = "4.9"
      name = "Michael Scott"
      price = "$400"
   />
   </div>
   {pokemonMapped}
   {cardMapped}
  </div>
  );
}


export default App;
