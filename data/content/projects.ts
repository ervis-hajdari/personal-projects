import { kebabCase, kebabArray } from '@/utils/utils';
import { Project } from 'types';

const baseRoute: string = '/projects';

const projects: Project[] = [
  {
    id: 0,
    title: 'Search',
    desc: 'Simple full stack searching app.',
    img: '/static/projects/search-app-image.png',
    link: baseRoute + '/search-table',
    github: 'https://github.com/ervis-hajdari',
    tags: ['React', 'NextJS', 'Material UI', 'CSS', 'NestJS', 'PostgreSQL'],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
