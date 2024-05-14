import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import mobileview from './props/pics/MobileView.jpg'; 

const Mobile = () => {
    return (
            
        <div className='content'>
            <div className='item'>
                <h2>
                    Mobiilisõbralik, välkkiire
                </h2>
                <p>
                    Ehita kasutajasõbralik veebileht, mis näeb hea välja nii mobiilis kui ka arvutis – ilma lisatööta.
                    Paku tõeliselt mobiilipõhist kogemust erakordselt kiire veebiehitustööriistaga. 
                </p>
                <button type="button" className="btn btn-primary">Alusta siit</button>
            </div>
            <div className='item'>
                <img src={mobileview} className="cont-image" alt="cont" />
            </div>

        </div>
         
        
    );
}

export default Mobile;