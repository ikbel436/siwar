//import './signUp.css';
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
const Services = () => {
  return (
    <div>
      <Navbar/>
      <h1>Services</h1>
      
      <h1>Partagez le Trajet</h1>
      <h3>Gagnez un amigo et économisez votre argent</h3>
      <h2>Le partage de course c'est "Gagnant-Gagnant"</h2>
      <p>
       <h3>Passager Amigo :</h3>
       Dans le but d’optimiser les couts de transport et de reduire le temps d’attente, nous avons proposé
       pour vous le taxi Amigo, la meilleure solution pour tous vos problèmes de déplacement. Partagez le taxi avec 
       d’autres passagers qui ont le même itinéraire que vous, ainsi que les frais de la course. Partager c’est 
       économiser, c’est gagner ! 
      </p>
      <p>
       <h3>Chauffeur Amigo :</h3>
       Boostez vos ventes et gagnez plus de clients en tant que chauffeur Amigo ! Avec le seul service de taxi sous 
       la notion de partage de course, vous n’aurez plus votre Taxi sans clients, des courses bien définies avec la meilleure
       application de communication entre le chauffeur et le client. N’attendez pas longtemps pour un client, Amigo gére les
       détails de vos courses !
      </p>
      
      <Footer  /> 
    </div>
  );
};

export default Services;


