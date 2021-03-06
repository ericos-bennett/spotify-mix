import { makeStyles } from '@material-ui/core/styles';

import { RoomState } from '../../types';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'space-between',
    bottom: '10px',
    height: '60px',
    width: '100px',
    left: 'calc(50vw - 50px)',
    '& button': {
      padding: '0',
      color: 'rgb(51, 51, 51)',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
    },
  },
  playPause: {
    fontSize: '28px',
  },
  prevNext: {
    fontSize: '16px',
  },
  svg: {
    display: 'block',
    height: '1em',
    width: '1em',
  },
}));

type PlayerControlsProps = {
  roomState: RoomState | null;
  togglePlayHandler: () => void;
  changeTrackHandler: (direction: 'prev' | 'next') => void;
};

export default function PlayerControls({
  roomState,
  togglePlayHandler,
  changeTrackHandler,
}: PlayerControlsProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {roomState && roomState.tracks.length > 0 && roomState.currentTrackIndex > 0 ? (
        <button
          type="button"
          aria-label="Previous Track"
          className={classes.prevNext}
          onClick={() => changeTrackHandler('prev')}
        >
          <svg className={classes.svg} viewBox="0 0 128 128" preserveAspectRatio="xMidYMid">
            <path
              d="M29.09 53.749V5.819H5.819v116.363h23.273v-47.93L122.18 128V0z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      ) : (
        <div style={{ width: '16px' }}></div>
      )}
      {roomState && roomState.tracks.length > 0 && !roomState.isPlaying && (
        <button
          type="button"
          aria-label="Play"
          className={classes.playPause}
          onClick={() => togglePlayHandler()}
        >
          <svg className={classes.svg} viewBox="0 0 128 128" preserveAspectRatio="xMidYMid">
            <path d="M119.351 64L8.65 0v128z" fill="currentColor"></path>
          </svg>
        </button>
      )}
      {roomState && roomState.tracks.length > 0 && roomState.isPlaying && (
        <button
          type="button"
          aria-label="Pause"
          className={classes.playPause}
          onClick={() => togglePlayHandler()}
        >
          <svg className={classes.svg} viewBox="0 0 128 128" preserveAspectRatio="xMidYMid">
            <path
              d="M41.86 128V0H8.648v128h33.21zm77.491 0V0h-33.21v128h33.21z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      )}
      {roomState && roomState.tracks.length - 1 > roomState.currentTrackIndex ? (
        <button
          type="button"
          aria-label="Next Track"
          className={classes.prevNext}
          onClick={() => changeTrackHandler('next')}
        >
          <svg className={classes.svg} viewBox="0 0 128 128" preserveAspectRatio="xMidYMid">
            <path
              d="M98.91 53.749L5.817 0v128L98.91 74.251v47.93h23.273V5.819H98.909z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      ) : (
        <div style={{ width: '16px' }}></div>
      )}
    </div>
  );
}
