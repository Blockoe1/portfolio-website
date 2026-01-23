let slideshows = [];

const SLIDESHOW_TIME = 10000;

class Slideshow
{
    // Set up the slideshow
    constructor(slideshow)
    {
        
        this.slideIndex = 0;
        this.slides = slideshow.querySelectorAll(".slide");
        const prevButton = slideshow.querySelector(".prev");
        const nextButton = slideshow.querySelector(".next");
        console.log(this.slides);

        prevButton.addEventListener("click", () => { this.moveSlide(1); });
        nextButton.addEventListener("click", () => { this.moveSlide(-1); });

        // Set up so it loops every couple seconds.
        this.timeout = setTimeout(this.addSlide, SLIDESHOW_TIME);
    }

    moveSlide(n)
    {
        this.slideIndex = this.loopIndex(this.slideIndex + n);

        // Remove all active, prev, and next classes.
        for(let i = 0; i < this.slides.length; i++)
        {
            this.slides[i].classList.remove("current");
            this.slides[i].classList.remove("next");
            this.slides[i].classList.remove("prev");
            this.slides[i].classList.remove("transition");
        }

        let nextIndex = this.loopIndex(this.slideIndex + 1);
        let prevIndex = this.loopIndex(this.slideIndex - 1);

        // Set transitions
        this.slides[this.slideIndex].classList.add("transition");
        if (n > 0)
        {
            this.slides[prevIndex].classList.add("transition");
        }
        else if(n < 0)
        {
            this.slides[nextIndex].classList.add("transition");
        }

        // Set the new active, next, and prev classes.
        this.slides[this.slideIndex].classList.add("current");
        this.slides[nextIndex].classList.add("next");
        this.slides[prevIndex].classList.add("prev");

        // When the slide is set, clear any present timeout and set a new one.
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.addSlide, SLIDESHOW_TIME);
    }
    loopIndex(n)
    {
        if (n >= this.slides.length)
        {
            n = n - this.slides.length;
        }
        else if (n < 0)
        {
            n = n + this.slides.length;
        }
        return n;
    }
}

function init()
{
    // Get all the slideshows and create a new Slideshow object for each that handles it.
    const sshows = document.querySelectorAll(".slideshow");
    for(let i = 0; i < sshows.length; i++)
    {
        slideshows[i] = new Slideshow(sshows[i]);
    }
}

document.addEventListener("DOMContentLoaded", init);