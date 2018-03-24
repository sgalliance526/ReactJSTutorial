import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
//TODO: find a less cumbersome way to load images
import img1 from './img/batman-the-return-of-bruce-wayne.jpg';
import img2 from './img/nova_vol_5_1.jpg';
import img3 from './img/original-sin.jpg';
import img4 from './img/theDeathofCaptainAmerica.jpg';
import img5 from './img/Dragon-Ball-Z-Battle-of-Gods-Wallpaper.jpg';
import img6 from './img/aldnoah-zero.jpg';
import content from './main/resources/content';

//putting the imported images into an array to use in the cards
let images = [img1, img2, img3, img4, img5, img6];  //not a fan of this implementation, but it works for this project for now.

class Review extends React.Component {
    render() {
        return( //TODO: add a div.row for every three cards
            <div class="row">
                {
                    //load json content into cards in the ui
                    content.map(function(card, index){
                        return (
                            <a href={'view/' + card.href}>
                                <div class="col">
                                    <div class="tiles">
                                        <img src={images[index]}/>
                                    </div>
                                    <h2>{card.title}</h2>
                                    <p>{card.content}</p>
                                </div>
                            </a>
                        );
                    })
                }
            </div>
        );  //end return
    };  //end render
}

class Comics extends React.Component {
    render() {
        return (
          <div className="comics">
              <div class="container">
                  <div class="title text">
                      <h1>WELCOME TO STRYDER NEWS!</h1>
                  </div>

                  <div class="nav text">
                      <ul class="navItems">
                          <li class="active">Home</li>
                          <li><a href="#">Reviews</a></li>
                          <li><a href="#">Forums</a></li>
                      </ul>
                  </div>

                  <div class="main">
                      <Review/>
                      <div class="row">
                          <a href="captainAmerica-review.html">
                              <div class="col">
                                  <div class="tiles">
                                      <img src={img4}/>
                                  </div>
                                  <h2> Death of Captain America</h2>
                                  <p>I must say that I was never really into Captain America, but it was this death that caused me to research his lore and why Steve Rogers became the inspirational Captain America.</p>
                              </div>
                          </a>
                          <a href="dbz-review.html">
                              <div class="col">
                                  <div class="tiles">
                                      <img src={img5}/>
                                  </div>
                                  <h2>DBZ: Battle of Gods</h2>
                                  <p>Battle of Gods was an enjoyable movie to say the least.  After 20 years, Dragonball Z still delivers quality content that is enjoyable to both long-time fans and new viewers.</p>
                              </div>
                          </a>
                          <a href="aldnoahZero-review.html">
                              <div class="col">
                                  <div class="tiles">
                                      <img src={img6}/>
                                  </div>
                                  <h2>Aldnoah Zero</h2>
                                  <p>Throughout the war between Mars and Earth, Aldnoah Zero delivers great action and story.  I had heard great things about this anime, and it did not disappoint.</p>
                              </div>
                          </a>
                      </div>
                  </div>

                  <footer>
                      <h6 class="text">Site powered by Sean Gray.</h6>
                  </footer>
              </div>
          </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Comics />,
    document.getElementById('root')
);