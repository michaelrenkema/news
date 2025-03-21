import Spotlight from "./Spotlight"
import { storyVM } from "../types"
import Stack from "@mui/material/Stack"
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";

type Props = {
  stories: storyVM[]
};

function Spotlights({ stories }: Props) {
  return (
    <Card>
      <h2><a href="https://news.google.com/topics/CAAqHAgKIhZDQklTQ2pvSWJHOWpZV3hmZGpJb0FBUAE?hl=en-NZ&gl=NZ&ceid=NZ%3Aen">Local news &gt;</a></h2>
      <Stack spacing={2}>
        {
          stories.map(({ story, feed }) => {
            return (
              <>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 12 }}>
                    <hr />
                  </Grid>
                  <Grid size={{ xs: 12, md: 12 }}>
                    <Spotlight story={story} feed={feed} />
                  </Grid>
                </Grid>
              </>
            )
          })
        }
      </Stack>
    </Card>
  )
}

export default Spotlights;
