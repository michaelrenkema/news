import Stack from "@mui/material/Stack";
import { feed, story } from "../types";
import Container from "@mui/material/Container";

type Props = {
  story: story,
  feed: feed
};

function Spotlight({ story, feed }:  Props) {
  return (
    <>
      <div className="feed">
        { feed.image.ref &&
          <img src={feed.image.ref} alt={feed.image.alt} width={14} height={14} />
        }
        <span className="details">{feed.name}</span>
      </div>
      <Container disableGutters={true} maxWidth={false}>
        <Stack direction="row">
          <div>
            <p>{story.title}</p>
            <div className="details">
              <span>{story.created}</span>
              {story.author && (
                <span>&nbsp;&#8226;&nbsp;{`By ${story.author}`}</span>
              )}
            </div>
          </div>
          { story.image.ref &&
            <img src={story.image.ref} alt={story.image.alt} width={64} height={64} />
          }
        </Stack>
      </Container>
    </>
  )
}

export default Spotlight;
