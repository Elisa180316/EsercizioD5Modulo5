import React from 'react'
import {Container, Row, Col} from 'react-bootstrap/';
import { colOne, colTwo, colThree } from '../data/footerLinks'
import '..//Styles/footer.css'
import { useSelector } from 'react-redux';
import { arrayOfComments } from '../states/commentState';


const Footer = () => {
    const comments = useSelector(arrayOfComments)
    //console.log("footer", comments)//
    return (
        <Container className='footer'>
            <Row>
                <Col>
                    <ul>
                        {
                            colOne.map((item) => {
                                return (
                                    <li key={item.title}><a href={item.href} > {item.title} </a></li>
                                )
                            })
                        }
                    </ul>
                </Col>
                <Col>
                    <ul>
                        {
                            colTwo.map((item) => {
                                return (
                                    <li key={item.title}><a href={item.href} > {item.title} </a></li>
                                )
                            })
                        }
                    </ul>
                </Col>
                <Col>
                    <ul>
                        {
                            colThree.map((item) => {
                                return (
                                    <li key={item.title} > {item.title} </li>
                                )
                            })
                        }
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;