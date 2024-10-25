import React from 'react';

type Props = {
  videoSrc: string;
};

const VideoComponent = ({ videoSrc }: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mx-4 md:ml-28 mb-10 md:mb-20 font-montserrat mt-6 md:mt-10">
      {/* Video Section */}
      <video 
        src={videoSrc} 
        autoPlay 
        loop 
        muted 
        className="w-full md:w-[50%] h-auto md:h-[50%] object-cover rounded-lg shadow-lg"
      />

      {/* Text Section */}
      <div className="mt-4 md:mt-0 md:ml-10 lg:ml-20 w-full md:w-[40%] text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Transform Your Content</h2>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
          bibendum arcu. Nullam nec dictum eros. Sed vehicula libero ut tellus
          fermentum, non fermentum elit tincidunt. Suspendisse in velit orci.
          Vivamus tincidunt nunc vel nulla cursus, et egestas mi tincidunt.
        </p>
      </div>
    </div>
  );
};

export default VideoComponent;
