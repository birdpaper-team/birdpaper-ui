import { ref } from "vue";

export const useScroll = () => {
  const pageLocation = ref<number>(0);

  function stop() {
    let scrollTop = window.scrollY;
    pageLocation.value = scrollTop;
    document.body.style.position = "fixed";
    document.body.style.top = "-" + scrollTop + "px";
  }

  function move() {
    document.body.style.position = "static";
    window.scrollTo(0, pageLocation.value);
  }

  return {
    pageLocation,
    stop,
    move
  }
};
