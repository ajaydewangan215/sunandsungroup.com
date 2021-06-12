import React from 'react'
import { Link } from 'react-router-dom'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'

const Topheader = () => {
    return (
        <>
            <div id="top-header" className="bg-dark">
                <div className="container d-flex justify-content-between">
                    <div className="top-left d-flex">
                        <Link to="tel:77140-44049" title="contact" className="p-2 text-white">
                            <PhoneIcon /> 77140-44049
                        </Link>
                        <Link to="mailto:info@sunandsungroup.com" title="gmail" className="p-2 text-white">
                            <EmailIcon /> info@sunandsungroup.com
                        </Link>
                    </div>
                    <div className="top-right d-flex">
                        <Link to="https://www.facebook.com/Sun-Sun-Group-175819216244922/" target="_blank" rel="noopener noreferrer" title="Facebook" className="p-2 text-white">
                            <FacebookIcon />
                        </Link>
                        <Link to="/#" onClick={(e) => e.preventDefault()} title="Instagram" className="p-2 text-white">
                            <InstagramIcon />
                        </Link>
                        <Link to="https://www.youtube.com/watch?v=KE7Dr6Czu08&list=PLeJMhziEcTJoXLjKuOJJPH9R59pEsn4D2&index=2&t=12s" target="_blank" rel="noopener noreferrer" title="Youtube" className="p-2 text-white">
                            <YouTubeIcon />
                        </Link>
                        <Link to="https://twitter.com/openeyeraipur" target="_blank" rel="noopener noreferrer" title="Twitter" className="p-2 text-white">
                            <TwitterIcon />
                        </Link>
                        <Link to="/#" onClick={(e) => e.preventDefault()} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="p-2 text-white">
                            <LinkedInIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topheader
