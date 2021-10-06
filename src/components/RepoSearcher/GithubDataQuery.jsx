const githubDataQuery = {
  query: `
        {
          viewer {
            name
              repositories(privacy: PUBLIC, last:20) {
                nodes {
                name
              }
            }
          }
        }
      `
}

export default githubDataQuery
