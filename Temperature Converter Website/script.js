console.log('Welcome to 🌡️ Temperature Converter');

const tempLoad = () => {
    let fa = document.getElementById('fa');
    fa.innerHTML = "&#xf2cb";
    fa.style.color = "#ffa41b";

    setTimeout(() => {
        fa.innerHTML = "&#xf2ca;";
        fa.style.color = "#ffa41b";
    }, 1000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c9;";
    }, 2000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c8;";
    }, 3000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c7;";
        fa.style.color = "#ff5151";
    }, 4000)
}

setInterval(() => {
    fa.style.color = "#ffa41b";
    tempLoad();
}, 5000);


tempLoad();









const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    }
}