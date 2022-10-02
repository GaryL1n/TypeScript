import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

type Inputs = {
    sid: number;
    name: string;
    school: string;
    schoolOther: string;
};

const HookForm: FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            sid: 10,
            name: 'Gary',
            school: '輔大',
            schoolOther: '畢業',
        },
    });
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        // const response = await axios.post(
        //     'http://localhost:3000/member/formtry',
        //     data
        // );
        // console.log(data);
    };

    // console.log(watch('example'));
    console.log(errors.name);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="number"
                {...register('sid', { min: 1, max: 99, valueAsNumber: true })}
            />

            <input
                {...register('name', {
                    required: 'This field is required',
                    maxLength: { value: 4, message: '最多四個字' },
                })}
            />
            {errors.name && <span>{errors.name.message}</span>}
            <input {...register('school')} />
            <input {...register('schoolOther')} />

            <input type="submit" value="幹你娘" />
        </form>
    );
};

export default HookForm;
