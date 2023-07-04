import { Controller, useFormContext } from "react-hook-form";

const InputField: React.FC<any> = ({ name, defaultValue }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  console.log(errors);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => <input {...field} />}
    />
  );
};

export default InputField;
