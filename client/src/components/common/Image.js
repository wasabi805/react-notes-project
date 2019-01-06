import React from 'react';
import {ThemeProvider} from 'styled-components'
import {ImageStyled, ImageLayer01Styled, StepLayer01Styled, ImageWrapperStyled} from '../styled-components/common/ImageContainers'


const Image = (props)=>{


    // console.log(props.img.container_properties, 'whats in here???');
    // console.log(props.img.img_layers);

    return(
        <ThemeProvider theme={props.img.container_properties}>
            <ImageWrapperStyled>
                {/*MAIN IMG*/}
                <ThemeProvider theme={props.img.img_properties}>
                    <ImageStyled>
                        <img src={props.img.img_properties.src} alt='' />

                        <ThemeProvider theme={props.img.img_layers.step_layer_01 || {display:'none'}}>
                            <StepLayer01Styled>
                                <i className="em em-one"/>
                            </StepLayer01Styled>
                        </ThemeProvider>

                    </ImageStyled>
                </ThemeProvider>

                {/* Step Icon for Layer 0ne*/}
                {/*{console.log(props.img.img_layers.step_layer_01,'step_layer_01' )}*/}


                {/*<ThemeProvider theme={props.img.img_layers.step_layer_01 || {display:'none'}}>*/}
                    {/*<StepLayer01Styled>*/}
                        {/*<i className="em em-one"/>*/}
                    {/*</StepLayer01Styled>*/}
                {/*</ThemeProvider>*/}
                {/* Img for Layer 0ne*/}
                <ThemeProvider theme={props.img.img_layers.layer_01 || {display:'none'}}>
                    <ImageLayer01Styled >
                        <img src={"" || props.img.img_layers.layer_01.src} alt='' />
                    </ImageLayer01Styled>
                </ThemeProvider>

                {/* Step Icon for Layer Two*/}
                <ThemeProvider theme={props.img.img_layers.step_layer_02 || {display:'none'}}>
                    <StepLayer01Styled>
                        <i className="em em-two"/>
                    </StepLayer01Styled>
                </ThemeProvider>

                {/* Img for Layer Two*/}
                <ThemeProvider theme={props.img.img_layers.layer_02 || {display:'none'}}>
                    <ImageLayer01Styled>
                        <img src={props.img.img_layers.layer_01.src} alt='' />
                    </ImageLayer01Styled>
                </ThemeProvider>

                {/* Step Icon for Layer Three*/}
                <ThemeProvider theme={props.img.img_layers.step_layer_03 || {display:'none'}}>
                    <StepLayer01Styled>
                        <i className="em em-three"/>
                    </StepLayer01Styled>
                </ThemeProvider>

                {/* Step Icon for Layer Four*/}
                <ThemeProvider theme={props.img.img_layers.step_layer_04 || {display:'none'}}>
                    <StepLayer01Styled>
                        <i className="em em-four"/>
                    </StepLayer01Styled>
                </ThemeProvider>

                {/* Step Icon for Layer Five*/}
                <ThemeProvider theme={props.img.img_layers.step_layer_05 || {display:'none'}}>
                    <StepLayer01Styled>
                        <i className="em em-five"/>
                    </StepLayer01Styled>
                </ThemeProvider>

                {/* Step Icon for Layer Six*/}
                <ThemeProvider theme={props.img.img_layers.step_layer_06 || {display:'none'}}>
                    <StepLayer01Styled>
                        <i className="em em-six"/>
                    </StepLayer01Styled>
                </ThemeProvider>

            </ImageWrapperStyled>
        </ThemeProvider>
    )
};
export default Image