const shout = (text) => {
  return text.toUpperCase();
};
const whisper = (text) => {
  return text.toLowerCase();
};
const logShout = (text) => {
  console.log(text.toUpperCase());
};
const logWhisper = (text) => {
  console.log(text.toLowerCase());
};

const sayHiToHeadphonedRoommate = (text) => {
  if (text === text.toUpperCase()) {
    return "YES INDEED!";
  }
  if (text === text.toLowerCase()) {
    return "I can't hear you!";
  }
  if (text === "Let's have dinner together!") {
    return "I would love to!";
  }
};
