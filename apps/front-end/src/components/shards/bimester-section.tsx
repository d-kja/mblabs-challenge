"use client";

import { api } from "@/utils/axios";
import { queryClient } from "@/utils/tanstack-query";
import { BimesterType, ClassTypeNames, bimesterToNumber } from "@/utils/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { FC } from "react";
import toast from "react-hot-toast";
import { Cards } from "../cards";
import { PlusIcon } from "../svg/plus-icon";
import { Tooltip } from "../tooltip";
import { CreateGradeCard } from "./create-grade-card";

interface BimesterSectionProps {
  bimester: BimesterType;
}

type ResponseType = {
  id: string;
  bimester: BimesterType;
  classType: ClassTypeNames;
  grade: number;
  createdAt: string;
  updatedAt: string | null;
};

const toastStyle = {
  className: "border border-zinc-600",
  style: {
    background: "#0F0F0F",
    color: "#ECEDEE",
  },
};

export const BimesterSection: FC<BimesterSectionProps> = ({ bimester }) => {
  const { data = [] } = useQuery({
    queryKey: [`bimester-${bimesterToNumber[bimester]}`],
    queryFn: async (): Promise<ResponseType[]> => {
      const response = await api.get(`/results/bimester/${bimester}`);

      return response.data?.results ?? [];
    },
  });
  const { mutate } = useMutation({
    mutationFn: async (id: string) => api.delete(`/results/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`bimester-${bimesterToNumber[bimester]}`],
      });
      toast.success("Deletado com sucesso!", toastStyle);
    },
    onSettled(_data, error) {
      if (error) {
        const axiosError = (error as AxiosError<{ message: string }>)?.response
          ?.data;

        const toastMessage =
          axiosError?.message ?? "Não foi possível deletar a nota";
        toast.error(toastMessage, toastStyle);
      }
    },
  });

  return (
    <section
      title={`Bimestre ${bimesterToNumber[bimester]}`}
      className="flex flex-col"
    >
      <div className="flex justify-between mb-6">
        <strong className="font-medium text-lg text-white capitalize">
          Bimestre {bimesterToNumber[bimester]}
        </strong>

        <Tooltip.Wrapper>
          <Tooltip.Trigger>
            <CreateGradeCard bimester={bimester}>
              <button
                type="button"
                className="bg-accent px-3 py-[.15rem] rounded-xl flex items-center gap-2"
                title="lançar nota"
              >
                <span className="hidden lg:inline-block text-base font-semibold">
                  Lançar nota
                </span>
                <PlusIcon strokeClass="fill-base" />
              </button>
            </CreateGradeCard>
          </Tooltip.Trigger>
          <Tooltip.Content className="absolute -top-6 -right-12 w-[6.5rem] lg:hidden">
            Lançar nota
          </Tooltip.Content>
        </Tooltip.Wrapper>
      </div>

      {/* I prefer this over flex flex-wrap justify-between because if there's less items in the list, lets say 2 or 3, the spacing is going to become awkward */}
      <div className="grid grid-cols-2 auto-cols-[1/2] md:grid-cols-3 md:auto-cols-[1/3] lg:grid-cols-4 lg:auto-cols-[1/4] place-items-center gap-8">
        {data.map(({ id, classType, createdAt, grade }) => {
          return (
            <Cards
              key={id}
              classType={{
                createdAt: new Date(createdAt),
                grade,
                id,
                name: classType,
              }}
              handleDelete={async (id: string) => mutate(id)}
            />
          );
        })}
      </div>
    </section>
  );
};
