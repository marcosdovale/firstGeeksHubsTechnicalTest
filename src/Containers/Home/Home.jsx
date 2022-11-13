import './Home.css';

const Home = () => {
    return (
        <div className='homeDesign'>
            <div>Welcome to the movie database website. Here you can find a lot of movies that can help you to decide what you will watch this afternoon.</div>
            <div>Please check <a href="/popular">popular movies</a> or use the <a href="/search">search</a> engine to find something you like</div>
        </div>
    )
}

export default Home;
