import { useState } from 'react';

function useEmailValidator() {
    const [email, setEmail] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    function validateEmail(e: any) {
        const email = e.target.value;
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
        } else {
            setError(null);
        }

        setEmail(email);
    }

    return {
        email,
        error,
        validateEmail
    };
}

export default useEmailValidator;
