export const getWinsLoses = (matches: boolean[]) =>
  matches.reduce(
    (acc, value) => {
      if (value) acc[0] += 1;
      else acc[1] += 1;

      return acc;
    },
    [0, 0],
  );
