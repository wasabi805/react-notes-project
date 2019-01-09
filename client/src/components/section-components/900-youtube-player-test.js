import React, {Component} from 'react';
import YouTube from 'react-youtube';

import {Section, Article, ArticleContainer, SectionHeaderTextBox,TextBoxPreface, TextBox} from '../styled-components/common/Sections';

class YoutubePlayer extends Component{
    constructor(props){
        super(props);
        this.state={
            test: {},

            myTracks:{
                africa: 'FTQbiNvZqaY',
                childishGambino: 'diLp6hUqvVk',
                runTheJewels: 'EBYsx1QWF9A',
                duckTales: 'YKSU82afy1w',
                kungFury: "nO_DIwuGBnA",
            },


            opts:{
                height: '660', //def is 360
                width: '640', //def is 640
                playerVars: { // https://developers.google.com/youtube/player_parameters
                    autoplay: 1,
                    // controls: 0,
                }
            }
        };

    }


    render(){
        let {opts, myTracks} = this.state;
        console.log(this.state.test, 'whats in test?');

        return(
            <React.Fragment>
                <Section>
                    <SectionHeaderTextBox>
                        <h2>Test YouTube Player</h2>
                    </SectionHeaderTextBox>
                    <Article>
                        <ArticleContainer>
                            <h2>Messing Around with YouTube Component</h2>
                        </ArticleContainer>
                        <TextBox>
                            <p>See : <a href='https://github.com/troybetz/react-youtube'><p><b>react-youtube</b></p></a></p>
                            <p>see Axios for API call  <a href='https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html#h.q507yorsxhq4'>Resizer</a></p>
                            <div className='video-container'>
                                <YouTube
                                    videoId={myTracks.duckTales
                                    }
                                    opts={opts}
                                    onReady={this._onReady}
                                />
                            </div>
                        </TextBox>
                    </Article>
                </Section>

            </React.Fragment>
        )
    }
};

export default YoutubePlayer