const accordianItems = document.querySelectorAll(".accordian-items,.accordian-title");

for(i = 0;i<accordianItems.length;i++){
    accordianItems[i].addEventListener("click",function(){
        this.classList.toggle("active");
    })
}


    
