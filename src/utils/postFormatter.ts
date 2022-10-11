import {PrismicDocument } from '@prismicio/types';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function getPostsFormatted(posts: PrismicDocument []) {
const formattedPosts = posts.map(post => {
    return {
      uid: post.uid,
      first_publication_date: post.first_publication_date,
      data: {
        title: String(post.data.title),
        subtitle: String(post.data.subtitle),
        author: String(post.data.author),
      },
    };
  });
  return formattedPosts;
}