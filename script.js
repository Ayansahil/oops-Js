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
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });

    form.reset();
    this.renderUi;
  },

  renderUi: function () {
    this.users.forEach(function (user) {
      function createUserCard(photo, name, role, bio) {
        // Main card div
        const card = document.createElement("div");
        card.className = "profile-card";

        // Avatar wrapper
        const avatarWrap = document.createElement("div");
        avatarWrap.className = "avatar-wrap";

        const img = document.createElement("img");
        img.src = user.photo;
        img.alt = "avatar";

        avatarWrap.appendChild(img);

        // Name
        const pname = document.createElement("div");
        pname.className = "pname";
        pname.textContent = user.username;

        // Role
        const prole = document.createElement("div");
        prole.className = "prole";
        prole.textContent = user.role;

        // Bio
        const pbio = document.createElement("div");
        pbio.className = "pbio";
        pbio.textContent = user.bio;

        // Assemble card
        card.appendChild(avatarWrap);
        card.appendChild(pname);
        card.appendChild(prole);
        card.appendChild(pbio);

        return card;
      }
      this.users.forEach((user) => {
        const card = createUserCard(user);
        container.appendChild(card);
      });
    });
  },
  removeUser: function () {},
};

userManager.init();
