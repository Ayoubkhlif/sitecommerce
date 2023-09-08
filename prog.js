const list = document.querySelectorAll('.list')
document.getElementById('1').style.display = 'none'
document.getElementById('2').style.display = 'none'
document.getElementById('3').style.display = 'none'
function act(params) {
    let i = 0
    list.forEach((item) => {
        document.getElementById(i).style.display = 'none'
        item.classList.remove('active')
        i++
    });
    list[params].classList.add('active')
    document.getElementById(params).style.display = 'flex'
}
let pr = 0
function concat(titre, source, detail, prix) {
    pr += prix
    let n = Number(document.getElementById('flous').innerHTML)
    document.getElementById('flous').innerHTML = n + 1
    document.getElementById('nbr').innerHTML = 'les elements = ' + (n + 1) + ' et le prix total = ' + pr
    const d = document.createElement('div')
    const datt = document.createAttribute('class')
    const cli = document.createAttribute('onclick')
    cli.value = 'surp(this, ' + prix + ')'
    datt.value = 'produit'
    d.setAttributeNode(datt)
    d.setAttributeNode(cli)
    const t = document.createElement('h3')
    t.innerHTML = titre
    const i = document.createElement('img')
    const iatt = document.createAttribute('src')
    iatt.value = source
    i.setAttributeNode(iatt)
    const pd = document.createElement('p')
    pd.innerHTML = detail
    d.appendChild(t)
    d.appendChild(i)
    d.appendChild(pd)
    document.getElementById('sob').appendChild(d)
    alert(titre + ' ajouter avec success')
}
function pan() {
    document.getElementById('first').style.display = 'none'
    document.getElementById('second').style.display = 'inline'
}
function nopan() {
    document.getElementById('first').style.display = 'inline'
    document.getElementById('second').style.display = 'none'
}
function surp(params, prix) {
    pr -= prix
    params.style.display = 'none'
    let n = Number(document.getElementById('flous').innerHTML)
    document.getElementById('flous').innerHTML = n - 1
    document.getElementById('nbr').innerHTML = 'les elements = ' + (n - 1) + ' et le prix total = ' + pr
}
let r = document.querySelector(':root');
const el = document.getElementById('hhhhh')
r.style.setProperty('--colorbck', 'lightblue');
r.style.setProperty('--win', String((el.offsetWidth - 80.5) / 3) + 'px');