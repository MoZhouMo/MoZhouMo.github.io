console.log('Hello World');

var myName = '周沫';
console.log(myName);

alert('周沫 (Mo Zhou)');

var changeName = document.getElementById('#name');
changeName.onclick = function() {
    if (changeName.innerHTML === 'Mo Zhou') {
        changeName.innerHTML = myName;        
    } else {
        changeName.innerHTML = 'Mo Zhou';        
    }
}

var hideAbout = document.getElementById('#about');
hideAbout.onclick  = function() {
    var hideContent = document.getElementById('#content');
    if (hideContent.style.display === 'none') {
        hideContent.style.display = 'block';
    } else {
        hideContent.style.display = 'none';
    }
}

var showGithub = document.getElementById('link-show');
showGithub.onmouseover = function() {
    document.getElementById('github-link').style.display = 'block';
}
showGithub.onmouseout = function() {
    document.getElementById('github-link').style.display = 'none';
}

var modal = document.getElementById('modal-wrapper');
var modalButton = document.getElementById('modal-open');
var modalClose = document.getElementById('modal-close');
modalButton.onclick = function() {
    modal.style.display = 'block';
}
modalClose.onclick = function() {
    modal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

var formSumbit = document.getElementById('form-submit');
formSumbit.onclick = function() {
    var formName = document.getElementById('form-name').value;
    var formEmail = document.getElementById('form-email').value;
    var formMessage = document.getElementById('form-message').value;
    console.log('name: ' + formName);
    console.log('email: ' + formEmail);
    console.log('message: ' + formMessage);
    alert('name: ' + formName);
    alert('email: ' + formEmail);
    alert('message: ' + formMessage);
}
