import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './cakesform.css'

export function CakesForm(props) {    
    return (
        <div className="content">
            <h1>{ props.edit ? 'Edit' : 'Add new'} cake</h1>
            <div className="form">
                <input value={ props.name } onChange={ props.handleCakeChange } type="text" placeholder="Cake name" name="name" />
                <input value={ props.imageUrl } onChange={ props.handleCakeChange } type="text" placeholder="Cake image url" name="imageUrl" />
                <textarea value={props.comment} onChange={ props.handleCakeChange } placeholder="image description"  rows="4" name="comment" />
                <Fragment>
                    <button onClick={ props.handleSubmitChange } type="submit">{props.buttonText}</button>
                    <Link to="/"><button className="cancel" type="submit">Cancel</button></Link>
                </Fragment>
            </div>
        </div>
    )
}

CakesForm.propTypes = {
    handleCakeChange: PropTypes.func,
    handleSubmitChange: PropTypes.func,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    comment: PropTypes.string,
}
