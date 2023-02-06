import axios from "axios"

export const getMovies = () => 
{
    return async (dispatch , getState) =>
    {
        const response = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=8e94b63eca076cd76f6a4bc17d9b4bc8')

        console.log(response.data.original_title)

        dispatch({ 
            type : "Movie" , 
            data : response.data
        });
    }
}