const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const innerText = document.getElementById("add-text").value;
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

