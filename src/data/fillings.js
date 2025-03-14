export const fillings = [
  {
    id: 1,
    name: 'Amandină',
    ingredients: ['blat cu cacao', 'cremă de cacao', 'ciocolată', 'sirop'],
    nutritionValues:
      'Valoare energetică 1639 kj / 391 kcal; Grasimi totale 19 g din care acizi grași saturați 6 g; Glucide 49 g, din care zaharuri 37 g; Fibre 1 g; Proteine 4 g; Sare 0,2 g.',
    warnings: 'Poate conține urme de arahide, alune, lapte și derivate.',
    storageConditions: 'A se păstra în loc uscat și răcoros, între 0-4°C.',
    type: 'cakes',
  },
  {
    id: 2,
    name: 'București',
    ingredients: [
      'blat de cacao',
      'cremă de ciocolată',
      'ciocolată',
      'sirop',
      'vișine',
      'gel de decor',
    ],
    nutritionValues:
      'Valoare energetică 1565 kj / 372 kcal; Grăsimi totale 10 g, din care acizi grași saturați 6 g; Glucide 52 g, din care zaharuri 34 g; Fibre 2 gș Proteine 4 g; Sare 0.1 g.',
    warnings: '',
    storageConditions: 'A se păstra în loc uscat și răcoros, între 0-4°C.',
    type: 'cakes',
  },
  {
    id: 3,
    name: 'Buturugă',

    ingredients: [
      'blat cu cacao',
      'cremă de ciocolată',
      'ciocolată',
      'gel de decor',
    ],
    nutritionValues:
      'Valoare energetică 1835 kj / 437 kcal; Grasimi totale 19 g, din care acizi grași saturați 9 g; Glucide 61 g, din care zaharuri 48 gȘ Fibre 1 g; Proteine 5 g; Sare 0.06g.',
    warnings: 'Poate conține urme de alune, arahide, lapte și derivate.',
    storageConditions: 'A se păstra în loc uscat și răcoros, între 0-4°C.',
    type: 'cakes',
  },
  {
    id: 4,
    name: 'Buturugă',

    ingredients: [
      'blat cu cacao',
      'cremă de ciocolată',
      'ciocolată',
      'gel de decor',
    ],
    nutritionValues:
      'Valoare energetică 1835 kj / 437 kcal; Grasimi totale 19 g, din care acizi grași saturați 9 g; Glucide 61 g, din care zaharuri 48 gȘ Fibre 1 g; Proteine 5 g; Sare 0.06g.',
    warnings: 'Poate conține urme de alune, arahide, lapte și derivate.',
    storageConditions: 'A se păstra în loc uscat și răcoros, între 0-4°C.',
    type: 'cakes',
  },
];

export const removeDiacritics = str => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
