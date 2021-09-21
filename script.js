window.addEventListener('load', ()=>{
    const form = document.getElementById('form');
    const text = document.getElementById('textarea');
    const clearBtn = document.getElementById('clear-btn');
    const outputDiv = document.getElementById('output');

    visitCount();
    form.addEventListener('submit', handleSubmit);
    clearBtn.addEventListener('click', handleClear);

    function handleClear(){
        text.value = '';
    }

    function handleSubmit(e){
        e.preventDefault();
        const list = text.value.trim().split('\n').map(o => o.split('\t'));
        const lastIndex = list.length - 1;
        const output = list.map((item, index) => {
            const str = item.reduce((prev, curr, i)=> (prev + `\'${curr}\'` + (i !== item.length - 1 ? ', ' : '')), '(') + ')' + (index !== lastIndex ? ',<br/>' : '');
            return str;
        });
        outputDiv.innerHTML = `VALUES <br/> ${output.join('')}`;
    }

    function visitCount(){
        fetch('https://api.countapi.xyz/update/doonamm/convert-data-visit-count?amount=1')
            .then(res => res.json())
            .then(res => console.log(res.value));
    }
});
