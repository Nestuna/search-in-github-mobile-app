import fetch from 'cross-fetch'

export const fetch_user = async (username) => {
  const user = await fetch(`https://api.github.com/users/${username}`);
  return await user.json()
};
