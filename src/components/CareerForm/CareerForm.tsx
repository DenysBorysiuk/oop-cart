'use client';

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormBtn from '@/components/ui/FormBtn';
import TextArea from '@/components/ui/TextArea';
import Field from '@/components/ui/Field';
import data from '@/data/career.json';
import { schema } from './schema';

const CareerForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema) as FieldValues | any,
  });

  const onSubmit: SubmitHandler<FieldValues> = async data => console.log(data);

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex md:gap-[24px]">
        <ul className="flex flex-col gap-[24px]">
          {data.form.inputs.map(input => (
            <li key={input.id}>
              <Field
                {...input}
                className="md:w-[222px] xl:w-[290px]"
                register={register}
                errors={errors}
              />
            </li>
          ))}
        </ul>
        <TextArea
          className="h-[196px] md:h-[268px] md:w-[221px] xl:h-[268px] xl:w-[292px]"
          register={register}
        />
      </div>
      {/* <div>
        <input {...register('approvesTutorial')} id="approves-tutorial" type="checkbox" />
        <label htmlFor="approves-tutorial">Do you approve this tutorial?</label>
        {errors.approvesTutorial && (
          <p className="error-message">{errors.approvesTutorial.message}</p>
        )}
      </div> */}
      <FormBtn />
    </form>
  );
};

export default CareerForm;
