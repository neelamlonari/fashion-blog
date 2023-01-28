import React from 'react'

function Footer() {
  return (
    <div className='Footer'>
        <nav has-submenu ="false" aria-label="footer Navigation" role="navigation"aria-haspopup="true">
            <ul>
            <li><a href ="./Women's.html" > Women's </a></li>
                <li><a href ="./Men's.html" > Men's </a></li>
                <li><a href ="./OnTheStreet.html" > On The Street </a></li>
                <li><a href ="./TheCatwalk.html" > The Catwalk </a></li>
                <li><a href ="./Adwatch.html" > AdWatch </a></li>
                <li><a href ="./About.html" > About </a></li>
                <li><a href ="./Tips.html">Tips</a></li>
            </ul>
        </nav>
        <h6>&copy;2013 Valet Industries Inc</h6>

    </div> 
           
     
  );
}

export default Footer;