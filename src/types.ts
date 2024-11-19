export type image = {
  ref: string
  alt: string
};

export type story = {
  title: string
  image: image
  tags: string[]
  created: string
  author: string
};

export type feed = {
  name: string
  image: image
  stories: story[]
};

export type storyVM = {
  feed: feed
  story: story
  relatedStories: storyVM[]
};
