
//<link rel='stylesheet' href='SignUp.css'/>
import img from './signup.jpg';
import img1 from './playstore.jpg';
import img2 from './AppStore.jpg';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Pop from './Pop';

import axios from 'axios';
import './signup2.css';
const SignUp2 = ({ formData, setFormData, onSubmit }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [showPop, setShowPop] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3010/api/client', formData);
      onSubmit(); // Call the onSubmit function passed from the parent component
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleClose = () => {
    setShowPop(false);
    window.location.reload();
  };
  return (
    <div>
   
    <div style={{ height: '1000px', backgroundImage: `url(${img})`, backgroundSize: "cover"}}>
    <Navbar/>
    <div className='left_right' >
      <form  style={{ marginRight: '80px' }}>
        <h1 className='titresign'>Gagnez plus avec AMIGO</h1>
        <p className='paragraphsign' style={{ textAlign: 'left' }}>Augmentez votre chiffre d’affaires et gagnez davantage de<br/>
         clients grâce à Amigo !<br/>
Essayez dès à présent le premier service de taxi sous <br/> le concept de partage de course en Tunisie ! Lancez-vous pour <br/>une nouvelle aventure 100% gagnante.</p>
<h2 className='telechargersign'>Téléchargez Amigo Driver sur</h2>
<div className='logo'>
<a href="https://play.google.com/store/apps/details?id=com.amigo.user" target="_blank" rel="noopener noreferrer" style={{ marginTop: '10px' , marginRight:'25px' }}>
          <img style={{ width: '250px', height: '100px' }} src={img1} alt="logo" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.amigo.user" target="_blank" rel="noopener noreferrer" style={{ marginTop: '35px' , marginRight:'25px' }}>
          <img style={{ width: '220px', height: '50px' }} src={img2} alt="logo" />
        </a>
        </div>
      </form>
      <form className='right' style={{ marginLeft: '15px' }}onSubmit={handleSubmit}>
      <h1 className='devenez'>Devenez chauffeur Amigo</h1>
    
      <  div  className='formulaire'>
        <div className='num'style={{ marginTop: '0px',marginRight:'280px' }} >
        <input className='nume1' type="text" id="1"  placeholder='1' style={{marginRight:'5px' }}/>
        <input className='liaison' type="text" id=""  placeholder='' style={{marginRight:'5px' }}/>
        <input className='nume2' type="text" id="2"  placeholder='2' style={{marginRight:'5px' }}/>
        <input className='liaison' type="text" id="2"  placeholder=''style={{marginRight:'5px' }}/>
        <input className='nume3' type="text" id="3"  placeholder='3' />
        </div>
    <div className='name'>
    <input className='inputsign' type="text" id="N°d'immatriculation" name="immatr" placeholder="N°d'immatriculation" style={{ marginTop: '50px' , marginRight:'5px' }} />
      <input  className='inputsign' type="text" id="Numéro de taxi" name="numTaxi" placeholder='Nuéero de taxi' style={{ marginTop: '50px' }} />
      
    </div>
     <div className='name'>
      <input  className='inputsign'  type="Constructeur" id="Constructeur" name="constructeur" placeholder='Constructeur' style={{ marginTop: '30px', marginBottom: '10px',marginRight:'5px'}} />

   
      <input  className='inputsign' d="Modéle" name="Modéle" placeholder='model' style={{ marginTop: '30px', marginBottom: '10px'}}></input>
      </div>
      <input  className='inputsign' type="Number" name="annee" placeholder='Année' style={{ marginTop: '30px', marginBottom: '10px', marginLeft:'0px',width:'420px'}}></input>

      <div className='enregistrer'>
<Link to='/SignUp'>
      <button  className='buttonsign2'  type="submit"  style={{ marginTop: '35px', marginBottom: '0px' , marginLeft:'10px' }}>Previous</button>
      </Link>

      <button
  className='buttonsign2'
  type="submit"
  style={{ marginTop: '35px', marginBottom: '0px', marginLeft: '45px' }}
  onClick={() => setShowPop(true)}
>
  Suivant
</button>
{showPop && <Pop onClose={handleClose} />}
      </div> </div>
      </form>
      
      </div>
    </div>
    {/* <form className='footabout' style={{ backgroundColor: 'transparent' }}>
        <Footer />
      </form> */}
  <Footer />
    </div>
  );
};
export default SignUp2;
