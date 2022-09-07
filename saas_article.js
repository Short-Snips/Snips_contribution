

window.filter=document.querySelector("article")
window.active=document.querySelector(".active")
window.search=document.querySelector(".search-bar")
window.search_icon=document.querySelector(".search-icon")

window.search_icon.addEventListener("click",ev=>{
    window.location.href=`./index.html?search=${search.value}`    
})

search.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      window.location.href=`./index.html?search=${search.value}`   
      // Trigger the button element with a click
     
    }
  });





filter.addEventListener("complete", ev=>{


    if(window.location.search.includes("uuid"))
   {
    window.uuid=window.location.search.replaceAll("?","").split("uuid=")[1]
    if(Object.keys(b.uuid).find(ev=> ev === uuid ) !== undefined)
    {
        window.article=b.uuid[uuid]
    }
    else{
        window.notFound=true
    }
    }
   else
   {
       window.notFound=true
   }

   if(window.notFound===true)
   {
      // add Article not found svg
    filter.innerHTML = `
    Articles not found:
  
  `
  return true



   }
   else{
    let logo_image="python-icon.svg";
    let aa=[]
    article.content.split("\n").forEach(ev=>{
      if (ev !== "")
      {
          
        aa+=`<p>${ev}</p>`

      }
    })
    if (article.language === "python")
    {
      logo_image="python-icon.svg"
        lan="python"
    }
    
    if (article.language === "javascript")
    {
      logo_image="javascript-icon.svg"
      lan="javascript"
    }
    if (article.language === "java")
    {
      logo_image="java-icon.svg"
      lan="java"
    }

    active.innerHTML=article.title
    article.href=window.location.href

    filter.innerHTML = `
    <div class="article-head">
    <div class="icon-container" >
      <img src="Assests/Images/${logo_image}" alt="" />
    </div>
    <div class="title-author-container">
      <h1 class="article-title">${article.title}</h1>
      <p class="article-author">${article.contributor_name}<span>${article.contribution_date}</span></p>
    </div>
    <div class="icon-container share-icon-container" id="${article.uuid}">
      <img src="Assests/Images/share-icon.svg" alt="" id="${article.uuid}" />
    </div>
  </div>
  <div class="article-content">
    ${aa}
    <div class="code" id="codeEditor">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, est?
    </div>

    <div class="code" id="editor">
=======
    <div class="code example" id="editor">
>>>>>>> 2546315951180268fca2551650228b0e502d98f9
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, est?
    </div>

  </div>
  
  
  `


   }
   

   


window.editor = ace.edit('codeEditor');
editor.session.setUseWorker(false);
editor.setShowPrintMargin(false);
editor.setReadOnly(true);
editor.setOptions({
    useWrapMode: true,
    highlightActiveLine: true,
    showPrintMargin: false,
    theme: 'ace/theme/tomorrow_night',
    mode:  `ace/mode/${lan}`
})
editor.session.setValue(window.b.uuid[article.uuid].code);


window.editor2 = ace.edit('editor');
editor2.session.setUseWorker(false);
editor2.setShowPrintMargin(false);
editor2.setReadOnly(true);
editor2.setOptions({
    useWrapMode: true,
    highlightActiveLine: true,
    showPrintMargin: false,
    theme: 'ace/theme/tomorrow_night',
    mode:  `ace/mode/${lan}`
})
editor2.session.setValue(window.b.uuid[article.uuid].examples);








let related=""
window.relatedCOntainer=document.querySelector(".article-snippets-container")
 create_display_list(b,false,article.tags[0]).find((ev,index) =>{
    
    if(article.uuid === ev)
    {
        return false
    }

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

    related+=`
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
      <div class="icon-container share-icon-container">
        <img src="Assests/Images/share-icon.svg" id="${content.uuid}" alt="" />
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

    if (index > 3)
    {
        return true

    }
    return false
 })
 relatedCOntainer.innerHTML =related

 window.shareButton = document.querySelectorAll('.share-icon-container');
  
   shareButton.forEach(ev=>{
       ev.addEventListener('click', event => {
        //    console.log(event.target.id)
           if (navigator.share) {
             navigator.share({
               title: `${b.uuid[event.target.id].title}`,
               url:   `article.html?uuid=${event.target.id}`
             }).then(() => {
            //    console.log('Thanks for sharing!');
             })
             .catch(console.error);
           } else {
             // fallback
           }
         });







})








   })






