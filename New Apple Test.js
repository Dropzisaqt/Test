window.snake.scheme = function(settings = {}) {
  if(settings.score_bar === undefined)
    settings.score_bar = settings.scoreBar || '#4A752C';
  if(settings.borders === undefined)
    settings.borders = '#578A34';
  if(settings.walls === undefined)
    settings.walls = settings.borders;
  if(settings.shadows === undefined)
    settings.shadows = '#94BD46';
  if(settings.light_squares === undefined)
    settings.light_squares = settings.lightSquares || '#AAD751';
  if(settings.dark_squares === undefined)
    settings.dark_squares = settings.darkSquares || '#A2D149';
  if(settings.sky === undefined)
    settings.sky = '#4DC1F9';
  if(settings.separators === undefined)
    settings.separators = '#87CEFA';
  if(settings.buttons === undefined)
    settings.buttons = '#1155CC';
  if(settings.light_goal === undefined) {
    let f = settings.light_squares;
    f = f.replace('#', '');
    let { h, s, v, } = rgb_to_hsv({
      r: parseInt(f.substring(0, 2), 16),
      g: parseInt(f.substring(2, 4), 16),
      b: parseInt(f.substring(4, 6), 16),
    });
    s += 0.03;
    v += 0.07;
    s = s > 1 ? 1 : s;
    v = v > 1 ? 1 : v;

    let { r, g, b, } = hsv_to_rgb({ h: h, s: s, v: v, });
    settings.light_goal = '#' + (~~r).toString(16) + (~~g).toString(16) + (~~b).toString(16);
  }
          
      if(settings.burger || settings.cactus || settings.hotdog || settings.egg || settings.lime || settings.red_pepper) {
            let burg = new Image();
            burg.src = 'https://i.postimg.cc/CxVysC41/Block-of-Diamond-JE6-BE3-64x64.png';
            burg.width = burg.height = 47;
            burg.className = 'DqMRee SsAred';
                        let cact = new Image();
            cact.src = 'https://i.postimg.cc/CxVysC41/Block-of-Diamond-JE6-BE3-64x64.png';
            cact.width = cact.height = 47;
            cact.className = 'DqMRee SsAred';

            let dog = new Image();
            dog.src = 'https://i.postimg.cc/CxVysC41/Block-of-Diamond-JE6-BE3-64x64.png';
            dog.width = dog.height = 47;
            dog.className = 'DqMRee SsAred';

            let egg = new Image();
            egg.src = 'https://i.postimg.cc/CxVysC41/Block-of-Diamond-JE6-BE3-64x64.png';
            egg.width = egg.height = 47;
            egg.className = 'DqMRee SsAred';

            let lime = new Image();
            lime.src = 'https://i.postimg.cc/CxVysC41/Block-of-Diamond-JE6-BE3-64x64.png';
            lime.width = lime.height = 47;
            lime.className = 'DqMRee SsAred';

            let pepper = new Image();
            pepper.src = 'https://i.postimg.cc/CxVysC41/Block-of-Diamond-JE6-BE3-64x64.png';
            pepper.width = pepper.height = 47;
            pepper.className = 'DqMRee SsAred';


            if(document.querySelector('#apple').childElementCount > 21)
              for(let i = document.querySelector('#apple').childElementCount - 1; i >= 22; i--)
                document.querySelector('#apple').removeChild(document.querySelector('#apple').children[i]);

            settings.burger     && document.querySelector('#apple').appendChild(burg);
            settings.cactus     && document.querySelector('#apple').appendChild(cact);
            settings.hotdog     && document.querySelector('#apple').appendChild(dog);
            settings.egg        && document.querySelector('#apple').appendChild(egg);
            settings.lime       && document.querySelector('#apple').appendChild(lime);
            settings.red_pepper && document.querySelector('#apple').appendChild(pepper);


            eval(`var bu_ = new Image(); bu_.src = 'https://i.postimg.cc/CxVysC41/Block-of-Diamond-JE6-BE3-64x64.png';`);
            eval(`var ca_ = new Image(); ca_.src = 'https://i.postimg.cc/CxVysC41/Block-of-Diamond-JE6-BE3-64x64.png';`);
            eval(`var do_ = new Image(); do_.src = 'https://i.postimg.cc/CxVysC41/Block-of-Diamond-JE6-BE3-64x64.png';`);
            eval(`var eg_ = new Image(); eg_.src = 'https://i.postimg.cc/CxVysC41/Block-of-Diamond-JE6-BE3-64x64.png';`);
            eval(`var li_ = new Image(); li_.src = 'https://i.postimg.cc/CxVysC41/Block-of-Diamond-JE6-BE3-64x64.png';`);
            eval(`var pe_ = new Image(); pe_.src = 'https://i.postimg.cc/CxVysC41/Block-of-Diamond-JE6-BE3-64x64.png';`);
            eval(
              code.match(
                /[a-zA-Z0-9_$]{1,8}=function\(a\){return a\.[a-zA-Z0-9_$]{1,8}\.canvas}/
              )[0].replace(
                '{',
                `{
                  if(a.path && a.path.includes('apple') && [...document.querySelector('#apple').children].indexOf(document.getElementsByClassName('DqMRee tuJOWd')[0]) > 21)
                    return document.querySelector('#apple').getElementsByClassName('DqMRee tuJOWd')[0].src.includes('Block-of-Diamond-JE6-BE3-64x64') 
                      ? bu_ 
                    : document.querySelector('#apple').getElementsByClassName('DqMRee tuJOWd')[0].src.includes('Block-of-Diamond-JE6-BE3-64x64') 
                      ? ca_ 
                    : document.querySelector('#apple').getElementsByClassName('DqMRee tuJOWd')[0].src.includes('Block-of-Diamond-JE6-BE3-64x64')
                      ? do_ 
                    : document.querySelector('#apple').getElementsByClassName('DqMRee tuJOWd')[0].src.includes('Block-of-Diamond-JE6-BE3-64x64')
                      ? li_
                    : document.querySelector('#apple').getElementsByClassName('DqMRee tuJOWd')[0].src.includes('Block-of-Diamond-JE6-BE3-64x64')
                      ? pe_
                    : eg_;
                  
                  
                `
              )
            );

            eval(
              code.match(
                /[a-zA-Z0-9_$]{1,8}\.prototype\.[a-zA-Z0-9_$]{1,8}=function\(\){[^}]*?apple[^]*?el\(\)\)}}/
              )[0].replace(
                'Math.floor(21*Math.random());',
                `Math.floor((21 + ~~${settings.burger} + ~~${settings.cactus} + ~~${settings.hotdog} + ~~${settings.egg} + ~~${settings.lime} + ~~${settings.red_pepper}) * Math.random());`
              )
            );
          }
window.snake.dark = function() {
  return window.snake.scheme({
    burger:        true,
  });
};
