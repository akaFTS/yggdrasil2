import BoxTypes from './BoxTypes'

export function validateBox(box, doneClasses) {
  const completedClasses = box.classes.reduce(
    (acc, cur) => (doneClasses.includes(cur) ? acc + 1 : acc),
    0
  )

  return box.type === BoxTypes.COMPLETE_ALL
    ? completedClasses === box.classes.length
    : box.type === BoxTypes.COMPLETE_SOME
      ? completedClasses >= box.minimum
      : false
}

export function validateTrack(track, doneClasses) {
  return track.validate
    ? track.validate(track.boxes, doneClasses)
    : [...track.boxes.left, ...track.boxes.right].reduce(
        (acc, cur) => acc && validateBox(cur, doneClasses),
        true
      )
}
