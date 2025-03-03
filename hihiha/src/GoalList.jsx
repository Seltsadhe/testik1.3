import { useState } from "react";
import "./App.css"; // Подключаем стили

export default function GoalList() {
  const [goals, setGoals] = useState([
    { title: "Learn Html", description: "Learn basics tags" },
    { title: "Learn Css", description: "Learn basics css" },
    { title: "Learn JavaScript", description: "Learn basics JS" },
  ]);

  const [newGoal, setNewGoal] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setNewGoal({ ...newGoal, [e.target.name]: e.target.value });
  };

  const addGoal = () => {
    if (newGoal.title && newGoal.description) {
      setGoals([...goals, newGoal]);
      setNewGoal({ title: "", description: "" });
    }
  };

  const removeGoal = (index) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>Добавить новую цель</h2>
      <input
        type="text"
        name="title"
        placeholder="Название"
        value={newGoal.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Описание"
        value={newGoal.description}
        onChange={handleChange}
      />
      <button onClick={addGoal} className="add-btn">➕ Добавить</button>

      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Описание</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {goals.map((goal, index) => (
            <tr key={index}>
              <td>{goal.title}</td>
              <td>{goal.description}</td>
              <td>
                <button onClick={() => removeGoal(index)} className="delete-btn">❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
