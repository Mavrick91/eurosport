import React, { FC } from 'react';
import faker from 'faker';
import { render, RenderOptions } from '@testing-library/react';
import { IPlayer } from 'interfaces/player';

const AllTheProviders: FC = ({ children }) => {
  return <div>{children}</div>;
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };

export const buildPlayer = (overrides?: Partial<IPlayer>): IPlayer => ({
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  shortname: faker.name.middleName(),
  sex: faker.random.boolean() ? 'WOMAN' : 'MAN',
  picture: {
    url: faker.image.sports(),
  },
  country: {
    picture: {
      url: faker.image.sports(),
    },
    code: faker.address.countryCode(),
  },
  stats: {
    rank: faker.random.number(),
    points: faker.random.number(),
    weight: faker.random.number(),
    height: faker.random.number(),
    age: faker.random.number(),
    last: Array.from({ length: 5 }).map(() => faker.random.boolean()),
  },
  ...overrides,
});
