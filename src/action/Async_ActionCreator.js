import axios from "axios"


// Thunk : For asynchronous operation.
export const getMovies = () => 
{

    return async (dispatch , getState) =>
    {

        dispatch({ type : "REQUEST" })

        try{

        
            const response = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=8e94b63eca076cd76f6a4bc17d9b4bc8')

            console.log(response.data.original_title);

            dispatch({ 
                type : "SUCCESS" , 
                data : response.data
            });


        }
        catch(e)
        {
            dispatch({ 
                type : "FAILURE" , 
                data : e
            });
        }


    }
    
}