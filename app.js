import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX - javascript syntax which makes it easier to create elements.

const Title = () => (
    <h1 className="head" tabIndex="5">Namaste from Title Component</h1>
);

const title = (
    <h1 className="head" tabIndex="5">Namaste from variable title
    </h1>   
);

// const Title2 = function (){
//     return (
//     <h1 className="head" tabIndex="5">Namaste from Title Component using Title2
//     </h1>
//     );
// };

const HeadingComponent = () => (
    <div id="container">
        {title}
        <Title />
        <h1>Namaste from Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxheading);

root.render(<HeadingComponent />)