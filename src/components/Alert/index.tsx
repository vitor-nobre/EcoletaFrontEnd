import React from 'react'
import './styles.css'
import { FiCheckCircle } from 'react-icons/fi'
import ButtomReturnToHome from '../ButtomReturnToHome'

const Alert = () => {


    return(
        <div id="page-alert">   
            <FiCheckCircle/>
            <h1>Cadastro Concluido!</h1>  
            <ButtomReturnToHome/>
        </div>
    )

}

export default Alert