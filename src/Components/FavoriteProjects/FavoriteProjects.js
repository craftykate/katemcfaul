import React from 'react';
import './FavoriteProjects.css';
import Project from '../Project/Project';

import snake from './images/snake.png';
import color from './images/color.jpg';
import paper from './images/paper.jpg';
import ikea from './images/ikea.jpg';
import mastermind from './images/mastermind.jpg';
import chess from './images/chess.jpg';
import calculator from './images/calculator.jpg';
import garden from './images/garden.jpg';
import recipes from './images/recipes.jpg';
import grampa from './images/grampa.jpg'

const favoriteProjects = () => (
  <div className="favoriteProjects">
    <h2>Featured Projects</h2>
    <p className="languagesUsed">Languages: <span>ReactJS, JavaScript, jQuery, HTML, CSS, SCSS, Ruby, Rails, PHP</span></p>
    <Project
      name="Color Picker"
      image={color}
      codeLink="https://github.com/craftykate/color-picker"
      liveLink="http://kates-color-picker.surge.sh/"
      languages="ReactJS, JavaScript, SCSS"
      description={<p>Need some color inspiration? Choose a color from a pop up color picker to see complimentary colors. Save colors for later, hover over colors to see their hex and rgb codes. Colors show up on either a white or black background. Built with React and compatible with mobile devices.</p>}/>
    <Project
      name="Snake Game"
      image={snake}
      codeLink="https://github.com/craftykate/odin-project/tree/master/Chapter_06-JavaScript_and_jQuery/snake"
      liveLink="http://kates-snake-game.surge.sh/"
      languages="JavaScript, jQuery, HTML, CSS"
      description={<p>I built Snake - and then added levels, power ups and bombs, oh my! I loved getting creative with this and making up new features.</p>}/>
    <Project
      name="Paper Calculators"
      image={paper}
      codeLink="https://github.com/craftykate/paper-calculators"
      liveLink="http://kates-paper-calculators.surge.sh/"
      languages="ReactJS, JavaScript, SCSS"
      description={<p>A site with three different calculators for making different things out of paper. Input the dimensions you want your item to be and the calculator will spit out the dimensions to cut your paper to, where you need to put your folds and how to assemble. Calculator functions built with JavaScript, input fields handled with React.</p>}/>
    <Project
      name="IKEA Name Generator"
      image={ikea}
      codeLink="https://github.com/craftykate/ikea-name-generator"
      liveLink="http://ikea-name-generator.surge.sh/"
      languages="ReactJS, JavaScript, CSS"
      description={<p>My first React site, just for play. Click the orange button and the app generates a silly word with random letters. There are a handful of rules written in JavaScript - no more than two consonants in a row, some of the vowels might be changed to Swedish letters, etc. If you see a word you like add your own description so you can share a fun screenshot.</p>}/>
    <Project
      name="Chess"
      image={chess}
      codeLink="https://github.com/craftykate/odin-project/tree/master/Chapter_03-Advanced_Ruby/chess"
      languages="Ruby"
      description={<p>Full fledged Chess in your terminal! It even has a weird rule I'd never heard of before I started researching chess moves. Two player game. Enter your move as coordinates like: 2d 4d and your piece at 2d will be moved to 4d. Games can be saved and only legal moves can be played.</p>}/>
    <Project
      name="jQuery Calculator"
      image={calculator}
      codeLink="https://github.com/craftykate/odin-project/tree/master/Chapter_06-JavaScript_and_jQuery/calculator"
      liveLink="http://jsfiddle.net/craftykate/k9ewcpvr/embedded/result/"
      languages="jQuery, JavaScript"
      description={<p>A full-featured calculator with memory buttons and a memory tape next to it to see past calculations. After a calculating it correctly builds off previous result if you start with an operator instead of a new number. Clear button intelligently switches between clearing the last number entered or the whole calculation. Number in memory displayed above.</p>}/>
    <Project
      name="Mastermind"
      image={mastermind}
      codeLink="https://github.com/craftykate/odin-project/blob/master/Chapter_03-Advanced_Ruby/oop_with_ruby/mastermind.rb"
      languages="Ruby"
      description={<p>A little terminal game of Mastermind. You choose if you're making the code or breaking it. If you're breaking the code, enter your guess of four numbers and the computer will tell you how many numbers you have entered correctly and how many are in the code but need to be moved. </p>}/>
    <Project
      name="The Odin Project"
      codeLink="https://github.com/craftykate/odin-project"
      languages="JavaScript, jQuery, Ruby, Ruby on Rails, HTML, CSS"
      description={<p>Many more projects built while going through the lessons for <a href="https://www.theodinproject.com/">the Odin Project</a>. While doing the class and uploading my completed projects to the site the founder of the school reached out to me to comment on how good my code was. Before completing the class he asked me to join his team and I helped work on the website and mentor other students.</p>}/>
    <Project
      name="Gardening App"
      image={garden}
      codeLink="https://github.com/craftykate/rails-gardening-app"
      languages="Ruby, Ruby on Rails, HTML, SCSS"
      description={<p>An extensive gardening app written in Ruby on Rails tracking all my gardening boxes, what is planted in each one and where and when each seed was planted and when it should reach maturity. Database of seeds populates a calendar showing which seeds can be planted at any given time.</p>}/>
    <Project
      name="Recipe Manager"
      image={recipes}
      codeLink="https://github.com/craftykate/kates-recipes"
      languages="Ruby, Ruby on Rails, HTML, SCSS"
      description={<p>A program that stores recipes, displays each recipe on its own HTML page, allows user to search recipes based on ingredients, compile a shopping list of several recipes and multiply or divide ingredients in a recipe.</p>}/>
    <Project
      name="Grampa's Site"
      image={grampa}
      languages="PHP, JavaScript, HTML, CSS"
      description={<p>A site I built for my grandfather with a contact form written in PHP that sent messages right to me and screenshots of how to solve his most-asked questions. He called me daily with questions aobut how to use his iPad and I was always happy to help, but having screenshots for him to look at while I talked him through his questions was helpful. </p>}/>
  </div>
);

export default favoriteProjects;
