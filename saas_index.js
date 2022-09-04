





function search_companion(value) 
{
let os=value.toLowerCase()
value =value.toLowerCase().split(" ")

let ab=[]
Object.entries(b.title).forEach(ev1=>{

    ev1[0].toLowerCase().split(" ").find(ev2=>{
        // console.log(value.includes(ev2),ev2 ,value,os.includes(ev1[0]),os)
        if(value.includes(ev2)|| os.includes(ev2))
        {
            ab.push(ev1[1].uuid)
            return true
        }
        return false

    })

})

window.c=ab
window.filter.dispatchEvent(event);


}


function update_list_with_updating_c_variable(tag)
{
  if(tag=== undefined)
  {
    window.c=create_display_list(b,true,false);
    window.filter.dispatchEvent(event);
  }
  else
  {
    window.c=create_display_list(b,false,tag);
    window.filter.dispatchEvent(event);
  }
}

window.filter=document.querySelector(".filters-container")
window.cards=document.querySelector(".snippets-container")
window.search=document.querySelector(".search-bar")
window.search_icon=document.querySelector(".search-icon")

window.search_query=window.location.search.replaceAll("?","").split("search=")[1]
window.search_init_performed=true

search.addEventListener("input",ev=>{
    if (ev.target.value === "")
    {
        search_icon.src="Assests/Images/search-icon.svg"
        update_list_with_updating_c_variable(undefined)
    }
    else
    {
        if(search_icon.src !=="Assests/Images/search-icon-cross.svg")
        {
            // search_icon.src="Assests/Images/search-icon-cross.svg"
            
        }
        search_companion(ev.target.value) 
       

    }
    

    })
    search_icon.addEventListener("click",ev=>{
        if(search_icon.src ==="Assests/Images/search-icon-cross.svg")
        {
            search_icon.src="Assests/Images/search-icon-cross.svg"
        }

    })


filter.addEventListener("complete",ev=>{

    // console.log("rnte")

      let filter_html=""

  Object.keys(b.tags).forEach(ev2=>{
    if (window.activeFilter === ev2)
    {
      // console.log("yes")
      filter_html +=`
      <div class="filter active" id="${ev2}">
        <p class="filter-text" id="${ev2}" >${ev2}</p>
      </div>
      `
    }
    else{
      // console.log("no",window.activeFilter)
      filter_html +=`
      <div class="filter" id="${ev2}">
        <p class="filter-text" id="${ev2}" >${ev2}</p>
      </div>
      `
    }
  })

  filter.innerHTML=filter_html

    
  document.querySelectorAll(".filter").forEach(ev=>{
    ev.addEventListener("click",ev=>{
      if (window.activeFilter!==ev.target.id)
      {

        window.activeFilter = ev.target.id
        // console.log(window.activeFilter)
        update_list_with_updating_c_variable(ev.target.id)
      }
      else
      {
        window.activeFilter = undefined
        update_list_with_updating_c_variable(undefined)
      }
      
    })

  })


  if(search_query !== undefined && search_init_performed === true)
  {
    search_init_performed=false
    search.value=search_query
    search_icon.src="Assests/Images/search-icon-cross.svg"
    search_companion(ev.target.value) 
    
  }
  

  
    let cards_html=""
    c.forEach(ev=>{
      let content=b.uuid[ev]
    //   console.log(content)  
      let logo_image=""
      if (content.language === "python")
      {
        logo_image="python-icon.svg"
      }
      
      if (content.language === "javascript")
      {
        logo_image="javascript-icon.svg"
      }
      if (content.language === "java")
      {
        logo_image="java-icon.svg"
      }
      cards_html+=`
      <li class="snippet">
      <div class="snippet-header">
        <div class="icon-container">
          <img src="Assests/Images/${logo_image}" alt="" />
        </div>
        <div class="snippet-title-tag">
          <a href="article.html?uuid=${content.uuid}" class="title"
            ><h2>${content.title}</h2></a>
          >
          <div class="tags-container">
           ${content.tags.map(tag =>`<p class="tag">${tag}</p>`)}
          </div>
        </div>
        <div class="icon-container share-icon-container" >
          <img src="Assests/Images/share-icon.svg" alt="Share-icon" id="${content.uuid}" />
        </div>
      </div>
      <div class="snippet-description">
        <p>
          ${content.short_intro}
        </p>
      </div>
      <div class="author">
        <p>${content.contributor_name}</p>
      </div>
    </li>
    `

    
    })
    cards.innerHTML=cards_html

    window.shareButton = document.querySelectorAll('.share-icon-container');
  
    shareButton.forEach(ev=>{
        ev.addEventListener('click', event => {
            console.log(event.target.id)
            if (navigator.share) {
              navigator.share({
                title: `${b.uuid[event.target.id].title}`,
                url:   `article.html?uuid=${event.target.id}`
              }).then(() => {
                console.log('Thanks for sharing!');
              })
              .catch(console.error);
            } else {
              // fallback
            }
          });

    })
  
  
  
})






