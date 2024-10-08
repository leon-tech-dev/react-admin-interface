import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

interface User {
  id: string;
  avatarUrl: string;
  name: string;
  company: string;
  isVerified: boolean;
  status: 'active' | 'banned';
  role: string;
  [key: string]: string | boolean;
}

const roles = [
  'Leader',
  'Hr Manager',
  'UI Designer',
  'UX Designer',
  'UI/UX Designer',
  'Project Manager',
  'Backend Developer',
  'Full Stack Designer',
  'Front End Developer',
  'Full Stack Developer',
] as const;

export const users: User[] = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/src/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned'] as const) ?? 'active',
  role: sample(roles) ?? roles[0],
}));
