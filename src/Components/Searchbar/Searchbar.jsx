import './Searchbar.css';

const SearchBar = ({searchQuery, setSearchQuery}) => {
    return (
        <div>
            <form action="/search" method='get'>
                {/* The label is for accessibility.By adding a label, we can tell screen reader users what the input field is for */}
                <label htmlFor="header-search">
                    <span className='visually-hidden'>Search movies</span>
                </label>
                <input
                    type="text"
                    id='header-search'
                    placeholder='Search movie'
                    name='s'
                    value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}
                />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;
