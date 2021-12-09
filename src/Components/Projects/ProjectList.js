// Components
import Project from './Project'
// Media
import teenCenter from './img/teenCenter.png'
import exploreArtists from './img/exploreArtists.png'
import color from './img/color.jpg'
import snake from './img/snake.png'
import paper from './img/paper.jpg'
import temp from './img/temp_sensor_esp.jpg'
import ikea from './img/ikea.jpg'
import chess from './img/chess.jpg'
import calculator from './img/calculator.jpg'
import mastermind from './img/mastermind.jpg'
import gauge from './img/gauge.jpg'
import garden from './img/garden.jpg'
import recipes from './img/recipes.jpg'
import chores from './img/chores.jpg'
import grampa from './img/grampa.jpg'

const ProjectList = () => (
  <>
    <Project
      name='Teen Center Sign In App'
      image={teenCenter}
      languages='ReactJS, JavaScript, Firebase, Axios, HTML/JSX, SCSS'
      codeLink='https://github.com/craftykate/teen-center'
      description={
        <p>
          A full-featured registration and sign in app for the local teen
          center. Students register once then sign in and out on the app using
          their school ID. Administrators can run the different reports they
          need to apply for grants and look up and edit student info. Until now,
          students have been signing in and out on a piece of paper as they come
          and go. When admin collects the data they need for grants it sometimes
          takes them months to put all the info from the sign in sheets into a
          spreadsheet. Now it takes them under a minute! Built in React with a
          Firebase database.
        </p>
      }
    />
    <Project
      name='Explore New Artists'
      image={exploreArtists}
      languages='ReactJS, JavaScript, API requests, HTML/JSX, SCSS, OAuth'
      codeLink='https://github.com/craftykate/explore-artists'
      liveLink='https://exploreartists.surge.sh/'
      description={
        <p>
          Explore new artists! I love discovering new music and wanted a way to
          browse bands based on artists and songs I like. Search for an artist
          and see a list of similar artists and their genres to explore. Listen
          to their popular songs in the app or open their page in Spotify. All
          data pulled from Spotify using Spotify's API, user is logged in
          securely using OAuth. Built with React. I LOVE this app. I poke around
          a bit, find a new artist and start listening right in the app.
        </p>
      }
    />
    <Project
      name='Color Picker'
      image={color}
      languages='ReactJS, JavaScript, HTML/JSX, SCSS'
      codeLink='https://github.com/craftykate/color-picker'
      liveLink='http://katescolorpicker.surge.sh/'
      description={
        <p>
          Need some color inspiration? Choose a color from a pop up color picker
          to see five different color combinations. Save colors for later, hover
          over colors to see their hex and rgb codes. Colors show up on either a
          white or black background. I actually use this site all the time
          whether I'm picking colors for a site or an art project! Built with
          React and compatible with mobile devices - bring it to the yarn store,
          paint store, fabric store...
        </p>
      }
    />
    <Project
      name='Snake Game'
      image={snake}
      languages='JavaScript, jQuery, HTML, CSS'
      codeLink='https://github.com/craftykate/odin-project/tree/master/Chapter_06-JavaScript_and_jQuery/snake'
      liveLink='http://kates-snake-game.surge.sh/'
      description={
        <p>
          I built Snake - and then added levels, power ups and bombs, oh my! I
          loved getting creative with this and making up new features.
        </p>
      }
    />
    <Project
      name='Paper Calculators'
      image={paper}
      languages='ReactJS, JavaScript, HTML/JSX, SCSS'
      codeLink='https://github.com/craftykate/paper-calculators'
      liveLink='http://kates-paper-calculators.surge.sh/'
      description={
        <p>
          A site with three different calculators for making different things
          out of paper. Input the dimensions you want your item to be and the
          calculator will spit out the dimensions to cut your paper to, where
          you need to put your folds and how to assemble. Calculator functions
          built with JavaScript, input fields handled with React.
        </p>
      }
    />
    <Project
      name='WiFi-enabled Temperature Sensor'
      image={temp}
      languages='C++, Arduino, ESP8266'
      codeLink='https://github.com/craftykate/beer-temp'
      description={
        <p>
          My foray into physical computing includes this waterproof temperature
          sensor that monitors the temperature of fermenting beer (or anything
          else, really), logs the temperature data online and sends a text if
          the temp goes too high or too low. Gone are the days of ruined beer!
          Buttons on the top let us change the high and low threshold temps on
          the fly for different beers or different fermenting stages. RGB LED
          communicates a whole host of states clearly and effectively with no
          screen needed. Full project details{' '}
          <a href='https://github.com/craftykate/beer-temp'>on GitHub</a>,
          including link to{' '}
          <a href='https://drive.google.com/open?id=1j1QiglwsgGMnpEcazrR6rpHT8wxJSWbW'>
            short demo video
          </a>
          .
        </p>
      }
    />
    <Project
      name='IKEA Name Generator'
      image={ikea}
      languages='ReactJS, JavaScript, HTML/JSX, CSS'
      codeLink='https://github.com/craftykate/ikea-name-generator'
      liveLink='http://ikea-name-generator.surge.sh/'
      description={
        <p>
          My first React site, just for play. Click the orange button and the
          app generates a silly word with random letters. There are a handful of
          rules written in JavaScript - no more than two consonants in a row,
          some of the vowels might be changed to Swedish letters, etc. If you
          see a word you like add your own description so you can share a fun
          screenshot.
        </p>
      }
    />
    <Project
      name='Chess'
      image={chess}
      languages='Ruby'
      codeLink='https://github.com/craftykate/odin-project/tree/master/Chapter_03-Advanced_Ruby/chess'
      description={
        <p>
          Full fledged Chess in your terminal! It even has a weird rule I'd
          never heard of before I started researching chess moves. Two player
          game. Enter your move as coordinates like: 2d 4d and your piece at 2d
          will be moved to 4d. Games can be saved and only legal moves can be
          played.
        </p>
      }
    />
    <Project
      name='jQuery Calculator'
      image={calculator}
      languages='jQuery, JavaScript'
      codeLink='https://github.com/craftykate/odin-project/tree/master/Chapter_06-JavaScript_and_jQuery/calculator'
      liveLink='http://katesjquerycalculator.surge.sh/'
      description={
        <p>
          A full-featured calculator with memory buttons and a memory tape next
          to it to see past calculations. After a calculating it correctly
          builds off previous result if you start with an operator instead of a
          new number. Clear button intelligently switches between clearing the
          last number entered or the whole calculation. Number in memory
          displayed above.
        </p>
      }
    />
    <Project
      name='Mastermind'
      image={mastermind}
      languages='Ruby'
      codeLink='https://github.com/craftykate/odin-project/blob/master/Chapter_03-Advanced_Ruby/oop_with_ruby/mastermind.rb'
      description={
        <p>
          A little terminal game of Mastermind. You choose if you're making the
          code or breaking it. If you're breaking the code, enter your guess of
          four numbers and the computer will tell you how many numbers you have
          entered correctly and how many are in the code but need to be moved.{' '}
        </p>
      }
    />
    <Project
      name='The Odin Project'
      languages='JavaScript, jQuery, Ruby, Ruby on Rails, HTML, CSS'
      codeLink='https://github.com/craftykate/odin-project'
      description={
        <p>
          Many more projects built while going through the lessons for{' '}
          <a href='https://www.theodinproject.com/'>the Odin Project</a>. While
          doing the class and uploading my completed projects to the site the
          founder of the school reached out to me to comment on how good my code
          was. Before completing the class he asked me to join his team and I
          helped work on the website and mentor other students.
        </p>
      }
    />
    <Project
      name='Gauge Calculator'
      image={gauge}
      languages='ReactJS, JavaScript, HTML/JSX, SCSS'
      codeLink='https://github.com/craftykate/gauge-calculator'
      liveLink='http://gaugecalculator.surge.sh/'
      description={
        <p>
          For my knitting peeps: Enter in your current gauge or item size and
          which needle you used and then enter the gauge or size it{' '}
          <i>should</i> be and the app will tell you which needle to use. If the
          needle needed falls between two needle sizes you'll get results from
          both those needles and you can decide which one suits you. Yet another
          one of my "I wish I had an app that..." projects!
        </p>
      }
    />
    <Project
      name='Gardening App'
      image={garden}
      languages='Ruby, Ruby on Rails, HTML, SCSS'
      codeLink='https://github.com/craftykate/rails-gardening-app'
      description={
        <p>
          An extensive gardening app written in Ruby on Rails tracking all my
          gardening boxes, what is planted in each one and where and when each
          seed was planted and when it should reach maturity. Database of seeds
          populates a calendar showing which seeds can be planted at any given
          time.
        </p>
      }
    />
    <Project
      name='Recipe Manager'
      image={recipes}
      languages='Ruby, Ruby on Rails, HTML, SCSS'
      codeLink='https://github.com/craftykate/kates-recipes'
      description={
        <p>
          A program that stores recipes, displays each recipe on its own HTML
          page, allows user to search recipes based on ingredients, compile a
          shopping list of several recipes and multiply or divide ingredients in
          a recipe.
        </p>
      }
    />
    <Project
      name='Chores App'
      image={chores}
      languages='ReactJS, JavaScript, HTML/JSX, SCSS, Axios'
      codeLink='https://github.com/craftykate/boyschores'
      description={
        <p>
          An app I built for my boys to streamline chores. Each day they have a
          certain amount of chore points they need to accomplish, so the top
          chart lists available chores they can pick from and how many points
          they are worth. Each boy has his own chart below that listing the
          chores he has completed and required chores he still has to do. Data
          stored in Firebase database, accessed/modified with Axios.
          Mobile-friendly, so chores are easy to add from my phone when I see
          they need doing. Feature-rich app we use every day.
        </p>
      }
    />
    <Project
      name="Grampa's Site"
      image={grampa}
      languages='PHP, JavaScript, HTML, CSS'
      description={
        <p>
          A site I built for my grandfather with a contact form written in PHP
          that sent messages right to me and screenshots of how to solve his
          most-asked questions. He called me daily with questions aobut how to
          use his iPad and I was always happy to help, but having screenshots
          for him to look at while I talked him through his questions was
          helpful.{' '}
        </p>
      }
    />
    <Project
      name='This Site!'
      languages='ReactJS, JavaScript, HTML/JSX, CSS'
      codeLink='https://github.com/craftykate/katemcfaul'
      description={
        <p>
          It should go without saying by now that I also built this site. Built
          with React.{' '}
        </p>
      }
    />
  </>
)

export default ProjectList
