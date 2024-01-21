// Global variable ReactDOM with method render (element to be placed, place where the element is rendered)
// ReactDOM.render(<h1>Now, I'm using React!</h1>, document.getElementById('root'));

// Good practice for React 
// Multiline 
/*
ReactDOM.render(
    <ul>
        <li>Fun fact no. 1</li>
        <li>Fun fact no. 2</li>
    </ul>,
    document.getElementById('root')
);
*/

// !------------------ WHY REACT? ----------------
// It's composible! 

// React projects are created from from small custome pieces/components
// Components are reusable

/*
function MyNavbar() {
    return (
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
    )
}
 
ReactDOM.render(
    <div>
        // React component
        <MyNavbar /> 
    </div>,
    document.getElementById('root')
)
*/

// It's easier to make changes and maintain the code

// React is declarative! (What should be done?)
// "Just tell me what to do, and I'll worry about how I do things."

// e.g. Javascript is imperetive (How should it be done?)
// "Describe to me every step on how to do something and I'll do it."

// !------------- EXAMPLE of how to create a h1 element -----------------!
// ?-------- React ---------?
/* 
ReactDOM.render(
    <h1 ClassName="header">Now, I'm using React!</h1>,
     document.getElementById('root')
);
*/

// ?-------- vanilla JS --------?
/*
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)
*/

// !------------- JSX --------------------!
// Syntax for React 
// React creates javascript objects with JSX!

// ?Javascript 
//console.log(h1) => <h1 class="header">

// ?React 
/*
console.log(<h1 className="header">This is JSX</h1>) => 
    {
        type: "h1", 
        key: null, 
        ref: null, 
        props: {
            className: "header", 
            children: "This is JSX"
        }, 
        _owner: null,
            _store: {}
    }

*/

// React can only return a single parent element!
// In case we need more elements to render, we have to wrap them into a one parent element

// For variable we need to wrap the element with parentheses
/* 
const wrapper = (
    <div>
        <h1>This is JSX</h1>
        <p>This is a paragraf</p>
    </div>
)
*/

// Console.log(wrapper);
/* {
    type: "div",
    key: null,
    ref: null,
    props: {
        children: [
            {
                type: "h1",
                key: null,
                ref: null,
                props: {
                    className: "header",
                    children: "This is JSX"
                }, 
                _owner: null, 
                _store: {}}, 
            {
                type: "p", 
                key: null, 
                ref: null, 
                props: {children: "This is a paragraph"}, 
                _owner: null, 
                _store: {}
            }
        ]
    }, 
    _owner: null, 
    _store: {}
} */

const navbar = (
    <nav>
        <h1>My awesome bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
    </nav>
)

// ?React 17
// ReactDOM.render(navbar, document.getElementById("root"));

// ?React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(navbar);

// !------------- COMPONENTS ----------------
// Funftions that return a React elements (UI)
// Components use PascalCase notation for names
// e.g. <MyComponent /> 

// ?------------- Parent/Child Components ----------------

/* e.g.
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
*/