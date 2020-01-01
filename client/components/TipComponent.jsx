import React, { Component } from 'react';

const TipComponent = (props) => (
  
  <div className="tip">

    <h2 className="header tip-piece">{props.header}</h2>
    <p className="blurb tip-piece">{props.blurb}</p>

    <div className="tags tip-piece">
      {props.tags && props.tags.map(el => (
          <div className="tag">{el}</div>
      ))}
    </div>

    <div className="votes tip-piece">
        <h3 onClick={() => {props.upvote(props.id)}}>+</h3>
        <h1>{props.votes}</h1>
        <h3 onClick={() => {props.downvote(props.id)}}>-</h3>
    </div>

    <div className="timestamp tip-piece">{props.timestamp}</div>

  </div>
);

export default TipComponent;