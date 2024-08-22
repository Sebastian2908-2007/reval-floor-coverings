// Inside your component
export default function VideoComponent() {
    return (
      <div>
        <video controls width="600" height='600'>
          <source  src="/Jake-working-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  