import { useState } from "react";
import MovieCard from "../Movie-card/Movie_card";
import httpsRequest from "../Utilities/httpsRequest";
import "./home.css";
const Home = () => {
    const [search, setSearch] = useState("");
    const [movieList, setMovieList] = useState<any>([]);
    const [totalPage, setTotalPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    let repoList: any = "";

    const _getMovieDetails = async () => {
        if (search) {
            const result = await httpsRequest(search, currentPage);
            if (Object.keys(result["Search"]).length === 0)
                return "No user found";
            setMovieList(result["Search"]);
            setCurrentPage(1);
            let totalRecord = result["totalResults"];
            let total_page = Math.floor(totalRecord / 10);
            if (totalRecord % 10 > 0) total_page++;
            setTotalPage(total_page);
        }
    };
    const _renderMovieCard = () => {
        if (movieList.length === 0) return null;
        return (
            <>
                <div className="cardDetails">
                    {movieList.map((item: any, index: any) => {
                        return (
                            <MovieCard
                                key={index}
                                image={item["Poster"]}
                                name={item["Title"]}
                            />
                        );
                    })}
                </div>
                {_pagination()}
            </>
        );
    };
    const _getRecords = async () => {
        let result = await httpsRequest(search, currentPage);
        console.log(result);
        setMovieList(result["Search"]);
    };
    const _prevData = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            _getRecords();
        }
    };
    const _nextData = () => {
        if (totalPage > currentPage) {
            setCurrentPage(currentPage + 1);
            _getRecords();
        }
    };
    const _pagination = () => {
        return (
            <>
                <div className="flex-box btn-navigation">
                    <button className="btn" type="submit" onClick={_prevData}>
                        Previous
                    </button>
                    <button className="btn" type="submit" onClick={_nextData}>
                        Next
                    </button>
                </div>
            </>
        );
    };
    return (
        <>
            <div className="contact-form">
                <input
                    type="text"
                    name="search"
                    onChange={(e) => setSearch(e.target.value)}
                    className="from-control search-box"
                />
                <button
                    type="submit"
                    onClick={_getMovieDetails}
                    className="from-control"
                >
                    Search
                </button>
            </div>
            {_renderMovieCard()}
        </>
    );
};
export default Home;
