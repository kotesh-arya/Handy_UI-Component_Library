const modalOpenButton = document.querySelector(".modal-open-button");
const modal = document.querySelector(".modal-container");
const closeIcon = document.querySelector(".close-icon");
const codeFrame = document.querySelector(".frame-div");
modal.style.display = "none";

const handleModal = () => {
    modal.style.display = "block";
    modal.style.position = "absolute";
    codeFrame.style.display = "none";

}
const closeModal = () => {
    modal.style.display = "none";
    codeFrame.style.display = "block";

}
window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
        codeFrame.style.display = "block";
    }
}

modalOpenButton.addEventListener("click", handleModal);
closeIcon.addEventListener("click", closeModal);