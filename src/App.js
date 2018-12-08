import React, { Component } from 'react'
import './App.scss'
import background1 from './img/noLibs.jpg'
import background3 from './img/kel&ant.jpg' 
import background4 from './img/ant.jpg' 
import background5 from './img/React Cheat Sheet.png'
import background6 from './img/banner1.jpg' 
import background7 from './img/banner2.jpg' 
import background8 from './img/banner3.jpg' 
import background9 from './img/banner4.jpg' 
import background10 from './img/dj.jpg'
import background11 from './img/kel.jpg' 
import background13 from './img/postbackground.jpg' 
import background14 from './img/skyline.jpg'

const imgUrls = [
  background1,
  background3,
  background4,
  background5,
  background6,
  background7,
  background8,
  background9,
  background10,
  background11,
  background13,
  background14,

];

class App extends Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
	render () {
		return (
			<div className="carousel">
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
		);
	}
}

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);

const ImageSlide = ({ url }) => {
	// const styles = {
	// 	backgroundImage: `url(${url})`,
	// 	backgroundSize: 'cover',
  //   backgroundPosition: 'center'
	// };
	
	return (
    <div className="image-slide" 
      // style={styles}
    >
      <img src={url} alt="" className='image-slide' /> 
    </div>
	);
}


export default App;
