
import React from 'react';
import logo from 'images/logo.png';
import bgrImg from 'images/bgrImg.png';
import { Card, Logo, BgrImg, Avatar, ListItem, Header, Btn, Item} from './User.styled.jsx';
import { Link } from 'react-router-dom';


export const User = ({ cardIndex ,handleClick}) => {
  const { id, avatar, user, tweets, followers,isFollowing } = cardIndex;
  return (
    <Card key={id}>
      <Header>
        <Logo src={logo} alt="logo" />
        <BgrImg src={bgrImg} alt="BgrImg" />
        <Link to="/">Back</Link>
      </Header>
      <ListItem>
        <Avatar src={avatar} alt="user" />
        <Item>
          <span>{user}</span>
        </Item>
        <Item>
          <span>Tweets: {tweets}</span>
        </Item>
        <Item>
          <span>{followers.toLocaleString('en-US')} FOLLOWERS</span>
        </Item>
        <Btn
          onClick={() => handleClick(id)}
          style={{ backgroundColor: isFollowing ? '#5CD3A8' : '#EBD8FF' }}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Btn>
      </ListItem>
    </Card>
  );
};