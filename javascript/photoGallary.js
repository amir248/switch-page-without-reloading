const img=document.createElement('img');
img.setAttribute('src','img/1726571948298.jpg');
img.setAttribute('id','nextPhoto');
document.querySelector('picture').append(img);

var countClick=+1;
document.querySelector('#nextPhoto').addEventListener("click",()=>{
    countClick++;
    // console.log('oKK '+ countClick);
    img.src='img/1726571948249.jpg';
    if(countClick==2){
        img.src='img/1726572642360.jpg';
    console.log('it\'s count Click '+countClick);
    }else if(countClick==3){
    img.src='img/1726571948265.jpg';
    console.log('it\'s count Click '+countClick);
    }else if(countClick==4){
        img.src='img/1726571948284.jpg';
    countClick=0;
}else{
        console.log('IF ELSE '+countClick);
        return img.setAttribute('src','img/1726571948298.jpg');
    }
});
let leftButton=document.createElement('span');
leftButton.setAttribute('id','leftButton');
leftButton.innerHTML='&lt;';
leftButton.style.cssText='position:absolute;font-size:33px;text-shadow: 1px 1px white;left:10px;border-radius:50%; background:rgba(255,255,255,0.3);';
document.querySelector('picture').prepend(leftButton);
let rightButton=document.createElement('span');
rightButton.setAttribute('id','rightButton'); 
rightButton.innerHTML='&gt;';
rightButton.style.cssText='position:absolute;font-size:33px;text-shadow: 1px 1px white;right:10px;border-radius:50%; background:rgba(255,255,255,0.3);';
document.querySelector('picture').append(rightButton);
setTimeout(()=>{
    document.querySelector('#leftButton').addEventListener('click',()=>{
            countClick++;
            img.src='img/1726571948249.jpg';
            if(countClick==2){
                img.src='img/1726572642360.jpg';
            console.log('it\'s count Click '+countClick);
            }else if(countClick==3){
            img.src='img/1726571948265.jpg';
            console.log('it\'s count Click '+countClick);
            }else if(countClick==4||countClick>4){
                img.src='img/1726571948284.jpg';
            countClick=0;
        }else{
                console.log('IF ELSE '+countClick);
                return img.setAttribute('src','img/1726571948298.jpg');
            }
    });
    document.querySelector('#rightButton').addEventListener('click',()=>{
            countClick--;
            // console.log('oKK '+ countClick);
            img.src='img/1726571948249.jpg';
            if(countClick==2){
                img.src='img/1726572642360.jpg';
            console.log('it\'s count Click '+countClick);
            }else if(countClick==3){
            img.src='img/1726571948265.jpg';
            console.log('it\'s count Click '+countClick);
            }else if(countClick==0){
                img.src='img/1726571948284.jpg';
            countClick=4;
        }else{
                console.log('IF ELSE '+countClick);
                return img.setAttribute('src','img/1726571948298.jpg');
            }
    });
},777);