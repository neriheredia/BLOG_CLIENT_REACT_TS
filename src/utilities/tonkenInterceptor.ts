export const tokenInterceptor = (resp: any) => {
  const token = resp?.headers.authorization;
  const formattedToken = token.split(' ').pop();
  localStorage.setItem('access-token', formattedToken);
};
