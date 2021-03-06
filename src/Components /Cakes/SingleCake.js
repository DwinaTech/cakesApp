import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class SingleCake extends Component {

    state = {
        open: false
    }

    handleOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }


    render() {
        if (this.state.open) {
            return (
                <div className="single-cake">
                    <div className="content">
                        <h1>{this.props.cake.name}</h1>
                        {
                            this.props.favoriteCakes ? <label>
                                Cake number {this.props.cake.yumFactor} cakes
                             </label> :
                            null
                        }
                        <br/>
                        <img src={`${this.props.cake.imageUrl}`} alt='img' /><br/>
                        <p>{this.props.cake.comment}</p>
                        <button onClick={this.handleClose} className="select-cake" type="submit" >Close</button>
                    </div>
                </div>
            );
        }
        return (
            <button className="read-more" onClick={this.handleOpen} type="text" >Read More</button>
        )
    }
}

SingleCake.propTypes = {
    cake: PropTypes.object.isRequired
} 

export default SingleCake;
