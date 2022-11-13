import { useEffect, useState } from 'react';
import './Popular.css';
import loader from '../../img/load.gif';
import { bringMovies } from '../../Services/apicalls';
import Moviedetail from '../../Components/Moviedetail/Moviedetail';


const Popular = () => {
    const [movies, setMovies] = useState([]);
    const [choosen, setChoosen] = useState("");

    useEffect(() => {
        if (movies.length === 0) {
            setTimeout(() => {
                bringMovies().then(
                    (res) => setMovies(res.data.results)
                )
            }, 2000)
        }
    }, [movies])

    const selectFilm = (film) => {
        //I set the Hook with the choosen character....
        setChoosen(film)
    }

    if (movies.length > 0) {
        return (
            <div className='moviesShowcase'>
                <div className='leftSide'>
                    {
                        movies.map(film => {
                            return <div className='filmDesign' key={film.id}>
                                <div onClick={() => selectFilm(film)}><img className="filmPic" src={'https://www.themoviedb.org/t/p/w440_and_h660_face' + film.backdrop_path} alt={film.original_title}/></div>
                                <div>{film.title}</div>
                            </div>
                        })
                    }
                </div>
                <div className='rightSide'>
                    {
                        choosen?.id !== undefined &&
                        //I am summoning the moviedetail component, passing the whole selected movie to it using props
                        <Moviedetail choosen={choosen}/>
                    }
                </div>
            </div>
        )
    } else {
        return (
            //loading screen
            <div className='loadingDesign'>
                <img className='spinner' src={loader} alt="loader" />
            </div>
        )
    }
}

export default Popular;
