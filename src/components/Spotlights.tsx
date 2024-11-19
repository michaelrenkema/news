import Spotlight from "./Spotlight"
import { storyVM } from "../types"
import Stack from "@mui/material/Stack"
import Grid from "@mui/material/Grid2";

type Props = {
  stories: storyVM[]
};

function Spotlights({ stories }: Props) {
  return (
    <>
      <h2>Local news</h2>
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
    </>
  )
}

export default Spotlights;
