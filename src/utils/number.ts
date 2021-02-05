interface IOptionsFormat {
  style?: string;
  currency?: string;
  maximumSignificantDigits?: number;
  unit?: string;
}

export const formatNumber = (nb: number, options?: IOptionsFormat, country: string = 'fr') =>
  new Intl.NumberFormat(country, options)
    .format(nb)
    // We need to replace NumberFormat space with a 'true' space otherwise numbers won't match for our tests
    .replace(/ /g, ' ');
