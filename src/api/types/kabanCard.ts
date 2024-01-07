export interface CandidatesProps {
  id: string,
  name: string,
  status?: number,
}

export interface CardProps {
  id: string;
  title: string;
  client?: string;
  assignedPerson?: string;
  typeOfContract?: string;
  recruiter?: string;
  managerOfClient?: string;
  description?: string;
  completed?: boolean;
  statusClient?: string;
  stageId?: string ;
  dateOfCreation?: string;
  // candidates?: CandidatesProps[];
}

export interface ColumnProps {
  id: string;
  title: string;
  color?: string ;
}

export const candidatesMockData: CandidatesProps[] = [
  {
    id: "1",
    name: "Matheus Capelanes",
    status: 2
  },
  {
    id: "2",
    name:"Vanessa Ferreira",
    status: 3
  },
  {
    id: "3",
    name:"Douglas Caniato",
    status: 1
  },
]

export const columnMockData: ColumnProps[] = [
  {
    id: "DT174_69:NEW",
    title: "Backlog",
    color: "bg-yellow-300"
  },
  {
    id: "DT174_69:UC_H7W9KX",
    title: "Sem CVs - Dentro de 7 dias",
    color: "bg-green-600",
  },
  {
    id: "talent",
    title: "Entrevista com Talent",
    color: "bg-yellow-400",
  },  
  {
    id: "DT174_69:UC_143QUZ",
    title: "Sem CVs - Fora da SLA de 7 dias",
    color: "#89DAFF",
  },
  {
    id: "DT174_69:PREPARATION",
    title: "Vagas com CVs",
    color: "#C8E7E9",
  },
  {
    id: "DT174_69:UC_NVCGJK",
    title: "Vagas com CVs + 19 dias",
    color: "#4FB477",
  },
  {
    id: "DT174_69:UC_MCXN9M",
    title: "Vagas SEM CVs + 19 dias",
    color: "#D64045",
  },  
  {
    id: "DT174_69:UC_OJ41GW",
    title: "Em vias de fechamento",
    color: "#467599",
  },
  {
    id: "DT174_69:FAIL",
    title: "Perdido",
    color: "bg-red-900",
  },
  {
    id: "DT174_69:UC_0FFQQN",
    title: "Cancelada",
    color: "bg-gray-800",
  },
  {
    id: "DT174_69:SUCCESS",
    title: "Fechada",
    color: "bg-green-400",
  }


]

export const taskMockData: CardProps[] = [
  {
    id: "123",
    title: 'Desenvolvedor Frontend',
    description: 'Desenvolver a interface de usuário da aplicação.',
    completed: false,
    stageId: "DT174_69:NEW",
    // client: "Banco Itaú",
    assignedPerson: "Jessica Mendes",
    typeOfContract: "CLT",
    recruiter: "Nathalia Uchoa",
    managerOfClient: "Douglas Caniatos",
    statusClient: "Entrevista com cliente",
    dateOfCreation: "28/11/2023",
  },
  {
    id: "234",
    title: 'QA Engineer',
    description: 'Configurar a autenticação de usuário utilizando JWT.',
    completed: false,
    stageId: "DT174_69:NEW",
    client: "Banco Itaú",
    assignedPerson: "Jessica Mendes",
    typeOfContract: "CLT",
    recruiter: "Nathalia Uchoa",
    managerOfClient: "Douglas Caniatos",
    statusClient: "Entrevista com cliente",
    dateOfCreation: "2/11/2023",

  },
  {
    id: "345",
    title: 'Analista Cloud',
    description: 'Aplicar estilos à página inicial da aplicação.',
    completed: false,
    stageId: "DT174_69:NEW",
    client: "Banco Itaú",
    assignedPerson: "Jessica Mendes",
    typeOfContract: "CLT",
    recruiter: "Nathalia Uchoa",
    managerOfClient: "Douglas Caniatos",
    statusClient: "Entrevista com cliente",
    dateOfCreation: "24/12/2023",

  },
  {
    id: "456",
    title: 'Desenvolvedor Backend',
    description: 'Estabelecer a comunicação entre o frontend e o backend da aplicação.',
    completed: false,
    stageId: "talent",
    client: "Banco Itaú",
    assignedPerson: "Jessica Mendes",
    typeOfContract: "CLT",
    recruiter: "Nathalia Uchoa",
    managerOfClient: "Douglas Caniatos",
    statusClient: "Entrevista com cliente",
    dateOfCreation: "28/11/2023",

  },
  {
    id: "567",
    title: 'Analista de Testes',
    description: 'Realizar testes unitários e de integração.',
    completed: false,
    stageId: "DT174_69:UC_H7W9KX",
    client: "Banco Itaú",
    assignedPerson: "Jessica Mendes",
    typeOfContract: "CLT",
    recruiter: "Nathalia Uchoa",
    managerOfClient: "Douglas Caniatos",
    statusClient: "Entrevista com cliente",
  },
  {
    id: "678",
    title: 'Scrum Master',
    description: 'Desenvolver a página de login com campos de usuário e senha.',
    completed: false,
    stageId: "DT174_69:PREPARATION",
    client: "Banco Itaú",
    assignedPerson: "Jessica Mendes",
    typeOfContract: "CLT",
    recruiter: "Nathalia Uchoa",
    managerOfClient: "Douglas Caniatos",
    statusClient: "Entrevista com cliente",
  }
];
