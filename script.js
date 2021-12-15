let txtnum = document.getElementById('txtnum')
let lista = document.getElementById('lista')
let array=[]
var res = document.getElementById('res')

document.addEventListener('keypress', function(e){
    if(e.key ==='Enter'){
        let btnadd = document.getElementById('add')
        btnadd.click()
    }
})

function checaLista(n, l){
    if(l.indexOf(Number(n))== -1){
        return false
    }else{
        return true
    }
}

function rmv(){
    let num = Number(txtnum.value)
    if(checaLista(txtnum.value, array)){
        if(txtnum.value.length == 0){
            alert('Nenhum valor inserido')
        }else if(txtnum.value > 100 || txtnum.value < 1){
            alert('Valor Inferior a 1 ou maior que 100, Tente Novamente')
        }else{
            for(let pos in array){
                if(txtnum.value == array[pos]){
                    array.splice(pos, 1)
                    let item = document.createElement('option')
                    item.text = `Valor ${num} removido`
                    lista.appendChild(item)
                    res.innerHTML =''
                    lista.size++
                }
            }
        }
    }else{
        alert('Valor inserido não consta na lista para ser removido')
    }
    txtnum.value = ''
    txtnum.focus()
}

function add(){
    if(!checaLista(txtnum.value, array)){
        if(txtnum.value.length == 0){
                alert('Nenhum valor inserido')
            }else if(txtnum.value > 100 || txtnum.value < 1){
                alert('Valor inferior a 1 ou maior que 100')
            }else{
                let num = Number(txtnum.value)
                array.push(num)
                let item = document.createElement('option')
                item.text = `Valor ${num} adicionado`
                lista.appendChild(item)
                res.innerHTML=''
                lista.size++
                
            }
    }else{
        alert('Valor já inserido na lista')
    }
    txtnum.value = ''
    txtnum.focus()
    
}



function analisa(){
    if(array.length == 0){
        alert('Adicione algum valor para analisar!')
    }else{
        let tam = array.length - 1
        let som = 0
        let maior = array[0]
        let menor = array[0]
        res.innerHTML = ''
        res.innerHTML = `Ao todo temos <strong>${array.length}</strong> numeros cadastrados<br>`
        for(let i in array){
            if(array[i] > maior){
                maior = array[i]
            }
            
            if(array[i] < menor){
                menor = array[i]
            }
            
        }
        res.innerHTML += `O maior valor informado foi: <strong>${maior}<strong><br>`
        res.innerHTML += `O menor valor informado foi: <strong>${menor}<strong><br>`
        for(let i in array){
            som += array[i]
        }
        res.innerHTML += `Somando todos os valores temos: <strong>${som}<strong><br>`
        let med = som / array.length
        res.innerHTML += `A média dos valores digitados é: <strong>${med}<strong><br>`
    }
    
}

function reseta(){
    array = []
    res.innerHTML = ''
    lista.innerHTML =''
    lista.size = 1

}