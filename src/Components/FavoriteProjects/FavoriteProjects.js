import React from 'react';
import './FavoriteProjects.css';
import Project from '../Project/Project';
import snake from './images/snake.png';

const favoriteProjects = () => (
  <div className="favoriteProjects">
    <h2>Featured Projects</h2>
    <Project
      name="Snake Game"
      image={snake}
      codeLink="https://github.com/craftykate/odin-project/tree/master/Chapter_06-JavaScript_and_jQuery/snake"
      liveLink="http://kates-snake-game.surge.sh/"
      languages="JavaScript, jQuery, HTML, CSS"
      description={<p>I built Snake - and then added levels, power ups and bombs, oh my! I</p>}/>
    <Project
      name="Chess"
      codeLink="https://github.com/craftykate/odin-project/tree/master/Chapter_06-JavaScript_and_jQuery/snake"
      liveLink="http://kates-snake-game.surge.sh/"
      languages="JavaScript, jQuery, HTML, CSS"
      description={<p>I built Snake - and then added levels, power ups and bombs, oh my! I</p>}/>
  </div>
);

export default favoriteProjects;
