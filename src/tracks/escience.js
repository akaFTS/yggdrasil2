import { BoxTypes } from '../definitions/constants'

export default {
  description:
    'Para completar a trilha, o aluno deverá completar os quatro núcleos. Além disso, é recomendado (mas não obrigatório) que ele escolha uma área de aplicação (e.g., Bioinformática, Economia, Administração, Mecatrônica, Imagens Médicas, Engenharia de Software, Música Computacional, Astronomia, Análise Esportiva, etc.) e curse duas matérias dela, além de fazer seu TCC na área.',
  boxes: {
    left: [
      {
        title: 'Núcleo 1',
        classes: ['MAC0317', 'MAC0426', 'MAC0460', 'MAE0221'],
        type: BoxTypes.COMPLETE_ALL,
      },
      {
        title: 'Área de Aplicação',
        classes: [],
        type: BoxTypes.FREE,
        addable: true,
        addingId: 'escienceArea',
      },
    ],
    right: [
      {
        title: 'Núcleo 2',
        classes: ['MAE0312', 'MAE0228', 'MAE0580'],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 1,
      },
      {
        title: 'Núcleo 3',
        classes: ['MAC0315', 'MAC0325', 'MAC0427'],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 1,
      },
      {
        title: 'Núcleo 4',
        classes: ['MAC0219', 'MAC0431'],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 1,
      },
    ],
  },
}
