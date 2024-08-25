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

async function loadNewScript(){
    await headerOnload();
    await bodyDocument();
};
window.addEventListener("DOMContentLoaded",loadNewScript);