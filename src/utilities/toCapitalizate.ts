export const capitalize = (string: string | undefined) => {
  if (string) {
    const lowecaseString = string.toLowerCase();

    const firstCapitalLetter = string.charAt(0).toUpperCase();

    return firstCapitalLetter + lowecaseString.slice(1);
  }

  return null;
};
