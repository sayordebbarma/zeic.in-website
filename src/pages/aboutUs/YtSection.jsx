import React from 'react';

const videos = [
  { id: '6cyRFQPOWYo', title: 'Video1' },
  { id: 'Ko0FE45Fkqo', title: 'Video2' },
  { id: 'wDa4Za82uHk', title: 'Video3' },
];

const YtSection = () => {
  return (
    <div className='grid grid-cols-3 gap-10 m-20 justify-center'>
      {videos.map((video) => (
        <div key={video.id} className='aspect-w-16 aspect-h-9'>
          <iframe
            title={video.title}
            width='100%'
            height='250'
            src={`https://www.youtube.com/embed/${video.id}`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='rounded-3xl shadow-lg'
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default YtSection;
