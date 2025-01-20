const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-header');
        } else{
            entry.target.classList.remove('show-header');
        }
    } )
});

const elementsHeader = document.querySelectorAll('.hidden-header');

elementsHeader.forEach( (element) => myObserver.observe(element));