const animais = [
    ["Cavalo", "Gato", "Cachorro"],
    ["Lampiao", "Bixano", "Odin"],
    ["Mangalarga", "Siames", "Pug"],
    [5, 7, 9],
];

for (let i = 0; i < animais[0].length; i++) {
    const animal = animais[0][i];
    const nome = animais[1][i];
    const raca = animais[2][i];
    const idade = animais[3][i];

    console.log(`Animal: ${animal}, Nome: ${nome}, Raça: ${raca}, Idade: ${idade}`);
}