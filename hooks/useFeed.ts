import { faker } from "@faker-js/faker/locale/ko";

export type Post = {
  id: string;
  name: string;
  email: string;
  birthdate: Date;
  content: string;
  image: string;
  publishAt: Date;
};

export const posts: Post[] = [];

export default function useFeed() {
  Array.from({ length: 20 }).forEach(() => {
    posts.push(createRandomUser());
  });

  function createRandomUser(): Post {
    /* ref: https://fakerjs.dev/api/ */
    return {
      id: faker.datatype.uuid(),
      name: faker.internet.userName(),
      email: faker.internet.email(),
      birthdate: faker.date.birthdate(),
      content: faker.lorem.paragraphs(),
      image: faker.image.avatar(),
      publishAt: faker.date.past(),
    };
  }

  return { posts };
}
