import { BoxTypes } from '../definitions/constants'

export default {
  boxes: {
    left: [
      {
        title: 'Desenvolvimento de Software I',
        classes: ['MAC0218'],
        type: BoxTypes.COMPLETE_ALL,
      },
      {
        title: 'Desenvolvimento de Software II',
        classes: ['MAC0332', 'MAC0413', 'MAC0467', 'MAC0470', 'MAC0472'],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 3,
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
          'MAC0469',
          'MAC0471',
        ],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 3,
      },
      {
        title: 'Bancos de Dados',
        classes: ['MAC0426', 'MAC0439', 'MAC0459'],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 2,
      },
    ],
  },
}
