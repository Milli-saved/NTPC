import React from 'react'
import { Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-body">
                
                <div className="right-panel">
                    Church Management System
                    ©<script>document.write(new Date().getFullYear())</script>  2023
                     
                </div>
            </div>
        </footer>
    )
}

export default Footer
