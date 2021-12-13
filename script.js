window.addEventListener('load', ()=>{
    const form = document.getElementById('form');
    const text = document.getElementById('textarea');
    const clearBtn = document.getElementById('clear-btn');
    const moneyFilter = document.getElementById('money-filter');
    const outputDiv = document.getElementById('output');

    let lastConvert = '';

    form.addEventListener('submit', handleSubmit);
    clearBtn.addEventListener('click', handleClear);
    moneyFilter.addEventListener('change', ()=>{
        if(lastConvert !== ''){
            convert(lastConvert);
        }
    });

    function handleClear(){
        text.value = "";
    }

    function handleSubmit(e){
        e.preventDefault();

        const list = text.value.trim().split('\n').map(o => o.split('\t'));
        lastConvert = list;
        convert(list);
    }

    function convert(list){
        const lastIndex = list.length - 1;

        const output = list.map((item, itemIndex) => {
            const startRow = "(";
            const endRow = ")" + (itemIndex !== lastIndex ? ",<br/>" : "");

            const row = item.reduce((prev, curr, i)=> {
                const value = formatValue(curr);
                const split = i !== item.length - 1 ? ", " : "";
                return prev + value + split;
            }, startRow);

            return row + endRow;
        });

        outputDiv.innerHTML = `VALUES <br/> ${output.join("")}`;
    }

    function formatValue(value){
        if(moneyFilter.checked && isMoney(value)){
            console.log('is money');
            return value;
        }
        return `\'${value.trim()}\'`;
    }

    function isMoney(value){
        return /^[0-9]|\.$/g.test(value);
    }
});

