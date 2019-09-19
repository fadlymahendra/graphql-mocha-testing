const owner = "octocat";
const name = "Hello-World";
const lastPost = 3;
const titleUrl = {query: `{
  repository(owner:"${owner}", name:"${name}") {
    issues(last:${lastPost}) {
      edges {
        node {
          title
          url
        }
      }
    }
  }
}`}

module.exports = {
   titleUrl,
}