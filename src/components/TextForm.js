import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase","success");
    }
    const handleLoClick= ()=>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted To Lowercase","success");
  }
  const handleClearClick= ()=>{
        let newText ='';
        setText(newText);
        props.showAlert("Text Area Cleared","success");
}

const handleRepeatClick = ()=> {
  let newText = text.repeat(2) + ' ';
  setText(newText);
}
    const handleOnChange= (event)=>{
        console.log("CLICKED")
        setText(event.target.value)
    }
    const handleReverseString = () => {
      // empty string
      let newString = "";
      for (let i = text.length - 1; i >= 0; i--) {
        newString += text[i];

      }
      setText(newString);
      props.showAlert("String Reversed","success");
    }
    const copyTxt=()=>{
      var text = document.getElementById("textbox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard","success");
  }
  const handleCapClick = ()=> {
    const arr = text.split(" ");
    for (var i = 0 ; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    setText(str2)
}
const handle_download_Txt_File = () => {
  setText("Downloadd!!!!!");
  const element = document.createElement("a");
  const file = new Blob([Text], {
      type: "text/plain"
  });
  element.href = URL.createObjectURL(file);
  element.download = "File.txt";
  document.body.appendChild(element);
  element.click();
}
    
    const [text, setText] = useState("Enter Text Please ! ! !");
  return (
    <div className="container mb-3 my-5 font-monospace" style ={{color:props.mode==='light'?'black':'white'}}>
     <label for="exampleFormControlTextarea1" className="form-label"><b>{props.titleoftext}</b></label>
     <textarea value={text} className="form-control" id="textbox" rows="8" onChange={handleOnChange}
      style ={{backgroundColor:props.mode==='dark'?'#647E68':'white' , color:props.mode==='dark'?'white':'black'}}></textarea>
     <button onClick={handleUpClick} className="btn btn-outline-warning my-3 mx-2">Convert 2 Uppercase</button>
     <button onClick={handleLoClick} className="btn btn-outline-info mx-2">Convert 2 Lowercase</button>
     <button onClick={handleClearClick} className="btn btn-outline-warning mx-2">Clear</button>
     <button onClick={handleReverseString} className="btn btn-outline-info mx-2">Reverse String</button>
     <button className="btn btn-outline-warning mx-2" onClick={handleRepeatClick}>Repeat Text</button>
     <button className="btn btn-outline-info mx-2" onClick={copyTxt}>COPY TEXT</button>
     <button className="btn btn-outline-warning mx-2" onClick={handleCapClick}>Camel Case</button>
     <button className="btn btn-outline-info fs-6 mx-2" onClick={handle_download_Txt_File}>Download Text File</button>
     <div className="alert alert-dark my-3" role="alert">
     <p>There are {(text.length)===0 ? 0 : text.trim().split(" ").length} words and {text.length} characters and {text.split(" ").length - 1} whitespaces.</p><hr></hr>
     <p>It will take <b><i>{0.008 * ((text.length)===0 ? 0 : text.trim().split(" ").length)}</i></b> minutes to read</p>
     {/* <p><b>{text.split(" ").length -1} Words and {text.length} characters</b></p><hr></hr>
     <p><b>{0.008*text.split(" ").length - 0.008} Minutes to Read</b></p> */}
     </div>
     <div className="alert alert-info" role="alert">
      <h2 >Preview</h2>
      <p >{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </div>

  )
}
