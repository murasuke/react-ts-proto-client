import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getSearchResults } from "../api";
import { SearchResultList } from "../component/SearchResultList"


export function TopMenu(){
    const [inputVal, setInputVal] = useState("");
    const [searchResult, setSearchResult] = useState<any[]>([]);
  
    const handleChange = (e: any) => {
      setInputVal( e.target.value);
    }
  
    const handleClick = async (e: any) => {
      const jsonResult = await getSearchResults({key: inputVal});
      setSearchResult(jsonResult);
    }
  
    return (
      <> 
        <div>TopMenu</div>

        <div style={ {margin:"1vw", padding:"1vw", backgroundColor:"#DDE"} }>
          <div>        
            <input value={inputVal} onChange={handleChange} onKeyPress={(e)=>{ if(e.key === "Enter") {e.preventDefault();handleClick(e);}}} />
            <button onClick={handleClick}>検索</button>
          </div>
          <div>
            <SearchResultList results={searchResult} />
          </div>
          <div>        
            <p><Link to="/Page1"><button>Page1</button></Link></p>
            <p><Link to="/Page2"><button>Page2</button></Link></p>
          </div>
        </div>  
      </>   
    )
  }
  
  