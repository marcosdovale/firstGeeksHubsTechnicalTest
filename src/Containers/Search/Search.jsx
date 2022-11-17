import { useEffect, useState } from 'react';
import './Search.css';
import { searchFilms } from '../../Services/apicalls';
import Moviedetail from '../../Components/Moviedetail/Moviedetail';

const Search = () => {
    const [movies, setMovies] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [choosen, setChoosen] = useState("");

    useEffect(() => {
        if (searchQuery !== "") {
            const bring = setTimeout(() => {
                searchFilms(searchQuery)
                    .then(res => setMovies(res.data.results))
                    .catch(error => console.log(error))
            }, 500);

            return () => clearTimeout(bring)
        }
    }, [searchQuery])

    const selectFilm = (film) => {
        //I set the Hook with the choosen character....
        setChoosen(film)
    }

    return (
        <div className='searchPage'>
            <input name='search' placeholder='Search movie' className='' value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}/>
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

export default Search;
