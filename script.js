const C3 = new Audio("sounds/C3.mp3");
const Db3 = new Audio("sounds/Db3.mp3");
const D3 = new Audio("sounds/D3.mp3");
const Eb3 = new Audio("sounds/Eb3.mp3");
const E3 = new Audio("sounds/E3.mp3");
const F3 = new Audio("sounds/F3.mp3");
const Gb3 = new Audio("sounds/Gb3.mp3");
const G3 = new Audio("sounds/G3.mp3");
const Ab3 = new Audio("sounds/Ab3.mp3");
const A3 = new Audio("sounds/A3.mp3");
const Bb3 = new Audio("sounds/Bb3.mp3");
const B3 = new Audio("sounds/B3.mp3");
const C4 = new Audio("sounds/C4.mp3");
const Db4 = new Audio("sounds/Db4.mp3");
const D4 = new Audio("sounds/D4.mp3");
const Eb4 = new Audio("sounds/Eb4.mp3");
const E4 = new Audio("sounds/E4.mp3");
const F4 = new Audio("sounds/F4.mp3");
const Gb4 = new Audio("sounds/Gb4.mp3");
const G4 = new Audio("sounds/G4.mp3");

const playSound = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};

// C3
const C3Key = document.querySelector(".C3-key");
const playC3 = () => {
  playSound(C3);
  C3Key.classList.add("active");
  setTimeout(() => C3Key.classList.remove("active"), 200);
};
C3Key.addEventListener("click", playC3);

// Db3
const Db3Key = document.querySelector(".Db3-key");
const playDb3 = () => {
  playSound(Db3);
  Db3Key.classList.add("active");
  setTimeout(() => Db3Key.classList.remove("active"), 200);
};
Db3Key.addEventListener("click", playDb3);

// D3
const D3Key = document.querySelector(".D3-key");
const playD3 = () => {
  playSound(D3);
  D3Key.classList.add("active");
  setTimeout(() => D3Key.classList.remove("active"), 200);
};
D3Key.addEventListener("click", playD3);

// Eb3
const Eb3Key = document.querySelector(".Eb3-key");
const playEb3 = () => {
  playSound(Eb3);
  Eb3Key.classList.add("active");
  setTimeout(() => Eb3Key.classList.remove("active"), 200);
};
Eb3Key.addEventListener("click", playEb3);

// E3
const E3Key = document.querySelector(".E3-key");
const playE3 = () => {
  playSound(E3);
  E3Key.classList.add("active");
  setTimeout(() => E3Key.classList.remove("active"), 200);
};
E3Key.addEventListener("click", playE3);

// F3
const F3Key = document.querySelector(".F3-key");
const playF3 = () => {
  playSound(F3);
  F3Key.classList.add("active");
  setTimeout(() => F3Key.classList.remove("active"), 200);
};
F3Key.addEventListener("click", playF3);

// Gb3
const Gb3Key = document.querySelector(".Gb3-key");
const playGb3 = () => {
  playSound(Gb3);
  Gb3Key.classList.add("active");
  setTimeout(() => Gb3Key.classList.remove("active"), 200);
};
Gb3Key.addEventListener("click", playGb3);

// G3
const G3Key = document.querySelector(".G3-key");
const playG3 = () => {
  playSound(G3);
  G3Key.classList.add("active");
  setTimeout(() => G3Key.classList.remove("active"), 200);
};
G3Key.addEventListener("click", playG3);

// Ab3
const Ab3Key = document.querySelector(".Ab3-key");
const playAb3 = () => {
  playSound(Ab3);
  Ab3Key.classList.add("active");
  setTimeout(() => Ab3Key.classList.remove("active"), 200);
};
Ab3Key.addEventListener("click", playAb3);

// A3
const A3Key = document.querySelector(".A3-key");
const playA3 = () => {
  playSound(A3);
  A3Key.classList.add("active");
  setTimeout(() => A3Key.classList.remove("active"), 200);
};
A3Key.addEventListener("click", playA3);

// Bb3
const Bb3Key = document.querySelector(".Bb3-key");
const playBb3 = () => {
  playSound(Bb3);
  Bb3Key.classList.add("active");
  setTimeout(() => Bb3Key.classList.remove("active"), 200);
};
Bb3Key.addEventListener("click", playBb3);

// B3
const B3Key = document.querySelector(".B3-key");
const playB3 = () => {
  playSound(B3);
  B3Key.classList.add("active");
  setTimeout(() => B3Key.classList.remove("active"), 200);
};
B3Key.addEventListener("click", playB3);

// C4
const C4Key = document.querySelector(".C4-key");
const playC4 = () => {
  playSound(C4);
  C4Key.classList.add("active");
  setTimeout(() => C4Key.classList.remove("active"), 200);
};
C4Key.addEventListener("click", playC4);

// Db4
const Db4Key = document.querySelector(".Db4-key");
const playDb4 = () => {
  playSound(Db4);
  Db4Key.classList.add("active");
  setTimeout(() => Db4Key.classList.remove("active"), 200);
};
Db4Key.addEventListener("click", playDb4);

// D4
const D4Key = document.querySelector(".D4-key");
const playD4 = () => {
  playSound(D4);
  D4Key.classList.add("active");
  setTimeout(() => D4Key.classList.remove("active"), 200);
};
D4Key.addEventListener("click", playD4);

// Eb4
const Eb4Key = document.querySelector(".Eb4-key");
const playEb4 = () => {
  playSound(Eb4);
  Eb4Key.classList.add("active");
  setTimeout(() => Eb4Key.classList.remove("active"), 200);
};
Eb4Key.addEventListener("click", playEb4);

// E4
const E4Key = document.querySelector(".E4-key");
const playE4 = () => {
  playSound(E4);
  E4Key.classList.add("active");
  setTimeout(() => E4Key.classList.remove("active"), 200);
};
E4Key.addEventListener("click", playE4);

// F4
const F4Key = document.querySelector(".F4-key");
const playF4 = () => {
  playSound(F4);
  F4Key.classList.add("active");
  setTimeout(() => F4Key.classList.remove("active"), 200);
};
F4Key.addEventListener("click", playF4);

// Gb4
const Gb4Key = document.querySelector(".Gb4-key");
const playGb4 = () => {
  playSound(Gb4);
  Gb4Key.classList.add("active");
  setTimeout(() => Gb4Key.classList.remove("active"), 200);
};
Gb4Key.addEventListener("click", playGb4);

// G4
const G4Key = document.querySelector(".G4-key");
const playG4 = () => {
  playSound(G4);
  G4Key.classList.add("active");
  setTimeout(() => G4Key.classList.remove("active"), 200);
};
G4Key.addEventListener("click", playG4);

window.addEventListener("keydown", ({ keyCode }) => {
  // Press Q
  if (keyCode === 81) return playC3();

  // Press 2
  if (keyCode === 50) return playDb3();

  // Press W
  if (keyCode === 87) return playD3();

  // Press 3
  if (keyCode === 51) return playEb3();

  // Press E
  if (keyCode === 69) return playE3();

  // Press R
  if (keyCode === 82) return playF3();

  // Press 5
  if (keyCode === 53) return playGb3();

  // Press T
  if (keyCode === 84) return playG3();

  // Press 6
  if (keyCode === 54) return playAb3();

  // Press Y
  if (keyCode === 89) return playA3();

  // Press 7
  if (keyCode === 55) return playBb3();

  // Press U
  if (keyCode === 85) return playB3();

  // Press I
  if (keyCode === 73) return playC4();

  // Press 9
  if (keyCode === 57) return playDb4();

  // Press O
  if (keyCode === 79) return playD4();

  // Press 0 
  if (keyCode === 48) return playEb4();

  // Press P
  if (keyCode === 80) return playE4();

  // Press [
  if (keyCode === 219) return playF4();

  // Press =
  if (keyCode === 187) return playGb4();

  // Press 
  if (keyCode === 221) return playG4();
}); 