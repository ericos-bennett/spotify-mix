import {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { playerActions } from "../actions/playerActions";
import roomContext from '../reducers/roomContext';

const useStyles = makeStyles(() => ({
  root: {
    padding: '0',
    listStyleType: 'none',
  },
  track: {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem',
  },
  trackLabel: {
    marginLeft: '1rem',
  },
  deleteIcon: {
    marginLeft: '1rem',
  },
  emptyTracks: {
    textAlign: 'center',
  },
}));

export default function Queue() {
  const classes = useStyles();
  const {state, dispatch} = useContext(roomContext)
  

  const listItems = state?.tracks.map((track: any, i:number) => {
    return (
      <li className={classes.track} key={i}>
        <img src={track.albumUrl} alt={track.artist}></img>
        <h4 className={classes.trackLabel}>
          {track.artist} - {track.title}
        </h4>
        <IconButton
          aria-label="delete"
          onClick={() => deleteTrackHandler(i)}
          className={classes.deleteIcon}
        >
          <DeleteIcon fontSize="large" />
        </IconButton>
      </li>
    );
  });

  return (
    <ul className={classes.root}>
      {state?.tracks.length ? (
        listItems
      ) : (
        <p className={classes.emptyTracks}>Add tracks above to get started!</p>
      )}
    </ul>
  );
}
