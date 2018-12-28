let junk ={
    term: {
        key: 'router-dot-post',

        main: [{name: 'router.post( )', color: 'white'}, {name: '', color: ''}, {text: 'recieves two arguments: a route handle & a callback '}],

        sub_list: [{
            letter: 'a.)',
            text_01: ' handle',
            term: " '/login' ",
            color: 'white',
            text_02: 'This is the url route to communicate with our server'
        },

            {
                letter: 'b.)',
                text_01: ' callback',
                term: '( req, res )=> { }',
                color: 'white',
                text_02: 'All our token verification logic resides inside this callback'
            }],

    }
};