import React from 'react';
import user from '../data/user';

function Links() {
  return (
    <div>
      <h3>Links</h3>
      <a href='Links'>{user.links.github}</a>
      <a href='Links'>{user.links.linkedin}</a>
    </div>
  );
}

export default Links;
