import React from 'react'

const Home = () => {
    return (
        <section className="banner-section home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-5 col-sm-12 position-relative">
                        <div className="card rounded-0 border-0 p-4">
                            <h3 className="text-center fw-bold pb-3">Get In Touch</h3>
                            <div className="in-touch-form mt-3">
                                <form method="post" id="contact_form">
                                    <div className="mb-2">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="mb-2">
                                        <input type="email" className="form-control" id="email" placeholder="Email Address" />
                                    </div>
                                    <div className="mb-2">
                                        <input type="text" className="form-control" id="phone" placeholder="Phone Number" />
                                    </div>
                                    <div className="mb-2">
                                        <input type="hidden" className="form-control" id="subject" value="Get In Touch" />
                                        <textarea id="message" className="form-control" rows="5" placeholder="Message"></textarea>
                                    </div>
                                    <div className="mb-2 text-center">
                                        <input type="hidden" className="form-control" id="from_form" value="Home" />
                                        <button className="btn btn-warning mt-3 px-4 py-2 rounded-pill" type="submit" id="submit_contact">Submit Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7 col-sm-12 position-relative">
                        <div className="banner-caption text-white lh-1">
                            <h1>We are a <span className="border-bottom fst-italic">Group</span></h1>
                            <div className="checkout border-bottom fst-italic">checkout our group & our services</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
