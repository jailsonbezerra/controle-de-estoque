// prisma/seed.js

import { PrismaClient } from '../src/generated/prisma/client.js';
import { faker } from '@faker-js/faker/locale/pt_BR'; // Usando a localização para dados brasileiros

const prisma = new PrismaClient();

function criarEmailDoNome(nome) {
  const nomeNormalizado = nome
    .toLowerCase()
    .normalize("NFD") // Separa os acentos dos caracteres (ex: 'é' -> 'e' + '´')
    .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
    .replace(/\s+/g, '.') // Substitui um ou mais espaços por um ponto
    .replace(/[^a-z0-9.-]/g, ""); // Remove caracteres não permitidos

  // Adiciona um número aleatório para diminuir a chance de duplicatas
  const randomSuffix = Math.floor(Math.random() * 1000);

  return `${nomeNormalizado}${randomSuffix}@example.com`; // Usamos um domínio de exemplo
}

async function main() {
    console.log('Iniciando o processo de seeding...');

    // 1. Limpar dados existentes (em ordem reversa para evitar conflitos de chave estrangeira)
    console.log('Limpando o banco de dados...');
    await prisma.saida.deleteMany();
    await prisma.entrada.deleteMany();
    await prisma.fornecedorTelefones.deleteMany();
    await prisma.usuarioTelefones.deleteMany();
    await prisma.produto.deleteMany();
    await prisma.fornecedor.deleteMany();
    await prisma.categoria.deleteMany();
    await prisma.usuario.deleteMany();

    // 2. Criar dados base (sem dependências)
    console.log('Criando usuários, categorias e fornecedores...');

    // Criar Usuários
    for (let i = 0; i < 5; i++) {
        const nome = faker.person.fullName();
        const email = criarEmailDoNome(nome);

        await prisma.usuario.create({
            data: {
                nome: nome,
                email: email,
                senha: faker.internet.password(), // Lembre-se que isso seria um hash
            },
        });
    }

    // Criar Categorias
    const categoriasData = [
        { nome: 'Eletrônicos' },
        { nome: 'Livros' },
        { nome: 'Vestuário' },
        { nome: 'Alimentos e Bebidas' },
        { nome: 'Ferramentas' },
    ];
    await prisma.categoria.createMany({ data: categoriasData });

    // Criar Fornecedores
    for (let i = 0; i < 5; i++) {
        const nome = faker.person.fullName();
        const email = criarEmailDoNome(nome);
        
        await prisma.fornecedor.create({
            data: {
                nome: nome,
                email: email,
            },
        });
    }

    // 3. Buscar IDs dos dados criados para criar os relacionamentos
    const usuarios = await prisma.usuario.findMany();
    const categorias = await prisma.categoria.findMany();
    const fornecedores = await prisma.fornecedor.findMany();

    // 4. Criar dados dependentes
    console.log('Criando produtos...');

    // Criar Produtos
    const produtosData = Array.from({ length: 20 }).map(() => ({
        nome: faker.commerce.productName(),
        descricao: faker.commerce.productDescription(),
        quantidade: faker.number.int({ min: 10, max: 100 }),
        categoriaId: faker.helpers.arrayElement(categorias).id,
    }));
    await prisma.produto.createMany({ data: produtosData });
    const produtos = await prisma.produto.findMany();

    // Criar Telefones para Fornecedores
    const fornecedorTelefonesData = fornecedores.flatMap(fornecedor => 
        Array.from({ length: faker.number.int({ min: 1, max: 2 }) }).map(() => ({
            ddd: faker.string.numeric(2),
            numero: faker.string.numeric(9),
            fornecedorId: fornecedor.id,
        }))
    );
    await prisma.fornecedorTelefones.createMany({ data: fornecedorTelefonesData });
    
    // Criar Telefones para usuários
    const usuarioTelefonesData = usuarios.flatMap(usuario => 
        Array.from({ length: faker.number.int({ min: 1, max: 2 }) }).map(() => ({
            ddd: faker.string.numeric(2),
            numero: faker.string.numeric(9),
            usuarioId: usuario.id,
        }))
    );
    await prisma.usuarioTelefones.createMany({ data: usuarioTelefonesData });
    
    // Criar Entradas de Estoque
    console.log('Criando histórico de entradas...');
    const entradasData = Array.from({ length: 50 }).map(() => ({
        quantidade: faker.number.int({ min: 5, max: 50 }),
        precoCusto: faker.commerce.price({ min: 10, max: 1000 }),
        produtoId: faker.helpers.arrayElement(produtos).id,
        fornecedorId: faker.helpers.arrayElement(fornecedores).id,
        usuarioId: faker.helpers.arrayElement(usuarios).id,
    }));
    await prisma.entrada.createMany({ data: entradasData });

    // Criar Saídas de Estoque
    console.log('Criando histórico de saídas...');
    const saidasData = Array.from({ length: 100 }).map(() => ({
        quantidade: faker.number.int({ min: 1, max: 10 }),
        precoVenda: faker.commerce.price({ min: 20, max: 1500 }),
        produtoId: faker.helpers.arrayElement(produtos).id,
        usuarioId: faker.helpers.arrayElement(usuarios).id,
    }));
    await prisma.saida.createMany({ data: saidasData });

    console.log('Seeding concluído com sucesso!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });