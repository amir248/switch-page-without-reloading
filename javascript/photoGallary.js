const img=document.createElement('img');
img.setAttribute('src','https://qucu.ru/img/correctPhotoGallary/DSC_8196.webp');
img.setAttribute('id','nextPhoto');
document.querySelector('picture').append(img);

let countClick=+1;
document.querySelector('#nextPhoto').addEventListener("click",()=>{
    countClick++;
    // console.log('oKK '+ countClick);
    img.src='https://amir.qucu.ru/public/images/DSC_7774-550.webp';
    if(countClick==2){
        img.src='https://qucu.ru/blozhik/img/beg/P11111-132550.jpg';
    console.log('it\'s count Click '+countClick);
    }else if(countClick==3){
    countClick=0;
    img.src='https://qucu.ru/blozhik/img/excellent-work/DSC_8232-900.webp';
    console.log('it\'s count Click '+countClick);
    }else{
        console.log('IF ELSE '+countClick);
        return img.setAttribute('src','https://qucu.ru/img/correctPhotoGallary/DSC_8196.webp');
    }
});
