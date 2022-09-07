import {useCallback,useEffect, useState} from 'react'
import styled from 'styled-components/macro';

import { NavTopbar } from './components/NavBar/NavTopbar'
import { NavAndFilter } from './components/Navagation&Fillter/NF';
import { Post } from './components/Post/post';
import {ListaPosts} from './components/listPosts/ListaPosts'
import { getData } from "./services/callAPI";
import {FilterTypesOfPosts} from "./components/Modal/ModalImprove.js"

function App() {
  console.log(window.screen.width );
  const [actived,setActived] = useState("latest")
  const [actual,setActual] = useState()
  const [modal,setModal] = useState(false)

  const getPosts = useCallback(async()=>{
    const posts = await getData()
    if(Array.isArray(posts)){
      const popularPosts = posts.filter((post)=>{
        if(post.isPopular){
          return post
        }
      })
      const LatestPosts = posts.filter((post)=>{
        if(!post.isPopular){
          return post
        }
      })
      if(actived=='latest'){
        setActual(LatestPosts); 
      }
      if(actived=='popular'){
        setActual(popularPosts); 
      }
    }
  },[actived])

  useEffect(() => {
    getPosts();
  }, [getPosts]);



  return (
    <Background>
      <NavTopbar mobil={ window.screen.width >= 1024? false:true } />
      <NavAndFilter actived={actived} setActived={setActived} modal={modal} setModal={setModal}/>
      <ListaPosts>
        {actual && actual.map((post,index)=>{
          return <Post key={index} postInfo={post}/>
        })}
      </ListaPosts>
      {modal ?<FilterTypesOfPosts/>:null}
    </Background>

  );
}

const Background = styled.div`
  position: relative;
  width: 375px;
  height: 667px;
  overflow-y: scroll;
  background: #ECECF1;
  @media (min-width: 1024px) {
    width: 1440px;
  }
`


export default App;
