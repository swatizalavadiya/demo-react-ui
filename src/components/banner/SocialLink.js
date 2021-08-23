import React from 'react';
import './SocialLink.css';

const SocialLink = () => {
    return (
        <div className="sociallink">
            <div className="link-group d-flex flex-sm-row flex-lg-column justify-content-between p-2">
                <div className="link">
                    <a href="#" className="text-decoration-none vertical">Facebook</a>
                </div>
                <div className="link">
                    <a href="#" className="text-decoration-none vertical">Twitter</a>
                </div>
                <div className="link">
                    <a href="#" className="text-decoration-none vertical">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default SocialLink;