import './App.css';
import Editor from './containers/Editor';
import Form from './containers/Form';
import React,{useState, useEffect} from "react";

function App() {
  const [json,setJson] = useState([]);
  const [openSnack, setOpenSnack] = useState(false);
  const [parseSuccess, setParseSuccess] = useState(true);
  const [parsedJson, setParsedJson] = useState([]);

  console.log("parsedJson",parsedJson);
  const handleJsonChange = (event) => {
    setJson(event.target.value);
  }
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };
  const isJson = (str) => {
    try{
       JSON.parse(str);
    }catch (e){
       return false;
    }
   return true;
 }
  const handleJsonSubmit = () => {
    console.log("parsing JSON")
    if(isJson(json)){
      setParseSuccess(true)
      setOpenSnack(true);
      setParsedJson(JSON.parse(json));
      console.log("parsed successfully");
    }
    else{
      setParseSuccess(false);
      setOpenSnack(true);
      // console.log("parsing error")
    }
    
  }
  const handleJsonClear = () => {
    setJson([])
  }
  const editorProps = {
    json,
    handleJsonChange,
    handleJsonSubmit,
    handleJsonClear,
    openSnack,
    handleCloseSnack,
    parseSuccess
  }
  const formProps={
    parsedJson
  }
  return (
    <div className="App">
      <Editor {...editorProps}/>
      <Form {...formProps}/>
    </div>
  );
}

export default App;
