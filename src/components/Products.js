import React from 'react';
import { Card, CardDeck } from "react-bootstrap";
import "./Products.css";

function Products() {
    return (
        <div>
            <center>
                <h2>Our Products</h2>
                <hr/>
            </center>
            <div className="container">
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="/images/p1.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p2.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p3.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p4.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p5.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p6.jpg" />
                    </Card>
                </CardDeck>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="/images/p7.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p8.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p9.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p10.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p11.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p12.jpg" />
                    </Card>
                </CardDeck>
                <CardDeck> 
                    <Card>
                        <Card.Img variant="top" src="/images/p13.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p14.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p15.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p16.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p17.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p18.jpg" />
                    </Card>
                </CardDeck>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="/images/p19.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p20.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p21.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p22.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p23.jpg" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/p24.jpg" />
                    </Card>
                </CardDeck>
            </div> 
        </div>
    )
}

export default Products
