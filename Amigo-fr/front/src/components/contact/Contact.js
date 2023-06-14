
import img from './contact.jpg';
import img1 from './contact2.jpg';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import logo from './playstore.jpg';
import logo1 from './AppStore.jpg';
import Conta from '../Conta';
//import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import './contact.css';
import PlaceIcon from '@mui/icons-material/Place';
import React, { useState } from 'react';
import Popup from './Popup';
import axios from 'axios';
const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    message: '',
  });
  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3010/api/contact', formData);
      setShowPopup(true); // Display the popup on successful form submission
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose1 = () => {
    setShowPopup(false); // Close the popup
  };

  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
    window.location.reload();
  };
  return (
    <div className="back" style={{ height: '1000px' }}>
      <Navbar />
      <div className="image-container" style={{ display: 'flex', flexDirection: 'column', backgroundImage: `url(${img}), url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

      <h1 style={{ color: 'rgba(255,105,0,1)', marginTop: '250px' }}>N'hésitez pas à nous contacter</h1>
      <form className='numbers' style={{ backgroundColor: 'white' ,marginTop: '155px'}}>
        <form style={{ color: '#4E89EC', marginLeft: '155px' }}>
          <div className='static' style={{ marginTop: '50px' }}>
            <div style={{ color: '#4E89EC', marginRight: '255px' }}>
              <h1>35,000</h1>
              <h4>followers Facebook</h4>
            </div>
            <div style={{ color: 'rgb(238,44,130)', marginRight: '255px' }}>
              <h1>30,000</h1>
              <h4>followers Instagram</h4>
            </div>
            <div style={{ marginRight: '255px' }}>
              <h1>55,000</h1>
              <h4>followers TikTok</h4>
            </div>
          </div>
        </form>
      </form>

      <form className='right1' style={{ marginLeft: '0px' }} onSubmit={handleSubmit}>
      <div className='formulaire1' style={{ marginTop: '155px' }}>
        <div className='name'>
          <input
            className='inputsign'
            type="text"
            id="name"
            name="nom"
            placeholder='Nom'
            style={{ marginTop: '50px', marginRight: '5px' }}
            value={formData.nom}
            onChange={handleChange}
          />
          <input
            className='inputsign'
            type="text"
            id="prenom"
            name="prenom"
            placeholder='Prenom'
            style={{ marginTop: '50px' }}
            value={formData.prenom}
            onChange={handleChange}
          />
        </div>
        <input
          className='inputsign'
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          style={{ marginTop: '30px', marginBottom: '10px' }}
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className='inputsign'
          name="message"
          placeholder='Message'
          style={{ height: '150px', marginTop: '30px', marginBottom: '10px' }}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          className='buttonsign'
          type="submit"
          style={{ marginTop: '35px', marginBottom: '10px', marginLeft: '0px' }}
        >
          Suivant
        </button>

        {showPopup && <Popup onClose={handleClose} />}
      </div>
    </form>
     
      <div className='ecriture'  style={{ marginTop: '155px'}}>  
        <h1  style={{ marginTop: '155px',marginRight:'105px', color:'#ff6900',fontSize:'50px'}}>Commencez l'aventure maintenant!!</h1>
      <div style={{marginRight:'100px'}}>
      <a href="https://play.google.com/store/apps/details?id=com.amigo.user" target="_blank" rel="noopener noreferrer">
          <img style={{ width: '250px', height: '100px' }} src={logo} alt="logo" />
        </a>
        <a href="https://apps.apple.com/us/app/amigo-driver-tunisie/id6443496747" target="_blank" rel="noopener noreferrer" style={{ marginTop: '35px' , marginRight:'25px' }}>
          <img style={{ width: '200px', height: '50px', marginBottom: '26px'  }} src={logo1} alt="logo" />
        </a>
        
        <form className="coordone" style={{marginLeft:'130px'}} >
        <Conta />
       
        <ul style={{ marginLeft:'70px',marginTop:'55px'}}>
        <div className='ligne'><InstagramIcon style={{marginRight:'15px',marginTop:'23px',color:'#ff6900' }}/>  <h4  style={{color:'#029fa0'}}>  contact@amigo.tn</h4></div>
        
         <div  className='ligne' ><CallIcon style={{marginRight:'15px',marginTop:'22px', color:'#ff6900'}}/>   <h4 style={{color:'#029fa0'}} > +216 95 436 978</h4></div>
      
       
         <div  className='ligne'> <PlaceIcon style={{marginRight:'15px',marginTop:'22px', color:'#ff6900'}}/> <h4 style={{color:'#029fa0'}}>Av. Monji Slim, Tunis</h4></div>
        </ul>
        
      
        </form>
        

      </div>
     

        </div>
    
     
    </div>
    
   <div>
   { <Footer /> }
   </div>
    {/* <form className='foot' style={{ backgroundColor: 'transparent' }}>
        <Footer />
      </form> */}

    </div>
    
  );
};

export default Contact;
