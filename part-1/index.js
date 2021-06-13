// App
// renders a div with instances of the other two components.

const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Number Two"/>
    </div>
);
ReactDOM.render(<App />, document.getElementById('root'));
