export const postAdapter = (post: any) => ({
  postDescription: post.description,
  postCategory: post.category,
  postId: post._id,
  postImage: post.photo,
  postTitle: post.title,
});

export const postsAdapter = (post: any) => ({
  postId: post._id,
  postImage: post.photo,
  postTitle: post.title,
  postDescription: post.description,
});
