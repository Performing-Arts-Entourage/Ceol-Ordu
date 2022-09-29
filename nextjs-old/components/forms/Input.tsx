import { HTMLInputTypeAttribute, PropsWithChildren } from 'react';

interface Properties {
    id?: string;
    label?: string;
    name: string;
    required?: boolean;
    type: HTMLInputTypeAttribute;
}

export const Input = ({
    id,
    label,
    name,
    required,
    type
}: Properties) => {
    return (
        <div>
            {label && (
                <label htmlFor={id || name}>{label}</label>
            )}

            <input
                id={id || name}
                name={name}
                required={required}
                type={type}
            />
        </div>
    );
};
