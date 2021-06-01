<template>
  <container>
    <Header />
    <router-view></router-view>
    <Footer />
  </container>
</template>

<script>
import Header from "./components/layout/TheHeader";
import Footer from "./components/layout/TheFooter";
import Container from "./components/ui/Container";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Container,
  },
  provide: {
    redTheme: "#810000",
    pinkTheme: "#ba135d",
    blueTheme: "#233e8b",
    orangeTheme: "#de8971",
    greenTheme: "#564a4a",
    brownTheme: "#7b6079",
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Limelight&display=swap");
:root {
  --yellowy-clr: #fdfaf6;
  /* --reddy-clr: #810000;
  --pinky-clr: #ba135d;
  --bluey-clr: #233e8b;
  --orangey-clr: #de8971;
  --greeny-clr: #564a4a;
  --browny-clr: #7b6079; */
  --pry-clr: #1b1717;
  --pry-font: "Courier Prime", monospace;
  --sec-font: "Limelight", cursive;
}
#app {
  font-family: var(--pry-font);
  color: var(--pry-clr);
}
</style>
