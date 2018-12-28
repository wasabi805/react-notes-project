import React from 'react';

export const CodeBreakDown = (props)=>{

    return(
        <div className='breakdown-main'>
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
                            add_sub_list.push(<li className='indent_list' key={z.key}>{z.letter} {z.sub_term.map((q)=>{

                                if(q.name){
                                    return [<span className={highlight+`${q.color} ` + 'breakdown-code-style-ide'}>{q.name}</span>, q.text]
                                }

                            })} </li>);
                            display.sublist = 'initial'
                        })
                    }
                    // console.log(`key: ${key}, value: ${props.section[key].color}`)

                    console.log(props.section[key].key, 'check for key');

                    let main_term_list_item =
                        <div id={props.section[key].key} className='breakdown-li'>
                            <p>
                                {Number(`${key}`)+1} .) <span className={props.text.highlight + `${props.section[key].color_01}` + ` breakdown-code-style-ide`}>
                                                            {/*Main Term*/}
                                {props.section[key].term.map((t)=>{
                                    return <span className={'text-' + `${t.color}` }>{t.name}</span>
                                })}
                                                        </span> :    {`${props.section[key].text_01}`}
                            </p>
                            <div >
                                <ul className='indent_list'>{add_sub_list}</ul>
                            </div>
                        </div>
                    return main_term_list_item
                }
            )}
        </div>
    )
};

export default CodeBreakDown