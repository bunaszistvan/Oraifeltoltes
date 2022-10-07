(()=>{
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>{
        if(xhr.status === 200 && xhr.readyState === 4){
            let photos = JSON.parse(xhr.response);
            let gallery = document.getElementById('gallery');
            photos.map((photo)=>{
                let img = document.createElement('img');
                img.src = photo.url;
                img.alt = photo.title;
                gallery.appendChild(img);
            })
            
        }

    }
    
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos');
    xhr.send();

})();