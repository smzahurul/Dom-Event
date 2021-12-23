function explain_callback(name, age, task) {
    console.log('hello', name);
    console.log('you are', age);
    task();
}

function washHand() {
    console.log('Wash hand with soap');
}

function taskShower() {
    console.log('Task shower');
}

function scrollFacebook() {
    console.log('facebook scroll with dnt like');
}
explain_callback('Sogir uddin', 17, washHand);
explain_callback('Mogir uddin', 17, taskShower);
explain_callback('Jojir uddin', 21, scrollFacebook);