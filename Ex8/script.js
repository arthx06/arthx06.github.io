function converter(){

    let c =
    Number(document
    .getElementById("celsius").value);

    let f =
    (c * 9/5) + 32;

    document
    .getElementById("resultado")
    .innerHTML =
    `${c}°C = ${f.toFixed(1)}°F`;

}
