// import React, { useEffect, useState } from 'react'
// import "./Player.css"
// import back_arrow_icon from "..//../assets/back_arrow_icon.png"
// import { useNavigate, useParams } from 'react-router-dom'


// function Player() {

// const {id} = useParams();
// const navigate = useNavigate();

// const [apiData, setApiData] = useState({
//   name : "",
//   key: "",
//   published_at: "",
//   typeof: ""

// })

//   const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjI3MDRjNzg2MGZlZmI2NDBkYjk3OGU1ZTlkNTc0NCIsIm5iZiI6MTc1MjQ3ODc0OC4zNTIsInN1YiI6IjY4NzRiNDFjMjc1YmI0NmVlZTZlYTg5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q-S0x7CYe_FgZ8LNuBeyjACjt5zjqmEXevefQOmfmME'
//   }
// };

// useEffect(()=>{
//     fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
//   .then(res => res.json())
//   .then(res => setApiData(res.results[0]))
//   .catch(err => console.error(err));
// },[])


//   return (
//     <div className='player'>
//       <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
//       <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='Trailer' frameBorder="0" allowFullScreen></iframe>

//       <div className="player-info">
//         <p>{apiData.published_at.slice(0,10)}</p>
//         <p>{apiData.name}</p>
//         <p>{apiData.typeof}</p>
//       </div>

//     </div>
//   )
// }

// export default Player










// Player.jsx
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// import './Player.css';

// function Player() {
//   const { type, id } = useParams();
//   const [mediaData, setMediaData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMediaData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/${type}/${id}?api_key=662704c7860fefb640db978e5e9d5744&append_to_response=videos`
//         );
//         setMediaData(response.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMediaData();
//   }, [type, id]);

//   if (loading) return <div className="loading">Loading...</div>;
//   if (error) return <div className="error">Error: {error}</div>;
//   if (!mediaData) return <div>No data found</div>;

//   // Find the best trailer
//   const trailer = mediaData.videos?.results?.find(
//     video => video.type === 'Trailer' && video.site === 'YouTube'
//   ) || mediaData.videos?.results?.[0];

//   return (
//     <div className="player-container">
//       <div className="backdrop">
//         {mediaData.backdrop_path && (
//           <img
//             src={`https://image.tmdb.org/t/p/original${mediaData.backdrop_path}`}
//             alt={mediaData.title || mediaData.name}
//           />
//         )}
//       </div>
      
//       <div className="media-info">
//         <h1>{mediaData.title || mediaData.name}</h1>
//         <p>{mediaData.overview}</p>
//         <div className="details">
//           <span>Rating: {mediaData.vote_average}/10</span>
//           <span>Release: {mediaData.release_date || mediaData.first_air_date}</span>
//         </div>
//       </div>

//       <div className="video-container">
//         {trailer ? (
//           <div className="video-wrapper">
//             <iframe
//               width="100%"
//               height="500"
//               src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
//               title={`${mediaData.title || mediaData.name} Trailer`}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         ) : (
//           <div className="no-trailer">
//             <p>No trailer available</p>
//             {mediaData.homepage && (
//               <a href={mediaData.homepage} target="_blank" rel="noopener noreferrer">
//                 Visit official site
//               </a>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Player;

















// function Player() {
//   const { type, id } = useParams();
//   const navigate = useNavigate();
//   const [mediaData, setMediaData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isAnime, setIsAnime] = useState(false);

//   useEffect(() => {
//     const fetchMediaData = async () => {
//       try {
//         setLoading(true);
        
//         // First check if it's anime
//         const animeCheck = await axios.get(
//           `https://api.themoviedb.org/3/${type}/${id}?api_key=662704c7860fefb640db978e5e9d5744`
//         );

//         // Check if it's anime by genre or other indicators
//         const isAnimeMedia = animeCheck.data.genres?.some(
//           genre => genre.name.toLowerCase() === 'animation'
//         );

//         if (isAnimeMedia) {
//           setIsAnime(true);
//           // Redirect to anime site with the title
//           const animeTitle = encodeURIComponent(animeCheck.data.title || animeCheck.data.name);
//           window.location.href = `https://aniwatch.to/search?keyword=${animeTitle}`;
//           return;
//         }

//         // Not anime, fetch video data
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/${type}/${id}?api_key=662704c7860fefb640db978e5e9d5744&append_to_response=videos`
//         );
        
//         setMediaData(response.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMediaData();
//   }, [type, id]);

//   if (isAnime) {
//     return <div>Redirecting to anime site...</div>;
//   }

//   if (loading) return <div className="loading">Loading...</div>;
//   if (error) return <div className="error">Error: {error}</div>;
//   if (!mediaData) return <div>No data found</div>;

//   // Find the first trailer
//   const trailer = mediaData.videos?.results?.find(
//     video => video.type === 'Trailer' && video.site === 'YouTube'
//   );

//   return (
//     <div className="player-container">
//       <div className="backdrop">
//         {mediaData.backdrop_path && (
//           <img
//             src={`https://image.tmdb.org/t/p/original${mediaData.backdrop_path}`}
//             alt={mediaData.title || mediaData.name}
//           />
//         )}
//       </div>
      
//       <div className="media-info">
//         <h1>{mediaData.title || mediaData.name}</h1>
//         <p>{mediaData.overview}</p>
//         <div className="details">
//           <span>Rating: {mediaData.vote_average}/10</span>
//           <span>Release: {mediaData.release_date || mediaData.first_air_date}</span>
//         </div>
//       </div>

//       <div className="video-container">
//         {trailer ? (
//           <iframe
//             width="100%"
//             height="500"
//             src={`https://www.youtube.com/embed/${trailer.key}`}
//             title={`${mediaData.title || mediaData.name} Trailer`}
//             frameBorder="0"
//             allowFullScreen
//           ></iframe>
//         ) : (
//           <div className="no-trailer">
//             <p>No trailer available</p>
//             {mediaData.homepage && (
//               <a href={mediaData.homepage} target="_blank" rel="noopener noreferrer">
//                 Visit official site
//               </a>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Player;

















import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Player.css';


function Player() {
  const { type, id } = useParams();
  const [mediaData, setMediaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAnime, setIsAnime] = useState(false);

  useEffect(() => {
    const fetchMediaData = async () => {
      try {
        setLoading(true);
        
        // First check if it's anime
        const detailsResponse = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=662704c7860fefb640db978e5e9d5744`
        );
        
        const isAnime = detailsResponse.data.genres?.some(
          genre => genre.id === 16 // 16 is Animation genre ID
        );

        if (isAnime) {
          setIsAnime(true);
          const animeTitle = encodeURIComponent(detailsResponse.data.title || detailsResponse.data.name);
          window.open(`https://aniwatch.to/search?keyword=${animeTitle}`, '_blank');
          return;
        }

        // Not anime, fetch video data
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=662704c7860fefb640db978e5e9d5744&append_to_response=videos`
        );
        setMediaData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMediaData();
  }, [type, id]);

  if (isAnime) {
    return <div>Redirecting to anime site...</div>;
  }

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!mediaData) return <div>No data found</div>;

  // Find the best trailer
  const trailer = mediaData.videos?.results?.find(
    video => video.type === 'Trailer' && video.site === 'YouTube'
  ) || mediaData.videos?.results?.[0];

  return (
    <div className="player-container">
      <div className="backdrop">
        {mediaData.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/original${mediaData.backdrop_path}`}
            alt={mediaData.title || mediaData.name}
          />
        )}
      </div>
      
      <div className="media-info">
        <h1>{mediaData.title || mediaData.name}</h1>
        <p>{mediaData.overview}</p>
        <div className="details">
          <span>Rating: {mediaData.vote_average}/10</span>
          <span>Release: {mediaData.release_date || mediaData.first_air_date}</span>
        </div>
      </div>

      <div className="video-container">
        {trailer ? (
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
              title={`${mediaData.title || mediaData.name} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="no-trailer">
            <p>No trailer available</p>
            {mediaData.homepage && (
              <a href={mediaData.homepage} target="_blank" rel="noopener noreferrer">
                Visit official site
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Player;


