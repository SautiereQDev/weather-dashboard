// récupère la date au format 'YYYY-MM-DD HH:MM' et renvoi 'HHh MM'
export function dateToHour(date : string) : string{

  //extraction des heures
  const hour = date.split(' ')[1]
  //conversion du format 'HH:MM' vers 'HHhMM'
  return hour.split(':').join('h')
}

export function formatDate(date: string) {
  return date.split('-').reverse().join('-');
}