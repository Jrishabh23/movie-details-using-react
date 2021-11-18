// Poster: ""
// Title: "Lilovyy shar"
// Type: "movie"
import './Movie_card.css'
const MovieCard = (data: any) => {
    const { image, title } = data

    return (
        <>
            <div className="movie-card">
                <div className="image-container">
                    <img src={image} alt="movie-image" />
                    <div className="add-cart-container">
                        <div className="add-cart-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--add ipc-icon--inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>
                        </div>
                    </div>                    
                </div>
                <div className="movie-details">
                    <div className="flex-box feedback">
                        <div className="rating">Rating</div>
                        <div className="fav">Fav</div>
                    </div>
                    <p className="movie-title">{title}</p>
                    <div className="watch-container">
                        <div className="watch-list">
                            WatchList
                        </div>
                        <div>Trailer</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MovieCard;