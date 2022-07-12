import React, {useState} from 'react';

function Counter({initialNumber}) {
    const [count, setCount] = useState(initialNumber);

    return (
        <div>
            <p>Holi</p>
            <p data-testid="value">{count}</p>
            <button data-testid="button" onClick={() => setCount(count + 1)}>
                Click me!
            </button>
        </div>
    );
}

export default Counter;