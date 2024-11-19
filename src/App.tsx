import './App.css'
import Grid from '@mui/material/Grid2'
import Header from './components/Header'
import Stories from './components/Stories'
import { feed, storyVM } from './types';
import Spotlights from './components/Spotlights';

function App() {
  // for demo purposes, define data here

  const feeds = [
    {
      name: "The Guardian",
      image: {
        ref: "the-guardian.png",
        alt: "The Guardian"
      },
      stories: [
        {
          title: "Tens of thousands to converge on NZ parliament as march to protest controversial Maori...",
          image: {
            ref: "hikoi.png",
            alt: "Hikoi"
          },
          created: "3 hours ago",
          author: "Eva Corlett",
          tags: ["Top story", "Hikoi"]
        }
      ]
    },
    {
      name: "RNZ",
      image: {
        ref: "rnz.png",
        alt: "RNZ"
      },
      stories: [
        {
          title: "Livestream: 17,000 join as Treaty Principles Bill hikoi reaches Parliament",
          image: {},
          created: "3 hours ago",
          author: "Eva Corlett",
          tags: ["Hikoi"]
        },
        {
          title: "Diver dead after shark attack near Chatham Islands",
          image: {},
          created: "22 minutes ago",
          author: "",
          tags: ["Shark attack"]
        }
      ]
    },
    {
      name: "New Zealand Herald",
      image: {
        ref: "nz-herald.png",
        alt: "New Zealand Herald"
      },
      stories: [
        {
          title: "Watch: Flare set off as hikoi reaches Parliament; up to 20k gathered",
          image: {},
          created: "4 hours ago",
          author: "",
          tags: ["Hikoi"]
        },
        {
          title: "'Everybody is in shock': Mayor speaks out after fatal shark attach near Chatham Islands",
          image: {
            ref: "chatham-islands.png",
            alt: "Chatham Islands"
          },
          created: "54 minutes ago",
          author: "",
          tags: ["Top story", "Shark attack"]
        },
        {
          title: "Three people are believed to have taken their own lives in wake of Cyclone Gabriel",
          image: {
            ref: "cyclone-gabrielle.png",
            alt: "Cyclone Gabrielle"
          },
          created: "23 hours ago",
          author: "Ric Stevens",
          tags: ["Spotlight"]
        }
      ]
    },
    {
      name: "Stuff",
      image: {
        ref: "stuff.png",
        alt: "Stuff"
      },
      stories: [
        {
          title: "Nato's newest members update their 'how to survive a war' guides",
          image: {
            ref: "nato.png",
            alt: "How to survive a war guide"
          },
          created: "8 hours ago",
          author: "Jari Tanner and Jan M. Olsen",
          tags: ["Top story", "NATO"]
        },
        {
          title: "'I wasn't meant to be the one leading the haka': Hana-Rawhiti Maipi-Clarke",
          image: {},
          created: "5 hours ago",
          author: "",
          tags: ["Hikoi"]
        },
        {
          title: "Diver attacked by shark near the Chatham Islands",
          image: {},
          created: "23 hours ago",
          author: "Sam Sherwood",
          tags: ["Shark attack"]
        },
        {
          title: "Family business is poised to take new strong wool Floc wall panels to export markets",
          image: {
            ref: "floc.png",
            alt: "Floc wall panels"
          },
          created: "Yesterday",
          author: "Gill South",
          tags: ["Spotlight"]
        },
        {
          title: "Review: Japanese virtual idol delights Auckland fans",
          image: {},
          created: "6 hours ago",
          author: "Debbie Jamieson",
          tags: ["Spotlight"]
        }
      ]
    },
    {
      name: "Greater Auckland",
      image: {
        ref: "greater-auckland.png",
        alt: "Greater Auckland"
      },
      stories: [
        {
          title: "A clearer network for the City Rail Link?",
          image: {
            ref: "city-rail-link.png",
            alt: "City rail link"
          },
          created: "Yesterday",
          author: "Gill South",
          tags: ["Spotlight"]
        }
      ]
    },
    {
      name: "Newstalk ZB",
      image: {
        ref: "newstalk-zb.png",
        alt: "Newstalk ZB"
      },
      stories: [
        {
          title: "Diver attacked by shark in Chatham Islands",
          image: {},
          created: "1 hour ago",
          author: "",
          tags: ["Shark attack"]
        }
      ]
    }
  ] as feed[]

  const topStories = [] as storyVM[];
  const spotlights = [] as storyVM[];

  for (const feed of feeds) {
    for (const story of feed.stories) {
      if (story.tags.includes("Top story")) {
        topStories.push({ story, feed, relatedStories: [] });
      }

      if (story.tags.includes("Spotlight")) {
        spotlights.push({ story, feed, relatedStories: [] });
      }
    }
  }

  for (const topStory of topStories) {
    if (topStory.story.tags.length === 0) continue;

    for (const feed of feeds) {
      for (const relatedStory of feed.stories) {
        // exclude the same story
        if (topStory.story.title === relatedStory.title) continue;

        // include any related stories with matching tags
        if (topStory.story.tags.filter(x => x !== "Top story"
            && relatedStory.tags.includes(x))?.length > 0) {
          topStory.relatedStories.push({ story: relatedStory, feed, relatedStories: [] });
        }
      }
    }
  }

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 8 }}>
          <Stories stories={topStories} />
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Spotlights stories={spotlights} />
        </Grid>
      </Grid>
    </>
  )
}

export default App;
