import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const {store, actions} = useContext(Context)
  // console.log(store.favorite);
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/">
      <img className="logostarwars" src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png" alt=""/>
      </Link>
        {/* <div>
		<button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
          
        </button>
        
      </div> */}
      <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorite <span className="bg-secondary rounded-5">{store.favorite.length ===0 ? null : store.favorite.length}</span>
  </button>
  <ul className="dropdown-menu dropdown-menu-end">
  {store.favorite.map((item,index) => (
					<li key={index}>
						<i
						 className="fa fa-trash px-4"
            //  onClick={() => actions.addFavorite(name)}
						 onClick={() => 
							actions.deleteFavorite(item)}></i>
              {item}						
					</li>))}
  </ul>
</div>
    </nav>
  );
};
