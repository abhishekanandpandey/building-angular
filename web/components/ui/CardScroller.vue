<template>
    <div class="scroll-container">
  
  <div class="scroll-off">
    <span class="scroll-overlay"></span>
    <span class="scroll-overlay"></span>
    <div class="scroll-on">
      <ul>
        <li class="active">test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'CardScroller',
    data() {
        return {
            wish: true
        }
    },
    mounted() {
        this.bindScroll();
    },
    methods: {
        bindScroll() {
        // JS needed ONLY for click stuff
        // Presentation/scrolling/snapping can be done using only CSS

        const scrollBox = document.querySelector(".scroll-on");
        const overlays = document.querySelectorAll(".scroll-overlay");

        const leftOverlay = Array.from(overlays).find(item => {
        return item.nextElementSibling && item.nextElementSibling.className === "scroll-overlay";
        });
        const rightOverlay = Array.from(overlays).find(item => {
        return item.previousElementSibling && item.previousElementSibling.className === "scroll-overlay";
        });
        const scrollItem = document.querySelector("ul");
        const panelItems = document.querySelectorAll("li");
        const disableActives = itemList => {
        itemList.forEach(item => {
            item.classList.remove("active");
        });
        };
        const onItemClick = ({ target }) => {
        target.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });
        if (!target.classList.contains("active")) {
            disableActives(panelItems);
            target.classList.add("active");
        }
        };
        panelItems.forEach(item => {
        item.addEventListener("click", onItemClick);
        });

        // Show/Hide scroll overlays
        function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
            args = arguments;
            var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
        }

        const leftOverlayVisibility = visible => {
        leftOverlay.style.opacity = visible ? 1 : 0;
        };
        const rightOverlayVisibility = visible => {
        rightOverlay.style.opacity = visible ? 1 : 0;
        };
        const controlOverlays = () => {
        if (scrollBox.scrollLeft === 0) {
            leftOverlayVisibility(false);
            } else {
            leftOverlayVisibility(true);
            }
            if (
            scrollBox.scrollLeft ===
            scrollItem.scrollWidth - scrollBox.clientWidth
            ) {
            rightOverlayVisibility(false);
            } else {
            rightOverlayVisibility(true);
            }
        }
        controlOverlays();
        scrollBox.addEventListener(
        "scroll",
        debounce(controlOverlays, 50)
        );


        }
    }
}
</script>

<style lang="scss" scoped>
/* General */

.scroll-container {
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

/* Horizontal scrolling/snapping styles */
.scroll-off {
  overflow: hidden;
  position: relative;
  display: flex;
  width: 100%;
  height: 220px;
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.scroll-on {
  position: relative;
  overflow-x: scroll;
  display: flex;
  scroll-snap-type: x mandatory;
  height: 240px;
}

ul {
  display: flex;
  width: auto;
  height: 220px;
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  scroll-snap-align: start;
  border-right: 1px solid grey;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 200px;
  cursor: pointer;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
li.active {
  background: lightblue;
}

/* 
Gradients to let user know that the content
is actually scrollable.
Depends on the item sizes inside the container.
It's nice to have, but perhaps you would want to use JS to hide/show left and right gradient based on the scrollX value.
It's probably impossible to achieve this with CSS only - was considering the 'double-scroll-container' thing, one wider by ${gradientWidth} than the other - but couldn't figure that out.
You may adjust the width of :pseudo's and paddings/margins on ul or .scroll-on.
*/
.scroll-overlay {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 70px;
  z-index: 5;
  pointer-events: none;
  transition: opacity 200ms ease;
}

.scroll-overlay:first-of-type {
  left: 0;
  opacity: 0;
  background-image: linear-gradient(to right, white, rgba(255,255,255,0));
}

.scroll-overlay:last-of-type {
  right: 0;
  background-image: linear-gradient(to left, white, rgba(255,255,255,0));
}

</style>