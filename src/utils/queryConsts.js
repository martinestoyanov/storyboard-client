//get services accept an object containing query parameters
//this query object may use any set of QUERY consts as keys
//value(s) supplied must be a type specified for corresponding key

//section: Query key enums
export const QUERY = {
  RANGE: {
    //value type: integer
    START: "start",
    END: "end",
  },
  RANDOM: "random", //value type: bool
  POPULATE: "with", //value type: [string] (select value(s) from USER, STORY, VIDEO, or COMMENT enums)
  NAME: {
    //value type: string
    USER: "userName",
    VIDEO: "storyName",
    STORY: "videoName",
  },
  SEARCH: "searchTerm", //value type: string
  GENRE: "genre", //value type: string (select value from GENRE if not searching for genres)
};

//section: Query value enums
export const USER = {
  STORIES: "stories",
  VIDEOS: "videos",
  COMMENTS: "comments",
};

export const STORY = {
  AUTHOR: "author",
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

export const GENRE = {
  ACTION_ADVENTURE: "Action/Adventure",
  COMEDY: "Comedy",
  DRAMA: "Drama",
  FANTASY: "Fantasy",
  HORROR: "Horror",
  ROMANCE: "Romance",
  ROMCOM: "Romantic Comedy",
  SCIFI: "Sci-Fi",
  THRILLER_MYSTERY: "Thriller/Mystery",
};
