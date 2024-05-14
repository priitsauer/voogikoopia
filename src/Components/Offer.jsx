import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import plants from './props/pics/Plants.jpg'; 

const Offer = () => {
    return (
            
        <div className='content'>
            <div className='item'>
                <img src={plants} className="cont-image" alt="cont" />
            </div>
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
        </div>
         
        
    );
}

export default Offer;