import React, { useEffect, useRef } from 'react';

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: `0px 0px -${window.innerHeight}px 0px`, // Use backticks (`) for template literals
      threshold: 0 // Adjust this threshold as needed
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a CSS class to the navbar to initiate the fade-in effect
          navbarRef.current.classList.add('fade-in');
        } else {
          // Remove the CSS class when the navbar is not in view
          navbarRef.current.classList.remove('fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(navbarRef.current);

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

 




  return (
    <div className='navbar' ref={navbarRef}>
            <svg fill="none" height="30" viewBox="0 0 78 24" width="90" xmlns="http://www.w3.org/2000/svg"><path d="m74.6927 12.4037c0 .0836-.0098.1642-.0124.2469-.015.5666-.0836 1.1198-.1967 1.6564l-.0206-.0008c-.8726 4.0422-4.4644 7.0731-8.7686 7.0731-2.4775 0-4.722-1.0041-6.3458-2.6289l.015-.0154c-.0125-.0116-.0266-.0236-.0386-.036-1.5956-1.6196-2.5821-3.8417-2.5821-6.2953 0-4.9564 4.0178-8.97511 8.9751-8.97511 2.4784 0 4.7229 1.005 6.3467 2.62886l-1.5973 1.59728c-1.2154-1.21628-2.8945-1.968-4.7494-1.968-3.7097 0-6.7174 3.00772-6.7174 6.71747 0 1.5754.5464 3.0218 1.455 4.167.1615.2035.3373.3925.5207.5751l-.0193.0193c1.2146 1.2086 2.8886 1.956 4.7379 1.956 3.3248.0008 6.078-2.4176 6.6162-5.5882h-6.6505v-2.259h6.6728 1.4876.7937c.0463.3703.078.7462.078 1.1293zm-47.1184-8.97383v2.25772c3.7106 0 6.7174 3.00771 6.7174 6.71661 0 3.7105-3.0068 6.7174-6.7174 6.7174-3.7097 0-6.7174-3.0069-6.7174-6.7174h-2.2582c0 4.9568 4.0183 8.9755 8.9752 8.9755 4.9568 0 8.9755-4.0187 8.9755-8.9755.0005-4.95647-4.0183-8.97433-8.9751-8.97433zm-11.3289 5.28343-4.305 9.0844c-.3458.7492-.9737 1.2947-1.518 1.3123l-.0844.0009c-.53014-.0116-1.164-.5602-1.51286-1.3132l-6.33557-13.72625h-2.48957l6.77614 14.67295c.75815 1.6432 2.09615 2.6242 3.57816 2.6242h.0583c1.4815 0 2.8191-.981 3.5777-2.6233l4.2823-9.03h-.0005c1.0372-2.37128 3.4038-4.02771 6.1578-4.02771v-2.25772c-3.6425 0-6.777 2.16815-8.1845 5.28343zm30.3695-5.28471c-4.9573 0-8.976 4.01871-8.976 8.97511 0 4.9569 4.0187 8.9747 8.9755 8.9747 4.956 0 8.9747-4.0178 8.9747-8.9747.0005-4.9564-4.0182-8.97511-8.9742-8.97511zm0 15.66981c-3.6982 0-6.6956-2.9974-6.6956-6.6947 0-3.69725 2.9974-6.69554 6.6956-6.69554 3.6972 0 6.6947 2.99829 6.6947 6.69554 0 3.6973-2.9975 6.6947-6.6947 6.6947z" fill="#000"/></svg>
              <div className="navbar-content">
                <div className='navbar-links'>
                <div>    
                <h4>Võimalused</h4>
                </div>
                <div>
                <h4>Kujundused</h4>
                </div>
                <div>
                <h4>Materjalid</h4>
                </div>
                <div>
                <h4>Hinnad</h4>
                </div>
                <div>
                <h4>Voog Pay</h4>
                </div>
                </div>
                <div className='buttons'>
                <button type="button" className="btn btn-light">Sisene</button>
                <h4></h4>
                <button type="button" className="btn btn-primary">Loo veebileht tasuta</button>
                </div>
        </div>
    </div>
  );
}

export default Navbar;