import React, { useState, useEffect } from "react";
import Alert from "./components/Alert";
import List from "./components/List";

function getList() {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
}

function App() {
  // name of the item to be added to the list
  const [name, setName] = useState("");

  // list which is to be displayed when item is added.
  const [list, setList] = useState(getList());

  // changing button name when ediitng the list item
  const [isEditing, setIsEditing] = useState(false);

  // ID of the item to be edited
  const [editID, setEditID] = useState(null);

  // alert handled when item is added or deleteed from the list
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    if (!name) {
      // display alert
      AlertFunc(true, "please enter an item", "danger");
    } else if (name && isEditing) {
      // handle the edit
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      AlertFunc(true, "Item updated", "success");
      setEditID(null);
      setIsEditing(false);
    } else {
      // show alert
      AlertFunc(true, "item added to list", "success");
      // adding items to the list.
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  function AlertFunc(show, msg, type) {
    setAlert({ show, msg, type });
  }

  function clearItems() {
    setList([]);
    AlertFunc(true, "Empty List", "danger");
  }

  function removeItem(id) {
    AlertFunc(true, "Item Removed", "danger");
    setList(list.filter((item) => item.id !== id));
  }

  function editItem(id) {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={AlertFunc} list={list} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder="e.g. Bread"
            className="grocery"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} editItem={editItem} removeItem={removeItem} />
          <button onClick={clearItems} className="clear-btn">
            Clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
