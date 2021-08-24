export default function lazyLoading(imgs){
    const images=imgs;
    let imageOptions={
        threshold:0,
        rootMargin : "0px 0px 300px 0px"
    };
    let observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach((entry)=>{
            if(!entry.isIntersecting) return;
            const image=entry.target;
            const newURL=image.getAttribute('data-src')
            image.src = newURL;
            observer.unobserve(image)
        })
    },imageOptions);

    images.forEach((image)=>{
        observer.observe(image)
    });
}