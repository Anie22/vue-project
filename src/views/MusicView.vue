<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="p-5">
        <div class="align-items-center justify-content-center">
            <div class="d-flex justify-content-center align-items-center contiles bg-dark color-light">
              <div>
                <audio class="song" src="../assets/music/osg_E_075.mp3"></audio>
              </div>
              <div class="tiles-holder">
                <div class="tiles">r</div>
              </div>
              <hr class="line">
              <div class="tiles-holder">
                <div class="tiles">r</div>
              </div>
              <hr class="line">
              <div class="tiles-holder">
                <div class="tiles">r</div>
              </div>
              <hr class="line">
              <div class="tiles-holder">
                <div class="tiles">r</div>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return{
      music: []
    }
  },

  created() {
    window.addEventListener("load", () => {
      const song = document.querySelectorAll(".song");
      const tilesHolder = document.querySelectorAll(".tiles-holder div");

      tilesHolder.forEach((tiles, index) => {
        tiles.addEventListener("click", function() {
          song[index].play();
        });
      });
    });
  }
}
</script>

<style scoped>
  .line{
    font-weight: 700;
    background-color: #f71616dc;
    width: 1px;
    height: inherit;
    transform: rotateX('angle');
  }
  .contiles{
    width: fit-content;
    height: 20em;
    gap: 10px;
  }
  .tiles{
    background: rgb(89, 233, 7);
    width: 50px;
    height: 8em;
    margin: 20px;
  }
</style>