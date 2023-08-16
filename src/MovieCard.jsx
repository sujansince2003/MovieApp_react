import React from "react";

const MovieCard=({mdata})=>
{
    
    return (
        <div className="movie">
          <div>
            <p style={{ color: "white" }}>{mdata.Year}</p>
          </div>
          <div>
            <img src={mdata.Poster !== "N/A" ? mdata.Poster : "https://via.placeholder.com/400"} />
          </div>
          <div>
            <span>{mdata.Type}</span>
            <h3>{mdata.Title}</h3>
          </div>
         
        </div>
       
    )
}

export default MovieCard;