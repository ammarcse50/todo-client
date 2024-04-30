import Board from "./Components/pages/Board/Board";
import Header from "./Components/pages/Header/Header";

const App = () => {
  return (
    <div className="font-saira max-w-4xl mx-auto bg-orange-500 rounded-lg shadow-xl">
      <Header></Header>
    
      <Board></Board>
    </div>
  );
};

export default App;
