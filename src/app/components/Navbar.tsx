
 "use client"
function Navbar() {
  return (
    <div>
      <div id="main">
        <nav className="nav1">
          <div className="logo">BrandName</div>

          <ul>
            <li>
              <a href="" className="hover:text-red-600">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:text-red-600">
                Product
              </a>
            </li>
            <li>
              <a href="" className="hover:text-red-600">
                Pricing
              </a>
            </li>
            <li>
              <a href="" className="hover:text-red-600">
                Contact
              </a>
            </li>
          </ul>

          <div id="button1">
            <button id="sign">Login</button>
            <button id="login">JOIN US</button>
          </div>
        </nav>

        <div id="mbox1">
          <div id="mbox2">
            <div className="h5">
              <h5>Welcome</h5>
            </div>
            <div className="h1">
              <h1> Selling on the internet like a pro </h1>
            </div>
            <div className="h4">
              <h4>
                We know how large object well act but things on a samal scale
                just do not act that way
              </h4>
            </div>
            <div className="button">
              <button className="but1">Get Quote Now</button>
              <button className="but2">Learn More</button>
            </div>
          </div>

           {/* #####    box    ######## */}  
             
           <div className="mainbo">
                <div className="boxm1">
               <div className="box1"></div>
               <h4>training Courses</h4>
               <div className="line1"></div>
               <p>The gradual accumulation of information about atomic and samall-scale behaviour....</p>
               </div>
            
                <div className="boxm2">
               <div className="box2"></div>
               <h4>2,769 online Courses</h4>
               <div className="line2"></div>
               <p>The gradual accumulation of information about atomic and samall-scale behaviour....</p>
               </div>
          
                <div className="boxm3">
               <div className="box3"></div>
                <h4>training Courses</h4>
                <div className="line3"></div>
               <p>The gradual accumulation of information about atomic and samall-scale behaviour....</p>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
