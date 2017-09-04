import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

console.log("list is:");

if(props.videos.length > 0){
console.log("size more than 0");
var videoItems = props.videos.map( (video) => {
              return (<VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />);
});
}
else{
  console.log('size zero');
}
console.log(props.videos);
  return (
    <ul className='col-md-4 list-group'>
    {videoItems}
    </ul>
  );
};

export default VideoList;
