document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const contactList = document.getElementById("contactList");

  let contacts = [];

  function renderContacts() {
    contactList.innerHTML = "";
    contacts.forEach(function (contact, index) {
      const li = document.createElement("li");
      li.innerHTML = `
                <strong>${contact.name}</strong><br>
                Phone: ${contact.phone}<br>
                Email: ${contact.email}<br>
                <button onclick="editContact(${index})">Edit</button>
                <button onclick="deleteContact(${index})">Delete</button>
            `;
      contactList.appendChild(li);
    });
  }

  function addContact(name, phone, email) {
    contacts.push({
      name: name,
      phone: phone,
      email: email,
    });
    renderContacts();
  }

  window.deleteContact = function (index) {
    contacts.splice(index, 1);
    renderContacts();
  };

  window.editContact = function (index) {
    const newName = prompt("Enter new name:");
    const newPhone = prompt("Enter new phone:");
    const newEmail = prompt("Enter new email:");
    if (newName && newPhone && newEmail) {
      contacts[index] = {
        name: newName,
        phone: newPhone,
        email: newEmail,
      };
      renderContacts();
    }
  };

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    addContact(name, phone, email);
    contactForm.reset();
  });
});
