import React from 'react';
//<link rel='stylesheet' href='SignUp.css'/>
import img from './signup.jpg';
import img1 from './playstore.jpg';
import img2 from './AppStore.jpg';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './signup1.css';
const SignUp1 = ({ formData, setFormData, onNext }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onNext();
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
        <input className='nume22' type="text" id="2"  placeholder='2' style={{marginRight:'5px' }}/>
        <input className='liaison' type="text" id="2"  placeholder=''style={{marginRight:'5px' }}/>
        <input className='nume33' type="text" id="3"  placeholder='3' />
        </div>
   
        <input  className='inputsign'  type="CIN" id="CIN" name="cin"  placeholder='CIN' style={{ marginTop: '30px', marginBottom: '10px'}} />
       <input  className='inputsign' d="permis" name="permis"  placeholder='Numéro du Permis'  style={{ marginTop: '30px', marginBottom: '10px'}}></input>
       <input  className='inputsign'  type="license" id="license" name="licenceTaxi"  placeholder='Numéro de la licence taxi' style={{ marginTop: '30px', marginBottom: '10px'}} />
<div className='enregistrer'>
<Link to='/SignUp'>
      <button  className='buttonsign1'  type="submit"  style={{ marginTop: '35px', marginBottom: '0px' , marginLeft:'0px' }}>Previous</button>
      </Link>
<Link to='/SignUp2'>
      <button  className='buttonsign1'  type="submit"  style={{ marginTop: '35px', marginBottom: '0px' , marginLeft:'30px' }}>Suivant</button>
      </Link>
     
      </div>
      </div>
      </form>
      
      </div>
    </div>
    {/* <form className='footabout' style={{ backgroundColor: 'transparent' }}>
        <Footer />
      </form>  */}
  <Footer />
    </div>
  );
};
export default SignUp1;
