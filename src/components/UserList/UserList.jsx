import { getFollowTweews, getTweets } from "Api";
import { User } from "components/User/User";
import React, { useState, useEffect } from 'react';
import { Container,Btn,UserCardList } from "./UserList.styled";
import { Header } from "components/Header/Header";


export const UserList = () => {

const [page, setPage] = useState(1);
    
  const [userData, setUserData] = useState(localStorage.getItem('tweets') || []);
  console.log(userData)
 
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getTweets(page)
        console.log(response);
         
        // setUserData(prev => ([...prev, ...response]));
        response.map(el => setUserData(prev => [...prev, { ...el, isFollowing: false }]))
       
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [page]);
  useEffect(() => localStorage.setItem('tweets',JSON.stringify(userData)), [userData])

  const handleClick = async (id) => {
    const index = userData.findIndex(el => el.id === id)
    
    let followersCount = null;
  
    if (userData[index].isFollowing) {
      setUserData(prev => prev.map((el, idx) => {
        if (idx === index) {
          return { ...el, isFollowing: false, followers: el.followers - 1 };
        } else {
          return { ...el }
        }
      }));
      followersCount = userData[index].followers - 1
    } else {
      setUserData(prev => prev.map((el, idx) => {
        if (idx === index) {
          return { ...el, isFollowing: true, followers: el.followers + 1 };
        } else {
          return { ...el }
        }
      }));
       followersCount = userData[index].followers + 1
    };
      try {
        const newFollowersObject = { 'followers': followersCount }
        console.log(newFollowersObject);
        await getFollowTweews(id, newFollowersObject)
    
      } catch (error) {
        console.log(error);
      }
    };
  const handleLoadMore = () => {
    setPage(prev => prev + 1); 
    };
    
  return (
    <Container >
      <Header />
          <UserCardList>
              {userData.map(el => (<User key={el.id} cardIndex={el} handleClick={handleClick}  />))}   
     </UserCardList>
      <Btn onClick={handleLoadMore}>Load More</Btn>
    </Container>
  );
};