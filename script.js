let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
const container = document.querySelector(".cards-row");

const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      username: username.value.trim(),
      role: role.value.trim(),
      bio: bio.value.trim(),
      photo: photo.value.trim(),
    });

    form.reset();
    this.renderUi(); // <-- CALL the function
  },

  renderUi: function () {
    // clear existing cards
    container.innerHTML = "";

    // helper creates card from a user object
    const createUserCard = (user, index) => {
      const card = document.createElement("div");
      card.className = "profile-card";

      const avatarWrap = document.createElement("div");
      avatarWrap.className = "avatar-wrap";

      const img = document.createElement("img");
      img.src = user.photo || "https://via.placeholder.com/150";
      img.alt = "avatar";
      avatarWrap.appendChild(img);

      const pname = document.createElement("div");
      pname.className = "pname";
      pname.textContent = user.username || "No name";

      const prole = document.createElement("div");
      prole.className = "prole";
      prole.textContent = user.role || "";

      const pbio = document.createElement("div");
      pbio.className = "pbio";
      pbio.textContent = user.bio || "";

      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-btn";
      removeBtn.style.color = "red";
      removeBtn.textContent = "Remove";

      removeBtn.addEventListener("click", function () {
        userManager.removeUser(index);
      });

      card.appendChild(avatarWrap);
      card.appendChild(pname);
      card.appendChild(prole);
      card.appendChild(pbio);
      card.appendChild(removeBtn);

      return card;
    };

    // append each user card
    this.users.forEach((user, i) => {
      const card = createUserCard(user, i);
      container.appendChild(card);
    });
  },
  // remove user from card
  removeUser: function (index) {
    this.users.splice(index, 1);
    this.renderUi();
  },
};

userManager.init();
userManager.renderUi();
