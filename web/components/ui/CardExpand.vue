<template>
<div class="card-expand-container">
    <div class="card" onclick="this.classList.toggle('expanded')">
        <svg class="label" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="200" width="200">
            <defs>
                <clipPath id="myHex">
                    <path d="M9.875 23.825L51.14 0l41.267 23.825v47.65L51.14 95.3 9.876 71.475v-47.65" fill="#463833"/>
                    <path d="M12.067 25.09L51.14 2.533l39.075 22.56v45.117L51.14 92.767l-39.073-22.56V25.092" fill="#d8ae4b"/>
                </clipPath>
            </defs>
            <image width="200" height="200" xlink:href="https://www.tutorialspoint.com/videotutorials/images/coding_ground_home.jpg" clip-path="url(#myHex)" />
        </svg>

        <div class="text1">
            <div class="text-content">
            <h1 class="title">OUR GOODS</h1>
            <div class="body-text">are delivered with the same high quality as decades ago</div>
            </div>
        </div>
        <svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5"/></svg>
    </div>

    <div class="card" onclick="this.classList.toggle('expanded')">
        <svg class="label" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="200" width="200">
            <defs>
                <clipPath id="myLabel">
                    <path d="M91.673 67.13c7.954-10.064 7.954-24.343 0-34.407-1.492-12.742-11.59-22.838-24.33-24.33-10.065-7.955-24.344-7.955-34.41 0-12.74 1.492-22.836 11.588-24.33 24.33C.65 42.787.65 57.066 8.604 67.13c1.494 12.742 11.59 22.837 24.33 24.33 10.066 7.956 24.345 7.956 34.41 0 12.74-1.493 22.838-11.588 24.33-24.33" fill="#463833"/>
                    <path d="M89.43 66.408c7.586-9.6 7.586-23.22 0-32.82-1.425-12.155-11.056-21.785-23.21-23.21-9.6-7.587-23.22-7.587-32.82 0-12.155 1.425-21.785 11.055-23.21 23.21-7.587 9.6-7.586 23.22 0 32.82 1.425 12.155 11.055 21.785 23.21 23.21 9.6 7.587 23.22 7.587 32.82 0 12.154-1.425 21.785-11.055 23.21-23.21" fill="#d8ae4b"/>
                </clipPath>
            </defs>
            <image width="200" height="200" xlink:href="https://www.tutorialspoint.com/videotutorials/images/coding_ground_home.jpg" clip-path="url(#myLabel)" />
        </svg>    
            
            
    <div class="text2">
        <div class="text-content">
        <h1 class="title">OUR LABEL</h1>
        <div class="body-text">has stayed the same reliable brand for nearly a century</div>
        </div>
    </div>
    <svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5"/></svg>
    </div>
</div>
</template>

<script>
export default {
    name: 'CardExpand'
}
</script>

<style lang="scss" scoped>

.card-expand-container {
    align-items: center;
    display: flex;
    justify-content: center;
    font-family: sans-serif;
    margin: 0;
   
}

@media (max-width: 767px) {
  .card-expand-container {
    display: block;
  }
}
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  cursor: pointer;
  height: 300px;
  margin: 20px;
  padding: 0 20px;
  position: relative;
  -webkit-tap-highlight-color: rgba(0,0,0,0.025);
  text-align: center;
  transition: height 1000ms;
  width: 260px;
}
@media (max-width: 767px) {
  .card {
    left: calc(50% - 20px);
    transform: translateX(-50%);
  }
}
.card.expanded {
  height: 400px;
}
.label {
  margin-top: 30px;
  transform: translateY(10px);
  transition: transform 1000ms;
}
.card.expanded .label {
  transform: translateY(0);
}
.text1 {
  clip-path: polygon(0% 100%, 0 -90%, 50% -5%, 100% -90%, 100% 100%);
  -webkit-clip-path: polygon(0% 100%, 0 -90%, 50% -5%, 100% -90%, 100% 100%);
  transition: clip-path 1000ms;
}
.card.expanded .text1 {
  clip-path: polygon(0% 100%, 0 -100%, 50% -15%, 100% -100%, 100% 100%);
  -webkit-clip-path: polygon(0% 100%, 0 -100%, 50% -15%, 100% -100%, 100% 100%);
}
.text2 {
  clip-path: polygon(0% 100%,0% -80%,15% -70%,17.23% -53.59%,23% -40%,27.23% -28.94%,35% -20%,41.09% -13.59%,50% -10%,58.91% -13.23%,65% -20%,72.77% -28.23%,77% -40%,82.77% -54.65%,85% -70%,100% -80%,100% 100%);
  -webkit-clip-path: polygon(0% 100%,0% -80%,15% -70%,17.23% -53.59%,23% -40%,27.23% -28.94%,35% -20%,41.09% -13.59%,50% -10%,58.91% -13.23%,65% -20%,72.77% -28.23%,77% -40%,82.77% -54.65%,85% -70%,100% -80%,100% 100%);
  transition: clip-path 1000ms;
}
.card.expanded .text2 {
  clip-path: polygon(0% 100%,0% -90%,15% -80%,17.23% -63.59%,23% -50%,27.23% -38.94%,35% -30%,41.09% -23.59%,50% -20%,58.91% -23.23%,65% -30%,72.77% -38.23%,77% -50%,82.77% -64.65%,85% -80%,100% -90%,100% 100%);
  -webkit-clip-path: polygon(0% 100%,0% -90%,15% -80%,17.23% -63.59%,23% -50%,27.23% -38.94%,35% -30%,41.09% -23.59%,50% -20%,58.91% -23.23%,65% -30%,72.77% -38.23%,77% -50%,82.77% -64.65%,85% -80%,100% -90%,100% 100%);
}
.text-content {
  transform: translateY(-160px);
  transition: transform 1000ms;
}
.card.expanded .text-content {
  transform: translateY(-15px);
}
.chevron {
  position: absolute;
  bottom: 20px;
  left: calc(50% - 15px);
  transform-origin: 50%;
  transform: rotate(180deg);
  transition: transform 1000ms;
}
.card.expanded .chevron {
  transform: rotate(0deg);
}
.title {
  font-family: 'Alegreya Sans', sans-serif;
  font-weight: 900;
  margin: 20px 0 12px;
}
.body-text {
  padding: 0 20px;
}

</style>