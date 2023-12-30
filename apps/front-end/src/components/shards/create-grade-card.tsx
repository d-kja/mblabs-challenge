import { BimesterType, ClassTypeNames, bimesterToNumber } from "@/utils/types";
import { FC, ReactNode, useState } from "react";

import { api } from "@/utils/axios";
import { queryClient } from "@/utils/tanstack-query";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { Button } from "../button";
import { Input } from "../input";
import { CloseIcon } from "../svg/close-icon";
import { Tooltip } from "../tooltip";

interface CreateGradeCardProps {
  bimester: BimesterType;
  children: ReactNode;
}

const createGradeFormSchema = z.object({
  grade: z.coerce
    .number()
    .min(0, "O número mínimo é 0")
    .max(10, "O número máxido é 10")
    .default(0),
});

type CreateGradeFormSchemaType = z.infer<typeof createGradeFormSchema>;

type CreateClassGradeRequestBody = {
  bimester: BimesterType;
  classType: ClassTypeNames;
  grade: number;
};

const toastStyle = {
  className: "border border-zinc-600",
  style: {
    background: "#0F0F0F",
    color: "#ECEDEE",
  },
};

export const CreateGradeCard: FC<CreateGradeCardProps> = ({
  bimester,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [chosenClass, setChosenClass] = useState<ClassTypeNames>("biologia");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateGradeFormSchemaType>({
    resolver: zodResolver(createGradeFormSchema),
  });
  const { mutate } = useMutation({
    mutationFn: async (data: CreateClassGradeRequestBody) =>
      api.post("/results", data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`bimester-${bimesterToNumber[bimester]}`],
      });
      toast.success("Criado com sucesso!", toastStyle);
    },
    onSettled(_body, error) {
      if (error) {
        const axiosError = (error as AxiosError<{ message: string }>)?.response
          ?.data;

        const toastMessage =
          axiosError?.message ?? "Não foi possível criar a nota";
        toast.error(toastMessage, toastStyle);
      }
    },
  });

  const handleClassChange = (classChoice: ClassTypeNames) => {
    setChosenClass(classChoice);
  };

  const handleModalToggle = (bool: boolean) => {
    setIsOpen(bool);
  };

  const handleSubmitForm: SubmitHandler<CreateGradeFormSchemaType> = async (
    inputs,
  ) => {
    const requestBody = {
      bimester,
      classType: chosenClass,
      grade: inputs.grade,
    };

    mutate(requestBody);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleModalToggle}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-base/80" />
        <Dialog.Content asChild>
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="max-w-[90vw] md:max-w-[42.5rem] w-full md:h-[23.75rem] bg-base text-primary left-1/2 -translate-x-1/2 top-72 rounded-md absolute px-12 py-6"
          >
            <Dialog.Title className="text-3xl font-medium">
              Bimestre {bimesterToNumber[bimester]}
            </Dialog.Title>

            <main className="flex flex-col gap-2 mt-6">
              <div title="selecione disciplina">
                <strong className="font-medium text-lg">Disciplina</strong>
                <div
                  title="disciplinas"
                  className="grid grid-cols-2 md:grid-cols-4 items-center gap-5"
                >
                  <Button
                    data-class="biologia"
                    className={`text-primary ${
                      chosenClass === "biologia" ? "" : "brightness-[25%]"
                    }`}
                    onClick={() => handleClassChange("biologia")}
                  >
                    Biologia
                  </Button>
                  <Button
                    data-class="artes"
                    className={`text-primary ${
                      chosenClass === "artes" ? "" : "brightness-[25%]"
                    }`}
                    onClick={() => handleClassChange("artes")}
                  >
                    Artes
                  </Button>
                  <Button
                    data-class="geografia"
                    className={`text-primary ${
                      chosenClass === "geografia" ? "" : "brightness-[25%]"
                    }`}
                    onClick={() => handleClassChange("geografia")}
                  >
                    Geografia
                  </Button>
                  <Button
                    data-class="sociologia"
                    className={`text-primary ${
                      chosenClass === "sociologia" ? "" : "brightness-[25%]"
                    }`}
                    onClick={() => handleClassChange("sociologia")}
                  >
                    Sociologia
                  </Button>
                </div>
              </div>

              <div title="selecione nota" className="flex flex-col gap-2">
                <strong className="font-medium text-lg">Nota</strong>
                <Input
                  type="number"
                  placeholder="7.4"
                  className="max-w-[102px]"
                  defaultValue={5}
                  {...register("grade")}
                />
                <span className="text-danger text-xs font-light">
                  {errors.grade?.message}
                </span>
              </div>

              <Button
                type="submit"
                className="bg-accent ml-auto text-base mt-5"
              >
                Confirmar
              </Button>
            </main>

            <Tooltip.Wrapper>
              <Tooltip.Trigger>
                <Dialog.Close className="absolute top-6 right-6">
                  <span>
                    <CloseIcon strokeClass="fill-white" />
                  </span>
                </Dialog.Close>
              </Tooltip.Trigger>
              <Tooltip.Content className="absolute -top-6 -right-6">
                Close
              </Tooltip.Content>
            </Tooltip.Wrapper>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
