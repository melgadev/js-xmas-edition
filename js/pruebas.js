
function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Éste campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío'
        );
    
    console.assert(
        validarNombre('111111111111111111111111111111111111111111111111111') === 'Éste campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres'
        );
    
    console.assert(
        validarNombre('Sebastian') === '',
        'validarNombre no funcionó con un nombre válido'
    );
    
    console.assert(
        validarNombre('Sebastian Sebastian Sebastian Sebastian') === '',
        'validarNombre no funcionó con nombre válido de menos de 50 caracteres'
    );

}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Éste campo no debe estar vacío',
        'Validar ciudad no validó que el campo no esté vacío'
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'Éste campo debe tener al menos 1 caracter',
        'validarDescripcionRegalo no validó que el campo tuviera al menos un caracter'
    );
    console.assert(
        validarDescripcionRegalo('asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsadfsadfasdfasdfsdfsadfasdfsadfsadfsdafsdfasdfasdfasdf') === 'Éste campo debe tener menos de 100 caracteres',
        'validarDescripcionRegalo no validó que el campo tuviera menos de 100 caracteres'
    );

    console.assert(
        validarDescripcionRegalo('Una bicicleta') === '',
        'validarDescripcionRegalo no funcionó con una descripcion de regalo correcta'
    );
    console.assert(
        validarDescripcionRegalo('Un regalo Un regalo Un regalo Un regalo Un regalo ') === '',
        'validarDescripcionRegalo no funcionó con una descripcion correcta de menos de 100 caracteres'
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();

