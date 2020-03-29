import React, { useState,useContext} from 'react';
import MonacoEditor from '@uiw/react-monacoeditor';
import CodechefContext from '../../Context/codechef/codechefContext';
import AlertContext from '../../Context/alert/alertContext';
import Alert from '../layout/alert';

const Ide = (props) => {
    const codechefContext = useContext(CodechefContext);
    const alertContext = useContext(AlertContext);
    const [code, setCode] = useState('// Type your code here');
    const [input,setInput]=useState({
        SelLanguage:'Select any language',
        testInput:''
    })
    const onChangeEditor = (newValue, e) => {
        setCode(newValue)
    }
    const onChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value});

    }

    const onClick=async(e)=>{
        e.preventDefault();
        if(input.SelLanguage==='Select any language'){
            alertContext.setAlert('Please select language','danger');
        }
        else{
            alertContext.setAlert('Running your code','light');
        await codechefContext.runCode(input.SelLanguage,code,input.testInput);
        if(codechefContext.codeStatus===200){
            alertContext.setAlert('Code executed without any error','success');  
          }
          else{
            alertContext.setAlert('Check for error in your code','danger'); 
      } 
        }
        
    }
    const onSubmit=async(e)=>{
      e.preventDefault();
      if(input.SelLanguage==='Select any language'){
          alertContext.setAlert('Please select language','danger');
      }
      else{
        alertContext.setAlert('Running your code','light');
        await codechefContext.runCode(input.SelLanguage,code,input.testInput);
        if(codechefContext.codeStatus===200){
            alertContext.setAlert('Code executed without any error','success');  
          }
          else{
            alertContext.setAlert('Check for error in your code','danger'); 
      } 
        
      }
    }
    return (
        <div>
            <div>
                <select className="language" name="SelLanguage" onChange={onChange} value={input.SelLanguage}>
                    <option>Select any language</option>
                    {
                        props.language.map(lang => <option key={lang} value={lang}>{lang}</option>)
                    }
                </select>
            </div>
            <div style={{ overflowX: "auto" }}>
                <MonacoEditor
                    width="100%"
                    height="800px"
                    language={input.SelLanguage.toLowerCase()}
                    value={code}
                    options={{
                        theme: 'vs-dark',
                        fontSize: '20px'
                    }}
                    onChange={onChangeEditor}
                />
            </div>
            <div>
                <Alert/>
                <form className="ide" onSubmit={onSubmit}>
                    <h3 style={{marginTop:"2%"}}>Type your input below </h3>
                <textarea name="testInput" onChange={onChange} style={{overflowX:"auto",width:"100%",height:"200px"}} rows="1000" cols="50"/>
                 <button type='submit' className="btn btn-sm btn-dark">Run</button>
                
                 <button className="btn btn-sm btn-dark" onClick={onClick}>Submit</button>
                </form>
            </div>
           
        </div>
    )

}
export default Ide;