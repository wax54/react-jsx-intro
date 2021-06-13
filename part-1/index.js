// FirstComponent
// renders an h1 with the text “My very first component”.

// NamedComponent
// renders a p that should accept a property of “name” and display text “My name is name”.

// App
// renders a div with instances of the other two components.

const App = () => (
    <div>
        <h1> "HELP!" </h1>
        <FirstComponent />
        <NamedComponent name="Number Two"/>
    </div>
);
ReactDOM.render(<App />, document.getElementById('root'));
