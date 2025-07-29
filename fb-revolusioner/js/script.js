let arr = [
  {
    fullName: "Pemecah Biji",
    imgPath: "img/contributors/1-pemecah-biji.jpg",
    imgAlt: "Pemecah Profile",
    profileURL: "https://www.facebook.com/profile.php?id=61550047670233",
  },
  {
    fullName: "Master Avled",
    imgPath: "img/contributors/2-master-avled.jpg",
    imgAlt: "Pemecah Profile",
    profileURL: "https://www.facebook.com/delva.safarindo/",
  },
  {
    fullName: "Muhammad Akbar",
    imgPath: "img/contributors/3-muhammad-akbar.jpg",
    imgAlt: "Pemecah Profile",
    profileURL: "https://www.facebook.com/taufik.makasar.5/",
  },
  {
    fullName: "Hajime Umemiya",
    imgPath: "img/contributors/4-hajime-umemiya.jpg",
    imgAlt: "Hajime Profile",
    profileURL: "https://www.facebook.com/profile.php?id=61575621359439",
  },
  {
    fullName: "Johan Anj",
    imgPath: "img/contributors/5-johan-anj.jpg",
    imgAlt: "Johan Profile",
    profileURL: "https://www.facebook.com/profile.php?id=61556613417046",
  },
  {
    fullName: "AGIDYOP",
    imgPath: "img/contributors/6-agidyop.jpg",
    imgAlt: "Agidyop Profile",
    profileURL: "https://www.facebook.com/agidyop/",
  },
  {
    fullName: "Yaraa Raa",
    imgPath: "img/contributors/7-yaraa-raa.jpg",
    imgAlt: "Yaraa Profile",
    profileURL: "https://www.facebook.com/deaa.rmdhnn/",
  },
  {
    fullName: "Akashic Quarts",
    imgPath: "img/contributors/8-akashic-quarts.jpg",
    imgAlt: "Akashic Profile",
    profileURL: "https://www.facebook.com/akashic.quarts.2025/",
  },
  {
    fullName: "Frenkie Canesya",
    imgPath: "img/contributors/9-frenkie-canesya.jpg",
    imgAlt: "Frenkie Profile",
    profileURL: "https://www.facebook.com/Ustadz.Etoo/",
  },
  {
    fullName: "Author Tzy",
    imgPath: "img/contributors/10-author-tzy.jpg",
    imgAlt: "Author Profile",
    profileURL: "https://www.facebook.com/profile.php?id=61578123535396",
  },
];

function generateToppers(arr) {
  const toppersContainer = document.querySelector(".toppers-container");

  arr.forEach((e) => {
    const item = document.createElement("a");
    item.href = e.profileURL;
    item.target = "_blank";
    item.classList.add(
      "list-group-item",
      "list-group-item-action",
      "list-group-item-primary",
      "align-baseline"
    );

    const img = document.createElement("img");
    img.classList.add("rounded-circle", "border", "border-3", "border-primary");
    img.width = "50";
    img.src = e.imgPath;
    img.alt = e.imgAlt;

    const strong = document.createElement("strong");
    strong.classList.add("p-1");
    strong.textContent = e.fullName;

    item.appendChild(img);
    item.appendChild(strong);
    toppersContainer.appendChild(item);
  });
}

generateToppers(arr);
