const initializecamera = async () => {
    const video = document.querySelector("#video");

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (e) {
        alert("sem acesso a camera.");
    }
};
initializecamera();