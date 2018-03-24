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
const MAX_NUMBER_OF_CARDS_PER_ROWS = 3;
let cardArr = [];

function getContent(){
    cardArr = [];
    content.map(function(card, index){
        cardArr[index] = card;
    });
}

class Review extends React.Component {
    render() {
        let element = [];
        var card = cardArr.splice(0, MAX_NUMBER_OF_CARDS_PER_ROWS);
        var img = images.splice(0, MAX_NUMBER_OF_CARDS_PER_ROWS);
        for(let i = 0; i < card.length; i++) {
            console.log("card: " + JSON.stringify(card));
            element[i] = (
                <a href={'view/' + card[i].href}>
                    <div class="col">
                        <div class="tiles">
                            <img src={img[i]}/>
                        </div>
                        <h2>{card[i].title}</h2>
                        <p>{card[i].content}</p>
                    </div>
                </a>
            );
        }

        return element;
    };  //end render
}

class CardView extends React.Component {
    render() {
        let element = [];
        let cardLength = cardArr.length;
        //add a div.row for every three cards
        for(let i = 0; i < cardLength/MAX_NUMBER_OF_CARDS_PER_ROWS; i++) {
            element[i] = (
                <div class="row">
                    <Review/>
                </div>
            );
        }

        return element;
    };    //end render
}

class Comics extends React.Component {
    render() {
        getContent();

        return (
          <div className="comics">
              <div class="container">
                  <div class="title text">
                      <h1>WELCOME TO STRYDER NEWS!</h1>
                  </div>

                  <div class="nav text">
                      <ul class="navItems">
                          <li class="active">Home</li>
                          <li><a>Reviews</a></li>
                          <li><a>Forums</a></li>
                      </ul>
                  </div>

                  <div class="main">
                      <CardView/>
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