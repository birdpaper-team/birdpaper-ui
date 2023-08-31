import { ref } from "vue";

export const useScroll = () => {
  const pageLocation = ref<number>(0);

  function stop() {
    let scrollTop = window.scrollY;
    pageLocation.value = scrollTop;
    document.body.style.overflow = "hidden";
  }

  function move() {
    document.body.style.overflow = "auto";
    window.scrollTo(0, pageLocation.value);
  }

  return {
    pageLocation,
    stop,
    move
  }
};
