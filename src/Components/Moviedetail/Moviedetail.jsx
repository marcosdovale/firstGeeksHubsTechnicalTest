import './Moviedetail.css';

const Moviedetail = ({choosen}) => {
    return (
        <div className='movieDetailDesign'>
            <div className='titleDesign'>{choosen.title}</div>
            <div className='detailPic'><img src={'https://image.tmdb.org/t/p/original/' + choosen.poster_path} alt={choosen.original_title}/></div>
            <div className='sinopseDesign'>Sinopse</div>
            <div className='descriptionDesign'>{choosen.overview}</div>
        </div>
    )
}
export default Moviedetail;
