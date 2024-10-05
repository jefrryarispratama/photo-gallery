import useTransition from "react-transition-state";
import './example.css'

function Example() {
    const [state, toggle] = useTransition({ timeout: 750, preEnter: true });
    return (
      <div>
        <button onClick={() => toggle()}>toggle</button>
        <div className={`example ${state.status}`}>React transition state</div>
      </div>
    );
  }
  
  export default Example;