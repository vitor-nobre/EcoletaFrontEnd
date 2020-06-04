import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

const ButtomReturnToHome = () => {
    return(
        <div id="page-buttom">
            <Link to="/">
                <FiArrowLeft/>
                <p>Voltar para a home</p>
            </Link>
        </div>
    )
}

export default ButtomReturnToHome