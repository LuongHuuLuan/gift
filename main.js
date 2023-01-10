const intervalId = setInterval(() => {
  let loadingText = document.querySelector("#loading-text");
  let textLoad = loadingText.textContent;
  let percent = textLoad.substring(
    textLoad.indexOf(" ") + 1,
    textLoad.length - 1
  );
  if (percent == "100") {
    clearInterval(intervalId);
    document.querySelector("#success").style.display = "block";
  } else {
    let newLoadingText = "Loading " + (parseInt(percent) + 1) + "%";
    loadingText.textContent = newLoadingText;

    let processElement = document.querySelector("#process");
    processElement.style.width = percent + "vw";
  }
}, 1000);
