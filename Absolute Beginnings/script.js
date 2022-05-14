function MainContent () {
    return (
        <h1>This is a custom component</h1>
    )
}

function Welcome () {
    return (
        <h1>Hello</h1>
    )
}


// Imperative code - How

const root = document.getElementById("root");
const h1 = document.createElement("H1");
h1.textContent = "I am a imperatively created H1";
h1.className = "header";
root.appendChild(h1);

// Declarative code - What

function Header1 () {
    return (
<h1>I am a declaratively created H1</h1>
    )
}

const navbar = (
    <nav>
        <h1>Harley's website</h1>
        <ul>
            <li>
                Pricing
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
        </ul>
    </nav>
)

ReactDOM.render(
    <div>
        <Welcome/>
        <MainContent/>
        <Header1/>
    </div>,
    document.getElementById("root"))

ReactDOM.render(
    navbar,
    document.getElementById("root2"))