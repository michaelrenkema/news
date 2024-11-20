import useMediaQuery from '@mui/material/useMediaQuery';

function Header() {
  const matches = useMediaQuery('(min-width:1200px)');

  return (
    <div className="header">
      <h1>Google News</h1>
      { matches &&
        <input type="search" value="Search for topics, locations &amp; sources"></input>
      }
      <img src="misc-icons.png" alt="Miscellaneous icons" height="48" />
    </div>
  )
}

export default Header;
