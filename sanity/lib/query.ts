import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(
  `*[_type == "startup" && defined(slug.current)&&!defined($search)||title match $search||category match $search ||author->name match $search] | order(_createdAt desc) {
      _id,
      slug,
      title,
      _createdAt,
      author->{_id, name, image, bio},
      views,
      description,
      category,
      image
    }`
);

export const STARTUP_BY_ID_QUERY =
  defineQuery(`*[_type=="startup"&&_id==$id][0]{
  _id,
    slug,
    title,
    _createdAt,
    author->{_id,slug,userName,image,bio},
    views,
    description,
    category,
    image,
    pitch
  }`);

export const STARTUP_VIEWS_QUERY =
  defineQuery(`*[_type=="startup"&&_id==$id][0]{
  _id,
  views,}`);

export const Author_BY_GITHUB_QUERY = defineQuery(
  `*[_type=="author"&&id==$id][0]{
  _id,
  id,
  name,
  userName,
  email,
  image,
  bio,
  }`
);
// export const Author_BY_ID_QUERY = defineQuery(
//   `*[_type=="author"&&_id==$id][0]{
//   _id,
//   name,
//   userName,
//   email,
//   image,
//   bio,
//   }`
// );

export const AUTHOR_BY_ID_QUERY = `
  *[_type == "author" && _id == $id][0]{
    _id,
    name,
    userName,
    email,
    image,
    bio
  }
`;

export const STARTUP_BY_AUTHOR_QUERY = defineQuery(
  `*[_type == "startup" && author._ref==$id ] | order(_createdAt desc) {
      _id,
      slug,
      title,
      _createdAt,
      author->{_id, name, image, bio},
      views,
      description,
      category,
      image
    }`
);

export const PLAYLIST_BY_SLUG_QUERY =
  defineQuery(`*[_type == "playlist" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
}`);
export const AUTHOR_BY_EMAIL_QUERY = defineQuery(`
  *[_type == "author" && email == $email][0]{
    _id,
    name,
    userName,
    email,
    image,
    bio,
  }
`);
