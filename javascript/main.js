const stateSite={
    link:'true'
}
function headerOnload(){
    return new Promise((resolve)=>{
        function first(){
            let script = document.createElement('script');
            script.src = "javascript/includeSection.js";
            document.body.append(script);
        };
        resolve(first());
    });
}

function bodyDocument(){
    return new Promise((resolve)=>{
        function itsBody(){
            setTimeout(()=>{
                let menu = document.createElement('script');
                menu.src = "javascript/menu.js";
                document.body.append(menu);
            },700);
        };
        resolve(itsBody());
    })
}; //bodyDocument();
function domcontentloaded(){
    return new Promise((resolve)=>{
        if(window.location.pathname=='/'){
// function load(){
            // window.addEventListener('DOMContentLoaded',changeContent);
            function changeContent(){
                setTimeout(()=>{
                    window.addEventListener('hashchange',changeContent);
                    if(window.location.href=='/photo'){
                        console.log('oK');
                    }else if(window.location.hash=='#about'&&stateSite.link=='undefined'){
                        if(window.location.pathname=='/photo#about'||window.location.pathname=='/photo.html#about'){
                            console.log('pathname');
                            window.location.href='/';
                        }
                        // console.log('oNe');
                        document.querySelector('#content').innerHTML=`It's first page. <br> Obaut it's company.`;
                    }else if(window.location.hash=='#ourWork'){
                        // console.log('Two');
                        document.querySelector('#content').innerHTML=`Two page! <br> This order site with SEO and adveritser. <br> The specialization of the company "Baron Sajterstauzen Web Workshop" is creating websites using simple JavaScript technologies with SEO optimization and promotion in contextual advertising.`;
                    }else if(window.location.hash=='#contacts'){
                        console.log('Three');
                        document.querySelector('#content').innerHTML=`Three page! <br>  This contacts <br> My WhatsApp <a href="https://wa.clck.bar/77004145901">+77004145901</a> And my phone number <a href="tel:+77004145901">+77004145901</a>`;
                    }else if(window.location.href=='http://localhost:3000/'||'https://amir248.github.io/switch-page-without-reloading/'||'https://web.qucu.ru/'){
                        // console.log('^_^');
                        setTimeout(()=>{
                            document.querySelector('#content').innerHTML=`Home page! <br>
                               This is a simple example of a site with loading pages via javascript, like this: "single page application". So that you can make a multi-page site and push it to the "free" GitHub, with switching pages where there is a loading of sections.
                            `;
                        },2700);
                    }else{
                        console.log('else');
                    }
                },300);
                    
            };
        // };//load
        resolve(changeContent());
    }
    });
};//domcontentloaded
function animatedTextGo(){
    return new Promise((resolve)=>{
        function toGoNewAnimated(){
            if(window.location.href=='https://web.qucu.ru/#contacts'||window.location.href=='https://web.qucu.ru/#ourWork'||window.location.href=='https://web.qucu.ru/#about'){
                return console.log('oK');
            }else{
                setTimeout(()=>{
                    let textAnimation=document.createElement('link');
                    textAnimation.setAttribute('rel','stylesheet');
                    textAnimation.href='style/text-animation.css';
                    document.querySelector('head').append(textAnimation);
                    let textAnimationJS=document.createElement('script');
                    textAnimationJS.src='javascript/text-animation.js';
                    document.querySelector('body').append(textAnimationJS);
                },0);
                setTimeout(()=>{
                    let goNewText = document.createElement('div');
                    // goNewText.setAttribute('id','container');
                    goNewText.innerHTML='<h1 id="animated-text" data-text="Привет, мир! It\'s animation text, that working.">oK. Привет, мир! It\'s animation text here. And it\'s working</h1>';
                    document.querySelector('#content').append(goNewText);
                },3300);
            }
        }
        resolve(toGoNewAnimated());
    });
};// animatedTextGo

// if(location.pathname=='/photo'){
if(location.href=='https://web.qucu.ru/photo'||location.href=='http://localhost:3000/photo.html'){
console.log(location.pathname);
function photoGallary(){
        return new Promise((resolve)=>{
            function wievPhoto(){
                setTimeout(()=>{
                    let photoScript = document.createElement('script');
                    photoScript.setAttribute('src','javascript/photoGallary.js');
                    document.querySelector('body').append(photoScript);
                    let photos=document.createElement('picture');
                    document.querySelector('article').append(photos);   
                },1700);
            }
            resolve(wievPhoto());
        });
    };//photoGallary
}
// }
function reloadLink(){
    return new Promise((resolve)=>{
        function linkAwait(){
            console.log('reloadLink');
            
            // let scriptChangeLink=document.createElement('script');
            // scriptChangeLink.src=/
            window.addEventListener('hashchange',()=>{
                if(window.location.href=='http://localhost:3000/photo#about'){
                    location.href='http://localhost:3000#about';
                }else if(window.location.href=='http://localhost:3000/photo#ourWork'){
                    location.href='http://localhost:3000#ourWork';
                }else if(window.location.href=='http://localhost:3000/photo#contacts'){
                    location.href='http://localhost:3000#contacts';
                }

                if(window.location.href=='https://web.qucu.ru/photo#about'){
                    location.href='https://web.qucu.ru#about';
                }else if(window.location.href=='https://web.qucu.ru/photo#ourWork'){
                    location.href='https://web.qucu.ru#ourWork';
                }else if(window.location.href=='https://web.qucu.ru/photo#contacts'){
                    location.href='https://web.qucu.ru#contacts';
                }
            });
        }
        resolve(linkAwait());
    });
}

async function loadNewScript(){
    if(location.href=='https://web.qucu.ru/photo'||location.href=='http://localhost:3000/photo.html'){
        await photoGallary();
    }
    if(location.href=='http://localhost:3000/photo'||location.href=='https://web.qucu.ru/photo'){
        await reloadLink();
    }
    await headerOnload();
    await bodyDocument();
    await domcontentloaded();
    await animatedTextGo();
};
window.addEventListener("DOMContentLoaded",loadNewScript);