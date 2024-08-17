const secBtn =  document.querySelectorAll('.sec')
const flightSection = document.querySelector('.flight-sect')
const stopoverSection = document.querySelector('.stopover-add')
const mbSection = document.querySelector('.mb-section')
const countNo = document.querySelector('.count')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')



// secBtn.forEach(secbtn => {
//    const a = secbtn.querySelector('a')
//    secbtn.addEventListener('mouseenter',() => {
//     a.classList.add('fit')
//    })
//    secbtn.addEventListener('mouseleave',() => {
//     a.classList.remove('fit')
//    })
// })
// secBtn.forEach(secbutton => {
//     secbutton.addEventListener('click', ()=> {
//         secBtn.forEach(btn => {
//             btn.classList.remove('fit')
//             btn.classList.add('inactive')

//         })
//     })
//     secbutton.classList.remove('inactive')
//     secbutton.classList.add('fit')
// })

function showDetailes(category) {
    document.querySelectorAll('.add').forEach(div => div.style.display = 'none');
            
    category.style.display = 'block';
}
document.querySelector('.flight-section').addEventListener('click', function() {
    showDetailes(flightSection);
});

document.querySelector('.stopover-section').addEventListener('click', function() {
    showDetailes(stopoverSection);
});

document.querySelector('.manage-section').addEventListener('click', function() {
    showDetailes(mbSection);
});
let count = 0
function updateCounter() {
    countNo.textContent = count
}

plusBtn.addEventListener('click', ()=> {
    console.log('yes')
    count++
    updateCounter()
})
minusBtn.addEventListener('click', ()=> {
    
    
    if(count <=0) {
        
    }else {
        count--
        updateCounter()
    }
})
[
    {
        'id': 1,
        'name': 'Feel dubai airline',
        'img': '',
        'price': 240,

    }
]