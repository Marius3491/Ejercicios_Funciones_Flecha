const calcularSalario = () => {
    let salarioMensual = 3500000;
    let comision = 1500000;
    let licenciasVendidas = 4;
    let totalComisiones = comision * licenciasVendidas;
    let totalSalario = ((salarioMensual + totalComisiones) / 100) * 95;

    console.log(`El salario mensual es de ${totalSalario}`);
};

calcularSalario();