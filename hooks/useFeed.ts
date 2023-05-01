import { faker } from "@faker-js/faker/locale/ko";

export type PostItemType = {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  birthdate: Date;
  content: string;
  image: string;
  publishAt: Date;
};

export const posts: PostItemType[] = [];

export default function useFeed() {
  Array.from({ length: 20 }).forEach(() => {
    posts.push(createRandomUser());
  });

  function createRandomUser(): PostItemType {
    /* ref: https://fakerjs.dev/api/ */
    return {
      id: faker.datatype.uuid(),
      name: faker.internet.userName(),
      email: faker.internet.email(),
      profileImage: faker.image.image(),
      birthdate: faker.date.birthdate(),
      content: faker.lorem.paragraphs(),
      image: faker.image.image(),
      publishAt: faker.date.past(),
    };
  }

  return { posts };
}
