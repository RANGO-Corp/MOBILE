function validateField(value, type, mandatory, name, numericRestrition, minLenght, maxLenght) {
  const errors = [];
  if (!/^\s+$/.test(value)) {
    if ((value.lenght < minLenght || value.lenght > maxLenght) && numericRestrition) {
      errors.push(`O campo ${name} precisa ter entre ${minLenght} a ${maxLenght} caracteres`);
    }
    switch (type) {
      case ('email'):
        if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(value)) errors.push('E-mail inválido!');
        break;
      case ('tel'):
        if (!/^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/.test(value)) errors.push('Telefone inválido');
        break;
      case ('date'):
        if (!/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)\d{2})$/.test(value)) {
          errors.push('Data inválida');
        }
        break;
      default:
        break;
    }
  } else if (mandatory) errors.push('Preencha todos os campos!');
  return errors;
}

// console.log(/^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/.test('(11)99999-9999'));
// console.log(validateField('01-12-2099', 'date', true, 'de telefone', false, null, null));
