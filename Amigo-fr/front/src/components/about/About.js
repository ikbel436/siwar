import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import './about.css';
import img from './taxi.jpg';
import img1 from './106429.png';

const About = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='about' style={{ height: '1000px', backgroundImage: `url(${img})`, backgroundSize: "cover"}}>
        <div className='content'>
          <h1 className='titre' style={{ margin: '100px',marginTop:'-50px', color:' #ff6900' }}>Soyez Amigo, partagez le taxi !</h1>
        </div>
      </div>
      <div className='text-container'>
        <div className='text'>
          <h2 style={{ color: '#ff6900' }}>Notre Mission</h2>
          <p >
            Amigo, une application 100% Tunisienne basée sur le concept « gagnant-gagnant » entre le chauffeur Amigo et le passager,
            a été créée dans l’objectif de satisfaire les besoins des deux parties en leur permettant de :
            Générer plus de revenus pour les taxis individuels ;
            Faciliter la vie des utilisateurs de taxis en Tunisie.
          </p>
        </div>
        <div className='image-container'>
          <div className='about-image' style={{ backgroundImage: `url(${img1})` }}></div>
        </div>
      </div>
 <Footer/>
      {/* Reste du contenu */}
    </div>
  );
};

export default About;
