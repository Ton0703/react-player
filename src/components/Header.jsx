import React from 'react'

function Header({set, setVisible}) {
    const urlJump = () => {
        set('')
        setVisible(false)
        
    }
    return (
        <div className='header'>
            <div className="home" onClick={urlJump}>Home</div>
            <div className="github">Github</div>
        </div>
    )
}

export default Header 
