// Define a Tweet component which takes as props the
// username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.

const Tweet = ({username, name, date, message}) => (
    <div> 
        <h1>Attention Everybody! {name} Would Like To Say Something</h1>
        <p>{message}</p>
        <span><small>This Happend At {date} and was written by @{username}</small></span>
    </div>
);