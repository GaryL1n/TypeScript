import React, {
    FC,
    useState,
    useEffect,
    ChangeEvent,
    SyntheticEvent,
} from 'react';

// interface可以擴充宣告 type則不能重複宣告

interface Person {
    sid: number | string;
    name: string;
    school: string;
    schoolOther?: string;
}

// Enum 枚舉
enum personState {
    SUCCESS = 0,
    FAIL = -1,
}

const FormTry: FC = () => {
    const fail = personState.SUCCESS; // 0

    // 用type設定型別
    type sn = string | number;
    // type sn = string | number;
    let tryValue: sn = '嘗試';

    const [formDate, setFormDate] = useState<Person>({
        sid: '',
        name: '',
        school: '',
        schoolOther: '',
    });

    const [preState, setPreState] = useState<string | null>(null);

    const schoolArr: (string | number)[] = ['中學', '大學', '其他', 123];
    // 也可以寫成;
    // const schoolArr: [string, string, string, number] = [
    //     '中學',
    //     '大學',
    //     '其他',
    //     123,
    // ];
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

    // 斷言 as unknow
    type Data = {
        userId: number;
        id: number;
        title: string;
        success: boolean;
    };
    async function getData() {
        const res = await fetch('http');
        const data = (await res.json()) as Data; // 不設定的話data會變成any,因為ts不知道fetch回來的資料是什麼類型
    }

    // 泛型 使用時再指定類型 t是隨便打的名字
    function print<t>(data: t) {
        console.log(data);
    }
    print<string>('asdas');
    print<number>(9999);

    // Record
    type CatName = 'Gary' | 'Vivian' | 'Ting';
    interface CatInfo {
        age: number;
        breed: string;
    }
    // type CatName key
    // interface CatInfo value
    const cats: Record<CatName, CatInfo> = {
        Gary: { age: 24, breed: 'Gary' },
        Ting: { age: 21, breed: 'Ting' },
        Vivian: { age: 99, breed: 'Vivian' },
    };
    const obj: Record<string, number> = {
        Gary: 789,
        Ting: 456,
        Vivian: 123,
    };

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
