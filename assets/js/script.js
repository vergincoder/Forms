// 1
let option = new Option("Classic","classic");
genres.append(option);
option.selected = true;


// 2
let elem = document.getElementById("elem");
let textArea = document.createElement("textArea");
elem.onclick = function() { 
    textArea.value = elem.innerHTML;
    textArea.onkeydown = function(event){
        if (event.key == "Enter"){
            this.blur()
        }
    }
    elem.replaceWith(textArea);
    textArea.focus();
}
textArea.onblur = function() {
    elem.innerHTML = textArea.value;
    textArea.replaceWith(elem);
}


// 3
let element = document.getElementById("bagua-table");
let textAreaTable = document.createElement('textAreaTable');
element.onclick = function(){
    textAreaTable.innerHTML = element.value
    textAreaTable.onkeydown = function(event){
        if (event.key == "Enter"){
            this.blur()
        }
    }
}