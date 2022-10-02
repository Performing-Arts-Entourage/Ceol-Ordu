import { ENVIRONMENT, HCAPTCHA_SITE_KEY } from '@/variables';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { Children, createElement, PropsWithChildren, ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCaptcha } from '../CaptchaProvider';

type Properties = PropsWithChildren<{
    className?: string;
    defaultValues?: any;
    onSubmit: SubmitHandler<any>;
}>;

export const Form = ({ children, className = '', defaultValues, onSubmit }: Properties) => {
    const { handleSubmit, register } = useForm({ defaultValues });
    const { setToken } = useCaptcha();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
            {Children.map(children, child => {
                const element: any = child;
                if (element?.props?.name) {
                    return createElement(element.type, {
                        ...{
                            ...element.props,
                            register,
                            key: element.props.name
                        }
                    });
                }

                return child;
            })}

            {ENVIRONMENT !== 'development' && (
                <HCaptcha
                    sitekey={HCAPTCHA_SITE_KEY}
                    onVerify={(token, _ekey) => setToken(token)}
                />
            )}
        </form>
    );
};
