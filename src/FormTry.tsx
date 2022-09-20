import React, {
    FC,
    useState,
    useEffect,
    ChangeEvent,
    SyntheticEvent,
} from 'react';

interface Person {
    sid: number | string;
    name: string;
    school: string;
    schoolOther?: string;
}

const FormTry: FC = () => {
    const [formDate, setFormDate] = useState<Person>({
        sid: '',
        name: '',
        school: '',
        schoolOther: '',
    });

    const [preState, setPreState] = useState<string | null>(null);

    const schoolArr = ['中學', '大學', '其他'];
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
    }

    function checkFn() {
        console.log(JSON.stringify(formDate));
        setPreState(JSON.stringify(formDate));
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <h1>編號</h1>
                <input
                    type="number"
                    name="sid"
                    value={formDate.sid}
                    onChange={handleChange}
                />
                <h1>姓名</h1>
                <input
                    type="text"
                    name="name"
                    value={formDate.name}
                    onChange={handleChange}
                />
                <select
                    name="school"
                    value={formDate.school}
                    onChange={handleChange}
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
                    <input
                        type="text"
                        name="schoolOther"
                        value={formDate.schoolOther}
                        onChange={handleChange}
                    />
                )}
                <button onClick={checkFn}>確認</button>
            </form>
            <h1>
                <pre>{preState}</pre>
            </h1>
        </>
    );
};

export default FormTry;
