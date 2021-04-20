import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { Track } from '../../types'

const useStyles = makeStyles(() => ({
  root: {
    padding: '0',
    listStyleType: 'none'
  },
  track: {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem'
  },
  trackLabel: {
    marginLeft: '1rem'
  },
  deleteIcon: {
    marginLeft: '1rem'
  }
}));

type PlaylistProps = {
  tracks: Track[],
  deleteTrackHandler: (index: number) => void
}

export default function Playlist({tracks, deleteTrackHandler}: PlaylistProps) {

  const classes = useStyles();

  const listItems = tracks.map((track: any, i) => {
    return (
        <li className={classes.track} key={i}>
          <img
            src={track.albumUrl}
            alt={track.artist}
          ></img>
          <h4 className={classes.trackLabel}>
            {track.artist} - {track.title}
          </h4>
          <IconButton
            aria-label="delete"
            onClick={() => deleteTrackHandler(i)}
            className={classes.deleteIcon}
          >
            <DeleteIcon fontSize="large"/>
          </IconButton>
        </li>
    )
  })

  return (
    <ul className={classes.root}>
      {listItems}
    </ul>
  )
};