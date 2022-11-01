export const postAdapter = (post: any) => ({
  postDescription: post.description,
  postCategory: post.category,
  postId: post._id,
  postImage: post.photo,
  postImageId: post.photoPublicId,
  postTitle: post.title,
  postCreated: post.updatedAt,
  postUserCreator: `${post.user.lastName} ${post.user.firstName}`,
  postUserAvatar: post.user.avatar,
  postUserProfileImage: post.user.profilePic,
  postUserId: post.user._id,
});

export const postsAdapter = (post: any) => ({
  postCategory: post.category,
  postId: post._id,
  postImage: post.photo,
  postTitle: post.title,
  postDescription: post.description,
});
