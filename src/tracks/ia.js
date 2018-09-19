import { BoxTypes } from '../definitions/constants'

export default {
  boxes: {
    left: [
      {
        title: 'Inteligência Artificial',
        classes: ['MAC0425'],
        type: BoxTypes.COMPLETE_ALL,
      },
      {
        title: 'Introdução à IA',
        classes: ['MAC0318', 'MAC0444', 'MAC0459', 'MAC0460'],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 2,
      },
    ],
    right: [
      {
        title: 'Sistemas',
        classes: ['MAC0218', 'MAC0332', 'MAC0413', 'MAC0472'],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 2,
      },
      {
        title: 'Teoria associada à IA',
        classes: ['MAC0414', 'MAE0221', 'MAT0349', 'MAE0515'],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 1,
      },
    ],
  },
}
