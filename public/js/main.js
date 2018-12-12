

var counter = document.getElementById('counter');


axios.get('/api/value').then(function(response) {
    counter.innerHTML = response.data;
}).catch(function(err) {
    console.log(err);
});


function increment() {
    axios.post('/api/increment').then(function(response) {
        counter.innerHTML = response.data;
    }).catch(function(err) {
        console.log(err);
    });
}

function decrement() {
    axios.post('/api/decrement').then(function(response) {
        counter.innerHTML = response.data;
    }).catch(function(err) {
        console.log(err);
    });
}
