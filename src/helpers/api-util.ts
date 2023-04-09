export async function getPosts() {
  const data = await fetch("https://dev.codeleap.co.uk/careers/");

  const convertedData = await data.json();
  const postData = convertedData.results;

  const POSTS = [];

  for (const key in postData) {
    POSTS.push({
      id: postData[key].id,
      username: postData[key].username,
      created_datetime: postData[key].created_datetime,
      title: postData[key].title,
      content: postData[key].content,
      isEditable: false,
    });
  }

  return POSTS;
}
