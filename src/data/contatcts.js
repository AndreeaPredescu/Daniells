export const contacts = [
  {
    name: 'Laborator Băilești',
    address: 'Str. Progresul, nr. 22, Băilești, jud. Dolj',
    weekSchedule: '08:00 - 21:00',
    weekendSchedule: '08:00 - 21:00',
    phone: '+40251313730',
    mapLink: 'https://maps.app.goo.gl/3dz2a6J9Uzp8kjr7A',
  },
  {
    name: 'Cofetărie Băilești',
    address: 'Str. Victoriei, nr. 101 B, Băilești, jud. Dolj',
    weekSchedule: '07:00 - 19:00',
    weekendSchedule: '08:00 - 14:00',
    phone: '+40351170216',
    mapLink: 'https://maps.app.goo.gl/SCtySHYXJRvkqKcf9',
  },
  {
    name: 'Cofetărie Calafat',
    address: 'Str. Alexandru Ioan Cuza, Nr. 21, Calafat, jud. Dolj',
    weekSchedule: '09:00 - 19:00',
    weekendSchedule: '09:00 - 19:00',
    phone: '+40351175801',
    mapLink: 'https://maps.app.goo.gl/AERsXv36nybJnJC48',
  },
  {
    name: 'Cofetărie Poiana Mare',
    address: 'Str. 1 Decembrie, nr. 5 - 7, Poiana Mare, jud. Dolj',
    weekSchedule: '09:00 - 19:00',
    weekendSchedule: '09:00 - 19:00',
    phone: '+40351175821',
    mapLink: 'https://maps.app.goo.gl/uTCNngogDMNiU5YXA',
  },
];

export const formatPhoneNumber = phone => {
  const match = phone.match(/^\+40(\d{3})(\d{3})(\d{3})$/);
  if (match) {
    return `0${match[1]}.${match[2]}.${match[3]}`;
  }
  return phone;
};
