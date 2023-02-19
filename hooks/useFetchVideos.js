import { useState, useEffect } from "react"

const useFecthVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

     const getMoviesFromApiAsync = async (url='https://reactnative.dev/movies.json') => {
      setLoading(true)
      try {
        const response = await fetch(url);
        const json = await response.json();
        return setVideos(json.movies);
      } catch (error) {
        console.error(error);
        setError({message: 'erreur lors du chargement des vidéos'});
        setVideos([]);
      }finally{
        setLoading(false);
      }
  };

  const refetch = () => getMoviesFromApiAsync();

  useEffect(()=>{
    setError();
    getMoviesFromApiAsync()
    return (()=> {
      setVideos([])
      setError()
      setLoading(false)
    })
  },[])

  return {videos, loading, error, refetch}
}

export default useFecthVideos;