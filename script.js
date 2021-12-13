window.addEventListener('load', ()=>{
    const form = document.getElementById('form');
    const text = document.getElementById('textarea');
    const clearBtn = document.getElementById('clear-btn');
    const outputDiv = document.getElementById('output');

    form.addEventListener('submit', handleSubmit);
    clearBtn.addEventListener('click', handleClear);

    function handleClear(){
        text.value = "";
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(text.value.trim());

        const list = text.value.trim().split('\n').map(o => o.split('\t'));
        const lastIndex = list.length - 1;

        const output = list.map((item, itemIndex) => {
            const startRow = "(";
            const endRow = ")" + (itemIndex !== lastIndex ? ",<br/>" : "");

            const row = item.reduce((prev, curr, i)=> {
                const value = `\'${curr.trim()}\'`;
                const split = i !== item.length - 1 ? ", " : "";
                return prev + value + split;
            }, startRow);

            return row + endRow;
        });
        outputDiv.innerHTML = `VALUES <br/> ${output.join("")}`;
    }
});

