export const USER = {
  STORIES: "stories",
  VIDEOS: "videos",
  COMMENTS: "comments",
};

export const STORY = {
  AUTHOR: "user",
  VIDEOS: "video_contributions",
  COMMENTS: "comments",
};

export const VIDEO = {
  CREATOR: "user",
  STORY: "story",
  COMMENTS: "comments",
};

export const COMMENT = {
  AUTHOR: "author",
  STORY: "story",
  VIDEO: "video",
  USER: "user",
};

export const QUERY = {
  RANGE: {
    START: "start",
    END: "end",
  },
  POPULATE: "with",
  RANDOM: "random",
  NAME: {
    USER: "userName",
    VIDEO: "storyName",
    STORY: "videoName",
  },
  SEARCH: "searchTerm",
  GENRE: "genre",
};
