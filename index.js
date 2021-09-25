class LandingPage{
    constructor(){
        this.#bindEvents();
        this.benefits=document.querySelector(".benefits");
        this.articles=document.querySelector(".articles");
    }

    checkBenefits(){

        let options={
            rootMargin:"0px 0px -50px 0px",
        };

        let observer=new IntersectionObserver((entries,observer)=>{

            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    let title=entry.target.firstElementChild.firstElementChild.firstElementChild;
                    let text=title.nextElementSibling;
                    title.style.animation="toggle 1s ease-in-out forwards";
                    text.style.animation="toggle 1s ease-in-out forwards";
                    let svgs=document.querySelectorAll("[data-icon]");
                    svgs.forEach((svg)=>{
                        svg.style.animation="break-in 1s ease-in-out 2s forwards, rotate 4s ease-in-out 3s infinite";
                    })
                    let titles=document.querySelectorAll("[data-title]");
                    titles.forEach((title)=>{
                        title.style.animation="toggle 1s ease-in-out forwards";
                    })
                    let texts=document.querySelectorAll("[data-text]");
                    texts.forEach((text)=>{
                        text.style.animation="toggle 1s ease-in-out forwards";
                    })
                }else{
                    let title=entry.target.firstElementChild.firstElementChild.firstElementChild;
                    let text=title.nextElementSibling;
                    title.style.animation="none";
                    text.style.animation="none";
                    let svgs=document.querySelectorAll("[data-icon]");
                    svgs.forEach((svg)=>{
                        svg.style.animation="";
                        svg.style.animation="none";
                    })
                    let titles=document.querySelectorAll("[data-title]");
                    titles.forEach((title)=>{
                        title.style.animation="";
                        title.style.animation="none";
                    })
                    let texts=document.querySelectorAll("[data-text]");
                    texts.forEach((text)=>{
                        text.style.animation="";
                        text.style.animation="none";
                    })
                }
            })
        },options)

        observer.observe(this.benefits)
    }

    checkArticles(){
        this.changeAnimation();
    }

    changeAnimation(){
        
        if(window.innerWidth>=1024){

            let options={
                rootMargin:"0px 0px -50px 0px",
            };
    
            let observer=new IntersectionObserver((entries,observer)=>{

                entries.forEach((entry)=>{
                    if(entry.isIntersecting){
                        let articles=document.querySelector("[data-articles]");
                        articles.style.animation="break-in 2s ease-in-out forwards";
                        let articlesTitle=document.querySelector("[data-articles-title]");
                        articlesTitle.style.animation="show 1.5s ease-in-out forwards";
                    }else{
                        let articles=document.querySelector("[data-articles]");
                        articles.style.animation="none";
                        let articlesTitle=document.querySelector("[data-articles-title]");
                        articlesTitle.style.animation="none";
                    }
                })
            },options)
    
            observer.observe(this.articles)

        }else{
            let options={
                rootMargin:"0px 0px -50px 0px",
            };
    
            let observer=new IntersectionObserver((entries,observer)=>{

                entries.forEach((entry)=>{
                    if(entry.isIntersecting){

                        let lefts=document.querySelectorAll("[data-left]");
                        lefts.forEach((left)=>{
                            left.style.animation="break-in 2s ease-in-out forwards";
                        })
                        let rights=document.querySelectorAll("[data-right]");
                        rights.forEach((right)=>{
                            right.style.animation="break-in-other 2s ease-in-out forwards";
                        })
                    }else{

                        let lefts=document.querySelectorAll("[data-left]");
                        lefts.forEach((left)=>{
                            left.style.animation="none";
                        })
                        let rights=document.querySelectorAll("[data-right]");
                        rights.forEach((right)=>{
                            right.style.animation="none";
                        })
                    }
                })
            },options)
    
            observer.observe(this.articles)
        }
    }

    #bindEvents(){
        window.addEventListener("load",this.checkBenefits.bind(this));
        window.addEventListener("load",this.checkArticles.bind(this))
    }

}

new LandingPage();



//animation-name: toggle;
//animation-duration: 1s;
//animation-iteration-count: 1;
//animation-timing-function: ease-in-out;
//animation-fill-mode: forwards;