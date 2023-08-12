interface FormProps {
    handleLogin: (e: React.FormEvent) => void;
    login: string;
    setlogin: (value: string) => void;
    senha: string;
    setSenha: (value: string) => void;
    error: string;
}

export default FormProps;