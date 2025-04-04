import React from 'react'
import "./Card.css"

const Card = () => {
    return (
        <div className='card'>
            <div className="img-card">
                <img src="https://i.pinimg.com/736x/55/f8/bb/55f8bbbc1759ee029989740c0de562f7.jpg" alt="image" />
                <div className="name">
                    <h1>Alice</h1>
                </div>
                <div className="description">
                    <p>FullStack Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Card