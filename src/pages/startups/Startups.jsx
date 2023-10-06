import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Startups.css';
import BlogCard from './BlogCard';
export default function Startups() {
    return(
      <>
      <center><h1>Blogs</h1></center>
      <div className="blog-cont">
        <BlogCard img="https://cdn-icons-png.flaticon.com/512/194/194938.png" name="Sapna Kumari"/>
        <BlogCard img="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-25.jpg" name="Leo Nikhil"/>
        <BlogCard img="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" name="Chetan Sirigiri"/>
        <BlogCard img="https://cdn-icons-png.flaticon.com/512/194/194938.png" name="Aastha Varma"/>
        <BlogCard img="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-25.jpg" name="Farhan Ahmed"/>
        
        <BlogCard img="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-25.jpg" name="Sudhamshu"/>
        <BlogCard img="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" name="Bhargav"/>
        <BlogCard img="https://cdn-icons-png.flaticon.com/512/194/194938.png" name="Anoushka"/>
        <BlogCard img="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-25.jpg" name="Pranav"/>
        
      </div>
      </>
    );
}
