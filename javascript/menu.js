document.querySelector('#menu').addEventListener('click',openMenu);
const statusSite={};
statusSite.countClick=+0; 

function openMenu(){
    statusSite.countClick++; 
    console.log(statusSite.countClick);
    document.querySelector('body').style.overflow='hidden';
    let naturalBox=document.createElement('div');
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
    `;
    naturalBox.setAttribute('id','boxMenu');
    naturalBox.innerHTML=`
        <a href='#about'>О компании</a>
        <a href='#ourWork'>Наши работы</a>
        <a href='#contacts'>Контакты</a>
        <a href='tel:+7 700 414 58 01'>+7 700 414 59 01</a>
    `;
    document.querySelector('main').append(naturalBox);
    document.querySelector('#boxMenu').addEventListener('click',()=>{
        document.querySelector('body').style.overflow='auto';
        document.querySelector('#boxMenu').remove();
        statusSite.coutClick=0;
    });
}