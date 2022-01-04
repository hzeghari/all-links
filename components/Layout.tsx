import React, { useState, useRef } from 'react'
import Header from './Header'



const links = [
    {
        label: 'Home',
    },
    {
        label: 'Gallery',
        isSelected: true,
    },
    {
        label: 'Content',
    },
    {
        label: 'Contact',
    },
];
const ddmItems = [
    {
        label: 'Login',
    },
    {
        label: 'Register',
    },
    {
        label: 'Logout',
    },
];

const Layout: React.FC = () => {
    
    

    return (
        <div>
            <Header 
            links={links}
            forceMenuOpenInMobile={true}
            forceDDMOpenInMobile={false}
            hideGitHubLink={false}
            withShadow={false}
            hideHelp={false}
            ddmItems={ddmItems}
            alignRight={false}
            isFat={false}
            showSwitchMode={true}/>
        </div>
    )
}

export default Layout
