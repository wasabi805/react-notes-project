import React from 'react';

import {InlineTextBoxContainerStyled, InlineTextBoxItemStyled, InlineImageContainerStyled } from '../styled-components/common/Sections';

const Inline_Image_Textbox_Container = (props)=>{
    console.log(props.image, 'Is the image in here?');
   return(
       <InlineTextBoxContainerStyled>
           <InlineTextBoxItemStyled>
               <ul>
                   <h2>CHANGING THE HEIGHT OF THIS nested div changes the entire height of the container</h2>
                   <li>first create your actions dir and a file for auth actions</li>
                   <li>then make your types</li>
                   <li>FIRST we'll create a test dispatch type:</li>
               </ul>
           </InlineTextBoxItemStyled>

           {/*Theme Provider will go here*/}
           <InlineImageContainerStyled>
             <img src={props.image.img_properties.src} alt=''/>
           </InlineImageContainerStyled>

       </InlineTextBoxContainerStyled>
   )
};

export default Inline_Image_Textbox_Container