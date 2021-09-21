window.addEventListener('load', ()=>{
    const form = document.getElementById('form');
    const text = document.getElementById('textarea');
    const clearBtn = document.getElementById('clear-btn');
    const outputDiv = document.getElementById('output');

    form.addEventListener('submit', handleSubmit);

    clearBtn.addEventListener('click', handleClear);

    function handleClear(){
        text.value = '';
    }

    function handleSubmit(e){
        e.preventDefault();
        const list = text.value.trim().split('\n').map(o => o.split('\t'));
        console.log(list);
        const lastIndex = list.length - 1;
        const output = list.map((item, index) => {
            const str = item.reduce((prev, curr, i)=> (prev + `\'${curr}\'` + (i !== item.length - 1 ? ', ' : '')), '(') + ')' + (index !== lastIndex ? ',<br/>' : '');
            console.log(str);
            return str;
        });
        outputDiv.innerHTML = `VALUES <br/> ${output.join('')}`;
    }
});