console.log('photoGallary');
const img=document.createElement('img');
img.setAttribute('src','https://qucu.ru/img/correctPhotoGallary/DSC_8196.webp');
img.setAttribute('id','nextPhoto');
document.querySelector('picture').append(img);

let countClick=+0;
document.querySelector('#nextPhoto').addEventListener("click",()=>{
    countClick++;
    console.log('oKK '+ countClick);
    img.src='https://amir.qucu.ru/public/images/DSC_7774-550.webp';
    if(countClick==2){
        countClick=0;
        img.src='https://qucu.ru/img/correctPhotoGallary/DSC_8196.webp';
    }
});
