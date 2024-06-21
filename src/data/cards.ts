import { faker } from "@faker-js/faker"

export const cards = Array.from({length:4}).map(() =>{
    return {
        id: faker.number.int({min: 100, max: 200}),
        name: faker.person.fullName(),
        pubDate: faker.date.recent().toLocaleDateString(),
        title: faker.person.jobArea(),
        subTitle:faker.person.jobDescriptor(),
        description:faker.lorem.paragraphs(2),
        avatar: faker.image.avatarGitHub(),
        badge: faker.music.genre(),
    }
})