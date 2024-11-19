import { feed, story } from "../types";

type Props = {
  story: story,
  feed: feed
};

function Spotlight({ story, feed }:  Props) {
  return (
    <>
      <div>
        { feed.image.ref &&
          <img src={feed.image.ref} alt={feed.image.alt} width={14} height={14} />
        }
        <span>{feed.name}</span>
      </div>
      <p>{story.title}</p>
      { story.image.ref &&
        <img src={story.image.ref} alt={story.image.alt} width={64} height={64} />
      }
    </>
  )
}

export default Spotlight;
