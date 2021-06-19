import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";

export default class VideoDisplay extends Component {
  state = { muted: true };

  componentDidMount = () => {
    // getStory(this.props.id).then((story) => {
    //   this.setState(story);
    // });
  };

  autoUnMute = (event) => {
    this.setState({ muted: false });
  };

  render() {
    return (
      <div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          controls
          muted={this.muted}
          playing
          onPlay={this.autoUnMute}
        />
      </div>
    );
  }
}

// import React, { useState } from 'react'
// import ReactPlayer from 'react-player/lazy'

// const MyPlayer = () => {

//     const [ playState, setPlayState ] = useState(false);

//     const yourFunction = (event) => {

//         console.log('Your event: ', event);

//     };

//     return (
//         <ReactPlayer
//             url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
//             playing={playState}
//             onPlay={yourFunction}/>
//     );

// }
// export default MyPlayer;
