import React from 'react';
import './App.css';


function App() {
    return (
        <div className="app-wrapper">

            //HEADER
            <header className="header">
                <img
                    src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg"
                    width="50" height="50"/>
            </header>

            //NAV
            <nav className="nav">
                <div>
                    <a>Profile</a></div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
            </nav>

            // Main content
            <div className="content">
                <div>
                    <img
                        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                        width="900" height="auto"/>
                </div>
                <div>
                    <p>Avatar + Description</p>
                    <img
                        src="https://www.journalduweb.org/wp-content/uploads/2023/02/intelligence-artificielle-midjourney-860x484.jpg"
                        width="300" height="200"/>
                </div>
                <div>
                    My posts
                </div>
                <div>
                    New post
                </div>
                <div>
                    <div> post 1</div>
                    <div> post 2</div>
                </div>

                Main content
            </div>
        </div>
    );
}


export default App;
