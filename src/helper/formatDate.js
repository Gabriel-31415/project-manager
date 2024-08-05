export function formatDate(dateInput) {
  const date = new Date(dateInput.substring(0, 10).replaceAll('-', '/'));
  let dateSplit = date.toLocaleDateString().split('/');
  let dateFormatada = dateSplit[2] + "-" + dateSplit[1] + "-" + dateSplit[0];

  return dateFormatada;
}