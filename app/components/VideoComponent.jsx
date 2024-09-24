'use client'
import ReactPlayer from 'react-player';
import video from '../../public/jake-working-vid.mp4';
export default function VideoComponent() {
    return (
      <div className="hero-vid-wrapper h-[100%] min-[2000px]:w-[100%]">
      <ReactPlayer
      className="reactPlayer"
      controls={true}
      url={video}
      playing={false}
      loop={false}
      volume={0}
      muted={true}
      playsinline={true}
      height='100%'
      width={'100%'}
      />
      </div>
    );
  }
  