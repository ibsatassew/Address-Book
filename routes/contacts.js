const express = require("express");
const router = express.Router();

// Define your contacts array here
let contacts = [
  // Example contacts data
  { id: 1, name: "John Doe", phone: "1234567890", email: "john@example.com" },
  { id: 2, name: "Jane Smith", phone: "9876543210", email: "jane@example.com" },
];

// GET all contacts
router.get("/", (req, res) => {
  res.json(contacts);
});

// GET single contact by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const contact = contacts.find((c) => c.id === id);
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).send("Contact not found");
  }
});

// POST create new contact
router.post("/", (req, res) => {
  const newContact = req.body;
  newContact.id = contacts.length + 1; // Assign a unique ID
  contacts.push(newContact);
  res.status(201).json(newContact);
});

// PUT update contact by ID
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedContact = req.body;
  const index = contacts.findIndex((c) => c.id === id);
  if (index !== -1) {
    contacts[index] = { ...contacts[index], ...updatedContact };
    res.json(contacts[index]);
  } else {
    res.status(404).send("Contact not found");
  }
});

// DELETE contact by ID
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = contacts.findIndex((c) => c.id === id);
  if (index !== -1) {
    const deletedContact = contacts.splice(index, 1)[0];
    res.json(deletedContact);
  } else {
    res.status(404).send("Contact not found");
  }
});

module.exports = router;
