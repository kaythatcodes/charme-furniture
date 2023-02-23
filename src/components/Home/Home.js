import React from 'react'
import '../Home/home.css'
import image from '../Image/image.jpeg'
import image2 from '../Image/image2.jpeg'
import image3 from '../Image/image3.jpeg'
import Banner1 from '../Image/image4.jpeg'
import Banner2 from '../Image/image5.jpeg'
import item from '../Image/item.png'
import item2 from '../Image/item2.png'
import item3 from '../Image/item3.png'
import item4 from '../Image/item4.png'

const Home = () => {
  return (
    <div className='container'>
        {/* Shopping list starts here */}
        <div className='store-list'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='store-item' >
                        <img src={item}  className='item-img' alt={item} width={200} />                        
                    </div>
                    <div className='store-item-name'>
                        <h5>Round Dining Table</h5>
                        <h6>$201</h6>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='store-item' >
                        <img src={item2}  alt={item2} width={200} />                        
                    </div>
                    <div className='store-item-name'>
                        <h5>Hospital Reception Table</h5>
                        <h6>$349.0</h6>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div className='col-md-3'>
                     <div className='store-item' >
                        <img src={item3}  alt={item3} width={200} />                        
                    </div>
                    <div className='store-item-name'>
                        <h5>High back lounge office c...</h5>
                        <h6>$499.0</h6>
                        <button>Add to Cart</button>
                    </div>
                </div>
                 <div className='col-md-3'>
                    <div className='store-item' >             
                        <img src={item4}  alt={item4} width={200} />
                    </div>
                    <div className='store-item-name'>
                        <h5>Bedroom Exclusive Mattress</h5>
                        <h6>$199.0</h6>
                        <button>Add to Cart</button>
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
            <div className='blog-header'>
                <h3>Latest News</h3>
                <p>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do <br/> eiusmo tempor incididunt ut labore</p>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='card'>
                        <img src={image} className="card-img-top" alt={image} />
                        <div className='card-body'>
                            <h5 className='card-title'>Eiumod tempor incididunt l...</h5>
                            <h6 className='card-sub'>By Raju HT, <span className=' card-span'>14 September, 2021</span></h6>
                            <p className='card-text'>consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
                            <a href="..." className='btn btn-dark'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <img src={image2} className='card-img-top' alt={image} />
                        <div className='card-body'>
                            <h5 className='card-title'>Ut enim adminim veniam, q...</h5>
                            <h6 className='card-sub'>By Raju HT, <span className=' card-span'>14 September, 2021</span></h6>
                            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiumod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet</p>
                            <a href="..." className='btn btn-dark'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <img src={image3} className='card-img-top' alt={image} />
                        <div className='card-body'>
                            <h5 className='card-title'>Spatialize with that the furns</h5>
                            <h6 className='card-sub'>By Raju HT, <span className=' card-span'>14 September, 2021</span></h6>
                            <p className='card-text'> tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                            <a href="..." className='btn btn-dark'>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home