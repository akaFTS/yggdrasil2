import { BoxTypes } from '../definitions/constants'
import { validateBox } from '../definitions/validation'

export default {
  description:
    'O aluno deverá completar o número de disciplinas necessário por bloco (indicado abaixo) + 2 disciplinas quaisquer dentro de qualquer um dos módulos.',
  boxes: {
    left: [
      {
        title: 'Desenvolvimento de Software',
        classes: ['MAC0218',
                  'MAC0332',
                  'MAC0346',
                  'MAC0413',
                  'MAC0467',
                  'MAC0470', 
                  'MAC0472',
                  'MAC0475',
                ],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 2,
      },
    ],
    right: [
      {
        title: 'Sistemas Paralelos e Distribuídos',
        classes: [
          'MAC0219',
          'MAC0344',
          'MAC0352',
          'MAC0463',
        ],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 2,
      },
      {
        title: 'Bancos de Dados',
        classes: ['MAC0426',
                  'MAC0439',
                  'MAC0459',
                 ],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 1,
      },
    ],
  },
  validate: (boxes, doneClasses) => {
    const trackClasses = [...boxes.left, ...boxes.right].reduce(
      (acc, cur) => [...acc, ...cur.classes],
      []
    )
    const trackClassesUnique =  Array.from(new Set(Array.from(trackClasses)))
    const completedTrackClasses = trackClassesUnique.reduce(
      (acc, cur) => (doneClasses.includes(cur) ? acc + 1 : acc),
      0
    )

    const basicModules = [boxes.left[0], boxes.right[0], boxes.right[1]]
    const completedBasicModules = basicModules.reduce(
      (acc, cur) => (validateBox(cur, doneClasses) ? acc + 1 : acc),
      0
    )

    return completedTrackClasses >= 7 && completedBasicModules == 3
  },
}
