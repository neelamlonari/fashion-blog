import React from 'react'
import image from "../images/blog-image-1.jpg";
import image2 from "../images/VIV.jpg";



function Article({time,h2}) {
  return (
    <div className='article'>
    <div className = "article1">
    <section>
    <time datetime="11-12-20">11/12/20</time>
    <h2>On The Street In Brooklyn</h2>
    <img src={image} alt= "blog-image-1.jpg" ></img>
    <div className='article1-para'>
        <p>Cray ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                     sunt in culpa qui officia deserunt mollit anim id est .Lorem ipsum dolor sit amet consectetu.  </p>
    </div>
    <aside>Continues...</aside>
    </section>
    </div>
    <div className='article2'>
    <section>
       <time datetime="11-11-20">11/11/20</time>
       <h2>Vintage in Vogue</h2>
       <img src={image2} alt= "VIV.jpg" ></img>
       <div className='article2-para'>
        <p>Selfies sunt ,sit amet Cray ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                     sunt in culpa qui officia deserunt mollit anim id est .Lorem ipsum dolor sit amet consectetu.  </p>
        </div>
       <aside>Continues...</aside>
       </section>

    </div>
    </div>
  );
}

export default Article;