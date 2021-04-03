import React from 'react'
import { discordIcon, discussionLogo, facebookIcon, instagramIcon, telegramIcon, twitterIcon } from '../../../assets'
import './footer.scss'

const Icon = ({img, alt}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt={alt}/>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={discussionLogo} />
                </div>
                <div className="social-wrapper">
                    <Icon img={facebookIcon} alt="facebook" />
                    <Icon img={instagramIcon} alt="instagram" />
                    <Icon img={discordIcon} alt="discord" />
                    <Icon img={telegramIcon} alt="telegram" />
                    <Icon img={twitterIcon} alt="twitter" />
                </div>
            </div>
            <div className="copyright">
                <p>Copyyright</p>
            </div>
        </div>
    )
}

export default Footer
