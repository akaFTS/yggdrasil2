import { BoxTypes } from '../definitions/constants'
import { validateBox } from '../definitions/validation'

export default {
  description:
    'O aluno deverá completar pelo menos 2 dos 3 módulos marcados com "I" e mais algumas optativas, totalizando 7 matérias da trilha.',
  boxes: {
    left: [
      {
        title: 'Algoritmos I',
        classes: ['MAC0328', 'MAC0414'],
        type: BoxTypes.COMPLETE_ALL,
      },
      {
        title: 'Otimização I',
        classes: ['MAC0315', 'MAC0325'],
        type: BoxTypes.COMPLETE_ALL,
      },
      {
        title: 'Algoritmos II',
        classes: [
          'MAC0325',
          'MAC0327',
          'MAC0331',
          'MAC0336',
          'MAC0450',
          'MAC0465',
          'MAC0466',
        ],
        type: BoxTypes.FREE,
      },
    ],
    right: [
      {
        title: 'Matemática Discreta I',
        classes: ['MAC0320', 'MAT0206', 'MAT0264'],
        type: BoxTypes.COMPLETE_ALL,
      },
      {
        title: 'Matemática Discreta II',
        classes: [
          'MAC0414',
          'MAC0436',
          'MAE0221',
          'MAE0224',
          'MAE0228',
          'MAE0326',
          'MAT0225',
          'MAT0234',
          'MAT0265',
          'MAT0311',
        ],
        type: BoxTypes.FREE,
      },
      {
        title: 'Otimização II',
        classes: [
          'MAC0300',
          'MAC0343',
          'MAC0418',
          'MAC0419',
          'MAC0427',
          'MAC0450',
          'MAC0452',
          'MAC0461',
          'MAC0473',
        ],
        type: BoxTypes.FREE,
      },
    ],
  },
  validate: (boxes, doneClasses) => {
    const trackClasses = [...boxes.left, ...boxes.right].reduce(
      (acc, cur) => [...acc, ...cur.classes],
      []
    )
    const completedTrackClasses = trackClasses.reduce(
      (acc, cur) => (doneClasses.includes(cur) ? acc + 1 : acc),
      0
    )
    const basicModules = [boxes.left[0], boxes.left[2], boxes.right[0]]
    const completedBasicModules = basicModules.reduce(
      (acc, cur) => (validateBox(cur, doneClasses) ? acc + 1 : acc),
      0
    )

    return completedTrackClasses >= 7 && completedBasicModules >= 2
  },
}
