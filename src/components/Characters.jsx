import React,{useEffect,useState, useReducer, useMemo, useRef, useCallback} from 'react';
import '../styles/characters.css'
import Search from './Search';
import useCharacters from '../hooks/useCharacters';

const initialState={
    favorites:[]
}
const API = 'https://rickandmortyapi.com/api/character/'


const favoritesReducer=(state,action) => {
    switch(action.type){
        case 'ADD_TO_FAVORITE':
            return{
                ...state,
                favorites:[...state.favorites, action.payload]
            };
            default:
                return state;
    }
}
const Characters = () => {
    const [favorites, dispatch]= useReducer(favoritesReducer,initialState);
    const [search, setSearch ]= useState('');
    const searchInput= useRef(null);
    const characters= useCharacters(API);
    
    const handleClick= favorite =>{
        dispatch({  type:'ADD_TO_FAVORITE', payload: favorite})
    }
    // const handleSearch=()=>{
    //     setSearch(searchInput.current.value);
    // }
    const handleSearch= useCallback(()=> {
        setSearch(searchInput.current.value);
    },[])
    // const filteredUser=characters.filter((user)=>{
    //     return user.name.toLowerCase().includes(search.toLowerCase());
    // })
    const filteredUser= useMemo(()=>
    characters.filter((user)=>{
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        [characters, search]
    )

    return (
        <div className="Characters">
             <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
            <div className='container' > 
            <h1 className='title_fv' >My Favorites</h1>
            {favorites.favorites.map(favorite=>(
                <li key={favorite.id} >
                    <div className='contenedor_imagen2' >
                     <img className="imagen2" src={favorite.image} alt="" />
                     <h1 className='nombre2' >{favorite.name}</h1>
                     <div className='especie' >Specie : {favorite.species} </div>
                   
           
                    
                 </div>
                </li>
            ) )}
            
            </div>
           


            {filteredUser.map(character=>(
             <section className="card" key={character.id} >
                 <div className='contenedor_imagen' >
                     <img className="imagen" src={character.image} alt="" />
                 </div>
              <h1 className='nombre' >{character.name}</h1>
             <div className='item item1' >Specie : {character.species} </div>
            <div className='item item2' >Gender : {character.gender} </div>
            <div  className='item item3'>Status : <br /> {character.status}</div>
            <div  className=' item4'>
                <button className='boton_add' type='button' onClick={()=> handleClick(character)} > Add to favorites   </button>
            </div>
             </section>
            ))}
            
           
            
        </div>
    );
}

export default Characters;