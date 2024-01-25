import banner3 from '../../assets/banner/banner3.jpg'
import banner2 from '../../assets/banner/banner2.jpg'
import banner1 from '../../assets/banner/banner1.webp'

const Banner = () => {
 

 return (
  <div>
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-[600px]">
    <img src={banner3} className="w-full rounded-lg" />
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute rounded-lg flex items-center h-full justify-start   left-0 top-0 bottom-0 ">
      <div className='text-white space-y-7 w-1/2 pl-14'>
       <h2 className='text-6xl font-semibold '>
      Discover 
       </h2>
       <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
       <button className="btn btn-error mr-5">Discover New Product</button>
      </div>
    </div>
    
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-[600px]">
    <img src={banner2} className="w-full rounded-lg" />
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute rounded-lg flex items-center h-full justify-start   left-0 top-0 bottom-0 ">
      <div className='text-white space-y-7 w-1/2 pl-14'>
       <h2 className='text-6xl font-semibold '>
       Affordable Price For Car Servicing
       </h2>
       <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
       <button className="btn btn-error mr-5">Discover New Product</button>
      </div>
    </div>
    
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-[600px]">
    <img src={banner1} className="w-full rounded-lg" />
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute rounded-lg flex items-center h-full justify-start   left-0 top-0 bottom-0 ">
      <div className='text-white space-y-7 w-1/2 pl-14'>
       <h2 className='text-6xl font-semibold '>
       Affordable Price For Car Servicing
       </h2>
       <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
       <button className="btn btn-error mr-5">Discover New Product</button>
      </div>
    </div>
    
  </div> 

  
</div>
  </div>
 );
};

export default Banner;