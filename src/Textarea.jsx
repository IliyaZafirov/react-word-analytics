import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
    const [text, setText] = useState('');
    const [warningText, setWarningText] = useState('');

    const handleChange = (e) => {
        let newText = e.target.value;

        if (newText.includes('<script>')) {
            setWarningText('No script tag allowed!')
            newText = newText.replace('<script>', '');
        } else if (newText.includes('<?php')) {
            setWarningText('No php tag allowed!')
            newText = newText.replace('<?php', '');
        } else if (newText.includes('<html>')) {
            setWarningText('No html tag allowed!')
            newText = newText.replace('<html>', '');
        } else {
            setWarningText('');
        }
        setText(newText);
    }
    return (
        <div className="textarea">
            <textarea value={text} onChange={handleChange} placeholder="Enter your text here..." spellCheck="false" />
            {
                warningText ? <Warning warningText={warningText} /> : null
            }
        </div>
    );
};
