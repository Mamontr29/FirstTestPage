

    var myImage = document.querySelector('img'); //Меняет два изображения по клику на них

    myImage.onclick = function() {
        var mySrc = myImage.getAttribute('src');
        if(mySrc === 'images/first-foto.jpg') {
          myImage.setAttribute ('src','images/myfamily-myforce.jpg');
        } else 
        {myImage.setAttribute ('src','images/first-foto.jpg');}
        }

//        var myButton = document.querySelector('button'); // кнопка выбора пользователя
//        var myHeading = document.querySelector('h1');
//        
//        function setUserName() {
//            var myName = prompt('Please enter your name.');
//            localStorage.setItem('name', myName);
//            myHeading.textContent = 'Mozilla is cool, ' + myName;
//          }

//        if(!localStorage.getItem('name')) {
//            setUserName();
//        } else {
//        var storedName = localStorage.getItem('name');
//        myHeading.textContent = 'Mozilla is cool, ' + storedName;
//          }

//          myButton.onclick = function() {
//            setUserName();
//          }