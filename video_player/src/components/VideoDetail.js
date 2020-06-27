import React from 'react';

const VideoDetail = ({video})=>{
    if(!video){
        return <div>
            Loading...
        </div>
    }
    const videosrc = "https://www.youtube.com/embed/" + video.id.videoId;
    return( 
    <div className="ui segment">
        <div className="ui embed">
            <iframe src={videosrc} title = "video"></iframe>
        </div>
      <h4 className="ui header">{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
    );
}
export default VideoDetail;