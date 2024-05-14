import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import per from './props/pics/per3.png'; 

const Assistance = () => {
    return (
            
        <div className='content' id="assist">
            <div className='item'>
                <h2>
                   Oleme siin, et aidata!
                </h2>
                <p>
                   Pole kindel, mida vajad? Oleme alati valmis aitama. Võta ühendust meie kasutajatoe tiimiga ja me vastame sulle esimesel võimalusel.
                </p>
                <button type="button" className="btn btn-dark">võta ühendust</button>
            </div>
            <div className='item'>
                <img src={per} className="cont-image" alt="cont" />
            </div>

        </div>
         
        
    );
}

export default Assistance;