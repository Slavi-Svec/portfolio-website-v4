import React, { useEffect, useState, useCallback } from 'react'
// import GithubData from './GithubData.js'
import githubDataQuery from './GithubDataQuery'
import './App.css'

const RepoSearcher = () => {
  const [githubUserName, setGithubUserName] = useState('')
  const [githubReposList, setGithubReposList] = useState([])

  const fetchData = useCallback(() => {
    fetch(GithubData.baseURL, {
      method: 'POST',
      headers: GithubData.headers,
      body: JSON.stringify(githubDataQuery)
    })
      .then(response => response.json())
      .then(data => {
        setGithubUserName(data.data.viewer.name)
        setGithubReposList(data.data.viewer.repositories.nodes)
        console.log(data.data.viewer.repositories.nodes)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="container">
      <h1 className="repositories-heading">Repositories list</h1>
      {githubUserName && (
        <p>This is {`${githubUserName.trim()}'s`} Github repository</p>
      )}
      <ul className="github-repo-list">
        <li className="github-repo-list-items">
          {githubReposList &&
            githubReposList.map(user => (
              <div className="github-repo-titles">{user.name}</div>
            ))}
        </li>
      </ul>
    </div>
  )
}

export default RepoSearcher
