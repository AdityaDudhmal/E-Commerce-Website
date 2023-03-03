import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css"

import wheat from "../Images/wheat.jpg"
import rice from "../Images/rice.webp"
import jowar from "../Images/jowar.png"
import sugar from "../Images/sugar.jpeg"
import gdnut from "../Images/groundnut.jpg"

import mobile from "../Images/phone.jpeg"
import laptop from "../Images/laptop.jpeg"
import tv from "../Images/tv.jpeg"
import fridge from "../Images/fridge.jpeg"
import watch from "../Images/smartwatch.jpeg"
import Navigate from './Navigate';

import menwear from "../Images/menswear.jpeg"
import womenwear from "../Images/women.jpeg"
import winter from "../Images/winter.jpeg"
import foot from "../Images/footwear.jpeg"
import kids from "../Images/kids.jpeg"

import candle from "../Images/candle.jpeg"
import flower from "../Images/flower.jpeg"
import light from "../Images/light.jpeg"
import shelf from "../Images/shelf.jpeg"
import statue from "../Images/statue.jpeg"

import container from "../Images/container.webp"
import duster from "../Images/duster.webp"
import holder from "../Images/holder.webp"
import soap from "../Images/soap.jpg"
import storage from "../Images/storage.webp"



export default class Accessary extends Component {
  render() {
    return (
      <>
            <Navigate />
        <div className="main-card-body">
            <h1 className='heading-1'>Electronics </h1>
            <div className="card-wrapper">
                <div className="cards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {mobile} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Mobiles</Card.Title>
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
                        <Card.Img variant="top" src= {laptop} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Laptop</Card.Title>
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
                        <Card.Img variant="top" src= {tv} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Television</Card.Title>
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
                        <Card.Img variant="top" src= {fridge} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Refregerator</Card.Title>
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
                        <Card.Img variant="top" src= {watch} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Smart Watch</Card.Title>
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
            <h1 className='heading-1'>Clothing and Footwear</h1>
            <div className="card-wrapper">
                <div className="cards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {menwear} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Mens Wear</Card.Title>
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
                        <Card.Img variant="top" src= {womenwear} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Women's wear</Card.Title>
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
                        <Card.Img variant="top" src= {kids} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Kids' wear</Card.Title>
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
                        <Card.Img variant="top" src= {winter} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Winter Clothing</Card.Title>
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
                        <Card.Img variant="top" src= {foot} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Footwear</Card.Title>
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
            <h1 className='heading-1'>Kitchen-ware</h1>
            <div className="card-wrapper">
                <div className="cards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {holder} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Knife/spoon holder</Card.Title>
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
                        <Card.Img variant="top" src= {soap} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Soap dispenser</Card.Title>
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
                        <Card.Img variant="top" src= {storage} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Storage utensils</Card.Title>
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
                        <Card.Img variant="top" src= {container} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Containers</Card.Title>
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
                        <Card.Img variant="top" src= {duster} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Cleaning dusters</Card.Title>
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
            <h1 className='heading-1'>Home Decor</h1>
            <div className="card-wrapper">
                <div className="cards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= {shelf} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Shelf</Card.Title>
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
                        <Card.Img variant="top" src= {light} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Lighting</Card.Title>
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
                        <Card.Img variant="top" src= {statue} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Decorative statues</Card.Title>
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
                        <Card.Img variant="top" src= {flower} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Flowers decoration</Card.Title>
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
                        <Card.Img variant="top" src= {candle} className='card-img'/>
                        <Card.Body>
                            <Card.Title>Candles</Card.Title>
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
