import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom' // hook for fetching api data 
function Github  () {
    const data = useLoaderData()
// fetching data using api
    //const [data, setData] = React.useState([])
//useEffect (() =>{
      //  fetch('https://api.github.com/users/josefwambua')
        //.then((response) => response.json())
       // .then(data => {
        //    console.log(data)
       //     setData(data)
       // })
 //   },[])
  return (
    <div className='flex m-4 bg-amber-500 text-white'>
    {/* Text Column */}
    <div className='flex-shrink-0'>
        {/* Your text content goes here */}
        id: {data.id}<br/>
        location: {data.location}<br/>
        login: {data.login}<br/>
        name: {data.name}<br/>
        {/*node_id: {data.node_id}<br/>
        organizations_url: {data.organizations_url}<br/>
  public_repos: {data.public_repos}*/}
    </div>

    {/* Image */}
    <div className='ml-4 text-center'>
        <img src={data.avatar_url} width={200} alt="" />
    </div>
</div>

  )
}

export default Github

export const githubInfoLoader =  async () => {

    const response = await fetch('https://api.github.com/users/josefwambua')
    return response.json()
}