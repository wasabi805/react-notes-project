import React from 'react';

export const CodeBreakDown = (props)=>{
    return(
        <React.Fragment>
            <div className='breakdown-main-bg'/>
            <div className='breakdown-main'>

                    <div className='breakdown-text-overlay'>
                        {Object.keys(props.section).map(
                            (key)=> {
                                let highlight = props.text.highlight;
                                let add_sub_list = []; let add_name_02=[];
                                let display={
                                    sublist : {display: 'none'}
                                };
                                //make sub_terms : if a sublist exists, map this array and create list items
                                if(props.section[key].sub_list.length>0){
                                    props.section[key].sub_list.map((z)=>{
                                        add_sub_list.push(<dd className='yo-mama indent_list' key={z.key}>{z.letter} {z.sub_term.map((q)=>{

                                            if(q.name){
                                                console.log('whats inside q?' , q);
                                                return [<span  className={highlight+`${q.color} ` + 'breakdown-code-style-ide'}>{q.name}</span>, q.text]
                                            }

                                        })} </dd>);
                                        display.sublist = 'initial'
                                    })
                                }

                                let main_term_list_item =
                                    <dl key={props.section[key].key} className='breakdown-li'>
                                        <dt>
                                            {Number(`${key}`)+1} .) <span className={props.text.highlight + `${props.section[key].color_01}` + ` breakdown-code-style-ide`}>
                                                                {/*Main Term*/}
                                            {props.section[key].term.map((t)=>{
                                                return <span className={'text-' + `${t.color}` }>{t.name}</span>
                                            })}
                                                            </span> :    {`${props.section[key].text_01}`}
                                        </dt>

                                        <dl className='sub-list'>
                                            <dd className=''>{add_sub_list}</dd>
                                        </dl>
                                    </dl>
                                return main_term_list_item
                            }
                        )}
                    </div>
            </div>

        </React.Fragment>
    )

};

export default CodeBreakDown