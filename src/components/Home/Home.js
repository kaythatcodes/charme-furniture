import React from 'react'
import '../Home/home.css'
import image from '../Image/image.jpeg'
import image2 from '../Image/image2.jpeg'
import image3 from '../Image/image3.jpeg'
import Banner1 from '../Image/image4.jpeg'
import Banner2 from '../Image/image5.jpeg'
const Home = () => {
  return (
    <div className='container'>
        {/* Shopping list starts here */}
        <div className='shoppingList'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='card text-bg-dark'>
                        <img src={image} className='card-img' alt={image} />
                        <div className='card-img-overlay'>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className='card-text'><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card text-bg-dark'>
                        <img src={image} className='card-img' alt={image} />
                        <div className='card-img-overlay'>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className='card-text'><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card text-bg-dark'>
                        <img src={image} className='card-img' alt={image} />
                        <div className='card-img-overlay'>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className='card-text'><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card text-bg-dark'>
                        <img src={image} className='card-img' alt={image} />
                        <div className='card-img-overlay'>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className='card-text'><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        {/* banner starts here */}
        
        <div className='banner row'>
            <div className='col-md-6 banner-layout'>
                <img src={Banner1} alt={Banner1} className='banner-img' />
                <h4 className='banner-text'>Sale Furniture <br/> For Summer</h4>
                <p className='banner-text-2'>Great Discount Here</p>
            </div>
            <div className='col-md-6 banner-layout'>
                <img src={Banner2} alt={Banner2} className='banner-img' />
                <h4 className='banner-text-3'>Sale Furniture <br/> For Summer</h4>
                <p className='banner-text-4'>Great Discount Here</p>
            </div>
        </div>

        {/* Blog starts here */}
        <div className='blog'>
            <h3 className='blog-text'>Latest News</h3>
            <p className='blog-text'>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='card'>
                        <img src={image} className="card-img-top" alt={image} />
                        <div className='card-body'>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="..." className='btn btn-primary'>Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <img src={image2} className='card-img-top' alt={image} />
                        <div className='card-body'>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="..." className='btn btn-primary'>Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <img src={image3} className='card-img-top' alt={image} />
                        <div className='card-body'>
                            <h5 className='card-title'>Card title</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="..." clasName='btn btn-primary'>Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home