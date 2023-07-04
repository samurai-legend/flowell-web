import { FormProvider } from "react-hook-form";

const Form: React.FC<{
  methods: any;
  children: React.ReactNode;
  onSubmit: () => any;
}> = ({ methods, children, onSubmit }) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
