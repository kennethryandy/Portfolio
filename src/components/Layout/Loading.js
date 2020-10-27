import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  loading: {
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#292929',
    zIndex: 1111,
  },
  loadingText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 28,
    textTransform: 'uppercase',
    letterSpacing: 3,
    color: '#fff',
    "& span":{
      animation: '$blink 1s infinite',
      animationFillMode: 'both'
    },
    "& span:nth-child(2)": {
      animationDelay: '200ms'
    },
    "& span:nth-child(3)": {
      animationDelay: '400ms'
    }
  },
 "@keyframes blink": {
    "0%": {
      opacity: 0
    },
    "20%": {
      opacity: 1
    },
    "100%": {
      opacity: 0
    },
  }
})

function Loading() {
  const classes = useStyles()
  return (
    <div className={classes.loading}>
      <div className={classes.loadingText}>
        <p className={classes.text}>Loading<span>.</span><span>.</span><span>.</span></p>
      </div>
    </div>
  )
}

export default Loading