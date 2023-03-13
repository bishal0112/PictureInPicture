const videoElement = document.getElementById("video");
const selectBtn = document.getElementById("btn-select");
const startBtn = document.getElementById("btn-start");

// Prompt to select media stream, pass to video element, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  }catch(error){
    console.log("Oopss, Error: ", error);
  }
}

startBtn.addEventListener("click", async () =>{
  // Disable Button 
  startBtn.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  startBtn.disabled = false;
});

selectBtn.addEventListener("click", selectMediaStream);