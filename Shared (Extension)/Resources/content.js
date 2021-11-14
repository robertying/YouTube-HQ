async function setHighestQuality() {
  const settingsButton = document.querySelector(".ytp-settings-button");
  if (settingsButton) {
    settingsButton.click();

    const qualityMenuItem = Array.from(
      document.querySelectorAll(".ytp-menuitem-label")
    ).find((el) => el.textContent === "Quality");

    if (qualityMenuItem) {
      qualityMenuItem.click();

      setTimeout(() => {
        const highestQualityMenuItem =
          document.querySelector(".ytp-panel-menu")?.children?.[0];
        highestQualityMenuItem?.click();
      }, 500);
    }
  }
}

const videoEl = document.querySelector(".video-stream");
if (videoEl) {
  videoEl.addEventListener("loadedmetadata", function () {
    setHighestQuality();
  });
}
