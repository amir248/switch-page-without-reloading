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
        // function load(){
            // window.addEventListener('DOMContentLoaded',changeContent);
            function changeContent(){
                setTimeout(()=>{
                    window.addEventListener('hashchange',changeContent);
                    if(window.location.hash=='#about'){
                        console.log('oNe');
                        document.querySelector('#content').innerHTML=`It's first page. <br> Obaut it's company.`;
                    }else if(window.location.hash=='#ourWork'){
                        console.log('Two');
                        document.querySelector('#content').innerHTML=`Two page! <br> This order site with SEO and adveritser. <br> The specialization of the company "Baron Sajterstauzen Web Workshop" is creating websites using simple JavaScript technologies with SEO optimization and promotion in contextual advertising.`;
                    }else if(window.location.hash=='#contacts'){
                        console.log('Three');
                        document.querySelector('#content').innerHTML=`Three page! <br>  This contacts <br> My WhatsApp <a href="https://wa.clck.bar/77004145901">+77004145901</a> And my phone number <a href="tel:+77004145901">+77004145901</a>`;
                    }else if(window.location.href=='http://localhost:3000/'||'https://amir248.github.io/switch-page-without-reloading/'){
                        console.log('^_^');
                        setTimeout(()=>{
                            document.querySelector('#content').innerHTML=`Home page! <br>
                               This is a simple example of a site with loading pages via javascript, like this: "single page application". So that you can make a multi-page site and push it to the "free" GitHub, with switching pages where there is a loading of sections.
                            `;
                        },1700);

                    }else{
                        console.log('else');
                    }
                },300);
                    
            };
            
        // };//load
        resolve(changeContent());
    })
};//domcontentloaded
async function loadNewScript(){
    await headerOnload();
    await bodyDocument();
    await domcontentloaded();
};
window.addEventListener("DOMContentLoaded",loadNewScript);