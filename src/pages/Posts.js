import React from 'react';
import { useGlobalContext } from './Context';

const Posts = () => { 

  const { hits ,isLoading , removePost} = useGlobalContext();


  if(isLoading){
    return (
      <>
        <h1>Loading news, Wait a sec...</h1>
      </>
    );
  };
  return(
    <>
      <div className= "post-div">
      {hits.map((curPost) => {
        const { title, author, objectID , url, num_comments ,created_at } = curPost;
        return(
        
          <div className="card" key={objectID}>
            <h2>{title}</h2>
            <p>
            Created at <span>{ created_at } ||  By <span>{author}</span></span> 
            </p>
            <div className="card-button">
              <a href={url} target = "_blank"> 
                Read More
              </a>
              <a href="#" onClick={ () => removePost(objectID)} >
                Remove 
              </a>
            </div>
          </div>
        )
      })}
      </div>
    </>
  );
};

export default Posts;