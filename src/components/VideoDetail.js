import React from 'react';

const VideoDetail = ({video}) => {
   
    if(!video) return (<div>Loading ...</div>);


    const videoSrc =`https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <div className="ui segment">
            <div className="ui embed">
                <iframe title={video.snippet.title} src={videoSrc} />  
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p> {video.snippet.description}</p>
            </div>
       
        </div>
     
       
    );
    
   
}

// VideoDetail.defaultProps 

export default VideoDetail;

{/* <div>
<img src={video.snippet.thumbnails.medium.url} />
<h2> {video.snippet.title}</h2>
<p> {video.snippet.description}</p>
</div> */}