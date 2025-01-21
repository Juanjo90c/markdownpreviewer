import {React, useState} from "react";
import { marked } from "marked";
import markdownLogo from './assets/markdownlogo.svg'
import './style.css'

const MarkdownPreviewer = () =>{
    const defaultText = 
        `
            # Markdown Previewer
            ---
            This is a **Markdown Previewer**.                                                  
            You can edit this text on the Editor box to see the output on the Preview box.                                                                                        
            Feel free to check the next examples as a guide and modify the text according to your needs.                                                   
            Enjoy writing in Markdown!
                                                                                                                                                             
            ---
            ## Titling and headings
             
            - # This is a title
                    
            - ## This is a sub-heading 

            - ### Another sub-level

            - #### More sub-levels

            You can add a spread line using \`---\`

            ---
            ## Types of text
 

            **Bold Text.**                                  
            _Italic Text_.                                              
            [A link](https://example.com).    
            ~~Crossed~~.    
            Superscript: X<sub>2</sub>                                          
            Subscript: O<sup>2</sup>                                        
            > Block Quote.                 

                               

            ---
            ## Lists
            
            Use \`-\` or \`*\` for unordered lists.
            - Element 1
            - Element 2
                - Element 3 (sublevel by adding tabs).                                          
                    - Element 4                                                  

            Use numbers (\`1.\`, \`2.\`, \`3.\`, \`4.\`, ...) for ordered lists.
            1. Element 1
            2. Element 2
            

            ---
            ## Code Block Example:
            \`\`\`
            function example() {
                console.log("This is a code block!");
            }
            \`\`\`          
                                                                                     
            ---

            ## Tables                                         

            Header 1 | Header 2 | Header 3
            ------------ | ------------- | -------------
            cell 1_1 | cell 1_2 | cell 1_3
            cell 2_1 | cell 2_2 | cell 2_3
            cell 3_1 | cell 3_2 | cell 3_3
            ---
            ## Images
            You can also add images like in the next example.            
            ![Markdown Logo](https://www.svgrepo.com/show/306375/markdown.svg)   
        
        
        
        `
    const cleanText = defaultText.replace(/^ {12}/gm, ""); 
    const[plainText, setPlainText] = useState(cleanText)

    const handleInputChange = (e) => {
        setPlainText(e.target.value);
    };

    return(
        <div className="container">
            <div className="imagen">
                <img src={markdownLogo}></img>
            </div>
            <div className="editores">
                <div className="cuadro">
                    <div className="titulo">Editor</div>
                    <textarea className="inputtexto" rows="10" cols="50"
                            value={plainText}
                            onChange={handleInputChange}></textarea>            
                </div>
                <div className="cuadro">
                    <div className="titulo">Preview</div>
                    <div 
                        className="textopreview"
                        dangerouslySetInnerHTML={{ __html: marked(plainText) }}></div>
                </div>     
            </div>   
        </div>
    )
}

export default MarkdownPreviewer