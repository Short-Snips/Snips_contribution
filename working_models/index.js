import {Articles,tags} from "./../Snippets.js";
import create_index from "./create_index.js";


window.b=create_index(Articles,tags)
window.event = new Event('complete');


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  
function create_display_list(index,random,tag)
  {
    if(random === true)
    {
      const display_pp=Object.keys(index.uuid)
      shuffleArray(display_pp)
      return display_pp
    }
    else if(random === false && tag !== undefined)
    {
     let display_pp=index.tags[tag]
      shuffleArray(display_pp)
        let display_pp2=[]
        display_pp.forEach(ev=>{display_pp2.push(ev.uuid)})
        console.log(display_pp2)
      return display_pp2
    }
    else{
      console.log("error",index,display,random,tag)
    }
  
    }

window.create_display_list=create_display_list
window.c=create_display_list(b,true,undefined)
// console.log(b)
// console.log(c)
window.filter.dispatchEvent(event);

// var editor = ace.edit('codeEditor');
// editor.session.setUseWorker(false);
// editor.setShowPrintMargin(false);
// editor.setReadOnly(true);
// editor.session.setValue(window.b.uuid['98879124-986e-4a08-887f-5e918e89a558'].code);