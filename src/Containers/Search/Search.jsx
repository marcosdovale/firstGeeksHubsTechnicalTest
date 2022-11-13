import { useEffect, useState } from 'react';
import './Search.css';
import SearchBar from '../../Components/Searchbar/Searchbar';
import { searchFilms } from '../../Services/apicalls';
import Moviedetail from '../../Components/Moviedetail/Moviedetail';

const Search = () => {
    const [movies, setMovies] = useState([])
    const query = new URLSearchParams('./search').get('s')
    const [searchQuery, setSearchQuery] = useState(query || '')
    const [choosen, setChoosen] = useState("");

    useEffect(() => {
        searchFilms(searchQuery)
            .then(res => setMovies(res.data.results))
            .catch(error => console.log(error))

    }, [searchQuery])

    const selectFilm = (film) => {
        //I set the Hook with the choosen character....
        setChoosen(film)
    }

    if (movies.length === 0) {
        return (
            <div className='searchPage'>
                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </div>
        )
    } else {
        return (
            <div className='searchPage'>
                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                <div className='moviesShowcase'>
                    <div className='leftSide'>
                        {
                            movies.map(film => {
                                return <div className='filmDesign' key={film.id}>
                                    <div onClick={() => selectFilm(film)}><img className="filmPic" src={'https://www.themoviedb.org/t/p/w440_and_h660_face' + film.backdrop_path} alt={film.original_title} /></div>
                                    <div>{film.title}</div>
                                </div>
                            })
                        }
                    </div>
                    <div className='rightSide'>
                        {
                            choosen?.id !== undefined &&
                            //I am summoning the moviedetail component, passing the whole selected movie to it using props
                            <Moviedetail choosen={choosen} />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;
