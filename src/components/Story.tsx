import { story, feed } from "../types";

type Props = {
  story: story
  feed: feed
};

function Story({ story, feed }:  Props) {
  return (
    <>
      <div className="feed">
        { feed.image.ref &&
          <img src={feed.image.ref} alt={feed.image.alt} width={14} height={14} />
        }
        <span className="details">{feed.name}</span>
      </div>
      <p className="title">{story.title}</p>
      <div className="details">
        <span>{story.created}</span>
        {story.author && (
          <span>&nbsp;&#8226;&nbsp;{`By ${story.author}`}</span>
        )}
      </div>
    </>
  )
}

export default Story;
