// Create an App component that renders at least three tweets.

const tweets = [{
    username:   "berney5", 
    name:       "Berney Scaldo", 
    message:    "Just Landed!", 
    date:       "2020-05-12"
},
    {
        username: "wax54",
        name: "Sam Crewe-Sullam",
        message: "Nearly Done with 39.2",
        date: "2021-06-13"
    },
    {
        username: "drans",
        name: "Cobolt Blue",
        message: "Chillin' in the Park",
        date: "2022-14-38"
    },
];

const App = () => (
    <div>
        {tweets.map(({username, name, message, date}) => 
            <Tweet username={username} name={name} message={message} date={date} />)}
    </div>
);
ReactDOM.render(<App />, document.getElementById('root'));
