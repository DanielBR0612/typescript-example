interface poligono {
    altura: number;
    base: number;
    area(): number;
}

export class triangulo implements poligono {
    altura: number;
    base: number;
    angulos: number[];

    constructor(altura: number, base: number, angulos: number[]){
        if (angulos.length !== 3 || angulos.reduce((soma, ang) => soma + ang, 0) !== 180) {
            throw new Error('Esse triangulo não existe');
        }
        this.altura = altura;
        this.base = base;
        this.angulos = angulos;
    }

    area() {
        return (this.altura * this.base) / 2;
    }

    defineTipo() {
        if (this.angulos.some(ang => ang > 90)) {
            return "Obtusângulo";
        }
        if (this.angulos.some(ang => ang === 90)) {
            return "Retângulo";
        }
        if (this.angulos.every(ang => ang < 90)) {
            return "Acutângulo";
        }
    }
}
export class retangulo implements poligono {
    altura: number;
    base: number;
    cor: string;

    constructor(altura: number, base: number, cor: string) {
        this.altura = altura;
        this.base = base;
        this.cor = cor;
    }

    area(): number {
        return this.altura * this.base;
    }

    perimetro(): number {
        return 2 * (this.altura + this.base);
    }

    descrever() {
        return `Este é um retangulo de cor ${this.cor} com ${this.altura}cm de lado`;
    }
}
