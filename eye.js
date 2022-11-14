const btn = document.querySelectorAll(".btn");
const eyeBall = document.querySelector(".eye-ball");
const eye_ref = document.querySelectorAll(".eye");

export default function eyeFX() {
  // rotate eye
  document.body.addEventListener("mousemove", (e) => {
    eye_ref.forEach((eye) => {
      let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;

      let x = e.clientX;
      let y = e.clientY;

      let radian = Math.atan2(x - eyeX, y - eyeY);

      let rotationDegree = radian * (180 / Math.PI) * -1 + 180;

      eye.style.transform = "rotate(" + rotationDegree + "deg)";
    });
  });

  // react eye on hover buttons
  btn.forEach((el) => {
    el.addEventListener("mouseover", () => {
      eyeBall.style.width = "70%";
      eyeBall.style.height = "70%";
    });
    el.addEventListener("mouseleave", () => {
      eyeBall.style.width = "50%";
      eyeBall.style.height = "50%";
    });
  });
}
// document.body.addEventListener("mouseleave");
