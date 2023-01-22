import {faker} from '@faker-js/faker';

export type Person = {
  firstName: string;
  lastName: string;
  age: number;
  description: string;
};

export const createPerson = (): Person => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  age: faker.datatype.number({ min: 18, max: 99 }),
  description: faker.random.words(faker.datatype.number({min: 5, max: 25})),
});