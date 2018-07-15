import React, { Fragment } from 'react';
import './cakesform.css'

export function CakesForm(props) {    
    return (
        <div>
            <h1>{ props.edit ? 'Edit' : 'Add new'} cake</h1>
            <div className="form">
                <input value={ props.name } onChange={ props.handleCakeChange } type="text" placeholder="Cake name" name="name" />
                <input value={ props.imageUrl } onChange={ props.handleCakeChange } type="text" placeholder="Cake image url" name="imageUrl" />
                <textarea value={props.comment} onChange={ props.handleCakeChange } placeholder="image description"  rows="4" name="comment" />
                <Fragment>
                    <button onClick={ props.handleSubmitChange } type="submit">{props.buttonText}</button>
                    <button className="cancel" onClick={ props.handleCancel } type="submit">Cancel</button>
                </Fragment>
            </div>
        </div>
    )
}