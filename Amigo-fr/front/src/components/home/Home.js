import React from './home.css';
import backAbout from './backAbout.jpg';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import img from './playstore.jpg';
import img2 from './AppStore.jpg';
const Home = () => {
  return (
   
   <div className='back' style={{ height:'800px', backgroundImage: `url(${backAbout})`, backgroundSize: "cover" }}>
  <Navbar/>    
 <form >
    <div className='details' >
       <h2 style={{color:'#21A3A1'}} >Besoin d'un taxi?</h2>
      <h1 style={{color:'white'}}>Partagez le taxi,
          Soyez Amigo !</h1>
         
    </div>
    <form  style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)'}}>
      
      <h1 style={{color:'#21A3A1'}}>Télécharger Maintenant!</h1>
          <h2 style={{color:'#21A3A1'}}>Notre application mobile est disponible sur :</h2>
          
          <a href="https://play.google.com/store/apps/details?id=com.amigo.user" target="_blank" rel="noopener noreferrer">
          <img style={{ width: '250px', height: '100px' }} src={img} alt="logo" />
        </a>
        <a href="https://apps.apple.com/us/app/amigo-driver-tunisie/id6443496747" target="_blank" rel="noopener noreferrer" style={{ marginTop: '35px' , marginRight:'25px' }}>
          <img style={{ width: '200px', height: '50px', marginBottom: '26px'  }} src={img2} alt="logo" />
        </a>
        
          </form>
       
    </form>
   {/* <form className='foot'  style={{ backgroundColor: 'transparent' }}>
   <Footer  /> 
   </form> */}
  <Footer  />
    </div>
  );
};

export default Home;
