import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css"

import wheat from "../Images/wheat.jpg"
import rice from "../Images/rice.webp"
import jowar from "../Images/jowar.png"
import sugar from "../Images/sugar.jpeg"
import gdnut from "../Images/groundnut.jpg"
import Navigate from './Navigate';



export default class Accessary extends Component {
  render() {
    return (
      <>
            <Navigate />
        <div className="main-card-body">
            <h1 className='heading-1'>Essential </h1>
            <div className="card-wrapper">
                <div className="cards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {wheat} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Wheat</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {jowar} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Jowar</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {rice} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Basmati Rice</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {sugar} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Sugar</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {gdnut} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Groundnuts</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
          </div>
        <div className="main-card-body">
            <h1 className='heading-1'>Essential </h1>
            <div className="card-wrapper">
                <div className="cards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {wheat} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Wheat</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {jowar} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Jowar</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {rice} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Basmati Rice</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {sugar} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Sugar</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {gdnut} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Groundnuts</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
          </div>
      </>
    )
  }
}
