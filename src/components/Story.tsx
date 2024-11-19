import { story, feed } from "../types";

type Props = {
  story: story
  feed: feed
};

function Story({ story, feed }:  Props) {
  return (
    <>
      <div>
        { feed.image.ref &&
          <img src={feed.image.ref} alt={feed.image.alt} width={14} height={14} />
        }
        <span>{feed.name}</span>
      </div>
      <p>{story.title}</p>
    </>
  )
}

export default Story;
