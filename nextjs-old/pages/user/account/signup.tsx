import { NextPage } from 'next';
import { Input } from '../../../components';

interface Properties {

}

const SignUp: NextPage<Properties> = ({ }: Properties) => {
    return (
        <>
            <h1>Sign Up</h1>

            <form action="/api/user/account/signup">
                <Input type="email" name="email" label="Email" />
            </form>
        </>
    );
};

export default SignUp
