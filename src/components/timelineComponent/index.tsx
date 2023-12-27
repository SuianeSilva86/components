import { GoArrowDown } from "react-icons/go";
import React, { useState, useEffect } from "react";
import { GoComment } from "react-icons/go";

// Definir o tipo para os dados da linha do tempo
type TimelineItem = {
  id: number;
  date: string;
  changeTitle: string;
  beforeChange: string;
  afterChange: string;
  comment?: string;
};

const TimelineComponent = () => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);

  const fetchDataFromDatabase = async () => {
    try {
      // Dados fornecidos
      const data: TimelineItem[] = [
        {
          id: 1,
          date: "janeiro",
          changeTitle: "Valor de 'nome' alterado",
          beforeChange: "CARMEN DANIELA DA ROSA",
          afterChange: "CARMEN DANIELA DA ROSA RECCO",
        },
        {
          id: 2,
          date: "fevereiro",
          changeTitle: "Atualização de 'endereço'",
          beforeChange: "Rua ABC, 123",
          afterChange: "Avenida XYZ, 456",
          comment: "Candidato mudou de endereço",
        },
        {
          id: 3,
          date: "março",
          changeTitle: "Modificação de 'email'",
          beforeChange: "johndoe@email.com",
          afterChange: "john.doe@email.com",
        },
        {
          id: 4,
          date: "abril",
          changeTitle: "Ajuste de 'telefone'",
          beforeChange: "+123 456 789",
          afterChange: "+987 654 321",
        },
        {
          id: 5,
          date: "maio",
          changeTitle: "Correção de 'data de nascimento'",
          beforeChange: "01/01/1990",
          afterChange: "15/05/1985",
        },
        {
          id: 6,
          date: "junho",
          changeTitle: "Mudança de 'cargo'",
          beforeChange: "Analista de Marketing",
          afterChange: "Gerente de Marketing",
        },
        {
          id: 7,
          date: "julho",
          changeTitle: "Atualização de 'departamento'",
          beforeChange: "RH",
          afterChange: "Finanças",
        },
      ];

      setTimelineData(data);
    } catch (error: any) {
      console.error("Erro ao buscar dados do banco de dados:", error.message);
    }
  };

  useEffect(() => {
    fetchDataFromDatabase();
  }, []);

  return (
    <section className="">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            {/* ... (seu código existente) */}
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-400">
              {/* Mapeia os dados do banco de dados para criar os elementos do timeline */}
              {timelineData.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-700"
                >
                  <h3 className="text-xl font-semibold tracki">
                    {item.changeTitle}
                  </h3>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    {item.date}
                  </time>
                  <p className="mt-3">
                    {item.beforeChange}
                    <GoArrowDown />
                    {item.afterChange}
                  </p>
                  {item.comment && (
                    <span className="mr-2 flex gap-2 mt-1 items-center text-gray-600">
                      <GoComment className="" /> 3 Comentários
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineComponent;
