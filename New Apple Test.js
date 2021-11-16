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
