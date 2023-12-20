import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let totalCount = 0;

  const [total, setTotal] = useState(0); //useState UI ' da anında etkileşime geçmek için değişken tanımlarken kullanılır.

  const increase = () => {
    setTotal((prevState) => {
      //Birden fazla satır kod yazarken değeri return etmeliyiz!
      return prevState + 1;
    });
  };

  const decrease = () => {
    setTotal(total - 1);
  };

  useEffect(() => {
    //useEffect dep Listteki herhangi bir değişken değiştiğinde tetiklenir.her sayfa açılışı useEffect'i tetikler.
    console.log("useEffect run!");
  }, [total]);

  
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
  
    const InputChange = (e) => {
      setInputValue(e.target.value);
    }
  
    const AddTodo = () => {
      if (inputValue.trim() !== '') {
        setTodos([...todos, inputValue]);
        setInputValue('');
      }
    };
  
    const DeleteTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };

  return (
    <>
      <div className="divCenter">
      <p>Toplam Tıklama Sayısı : {total}</p>
      
      <button
        onClick={() => {
          increase();
        }}
      >
        +
      </button>
        
      <button onClick={decrease}>-</button>
      </div>
      <hr></hr>
      
      <div className='divCenter'>
      <input type="text" value={inputValue} onChange={InputChange} />
      <button type='button' onClick={AddTodo}>Ekle</button>
      </div>
      <div className="divCenter">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button type='button' onClick={() => DeleteTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>

    </>
  );
}

export default App;
