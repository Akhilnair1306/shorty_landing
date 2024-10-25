import RetroGrid from '@/components/ui/retro-grid';
import React from 'react';
import SignupComponent from './SignupComponent';

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className=" z-10 whitespace-pre-wrap ">
        <SignupComponent />
      </div>
 
      <RetroGrid />
    </div>
  );
}

export default Page;
