import React, {ChangeEvent, useEffect, useState} from "react";
import data from './data.json';

interface OptionProps {
    option: string;
    value: string;
    chooseOption: (value: string) => void;
}

export const Autocomplete = () => {

    const [value, setValue] = useState<string>("");
    const [filteredData, setFilteredData] = useState<string[]>([]);

    const onValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const chooseOption = (option: string) => {
        setValue(option);
        setFilteredData([]);
    }

    useEffect(() => {
         const autoComplete = async() => {
            setFilteredData([])
            if(value.length < 1) return;
            const filtered = data.filter(option => option.includes(value));
            setFilteredData(filtered);
        }
        autoComplete();
    }, [value])

    return <div className="container-autocomplete">
            <input value={value} onChange={onValueChanged} placeholder="autocomplete" />
            <ul className={filteredData.length > 0 ? "bordered": ""}>
                {filteredData.map(option => <Option key={option} value={value} option={option} chooseOption={chooseOption} />)}
            </ul>
        </div>

}

export const Option = ({option, value, chooseOption}: OptionProps) => {

    const substrArr = option.split(value);
    const result: Array<string> = [];
    substrArr.forEach((option, index) => {
        result.push(option);
        if(index === substrArr.length - 1) return;
        result.push(value);
    })

    return <li key={option} onClick={() => chooseOption(option)}>
        {result.map(substr => <span className={substr === value ? "highlight": ""}>{substr}</span>)}
    </li>
}