// imperative aproach vanilla js
const header = document.createElement("h1");
header.textContent("This is my new header");
header.classList('header');
document.getElementById("root").appendChild(header);


// declarative aproach React
function Header() {
    return (
        <h1 className="header">This is my new header</h1>
    )
}
export default Header;