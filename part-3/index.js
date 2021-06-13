// Add an App component that renders at least three copies of the Person component on the page.


const App = () => ( 
    <div> 
        <Person name="jake" age={100}/> 
        <Person name="Penelope" age={16}  hobbies={['biking','swimming', 'running']}/>
        <Person name="Grasshopper" age={18} />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));