
function Navbar() {
  return(
      <div>
          {/*NAVBAR*/}
          {/*===================================================*/}
          <header id="navbar">
              <div id="navbar-container" className="boxed">
                  {/*Brand logo & name*/}
                  {/*================================*/}
                  <div className="navbar-header">
                      <a href="#" className="navbar-brand" >
                   
                          <span className="brand-text" style={{color:"red"}}>SOS 管理者</span>
                      </a>
                  </div>
                  {/*================================*/}
                  {/*End brand logo & name*/}
                  {/*Navbar Dropdown*/}
                  {/*================================*/}
                 
                  {/*================================*/}
                  {/*End Navbar Dropdown*/}
              </div>
              
          </header>

           

      </div>
  )
}

export default Navbar;