class ListTweet extends React.Component {
    render() {

        return (
            <div className="container">

                <div className="row">
                    <div className="col css not today">
                      <h3>{this.props.name} @{this.props.screen_name}</h3>
                    </div>
                </div>

              <p>{this.props.text}</p>
              <p>Retweets: {this.props.retweet_count} Favorites: {this.props.favorite_count}</p>

            </div>
        );
    }
};

class Tweet extends React.Component {
    render() {
        let tweetsList = this.props.tweets.map(tweet => {
            return <ListTweet
            name={tweet.user.name}
            text={tweet.text}
            screen_name={tweet.user.screen_name}
            retweet_count={tweet.retweet_count}
            favorite_count={tweet.favorite_count}/>
        });

        return (
            <ul>
                {tweetsList}
            </ul>
        );

    }
};



ReactDOM.render(
    <div>
    <Tweet tweets={tweets} />
    </div>,
    document.getElementById('root')
);
