export const postsAdapter = (post: any) => ({
  postId: post._id,
  image: post.photo,
  postTitle: post.title,
  postDescription: post.description,
});
