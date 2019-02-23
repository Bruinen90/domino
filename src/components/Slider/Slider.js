import React, { Component } from 'react';
import styles from './Slider.module.css';
import Logo from './Logo/Logo';

class Slider extends Component {
    state = {
        currSlide: 0,
    }

    autoPlay = () => {
        const change = () => {
            if(this.state.currSlide < this.props.slidesCount -1) {
                this.setState({currSlide: this.state.currSlide + 1})
            } else {
                this.setState({currSlide: 0})
            }
        }
        this.slideShow = setInterval(()=>change(), 2000);
    }

    changeSlide = (newSlideNo) => {
        let newSlide = newSlideNo;
        if(newSlideNo > this.props.slidesCount -1) {
            newSlide = 0
        } else if (newSlideNo < 0) {
            newSlide = this.props.slidesCount -1
        }
        this.setState({currSlide: newSlide})
        clearInterval(this.slideShow);
        this.autoPlay();
    }

    componentDidMount() {
        this.autoPlay();
        document.addEventListener("keydown", (e)=> {
            if(e.keyCode === 39) {
                this.changeSlide(this.state.currSlide + 1)
            }
            if(e.keyCode === 37) {
                this.changeSlide(this.state.currSlide - 1)
            }
        })
    }
    render() {
        const logos = this.props.companiesList.map((companyName, index) => {
            return (
                <Logo
                    name={companyName}
                    key={index}
                />
            )
        })

        const sliderWidth = Math.ceil(this.props.compCount/this.props.logosPerSlide) * 100 + '%';
        console.log(sliderWidth);

        const sliderStyle = {
            width: sliderWidth,
            transform: `translateX(${-this.state.currSlide/this.props.slidesCount*100}%)`
            // transform: `translateX(${(34*this.state.currSlide) - this.state.currSlide*window.innerWidth}px)`
        }
        return (
            <div className={styles.container} style={sliderStyle}>
                {logos}
            </div>
        );
    }
}
export default Slider;
