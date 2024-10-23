// app/components/ui/VideoComponent.tsx
import React from 'react';

type Props = {
  videoSrc: string;
};

const VideoComponent = ({ videoSrc }: Props) => {
  return (
    <div className="flex justify-start items-center ml-28 mb-20 font-montserrat">
      {/* Video Section */}
      <video 
        src={videoSrc} 
        autoPlay 
        loop 
        muted 
        className="w-[50%] h-[50%] object-cover rounded-lg shadow-lg"
      />
      
      {/* Text Section */}
      <div className="ml-20 w-[40%]">
        <h2 className="text-2xl font-bold mb-4">Transform Your Content</h2>
        <p className="text-gray-700 leading-relaxed">
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
