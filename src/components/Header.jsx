import React from 'react'

function Header({set, setVisible}) {
    const urlJump = () => {
        set('')
        setVisible(false)
        
    }
    return (
        <div className='header'>
            <div className="home" onClick={urlJump}>Home</div>
            <div className="github">
                <a href='https://github.com/Ton0703/react-player'>
                  Github
                </a>
            </div>
        </div>
    )
}

export default Header 
