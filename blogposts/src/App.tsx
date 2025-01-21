import { useEffect, useState } from 'react'
import './App.css'
import BlogPostList from './Components/BlogPostList'

const fetchPosts = async (setData:any) =>{
      try{
        const response = await fetch ('https://jsonplaceholder.typicode.com/posts/')

        if(!response.ok){
          throw new Error ('Failed to fetch posts')
        }

        const data = await response.json().then(data => data.slice(0,20));
        setData(data)
      } catch (error) {
        console.log("Error: ", error)
      }
}

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetchPosts(setData)
  },[])


  return (
    <>
      <h1>BlogPosts assignment</h1>
      <BlogPostList posts={data}/>
    </>
  )
}
export default App
