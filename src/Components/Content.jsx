// Accordion.js
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import cont from './props/pics/cont.png'; 

const Accordion = () => {
    return (
            
        <div className='content'>
            <div className="accordion" >
          
                <h2 style={{ fontWeight: '700', fontSize: '40px' }}>Pane oma veebileht lühikese ajaga tööle</h2>
                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h3>Logi sisse ja seadista enda lehte</h3>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <h3>Kohanda ja tee see omanäoliseks</h3>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p>est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h3>Avalikusta oma uus veebileht</h3>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p>ur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qu</p>
                        </div>
                    </div>
                </div>
                {/* Add more accordion items as needed */}
                <div> 
                    <p>Naudi Voo veebiehitustööriista 30 päeva tasuta</p>  </div>
                <div>
                    <button type="button" className="btn btn-primary">Alusta siit</button>
                </div>
            </div>
            
            <div>
                <img src={cont} className="cont-image" alt="cont" />
            </div>
        </div>
    );
}

export default Accordion;