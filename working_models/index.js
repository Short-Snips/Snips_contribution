import {Articles,tags} from "./../Snippets.js";
import create_index from "./create_index.js";



window.b=create_index(Articles,tags)
console.log(b)

var editor = ace.edit('codeEditor');
editor.session.setUseWorker(false);
editor.setShowPrintMargin(false);
editor.setReadOnly(true);
editor.session.setValue(window.b.uuid['98879124-986e-4a08-887f-5e918e89a558'].code);