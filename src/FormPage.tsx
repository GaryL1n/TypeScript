import React, {
    FC,
    useState,
    useEffect,
    ChangeEvent,
    SyntheticEvent,
} from 'react';

const FormPage: FC = () => {
    interface Person {
        sid: number | string;
        name: string;
        school: string;
        schoolOther?: string;
    }

    const [formDate, setFormDate] = useState<Person>({
        sid: '',
        name: '',
        school: '',
        schoolOther: '',
    });

    const [preState, setPreState] = useState<string | null>(null);

    const schoolArr: string[] = ['中學', '大學', '其他'];

    const [schoolInput, setSchoolInput] = useState<boolean>(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
    ) => {
        setFormDate({ ...formDate, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (formDate.school !== '其他') {
            setSchoolInput(false);
            setFormDate({ ...formDate, schoolOther: '' });
            return;
        }
        setSchoolInput(true);
    }, [formDate.school]);

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        console.log(JSON.stringify(formDate));
        setPreState(JSON.stringify(formDate));
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <h5>編號</h5>
                <input
                    type="number"
                    name="sid"
                    value={formDate.sid}
                    onChange={handleChange}
                    className="mb-3"
                />
                <h5>姓名</h5>
                <input
                    type="text"
                    name="name"
                    value={formDate.name}
                    onChange={handleChange}
                    className="mb-3"
                />
                <br />
                <select
                    name="school"
                    value={formDate.school}
                    onChange={handleChange}
                    className="mb-3"
                >
                    {schoolArr.map((v, i) => {
                        return (
                            <option key={v} value={v}>
                                {v}
                            </option>
                        );
                    })}
                </select>
                {!schoolInput ? (
                    ''
                ) : (
                    <>
                        <br />
                        <input
                            type="text"
                            name="schoolOther"
                            value={formDate.schoolOther}
                            onChange={handleChange}
                            className="mb-3"
                        />
                    </>
                )}
                <br />
                <button type="submit" className="btn btn-primary">
                    確認
                </button>
            </form>
            <h5>
                <pre>{preState}</pre>
            </h5>
        </>
    );
};

export default FormPage;
