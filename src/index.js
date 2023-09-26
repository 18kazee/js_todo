const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;

  // テキストボックスの値を初期化
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("list");
  li.innerText = inputText;

};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

