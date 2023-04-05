let imageapi='https://picsum.photos/v2/list?page=1&limit=50'
let data=document.querySelector('.body-api')

let sample=fetch(imageapi,{
    "method": 'GET',
    "content-type": 'application/; charset=UTF-8'
})
console.log(sample)
sample.then((response)=>{
    console.log(response)  //response
    let result=response.json()
    return result
})
    .then((response)=>{
        console.log(response);
        for(let i of response)
        {
            console.log(i['url']);
            var img_out=i['download_url']
            var creatediv=document.createElement('div');
            var imagetag=document.createElement('img')
          
            // imagetag.src=img_out;
            // imagetag.append('height',"50px");
            // imagetag.append('width',"50px");
            creatediv.innerHTML=`<div class="card total"  ; style="width:24rem ">
            <img class="card-img-top" src=${img_out} >
            <div class="card-body">
              <h5 class="card-title">Image Id: ${i['id']}</h5>
              <p class="card-text">Author: ${i['author']}</p>
              <p class="card-text">Width: ${i['width']}</p>
              <p class="card-text">Height: ${i['height']}</p>
            </div>
          </div>`
          data.append(creatediv)
        }
    })

 