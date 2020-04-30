import React from 'react'
import styled from 'styled-components'
import {Link, BrowserRouter as Router} from 'react-router-dom'

import TicketImage from '../images/ticket.png'

const Header = () => {
    return (
        <TicketMaster>
            <div className="ticket-wrapper">
                <Router>
                    <Link to="/">
                        <TicketLogo src={TicketImage} alt="ticket logo"/>
                    </Link>
                </Router>
            </div>
        </TicketMaster>
    )
}

export default Header

const TicketMaster = styled.div `
    background: lightblue;
    box-sizing: border-box;

    .ticket-wrapper {
        max-width: 1280px;
        margin: 0 auto;
        padding: 15px 0px;
    }
`

const TicketLogo = styled.img `
    width: 150px;

    @media screen and (max-width: 600px){
        width: 100px;
        padding-left: 20px;
    }
`