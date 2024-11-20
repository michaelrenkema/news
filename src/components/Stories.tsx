import Story from "./Story"
import { storyVM } from "../types"
import Grid from "@mui/material/Grid2"
import Stack from "@mui/material/Stack"
import Card from "@mui/material/Card";

type Props = {
  stories: storyVM[]
};

function Stories({ stories }: Props) {
  return (
    <Card>
      <h2><a href="https://news.google.com/topics/CAAqKggKIiRDQkFTRlFvSUwyMHZNRFZxYUdjU0JXVnVMVWRDR2dKT1dpZ0FQAQ?hl=en-NZ&gl=NZ&ceid=NZ%3Aen">Top stories &gt;</a></h2>
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
                <Grid size={{ sm: 6, md: 5 }} sx={{minWidth: '280px'}} >
                  <Stack spacing={2}>
                    { story.image.ref &&
                      <img src={story.image.ref} alt={story.image.alt} width={280} height={168} />
                    }
                    <Story story={story} feed={feed} />
                  </Stack>
                </Grid>
                <Grid size={{ sm: 6, md: 7 }}>
                  <div className="related">
                    <Stack spacing={2}>
                      {
                        relatedStories.map((relatedStory) => {
                          return (
                            <Story story={relatedStory.story} feed={relatedStory.feed} />
                          )
                        })
                      }
                    </Stack>
                  </div>
                </Grid>
              </Grid>
            </Stack>
          )
        })
      }
    </Card>
  )
}

export default Stories;
