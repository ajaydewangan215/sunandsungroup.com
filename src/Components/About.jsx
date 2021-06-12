import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section className="banner-section about">
           <div className="container text-center text-white">
                <h1 className="fw-bold">About</h1>
                <nav style={{'--bs-breadcrumb-divider': `'>'`}} aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item fw-bold"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active fw-bold text-white" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
        </section>
    )
}

export default About
