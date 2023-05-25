const Person = props => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.occupation)
    ])
}
const App = () => {
    return (
        React.createElement("div", {}, [React.createElement("h1", {class: "title"}, "React is rendered"),
            React.createElement(Person, {
                name: "John",
                occupation: "developer"
            }, null),
            React.createElement(Person, {
                name: "Smith",
                occupation: "Teacher"
            }, null),
            React.createElement(Person, {
                name: "Teria",
                occupation: "driver"
            }, null),
        ])
    )
}
ReactDOM.render(React.createElement(App), document.getElementById("root"))