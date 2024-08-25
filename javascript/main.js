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
                    if(window.location.href=='http://localhost:3000/#about'||'https://amir248.github.io/switch-page-without-reloading/#about'){
                        console.log('oNe');
                        document.querySelector('#content').innerHTML=`It's first page. <br> Obaut it's company.`;
                    }else if(window.location.href=='http://localhost:3000/#ourWork'||'https://amir248.github.io/switch-page-without-reloading/#ourWork'){
                        console.log('Two');
                        document.querySelector('#content').innerHTML=`Two page! <br> This order site with SEO and adveritser`;
                    }else if(window.location.href=='http://localhost:3000/#contacts'||'https://amir248.github.io/switch-page-without-reloading/#contacts'){
                        console.log('Three');
                        document.querySelector('#content').innerHTML=`Three page! <br>  This contacts`;
                    }else if(window.location.href=='http://localhost:3000/'||'https://amir248.github.io/switch-page-without-reloading/'){
                        console.log('^_^');
                        setTimeout(()=>{
                            document.querySelector('#content').innerHTML=`Home page! <br>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reiciendis molestiae delectus nobis. Minima repellat suscipit temporibus, iusto quia nostrum, dolorem quas fugiat nobis commodi ipsa exercitationem amet, illum tempore.
                            `;
                        },1500);

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