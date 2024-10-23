import React from 'react'

type Feature = {
  imgSrc: string;
}

type Title = {
  title: string;
}

type Description = {
  description: string;
}

const titles: Title[] = [
  {
    title: "Feature 1"
  },
  {
    title: "Feature 2"
  },
  {
    title: "Feature 3"
  }
]

const descriptions: Description[] = [
  {
    description: "Description 1"
  },
  {
    description: "Description 2"
  },
  {
    description: "Description 3"
  }
]

const features: Feature[] = [
  {
    imgSrc: 'https://cdn.rareblocks.xyz/collection/clarity/images/features/1/thumbnail-1.png'
  },
  {
    imgSrc: 'https://via.placeholder.com/150/32CD32/FFFFFF?text=Feature+2'

  },
  {
    imgSrc: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=Feature+3'
  },
]

const Features = () => {
  return (
    <div className='font-montserrat bg-gray-50'>
      <div className='flex flex-col justify-center items-center'>
        <span className='text-xl mt-10'>Check out our Features</span>
        <h2 className='text-4xl font-bold'>Meet Shorty, Your All in One Stop</h2>
        </div>
        <div className='grid grid-cols-3 gap-3 mt-10'>
          {titles.map((title,index) => (
            <div key={index} className='text-center'>
              <h3 className='text-2xl font-bold'>{title.title}</h3>
            </div>
          ))}
          {features.map((feature, index) => (
            <div key={index} className='w-96 h-80 rounded-lg shadow-md ml-16'>
              <img src={feature.imgSrc} className='w-full h-full object-cover rounded-t-lg' />
            </div>
          ))}
          {descriptions.map((description, index) => (
            <div key={index} className='text-center'>
              <p className='text-lg'>{description.description}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Features