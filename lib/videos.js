import videoData from '../data/videos.json';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

export const getVideos = async (searchQuery) => {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${YOUTUBE_API_KEY}`
    );

    const data = await response.json();

    // if youtube error, return just that and empty array to not break the app
    if (data?.error) {
      console.error('Youtube API error: ', data.error);
      return [];
    }

    return data?.items.map((item) => {
      const id = item?.id?.videoId || item.id;
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id: id,
      };
    });
  } catch (error) {
    console.error('Something went wrong with Video Library: ', error);
    return [];
  }
};
