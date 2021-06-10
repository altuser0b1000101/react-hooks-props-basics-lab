import React from 'react';
import Links from './Links';
// import Links from './Links';

function About(props) {
  return (
    <div id='about'>
      <h2>About Me</h2>
      //no fuciking idea
      {props.bio || props.bio === [''] ? <p>{props.bio}</p> : null}
      <img src='https://i.imgur.com/mV8PQxj.gif' alt='I made this' />
      <Links Links={Links} />
    </div>
  );
}
// function About({ bio, links }) {
//   return (
//     <div id='about'>
//       <h2>About Me</h2>
//       {bio || bio === '' ? <p>{bio}</p> : null}
//       <img src='https://i.imgur.com/mV8PQxj.gif' alt='I made this' />
//       <Links links={links} />
//     </div>
//   );
// }
// function About(props) {
//   return (
//     <div id='about'>
//       <h2>About Me</h2>
//       <p>{props.bio}</p>
//       <img src='https://i.imgur.com/mV8PQxj.gif' alt='I made this' />
//     </div>
//   );
// }

export default About;
