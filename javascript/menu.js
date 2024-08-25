document.querySelector('#menu').addEventListener('click',openMenu);
const statusSite={};
statusSite.countClick=+0; 

function openMenu(){
    statusSite.countClick++; 
    console.log(statusSite.countClick);
    document.querySelector('body').style.overflow='hidden';
    let naturalBox=document.createElement('div');
    naturalBox.style.cssText=`
        font-size:0;
        height:0;
    `;
    setTimeout(()=>{
        naturalBox.style.cssText=`
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            font-size:30px;
            width:100%;
            height:100vh;
            background:#02A653;
            color:white;
            text-shadow:1px 1px black;
            position:fixed;
            top:0;
            transition: all 1s ease-out;
        `;
    },300);
    naturalBox.setAttribute('id','boxMenu');
    setTimeout(()=>{
        naturalBox.innerHTML=`
        <a href='#about'>О компании</a>
        <a href='#ourWork'>Наши работы</a>
        <a href='#contacts'>Контакты</a>
        <a href='tel:+7 700 414 58 01'>+7 700 414 59 01</a>
    `;
    },370);
    
    document.querySelector('main').append(naturalBox);
    document.querySelector('#boxMenu').addEventListener('click',()=>{
        document.querySelector('body').style.overflow='auto';
        naturalBox.style.cssText=`
            display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
                font-size:0px;
                width:100%;
                height:0vh;
                background:#02A653;
                color:white;
                text-shadow:1px 1px black;
                position:fixed;
                bottom:0;
                transition: all 1s ease-out;
        `;
        setTimeout(()=>{
           
        document.querySelector('#boxMenu').remove();

        },700);
        statusSite.coutClick=0;
    });
}