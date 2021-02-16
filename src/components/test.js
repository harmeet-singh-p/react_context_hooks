import React from 'react'

function test() {
    return (
        <   <div>
      
        <div className="TopRow" >
        <div style={{alignItems:"left",marginLeft:"30px"}}>+385 91 1234 567</div>
        
        <div style={{alignItems:"right"}}>
         <span style={{fontWeight:'bold',alignItems:"left"}}>COVID 19 Safety</span>             
         <a href="" style={{marginLeft:50}} >HR</a>
         <a href="" style={{marginLeft:10}}>EN</a>
        </div>
        </div>
        
        <div className="TopBanner">
        
        <div className="Logo">
         <img width="300" height="100"  src={logo} ></img>
        </div>
        <div className="Navigation">
         
         
        <div>
         <nav>
           <ul>
             <li>
             Home
               
             </li>
             <li>
               About
             </li>
             <li>
               Users
             </li>
           </ul>
         </nav>
        
         {/* A <Switch> looks through its children <Route>s and
             renders the first one that matches the current URL. */}
        
        </div>
        
         
        </div>
        
        <div className="Selection"></div>
        
        </div>
        
        
        <div className="Body">
        
        </div>
            </div>
    )
}

export default test
