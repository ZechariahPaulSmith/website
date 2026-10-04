const divs = document.querySelectorAll(".parent > div");
const columns = 5;
const columnDelay = 100;
const randomDelay = 200;

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

// PAGE LOAD
divs.forEach((div, index) => {
    const column = index % columns;
    // Random timing within the column
    const random = Math.random() * randomDelay;
    const delay = column * columnDelay + random;
    setTimeout(() => {
        div.classList.add("is-visible");
    }, delay);
});

// LINK CLICK
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        divs.forEach((div, index) => {
            const column = index % columns;
            // Random timing within the column
            const random = Math.random() * randomDelay;
            const delay = column * columnDelay + random;
            setTimeout(() => {
                div.classList.remove("is-visible");
                div.classList.add("is-exiting");
            }, delay);
        });
        // Give the last column enough time to finish
        setTimeout(() => {
            window.location.href = link.href;
        }, (columns * columnDelay) + randomDelay + 0);
    });
});

document.addEventListener("scroll", () => {
    let value = window.scrollY;

    two.style.bottom = -value * 0.4 + "px";
    three.style.bottom = -value * 0.6 + "px";
    four.style.bottom = -value * 0.8 + "px";
    five.style.bottom = -value * 0.9 + "px";
    five.style.right = -value * 0.05 + "px";
})
