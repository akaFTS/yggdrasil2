import BoxTypes from '../definitions/BoxTypes'

export default {
  description:
    'Além de completar os três núcleos, o aluno deverá escolher uma área de aplicação (e.g., Bioinformática, Economia, Administração, Mecatrônica, Imagens Médicas, Engenharia de Software, Música Computacional, Astronomia, Análise Esportiva, etc.) e um orientador, cursar duas matérias nessa área e escrever seu TCC sobre ela.',
  boxes: {
    left: [
      {
        title: 'Núcleo 1',
        classes: ['MAC0317', 'MAC0426', 'MAC0431', 'MAC0460', 'MAE0221'],
        type: BoxTypes.COMPLETE_ALL,
      },
    ],
    right: [
      {
        title: 'Núcleo 2',
        classes: ['MAE0312', 'MAE0228'],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 1,
      },
      {
        title: 'Núcleo 3',
        classes: ['MAC0315', 'MAC0325', 'MAC0427'],
        type: BoxTypes.COMPLETE_SOME,
        minimum: 1,
      },
    ],
  },
}
