

function handleMenu(){
    navDialog.classList.toggle("hidden");	
    
}
const navDialog = document.getElementById("navDialog");

// function setupIntersectionObserver(element ,isLR,speed){

//     const intersectionCallbac = (entries) => {
//         const isIntersecting = entries[0].isIntersecting;
//         console.log(element,isIntersecting);
        
//         if(isIntersecting){
//             document.addEventListener("scroll",scrollHandler);
//             }
//             else{
//                 document.removeEventListener("scroll",scrollHandler);
//             }
//     const intersectionObserver = new IntersectionObserver(intersectionCallbac)  
//     intersectionObserver.observe(element);

//     function scrollHandler(){
//         const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
//         element.style.transform = `translateX(${translateX}px)`;
//     }
// }
// }

// const line1 = document.getElementById("line1");
// setupIntersectionObserver(line1,true,0.15);
// const line2 = document.getElementById("line2");
// setupIntersectionObserver(line2,false,0.15);
// const line3 = document.getElementById("line3");
// setupIntersectionObserver(line3,true,0.15);