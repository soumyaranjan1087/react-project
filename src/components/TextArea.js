import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextArea(prop) {
    let newText;
    const onChangeHandler = (event) => {
        // console.log("You have clicked on change");
        // console.log(event.target.value);
        newText = event.target.value;
        setText(newText);
    }

    const onClick = () => {
        newText = text.toUpperCase();
        setText(newText);
        prop.showAlert("Characters has been set to UpperCase!", "success");
    }

    const onLowClick = () => {
        newText = text.toLowerCase();
        setText(newText);
        prop.showAlert("Characters has been set to LowerCase!", "success");
    }

    const onClearClick = () => {
        newText = '';
        setText(newText);
        prop.showAlert("Characters has been Cleared!", "success");
    }

    const onInverseCaseClick = () => {
        // console.log(text);
        let str = text;
        // console.log(str);
        var CapitalizedWords = [];

        var words = str.split(' ');
        // console.log(words);
        words.forEach((element) => {
            // upDatedElement = element[0].toUpperCase() 
            // check = element.slice(1, element.length);
            // updatedStr = upDatedElement + check
            // a = CapitalizedWords.push(updatedStr);
            // console.log(a);
            CapitalizedWords.push(element[0].toLowerCase() + (element.slice(1, element.length)).toUpperCase());
        })

        newText = CapitalizedWords.join(' ');
        setText(newText);
        // console.log(newText);

        prop.showAlert("Characters has been Inversed Clicked!", "success");
    }

    const onCaptializedCaseClick = ()=> {
        // console.log(text);
        let str = text;
        // console.log(str);
        var CapitalizedWords = [];

        var words = str.split(' ');
        // console.log(words);
        words.forEach((element)=> {
            // upDatedElement = element[0].toUpperCase() 
            // check = element.slice(1, element.length);
            // updatedStr = upDatedElement + check
            // a = CapitalizedWords.push(updatedStr);
            // console.log(a);
            CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
        })

        newText = CapitalizedWords.join(' ');
        setText(newText);
        // console.log(newText);
        prop.showAlert("Characters has been Capitalized Case!", "success");
    }

    const onCopyClick = ()=>{
        let copyText = document.getElementById('textBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        setText(text);
        prop.showAlert("Text is copied in the CLipboard!", "success");
    }

    const onRemoveSpaceClick = ()=>{
        let spaceRegex = /(\s+)/g
        newText = text.replace(spaceRegex, " ");
        setText(newText);
        prop.showAlert("Extra Space is removed!", "success");
    }

    const [text, setText] = useState("Enter your Text");
    return (
        <>
            <h2 style={{color: prop.mode === 'light'?'#000000':'#ffffff'}}>{prop.heading}</h2>
            <div className="form-floating" style={{ "paddingBottom": "10px" }}>
                <textarea style={{ "height": "250px",color: prop.mode === 'light'?'#000000':'#ffffff',backgroundColor: prop.mode === 'light'?'#ffffff':'#343a40' }} className="form-control row-19" value={text} placeholder="Leave a comment here" id="textBox" onChange={onChangeHandler} />
            </div>
            <button type="button" className="btn btn-primary mx-1" onClick={onClick}>Conver to UpperCase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={onLowClick}>Conver to LowerCase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={onCaptializedCaseClick}>Capitalized Case</button>
            <button type="button" className="btn btn-primary mx-1" onClick={onInverseCaseClick}>iNVERSE cASE</button>
            <button type="button" className="btn btn-primary mx-1" onClick={onCopyClick}>Copy Text</button>
            <button type="button" className="btn btn-primary mx-1" onClick={onRemoveSpaceClick}>Remove Space</button>
            <button type="button" className="btn btn-primary mx-1" onClick={onClearClick}>Clear</button>
            <div className="container my-3" style={{color: prop.mode === 'light'?'#000000':'#ffffff'}}>
                <h2>You text Summary</h2>
                <p>{text === ""? 0: text.split(" ").length} words and {text.length} charecters</p>
                <p>{0.008 * text.length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0?text:'Enter your text to preview'}</p>
            </div>
        </>
    )
}

//Specify the types of prop
TextArea.propTypes = {
    heading: PropTypes.string.isRequired
}

// Specifies the default values for props:
TextArea.defaultProps = {
    heading: 'Enter your heading'
};