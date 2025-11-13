import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Watchlist = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const axiosSecure = useAxiosSecure();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchWatchlist = async () => {
      try {
   
        const watchlistResult = await axiosSecure.get("/watchlist");
        const watchlist = watchlistResult.data
        const movieIds = watchlist.map(item => item.movieId);


        const moviesData = [];
        for (const id of movieIds) {
          const result = await axios.get(`/movies/${id}`);
          moviesData.push(result.data);
        }

     
        setMovies(moviesData);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch your watchlist");
      }
    };

    fetchWatchlist();
  }, [axios,axiosSecure, user]);

//   can't complete 
  const handleDelete = (id)=>{
    axiosSecure.delete(`/watchlist/${id}`)
    .then(result => {
         Swal.fire({
     title: "Deleted!",
     text: "Your bid has been deleted.",
     icon: "success"
                            });
        console.log(result.data)
        if(result.data.deletedCount > 0){
            const remainingMovies =  movies.filter(movie => movie._id !== id);
            setMovies(remainingMovies)
            toast.success('Movie Deleted Successfully')
        }
    })
    .catch(error => {
        console.log(error)
    })
  }

  if (!user)
    return <p className="text-center mt-10">Please login to view your watchlist.</p>;

  return (
<div className="pt-24">
      <div className="pt-24 pb-20 bg-gray-900 min-h-screen">
      <h2 className="text-3xl text-center text-white font-bold mb-8">My Watchlist</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {movies.map(movie => (
          <div key={movie._id} className="bg-gray-800 p-4 rounded-lg text-white">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full h-60 object-cover rounded"
            />
            <h3 className="mt-2 font-bold">{movie.title}</h3>
            <Link to={`/movies/${movie._id}`}>
              <button className="mt-2 w-full py-1.5 bg-teal-600 rounded hover:bg-teal-700">
                View Details
              </button>
             
            </Link>
             <button disabled onClick={()=>handleDelete(movie._id)} className="mt-2 w-full py-1.5 btn-primary rounded hover:bg-teal-700">
                Delete From Watchlist
              </button>
          </div>
        ))}
      </div>
    </div>
</div>
  );
};

export default Watchlist;
