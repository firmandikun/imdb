import React from 'react';
import FeaturedVideo from '../components/FeaturedVideo/FeaturedVideo';
import VideoCard from '../components/VideoCard/VideoCard';

const HomePage: React.FC = () => (
  <main className="bg-gray-900">
    <div className="flex space-x-8 container mx-auto p-4">
      <div className="w-3/4">
        <FeaturedVideo
          title="'Inside Out 2' Make us Feel Every Emotion"
          subtitle="Watch the new 'Inside out' Trailer"
          image="https://source.unsplash.com/random/1200x800?movie"
        />
      </div>
      <div className="w-1/4">
        <h2 className="text-xl font-bold mb-4 text-white">Featured Videos</h2>
        {[
          {
            title: "Welcome to the Apocalypse!",
            subtitle: "Watch the new 'Fallout' Trailer",
            image: "https://source.unsplash.com/random/300x200?apocalypse",
            duration: "3:18"
          },
          {
            title: "'Inside Out 2' Make us Feel Every Emotion",
            subtitle: "Watch the new 'Inside Out 2' Trailer",
            image: "https://source.unsplash.com/random/300x200?emotion",
            duration: "3:18"
          },
          {
            title: "Where Might 'Dune' Go Next?",
            subtitle: "Our 'Dune: Part Three' Theories",
            image: "https://source.unsplash.com/random/300x200?desert",
            duration: "3:19"
          }
        ].map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  </main>
);

export default HomePage;