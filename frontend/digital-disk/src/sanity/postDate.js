export function getFormattedDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }
  