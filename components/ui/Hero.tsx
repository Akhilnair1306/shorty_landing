'use client'
import React from 'react';


type Props = {};

const Card = ({ image, title, date }: { image: string; title: string; date: string }) => (
  <div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
    <div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
      <div className="px-4 py-5 sm:p-5">
        <div className="flex items-start lg:items-center">
          <a href="#" className="shrink-0" aria-label="Card image link">
            <img
              className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cover"
              src={image}
              alt="Card thumbnail"
            />
          </a>
          <div className="flex-1 ml-4 lg:ml-6">
            <p className="text-xs font-medium text-gray-900 lg:text-sm">
              <a href="#" className="hover:underline">Growth</a>
            </p>
            <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg hover:text-gray-600">
              <a href="#" className="hover:underline">{title}</a>
            </p>
            <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">{date}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Hero: React.FC<Props> = () => {
  const cardsData = [
    {
      image: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-1.png',
      title: 'How a visual artist redefines success in graphic design',
      date: 'April 09, 2022',
    },
    {
      image: 'https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-2.png',
      title: 'How a visual artist redefines success in graphic design',
      date: 'April 09, 2022',
    },
  ];

  return (
    <div className='font-montserrat'>
            <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease-in-out infinite;
        }
      `}</style>
      <section className="relative py-12 bg-white sm:py-16 lg:py-20 mt-20">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/grid-pattern.png"
            alt="Background pattern"
          />
        </div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Helping developers to get their dream job
            </h1>
            <p className="max-w-md mx-auto mt-6 text-base font-normal leading-7 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus.
            </p>

            <form
              action="#"
              method="POST"
              className="max-w-md mx-auto mt-8 space-y-4 sm:space-x-4 sm:flex sm:space-y-0 sm:items-end"
            >
              <div className="flex-1 relative group ">
                <div className="absolute inset-0 transition-all duration-1000 opacity-70 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-lg blur-lg filter animate-gradient group-hover:opacity-100"></div>
                <div className="relative">
                  <label htmlFor="ytlink" className="sr-only">
                    YouTube Video Link
                  </label>
                  <input
                    type="text"
                    id="ytlink"
                    className="block w-full px-4 py-3 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:text-sm focus:ring-gray-900 focus:border-gray-900"
                    placeholder="YouTube Video Link"
                    required
                  />
                </div>
              </div>

              <div className="relative group">
                <div
                  className="absolute inset-0 rounded-xl blur-lg filter opacity-70 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] 
    animate-gradient group-hover:opacity-100 transition-opacity duration-200"
                ></div>
                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-semibold text-white transition-all duration-200 
    bg-indigo-600 border border-transparent rounded-lg sm:w-auto sm:text-sm sm:py-3.5 hover:bg-indigo-700 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  Get
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
