import Story from "./Story"
import { storyVM } from "../types"
import Grid from "@mui/material/Grid2"
import Stack from "@mui/material/Stack"

type Props = {
  stories: storyVM[]
};

function Stories({ stories }: Props) {
  return (
    <>
      <h2>Top stories</h2>
      {
        stories.map(({ story, feed, relatedStories }) => {
          return (
            <Stack spacing={2}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 12 }}>
                  <hr />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid size={{ xs: 6, md: 4 }}>
                  <Stack spacing={2}>
                    { story.image.ref &&
                      <img src={story.image.ref} alt={story.image.alt} width={280} height={168} />
                    }
                    <Story story={story} feed={feed} />
                  </Stack>
                </Grid>
                <Grid size={{ xs: 6, md: 8 }}>
                  <Stack spacing={2}>
                    {
                      relatedStories.map((relatedStory) => {
                        return (
                          <Story story={relatedStory.story} feed={relatedStory.feed} />
                        )
                      })
                    }
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          )
        })
      }
    </>
  )
}

export default Stories;
