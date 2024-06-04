export default function MainScene() {
  return (
    <div className="absolute w-full h-full z-[-10]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        src="/assets/videos/mainscene.mp4"
        autoPlay
        loop
        muted
      />

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-1]"></div>

      {/* Content above the background */}
      <nav className="relative z-0">
        {/* Your other content here */}
      </nav>
    </div>
  );
}
