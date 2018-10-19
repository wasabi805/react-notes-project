import React from 'react';
import {GlobalInstallReactSnippet,CreateProjectSnippet, StartReactSnippet} from '../code-snipets/01-install-react-code-snippets'

const InstallReact = ()=>{

    return(
        <section className='col-md-8  section-main' >
            <div className='wrapper'>
                <article className='article'>
                    <h1>Install React</h1>
                    <h2>Starting Your Project </h2>
                    <img src='https://cdn-images-1.medium.com/max/800/1*6kK9j74vyOmXYm1gN6ARhQ.png'/>

                    <article className='bg-info mb-5 wrapper' >
                        <h2>Before We Start</h2>
                        <p>
                            The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

                            duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
                        </p>
                    </article>

                    <article className='wrapper wrapper-contentLight'>

                        <h2>Install React via npm install in terminal </h2>

                        <p>cd into the root directory of your project THEN, global install react-create-app by entering this command in your terminal: </p>
                        <GlobalInstallReactSnippet/>

                        <p>Now that React is globally installed, run the <i>react-create-app</i> command followed by a directory name. For this example,
                            I'm calling it <i>client</i> since I want to keep my front end files together and seperate from my server files which will get created later on.</p>
                        <CreateProjectSnippet/>

                        <p>The command will take a few minutes to install. After the install completes, cd into the client directory to start your app.
                            Once you are in the directory from within you terminal, to start your new app run: </p>
                        <StartReactSnippet/>
                    </article>
                </article>
            </div>
        </section>
    )
}
export  default InstallReact