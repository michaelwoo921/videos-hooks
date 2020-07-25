import React, {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const KEY ='AIzaSyA5l_oFQeqhySIl-Sz5gfmtynJWVYFF55I';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(()=> {
        search(defaultSearchTerm);
    }, [defaultSearchTerm])

    const search =async (term)=>{
        const response =await youtube.get('/search', {
                             params : { 
                                 q: term,
                                 part: 'snippet',
                                 maxResults: 5,
                                 key: KEY
                             }
                         });
   
      setVideos(response.data.items);

     };

     return [videos, search];

    }

    export default useVideos;