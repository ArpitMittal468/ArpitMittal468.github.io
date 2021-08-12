// function write(){
//     console.log("heler");
// }

let currentPath = '/Users>';
let intialValue = "Welcome to PortFolio Prompt.\nType 'help' and press enter for some help.\n\n";
let currentValue = intialValue + currentPath;
let prompt;

function toggle() {
    console.log("here");
    let doc = document.getElementById('containterBackground');
    // console.log(doc.style.zIndex = "2");
    if (doc.style.zIndex === '' || doc.style.zIndex === '1')
        doc.style.zIndex = "2";
    else doc.style.zIndex = '1';
}


function resolveCommand() {
    let cmd = prompt.value.slice(currentValue.length).trim().toLowerCase()
    // console.log(cmd);

    let result = "";

    if (cmd === 'help') {
        result = "HERE ARE SOME COMMANDS:\n\n" +
            "WHOAMI   :Display My Name\n" +
            "CLEAR    :Clears The Terimal\n" +
            "ABOUTME  :Display Everything About Me\n" +
            "CONTACT  :Display Different Methods To Contact Me\n"
    }
    else if (cmd === 'clear') {
        currentValue = "\n" + currentPath
        prompt.value = currentValue
        return
    }
    else if (cmd === "whoami") {
        result = "Arpit Mittal\n"
    }
    else if (cmd === "aboutme") {
        result =
            "\n" +
            "Tech Savy.\n21 Year Old.\nTo   be Engineer.\nFull Stack Developer.\nCompetitive Programmer.\n\n" +
            "---Education---\n\n" +
            "High School:\n\t" +
            "Delhi Public School, Agra\n\n" + "InterMediate:\n\t" +
            "Sumeet Rahul Goel Memorial Senior Secondary School, Agra\n\n" +
            "Under Graduation:\n\t" +
            "GLA University, Mathura\n"

    }
    else if (cmd === "contact") {
        toggle()
    }
    else if (cmd !== "") {
        result = `'${cmd}' is not recognised as command. Try using 'help'.\n`
    }
    currentValue = prompt.value + result + '\n' + currentPath
    prompt.value = currentValue
}

window.onload = () => {
    let fakeLoading = "";

    document.getElementsByTagName('p')[0].innerHTML = '⌨ FakeLoading.exe';

    prompt = document.getElementById('prompt');
    prompt.disabled = true;

    setTimeout(() => {
        fakeLoading += 'Website Load Complete ✅.\n';
        prompt.value = fakeLoading;
    }, 1000);

    setTimeout(() => {
        fakeLoading += 'Establishing connection with servers 💬.\n';
        prompt.value = fakeLoading;
    }, 2000);

    setTimeout(() => {
        fakeLoading += 'Connection Established ✅.\n';
        prompt.value = fakeLoading;
    }, 4000);

    setTimeout(() => {
        fakeLoading += 'Downloading User Data ⬇️.\n';
        prompt.value = fakeLoading;
    }, 5000);

    setTimeout(() => {
        fakeLoading += 'Download Completed ✅.\n';
        prompt.value = fakeLoading;
    }, 7000);

    setTimeout(() => {
        fakeLoading += 'Opening PortFolio Prompt For User.\n';
        prompt.value = fakeLoading;
    }, 8500);

    setTimeout(() => {
    document.getElementsByTagName('p')[0].innerHTML = '⌨ Portfolio.exe';
    prompt.disabled = false;
    prompt.value = currentValue;
    prompt.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            resolveCommand()
        }
    });
    }, 10000);

}

function writing() {
    let val = prompt.value;
    // console.log(typeof );
    if (val.length <= currentValue.length || !val.startsWith(currentValue)) {
        prompt.value = currentValue;
    }
    // console.log(val);
}

