const baseUrl = "https://www.omdbapi.com/?apikey=fc8e885b&s";
const httpsRequest = async (movieName: any, pageNumber: number = 1) => {
    console.log("ff", movieName, pageNumber);
    const result = await fetch(`${baseUrl}=${movieName}&page=${pageNumber}`);
    return await result.json();
};
export default httpsRequest;
