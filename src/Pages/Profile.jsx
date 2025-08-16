import React, { useState, useEffect } from 'react';
import { Play, Heart, Share2, MoreHorizontal, Music, Users, Disc, Calendar } from 'lucide-react';

function Profile() {
  const [user, setUser] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [currentFollowers, setCurrentFollowers] = useState(0);

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setCurrentFollowers(parsedUser.followers || 0);
        setIsFollowing(parsedUser.isFollowing || false);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setCurrentFollowers(prev => isFollowing ? prev - 1 : prev + 1);
  };

  // Show loading or fallback if no user data
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Cover Image Section */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={user.coverImage || "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=300&fit=crop"} 
          alt="Profile cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        
        {/* Profile Image */}
        <div className="absolute bottom-0 left-8 transform translate-y-1/2">
          <div className="relative">
            <img 
              src={user.profileImage || "https://res.cloudinary.com/aashishy/image/upload/v1746523717/e510ppxetgglo9kzztn8.jpg"} 
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover"
            />
            {user.isVerified && (
              <div className="absolute bottom-2 right-2 bg-blue-500 rounded-full p-1">
                <Music className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-8 right-8 flex gap-3">
          <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all">
            <Share2 className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all">
            <MoreHorizontal className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="px-8 pt-20 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* User Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold text-white">{user.username}</h1>
              {user.isVerified && (
                <div className="bg-blue-500 rounded-full p-1">
                  <Music className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
            
            <p className="text-gray-300 text-lg mb-6 max-w-2xl">
              {user.bio || "Music lover and creator"}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-6">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">{currentFollowers.toLocaleString()}</span>
                <span className="text-gray-400">Followers</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">{(user.following || 0).toLocaleString()}</span>
                <span className="text-gray-400">Following</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <Play className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">{user.totalPlays || "0"}</span>
                <span className="text-gray-400">Total Plays</span>
              </div> */}
              {/* <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">Joined {user.joinDate || "Recently"}</span>
              </div> */}
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="font-medium">Email:</span>
                <span>{user.email}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleFollow}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                isFollowing
                  ? 'bg-gray-600 text-white hover:bg-gray-700'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
            <button className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Top Tracks Section */}
      <div className="px-8 pb-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Disc className="w-6 h-6 text-purple-400" />
          Top Tracks
        </h2>
        
        <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6">
          {user.topTracks && user.topTracks.length > 0 ? (
            <div className="space-y-4">
              {user.topTracks.map((track, index) => (
                <div key={track.id || index} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{track.title}</h3>
                      <p className="text-gray-400 text-sm">{track.plays} plays</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400">{track.duration}</span>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="w-5 h-5 text-gray-400 hover:text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Disc className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No tracks uploaded yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;