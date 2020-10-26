var i;
var nav1 = document.getElementById('btn');
var nav2 = document.getElementById('bn');
var click = 0;
var firstimage = "";
var secondimage = "";
var congratulations = 0;
var myPix = [
    {
        name: "boat",
        img: "1.jpg",
    },
    {
        name: "baloon",
        img: "2.jpg",
    },
    {
        name: "helicopter",
        img: "3.jpg",
    },
    {
        name: "scooter",
        img: "4.jpg",
    },
    {
        name: "plane",
        img: "5.jpg",
    },
    {
        name: "bicycle",
        img: "6.jpg",
    },
    {
        name: "car",
        img: "7.jpg",
    },
    {
        name: "rocket",
        img: "8.jpg",
    },
];

var myPix = myPix.concat(myPix);

const nums1 = new Set();
while (nums1.size !== 16) {
    nums1.add(Math.floor(Math.random() * 16));
}

const pics = [...nums1];

function but() {
    nav1.style.display = 'none';
    document.getElementById('jaki').style.display = 'none';
    document.getElementById('czas').style.display = 'none';
}

function game() {

    for (i = 0; i < 16; i++) {
        function getRandomImage() {
            document.getElementById(i).innerHTML += ('<div style="background-image: url(\'' + myPix[pics[i]].img + '\');" id="' + myPix[pics[i]].name + '" class="front"></div><div style="background-image: url(\'9.jpg\'); background-size: cover; display: none;" id="' + myPix[pics[i]].name + '" class="back"></div>');
        }

        getRandomImage();

    };


    setTimeout(
        function () {
            for (i = 0; i < 16; i++) {
                document.getElementById(i).getElementsByClassName('front')[0].style.display = 'none';
                document.getElementById(i).getElementsByClassName('back')[0].style.display = 'inline-block';
            }
        }
        , document.getElementById('czas').value * 1000);



    var el0 = document.getElementById('0');
    var el1 = document.getElementById('1');
    var el2 = document.getElementById('2');
    var el3 = document.getElementById('3');
    var el4 = document.getElementById('4');
    var el5 = document.getElementById('5');
    var el6 = document.getElementById('6');
    var el7 = document.getElementById('7');
    var el8 = document.getElementById('8');
    var el9 = document.getElementById('9');
    var el10 = document.getElementById('10');
    var el11 = document.getElementById('11');
    var el12 = document.getElementById('12');
    var el13 = document.getElementById('13');
    var el14 = document.getElementById('14');
    var el15 = document.getElementById('15');

    var koniec = document.getElementById('demo').getElementsByTagName('h1')[0];


    el0.addEventListener('click', function () {
        if (el0.getElementsByClassName('back')[0].style.display === 'inline-block' && click < 2) {
            click += 1;
            el0.getElementsByClassName('front')[0].style.display = 'inline-block';
            el0.getElementsByClassName('back')[0].style.display = 'none';
            if (click == 1) {
                firstimage = el0;
            };
            if (click == 2) {
                secondimage = el0;

                setTimeout(
                    function () {
                        if (firstimage.getElementsByClassName('front')[0].id === secondimage.getElementsByClassName('front')[0].id) {
                            secondimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            firstimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            congratulations += 1;
                            if (congratulations > 7) {
                                koniec.innerHTML = 'Gratulacje!!!';
                                nav2.style.display = 'inline-block';
                            };
                        } else {
                            firstimage.getElementsByClassName('front')[0].style.display = 'none';
                            firstimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                            secondimage.getElementsByClassName('front')[0].style.display = 'none';
                            secondimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                        }
                    }
                    , 500);
                click = 0;
            };

        };
    })


    el1.addEventListener('click', function () {
        if (el1.getElementsByClassName('back')[0].style.display === 'inline-block' && click < 2) {
            click += 1;
            el1.getElementsByClassName('front')[0].style.display = 'inline-block';
            el1.getElementsByClassName('back')[0].style.display = 'none';
            if (click == 1) {
                firstimage = el1;
            };
            if (click == 2) {
                secondimage = el1;

                setTimeout(
                    function () {
                        if (firstimage.getElementsByClassName('front')[0].id === secondimage.getElementsByClassName('front')[0].id) {
                            secondimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            firstimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            congratulations += 1;
                            if (congratulations > 7) {
                                koniec.innerHTML = 'Gratulacje!!!';
                                nav2.style.display = 'inline-block';
                            };
                        } else {
                            firstimage.getElementsByClassName('front')[0].style.display = 'none';
                            firstimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                            secondimage.getElementsByClassName('front')[0].style.display = 'none';
                            secondimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                        }
                    }
                    , 500);
                click = 0;
            };
        };
    })

    el2.addEventListener('click', function () {
        if (el2.getElementsByClassName('back')[0].style.display === 'inline-block' && click < 2) {
            click += 1;
            el2.getElementsByClassName('front')[0].style.display = 'inline-block';
            el2.getElementsByClassName('back')[0].style.display = 'none';
            if (click == 1) {
                firstimage = el2;
            };
            if (click == 2) {
                secondimage = el2;

                setTimeout(
                    function () {
                        if (firstimage.getElementsByClassName('front')[0].id === secondimage.getElementsByClassName('front')[0].id) {
                            secondimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            firstimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            congratulations += 1;
                            if (congratulations > 7) {
                                koniec.innerHTML = 'Gratulacje!!!';
                                nav2.style.display = 'inline-block';
                            };
                        } else {
                            firstimage.getElementsByClassName('front')[0].style.display = 'none';
                            firstimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                            secondimage.getElementsByClassName('front')[0].style.display = 'none';
                            secondimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                        }
                    }
                    , 500);
                click = 0;
            };
        };
    })

    el3.addEventListener('click', function () {
        if (el3.getElementsByClassName('back')[0].style.display === 'inline-block' && click < 2) {
            click += 1;
            el3.getElementsByClassName('front')[0].style.display = 'inline-block';
            el3.getElementsByClassName('back')[0].style.display = 'none';
            if (click == 1) {
                firstimage = el3;
            };
            if (click == 2) {
                secondimage = el3;

                setTimeout(
                    function () {
                        if (firstimage.getElementsByClassName('front')[0].id === secondimage.getElementsByClassName('front')[0].id) {
                            secondimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            firstimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            congratulations += 1;
                            if (congratulations > 7) {
                                koniec.innerHTML = 'Gratulacje!!!';
                                nav2.style.display = 'inline-block';
                            };
                        } else {
                            firstimage.getElementsByClassName('front')[0].style.display = 'none';
                            firstimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                            secondimage.getElementsByClassName('front')[0].style.display = 'none';
                            secondimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                        }
                    }
                    , 500);
                click = 0;
            };
        };
    })

    el4.addEventListener('click', function () {
        if (el4.getElementsByClassName('back')[0].style.display === 'inline-block' && click < 2) {
            click += 1;
            el4.getElementsByClassName('front')[0].style.display = 'inline-block';
            el4.getElementsByClassName('back')[0].style.display = 'none';
            if (click == 1) {
                firstimage = el4;
            };
            if (click == 2) {
                secondimage = el4;

                setTimeout(
                    function () {
                        if (firstimage.getElementsByClassName('front')[0].id === secondimage.getElementsByClassName('front')[0].id) {
                            secondimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            firstimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            congratulations += 1;
                            if (congratulations > 7) {
                                koniec.innerHTML = 'Gratulacje!!!';
                                nav2.style.display = 'inline-block';
                            };
                        } else {
                            firstimage.getElementsByClassName('front')[0].style.display = 'none';
                            firstimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                            secondimage.getElementsByClassName('front')[0].style.display = 'none';
                            secondimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                        }
                    }
                    , 500);
                click = 0;
            };
        };
    })

    el5.addEventListener('click', function () {
        if (el5.getElementsByClassName('back')[0].style.display === 'inline-block' && click < 2) {
            click += 1;
            el5.getElementsByClassName('front')[0].style.display = 'inline-block';
            el5.getElementsByClassName('back')[0].style.display = 'none';
            if (click == 1) {
                firstimage = el5;
            };
            if (click == 2) {
                secondimage = el5;

                setTimeout(
                    function () {
                        if (firstimage.getElementsByClassName('front')[0].id === secondimage.getElementsByClassName('front')[0].id) {
                            secondimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            firstimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            congratulations += 1;
                            if (congratulations > 7) {
                                koniec.innerHTML = 'Gratulacje!!!';
                                nav2.style.display = 'inline-block';
                            };
                        } else {
                            firstimage.getElementsByClassName('front')[0].style.display = 'none';
                            firstimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                            secondimage.getElementsByClassName('front')[0].style.display = 'none';
                            secondimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                        }
                    }
                    , 500);
                click = 0;
            };
        };
    })

    el6.addEventListener('click', function () {
        if (el6.getElementsByClassName('back')[0].style.display === 'inline-block' && click < 2) {
            click += 1;
            el6.getElementsByClassName('front')[0].style.display = 'inline-block';
            el6.getElementsByClassName('back')[0].style.display = 'none';
            if (click == 1) {
                firstimage = el6;
            };
            if (click == 2) {
                secondimage = el6;

                setTimeout(
                    function () {
                        if (firstimage.getElementsByClassName('front')[0].id === secondimage.getElementsByClassName('front')[0].id) {
                            secondimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            firstimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            congratulations += 1;
                            if (congratulations > 7) {
                                koniec.innerHTML = 'Gratulacje!!!';
                                nav2.style.display = 'inline-block';
                            };
                        } else {
                            firstimage.getElementsByClassName('front')[0].style.display = 'none';
                            firstimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                            secondimage.getElementsByClassName('front')[0].style.display = 'none';
                            secondimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                        }
                    }
                    , 500);
                click = 0;
            };
        };
    })

    el7.addEventListener('click', function () {
        if (el7.getElementsByClassName('back')[0].style.display === 'inline-block' && click < 2) {
            click += 1;
            el7.getElementsByClassName('front')[0].style.display = 'inline-block';
            el7.getElementsByClassName('back')[0].style.display = 'none';
            if (click == 1) {
                firstimage = el7;
            };
            if (click == 2) {
                secondimage = el7;

                setTimeout(
                    function () {
                        if (firstimage.getElementsByClassName('front')[0].id === secondimage.getElementsByClassName('front')[0].id) {
                            secondimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            firstimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            congratulations += 1;
                            if (congratulations > 7) {
                                koniec.innerHTML = 'Gratulacje!!!';
                                nav2.style.display = 'inline-block';
                            };
                        } else {
                            firstimage.getElementsByClassName('front')[0].style.display = 'none';
                            firstimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                            secondimage.getElementsByClassName('front')[0].style.display = 'none';
                            secondimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                        }
                    }
                    , 500);
                click = 0;
            };
        };
    })

    el8.addEventListener('click', function () {
        if (el8.getElementsByClassName('back')[0].style.display === 'inline-block' && click < 2) {
            click += 1;
            el8.getElementsByClassName('front')[0].style.display = 'inline-block';
            el8.getElementsByClassName('back')[0].style.display = 'none';
            if (click == 1) {
                firstimage = el8;
            };
            if (click == 2) {
                secondimage = el8;

                setTimeout(
                    function () {
                        if (firstimage.getElementsByClassName('front')[0].id === secondimage.getElementsByClassName('front')[0].id) {
                            secondimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            firstimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            congratulations += 1;
                            if (congratulations > 7) {
                                koniec.innerHTML = 'Gratulacje!!!';
                                nav2.style.display = 'inline-block';
                            };
                        } else {
                            firstimage.getElementsByClassName('front')[0].style.display = 'none';
                            firstimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                            secondimage.getElementsByClassName('front')[0].style.display = 'none';
                            secondimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                        }
                    }
                    , 500);
                click = 0;
            };
        };
    })

    el9.addEventListener('click', function () {
        if (el9.getElementsByClassName('back')[0].style.display === 'inline-block' && click < 2) {
            click += 1;
            el9.getElementsByClassName('front')[0].style.display = 'inline-block';
            el9.getElementsByClassName('back')[0].style.display = 'none';
            if (click == 1) {
                firstimage = el9;
            };
            if (click == 2) {
                secondimage = el9;

                setTimeout(
                    function () {
                        if (firstimage.getElementsByClassName('front')[0].id === secondimage.getElementsByClassName('front')[0].id) {
                            secondimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            firstimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            congratulations += 1;
                            if (congratulations > 7) {
                                koniec.innerHTML = 'Gratulacje!!!';
                                nav2.style.display = 'inline-block';
                            };
                        } else {
                            firstimage.getElementsByClassName('front')[0].style.display = 'none';
                            firstimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                            secondimage.getElementsByClassName('front')[0].style.display = 'none';
                            secondimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                        }
                    }
                    , 500);
                click = 0;
            };
        };
    })

    el10.addEventListener('click', function () {
        if (el10.getElementsByClassName('back')[0].style.display === 'inline-block' && click < 2) {
            click += 1;
            el10.getElementsByClassName('front')[0].style.display = 'inline-block';
            el10.getElementsByClassName('back')[0].style.display = 'none';
            if (click == 1) {
                firstimage = el10;
            };
            if (click == 2) {
                secondimage = el10;

                setTimeout(
                    function () {
                        if (firstimage.getElementsByClassName('front')[0].id === secondimage.getElementsByClassName('front')[0].id) {
                            secondimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            firstimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            congratulations += 1;
                            if (congratulations > 7) {
                                koniec.innerHTML = 'Gratulacje!!!';
                                nav2.style.display = 'inline-block';
                            };
                        } else {
                            firstimage.getElementsByClassName('front')[0].style.display = 'none';
                            firstimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                            secondimage.getElementsByClassName('front')[0].style.display = 'none';
                            secondimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                        }
                    }
                    , 500);
                click = 0;
            };
        };
    })

    el11.addEventListener('click', function () {
        if (el11.getElementsByClassName('back')[0].style.display === 'inline-block' && click < 2) {
            click += 1;
            el11.getElementsByClassName('front')[0].style.display = 'inline-block';
            el11.getElementsByClassName('back')[0].style.display = 'none';
            if (click == 1) {
                firstimage = el11;
            };
            if (click == 2) {
                secondimage = el11;

                setTimeout(
                    function () {
                        if (firstimage.getElementsByClassName('front')[0].id === secondimage.getElementsByClassName('front')[0].id) {
                            secondimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            firstimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            congratulations += 1;
                            if (congratulations > 7) {
                                koniec.innerHTML = 'Gratulacje!!!';
                                nav2.style.display = 'inline-block';
                            };
                        } else {
                            firstimage.getElementsByClassName('front')[0].style.display = 'none';
                            firstimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                            secondimage.getElementsByClassName('front')[0].style.display = 'none';
                            secondimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                        }
                    }
                    , 500);
                click = 0;
            };
        };
    })

    el12.addEventListener('click', function () {
        if (el12.getElementsByClassName('back')[0].style.display === 'inline-block' && click < 2) {
            click += 1;
            el12.getElementsByClassName('front')[0].style.display = 'inline-block';
            el12.getElementsByClassName('back')[0].style.display = 'none';
            if (click == 1) {
                firstimage = el12;
            };
            if (click == 2) {
                secondimage = el12;

                setTimeout(
                    function () {
                        if (firstimage.getElementsByClassName('front')[0].id === secondimage.getElementsByClassName('front')[0].id) {
                            secondimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            firstimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            congratulations += 1;
                            if (congratulations > 7) {
                                koniec.innerHTML = 'Gratulacje!!!';
                                nav2.style.display = 'inline-block';
                            };
                        } else {
                            firstimage.getElementsByClassName('front')[0].style.display = 'none';
                            firstimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                            secondimage.getElementsByClassName('front')[0].style.display = 'none';
                            secondimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                        }
                    }
                    , 500);
                click = 0;
            };
        };
    })

    el13.addEventListener('click', function () {
        if (el13.getElementsByClassName('back')[0].style.display === 'inline-block' && click < 2) {
            click += 1;
            el13.getElementsByClassName('front')[0].style.display = 'inline-block';
            el13.getElementsByClassName('back')[0].style.display = 'none';
            if (click == 1) {
                firstimage = el13;
            };
            if (click == 2) {
                secondimage = el13;

                setTimeout(
                    function () {
                        if (firstimage.getElementsByClassName('front')[0].id === secondimage.getElementsByClassName('front')[0].id) {
                            secondimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            firstimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            congratulations += 1;
                            if (congratulations > 7) {
                                koniec.innerHTML = 'Gratulacje!!!';
                                nav2.style.display = 'inline-block';
                            };
                        } else {
                            firstimage.getElementsByClassName('front')[0].style.display = 'none';
                            firstimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                            secondimage.getElementsByClassName('front')[0].style.display = 'none';
                            secondimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                        }
                    }
                    , 500);
                click = 0;
            };
        };
    })

    el14.addEventListener('click', function () {
        if (el14.getElementsByClassName('back')[0].style.display === 'inline-block' && click < 2) {
            click += 1;
            el14.getElementsByClassName('front')[0].style.display = 'inline-block';
            el14.getElementsByClassName('back')[0].style.display = 'none';
            if (click == 1) {
                firstimage = el14;
            };
            if (click == 2) {
                secondimage = el14;

                setTimeout(
                    function () {
                        if (firstimage.getElementsByClassName('front')[0].id === secondimage.getElementsByClassName('front')[0].id) {
                            secondimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            firstimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            congratulations += 1;
                            if (congratulations > 7) {
                                koniec.innerHTML = 'Gratulacje!!!';
                                nav2.style.display = 'inline-block';
                            };
                        } else {
                            firstimage.getElementsByClassName('front')[0].style.display = 'none';
                            firstimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                            secondimage.getElementsByClassName('front')[0].style.display = 'none';
                            secondimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                        }
                    }
                    , 500);
                click = 0;
            };
        };
    })

    el15.addEventListener('click', function () {
        if (el15.getElementsByClassName('back')[0].style.display === 'inline-block' && click < 2) {
            click += 1;
            el15.getElementsByClassName('front')[0].style.display = 'inline-block';
            el15.getElementsByClassName('back')[0].style.display = 'none';
            if (click == 1) {
                firstimage = el15;
            };
            if (click == 2) {
                secondimage = el15;

                setTimeout(
                    function () {
                        if (firstimage.getElementsByClassName('front')[0].id === secondimage.getElementsByClassName('front')[0].id) {
                            secondimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            firstimage.getElementsByClassName('front')[0].style.visibility = 'hidden';
                            congratulations += 1;
                            if (congratulations > 7) {
                                koniec.innerHTML = 'Gratulacje!!!';
                                nav2.style.display = 'inline-block';

                            };
                        } else {
                            firstimage.getElementsByClassName('front')[0].style.display = 'none';
                            firstimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                            secondimage.getElementsByClassName('front')[0].style.display = 'none';
                            secondimage.getElementsByClassName('back')[0].style.display = 'inline-block';
                        }
                    }
                    , 500);
                click = 0;
            };
        };
    })
}

document.getElementById('btn').addEventListener('click', function () {
    game();
    but();
});