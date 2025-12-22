// Формат даты ДД/ММ/ГГГГ ЧЧ:ММ
export function formatDateToRu(date) {
  return `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}/${
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1
  }/${date.getFullYear()} ${
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
}


// Формат даты MM-DD-YYYY ЧЧ:ММ
export const formatDateToUS = (date) => {
  return `${
    date.getMonth() < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1
  }-${
    date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
  }-${date.getFullYear()} ${
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
};
