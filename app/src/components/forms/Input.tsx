import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Properties extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string;
    register?: UseFormRegister<any>;
}

export const Input = ({ className, id, name, label, register, ...rest }: Properties) => {
    if (!name) throw new Error('The input name is required');

    const registration = register ? register(name) : {};

    return (
        <div className={className}>
            {label && (
                <label htmlFor={id || name} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <div className="mt-1">
                <input
                    id={id || name}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    {...registration}
                    {...rest}
                />
            </div>
        </div>
    );
};
