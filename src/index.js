const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;

  // テキストボックスの値を初期化
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  console.log(deleteButton);

  //divタグの子要素に各要素を設定
  div.appendChild(li);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

