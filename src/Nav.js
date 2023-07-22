
import "./style.css";
import logo from "./Troll Face (1).png";
 const Nav=()=>{
    return(
        <>
             <div className="title">
                <img src={logo} alt="meme-logo" />
                 <h1 className="main-title">Meme Generator</h1>

                <h4 className="sub--heading">
                    Generate Meme
                </h4>
             </div>

             

        </>
    )
}

export default Nav;