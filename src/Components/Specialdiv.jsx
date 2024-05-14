import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const SpecialContent = () => {
    return (
        <div className='content'>
        <div className='item'>
            <img src={plants} className="cont-image" alt="cont" />
        </div>
        <div className='item'>
            <h2>
              Täielikult mitmekeelne, koodi pole vaja
            </h2>
            <p>
                 Lisa oma lehele uus keel vaid ühe klikiga, kasutades Voo mitmekeelsuse võimalust.
                Paku külastajatele personaalset keelekogemust ning suurenda oma veebilehe nähtavust kohalikes otsingumootorites, kasutades sisseehitatud SEO funktsioone.
            </p>
            <button type="button" className="btn btn-primary">Loo mitmekeelne veebileht</button>
        </div>
    </div>
    
         
        
    );
}

export default SpecialContent;