const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const innerText = document.getElementById("add-text").value;

  // テキストボックスの値を初期化
  document.getElementById("add-text").value = "";
  alert(innerText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

