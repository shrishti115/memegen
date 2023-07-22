import "./style.css";
import memesData from "./memesData";
import {useState} from "react";

 const Meme=()=>{
    const [text,setText]=useState({
        topText:"",
        bottomText:""
    })


    function handleChange(event){
        setText((prevValue)=>{
            return{
                ...prevValue,
                [event.target.name]:event.target.value
            }


    })}
    const[memes,setMemes]=useState("");

    const getMemeImage=()=>{
    const memesArray=memesData.data.memes;

    const randomMeme=[Math.floor(Math.random()*memesArray.length)];
    const {url}=memesArray[randomMeme];

    setMemes(url);
    }

    return (
        <>

        <div className="form">
            <div className="input-row">
            <input  className="form-input"
             type="text" 
             placeholder="Top Text"
              onChange={handleChange} 
              name="topText" 
              value={text.topText}/>
            <input  className="form-input" 
            type="text" placeholder="Bottom Text" 
            onChange={handleChange}  name="bottomText"
            value={text.bottomText}/>
            </div>
            <button className="form-btn"  onClick={getMemeImage}>Get a new image
            </button>
           
           
        </div>
        <div className="meme">
        <img  className="img--meme" src={memes} alt="meme" />
                <h2 className="meme--text top">{text.topText}</h2>
                <h2 className="meme--text bottom">{text.bottomText}</h2>
            </div>
        </>
    )

}

export default Meme;