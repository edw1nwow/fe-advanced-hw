const keyboard = [['q','w','e','r','t','y','u','i','o','p','[',']','\\'],['a','s','d','f','g','h','j','k','l',';','\''],['z','x','c','v','b','n','m',',','.','/']];
 
console.log(keyboard);
function createLayout(){
    for (let i=0;i<3;i++){
        for (let j=0;j<keyboard[i].length;j++){
           let div = document.createElement('div'); 
            div.innerHTML = keyboard[i][j]; 
            
            if (i == 0){
            div.className = "toprow";
            const up = document.querySelector(".top")
                up.appendChild(div, up.firstChild);
            
        }
        else if (i == 1){
            const up = document.querySelector(".mid")
                up.appendChild(div, up.firstChild);
            div.className = "middlerow";
        }
        else if(i == 2){
            const up = document.querySelector(".bot")
                up.appendChild(div, up.firstChild);
            div.className = "bottomrow";
        } 
        }
       
    }
}
createLayout();






 
