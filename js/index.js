const addBtn = document.getElementById("add");
const searchBtn = document.getElementById("searchBtn");
const deleteBtn = document.getElementById("deleteBtn");
const contactList = document.getElementById("contactList");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const li = document.createElement("li");
  li.textContent = `${name}: ${phone}`;
  contactList.appendChild(li);
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const search = document.getElementById("search").value;
  const contacts = contactList.getElementsByTagName("li");
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].textContent.includes(search)) {
      contacts[i].style.display = "block";
    } else {
      contacts[i].style.display = "none";
    }
  }
});

deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const del = document.getElementById("delete").value;
  const contacts = contactList.getElementsByTagName("li");
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].textContent.includes(del)) {
      contacts[i].remove();
    }
  }
});
