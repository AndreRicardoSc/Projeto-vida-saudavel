//observer do header
const myObserverHeader = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-header');
        }
    } )
});

const elementsHeader = document.querySelectorAll('.hidden-header');

elementsHeader.forEach( (element) => myObserverHeader.observe(element));

//observer do show-left-right
const myObserverLr = new IntersectionObserver ( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-lr');
        }
    })
});

const elementsLr = document.querySelectorAll('.hidden-lr');

elementsLr.forEach( (element) => myObserverLr.observe(element));

//observer do show-right-left
const myObserverRl = new IntersectionObserver ( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-rl');
        }
    })
});

const elementsRl = document.querySelectorAll('.hidden-rl');

elementsRl.forEach( (element) => myObserverRl.observe(element));
